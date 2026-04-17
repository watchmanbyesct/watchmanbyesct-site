---
title: "Server actions and production origins"
description: "Next.js server action origin configuration."
order: 560
updated: "2026-04-17"
---

Next.js **server actions** can be restricted to specific web origins.

### Risk

If production hostnames are not allowlisted, server-action flows may fail after deployment.

### For operators

Review `next.config.js` (or successor config) with your deployment URL list during go-live hardening. This is an operational checklist item—not a screen users visit daily.
