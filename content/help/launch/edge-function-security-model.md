---
title: "Edge functions and session security"
description: "How privileged workflows are bounded in Launch."
order: 300
updated: "2026-04-17"
---

Sensitive flows (admin actions, payments, email) run through **Supabase edge functions** with custom session validation inside the function body.

### Why `verify_jwt` may be false

Some functions disable default JWT verification because they validate `session_token` or internal checks explicitly.

### For operators

Security audits may call out remediation items—treat this as a living governance area, not only a configuration toggle.
