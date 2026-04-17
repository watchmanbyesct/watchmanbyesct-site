---
title: "Roles, shells, and routing"
description: "How supervisors, guards, clients, and mobile supervisors experience Watchman Operations."
order: 10
updated: "2026-04-17"
---

Watchman Operations sends each user into the right **application shell** based on their role and which modules your organization has enabled.

### What you will see

- **Supervisor desktop** — Command-center layout with sidebar navigation for scheduling, incidents, reports, and administration.
- **Guard field app** — Mobile-first experience with bottom navigation for timekeeping, DAR, patrol, incidents, and safety tools.
- **Client portal** — A separate layout for customer-facing visibility into service delivery (where your contract allows).
- **Supervisor mobile** — Field command on a phone with quick access to incidents, dispatch, and review queues.

### For operators

Routing is enforced with React Router plus role and module checks (`hasModule(...)`). Unauthorized routes are blocked at the shell level. Evidence paths live in the operations app under layouts such as `SupervisorLayout`, `GuardLayout`, `ClientLayout`, and `SupervisorMobileLayout`.
