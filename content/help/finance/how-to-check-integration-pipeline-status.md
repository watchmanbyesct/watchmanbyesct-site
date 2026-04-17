---
title: "How to check integration pipeline status"
description: "See whether Launch and Operations data reached Finance and if anything failed."
order: 350
kind: how-to
updated: "2026-04-17"
---

Finance depends on **staged** payloads and **pipeline runs** from other Watchman products. Operators use the integration hub to see health at a glance.

### Before you start

- You need **finance** permissions that include integration or operations views (role names vary by tenant).
- Know which **environment** you are in (production vs sandbox) so you do not confuse test data.

### Steps

1. Sign in to **Watchman Finance** and open **Integrations** (or **Integration pipeline** from your sidebar).
2. Review the **latest run** timestamp and overall **state** (success, partial, failed—wording varies).
3. Open **run details** or **delivery log** for the failing step if any row shows **error**.
4. Read the **error message** and **payload id** (or correlation id) so you can match it to a ticket or upstream fix.
5. If the failure is **upstream** (Operations/Launch), open that product or contact the owning team with the id and time range.
6. After upstream fixes, use your tenant’s **retry** or **re-run** action if available, or wait for the next scheduled ingestion.

### Tips

- Correlate failures with **maintenance windows** or credential rotations.
- Export or screenshot the log row when opening a support thread.

### For operators

API routes and **integration actions** implement idempotency; repeated failures may need secret rotation or schema drift review.
