import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const timeoutMs = Number(process.env.WATCHMAN_KPI_TIMEOUT_MS ?? 10000);
const maxHealthyLatencyMs = Number(process.env.WATCHMAN_KPI_HEALTHY_LATENCY_MS ?? 1500);

const operationsBase = (process.env.WATCHMAN_OPERATIONS_BASE_URL ?? "https://watchmanbyesct.online").trim();
const launchBase = (process.env.WATCHMAN_LAUNCH_BASE_URL ?? "https://www.esctroc.com").trim();
const financeBase = (process.env.WATCHMAN_FINANCE_BASE_URL ?? "https://watchman-finance.vercel.app").trim();

function nowIso() {
  return new Date().toISOString();
}

function withTimeout(promiseFactory, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("timeout"), ms);
  return promiseFactory(controller.signal).finally(() => clearTimeout(timer));
}

async function probeHttp(name, url, init = {}, expect = (status) => status >= 200 && status < 400) {
  const started = Date.now();
  try {
    const res = await withTimeout((signal) => fetch(url, { ...init, signal }), timeoutMs);
    const elapsed = Date.now() - started;
    const status = res.status;
    const ok = expect(status);
    return {
      name,
      url,
      ok,
      status,
      latency_ms: elapsed,
      state: ok ? (elapsed <= maxHealthyLatencyMs ? "connected" : "degraded") : "error",
      detail: ok ? "ok" : `unexpected_status_${status}`,
    };
  } catch (err) {
    return {
      name,
      url,
      ok: false,
      status: 0,
      latency_ms: Date.now() - started,
      state: "error",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

function summarize(probes) {
  const counts = { connected: 0, degraded: 0, error: 0 };
  for (const probe of probes) counts[probe.state] += 1;
  const overall = counts.error > 0 ? "error" : counts.degraded > 0 ? "degraded" : "connected";
  return { counts, overall };
}

function renderHtml(report) {
  const overallColor =
    report.overall === "connected"
      ? "#10b981"
      : report.overall === "degraded"
        ? "#f59e0b"
        : "#ef4444";

  const rows = report.probes
    .map((probe) => {
      const stateColor =
        probe.state === "connected"
          ? "#10b981"
          : probe.state === "degraded"
            ? "#f59e0b"
            : "#ef4444";
      return `
      <tr>
        <td>${probe.name}</td>
        <td><code>${probe.url}</code></td>
        <td><span style="color:${stateColor};font-weight:700">${probe.state}</span></td>
        <td>${probe.status}</td>
        <td>${probe.latency_ms}</td>
        <td>${probe.detail}</td>
      </tr>
      `;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Watchman Integration Health Dashboard</title>
  <style>
    body { font-family: Inter, Arial, sans-serif; margin: 24px; color: #0f172a; background: #f8fafc; }
    h1, h2 { margin: 0 0 12px; }
    .meta { margin-bottom: 16px; color: #475569; font-size: 14px; }
    .pill { display: inline-block; padding: 4px 10px; border-radius: 999px; color: white; font-weight: 700; }
    .grid { display: grid; grid-template-columns: repeat(4, minmax(120px, 180px)); gap: 12px; margin: 16px 0 24px; }
    .card { border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; background: #fff; }
    .label { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; }
    .value { font-size: 24px; font-weight: 700; margin-top: 6px; }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    th, td { border: 1px solid #e2e8f0; padding: 8px; font-size: 13px; text-align: left; vertical-align: top; }
    th { background: #f1f5f9; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; }
    a { color: #0f766e; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <h1>Watchman Integration Health Dashboard</h1>
  <div class="meta">Generated: ${report.generated_at}</div>
  <div class="meta">Overall: <span class="pill" style="background:${overallColor}">${report.overall}</span></div>
  <div class="meta"><a href="./integration-kpi-report.json">View raw JSON</a></div>
  <div class="grid">
    <div class="card"><div class="label">Connected</div><div class="value">${report.counts.connected}</div></div>
    <div class="card"><div class="label">Degraded</div><div class="value">${report.counts.degraded}</div></div>
    <div class="card"><div class="label">Error</div><div class="value">${report.counts.error}</div></div>
    <div class="card"><div class="label">Healthy Latency Target (ms)</div><div class="value">${report.max_healthy_latency_ms}</div></div>
  </div>
  <h2>Probe Results</h2>
  <table>
    <thead>
      <tr><th>Name</th><th>URL</th><th>State</th><th>Status</th><th>Latency (ms)</th><th>Detail</th></tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
}

async function main() {
  const probes = [];
  const finance = financeBase.replace(/\/$/, "");

  if (operationsBase) probes.push(await probeHttp("operations_frontend", operationsBase));
  if (launchBase) probes.push(await probeHttp("launch_frontend", launchBase));

  if (finance) {
    probes.push(await probeHttp("finance_health", `${finance}/api/health`));
    probes.push(
      await probeHttp(
        "finance_invoice_ingest_protected",
        `${finance}/api/integrations/operations/invoices`,
        { method: "POST", headers: { "content-type": "application/json" }, body: "{}" },
        (status) => status === 400 || status === 401 || status === 403,
      ),
    );
    probes.push(
      await probeHttp(
        "finance_approved_time_ingest_protected",
        `${finance}/api/integrations/operations/approved-time`,
        { method: "POST", headers: { "content-type": "application/json" }, body: "{}" },
        (status) => status === 400 || status === 401 || status === 403,
      ),
    );
  }

  const summary = summarize(probes);
  const report = {
    generated_at: nowIso(),
    overall: summary.overall,
    max_healthy_latency_ms: maxHealthyLatencyMs,
    probes,
    counts: summary.counts,
  };

  // Not under public/: this repo is deployed as a static site; public/ is world-readable.
  const outDir = resolve(process.cwd(), "reports", "integration-health");
  mkdirSync(outDir, { recursive: true });
  const outJson = resolve(outDir, "integration-kpi-report.json");
  const outHtml = resolve(outDir, "index.html");
  writeFileSync(outJson, JSON.stringify(report, null, 2));
  writeFileSync(outHtml, renderHtml(report));

  console.log(`Integration health report written: ${outJson}`);
  console.log(`Integration health dashboard written: ${outHtml}`);
  console.log(`Overall: ${summary.overall}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
