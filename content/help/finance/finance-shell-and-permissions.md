---
title: "Finance workspace and permissions"
description: "Authenticated finance routes vs platform administration."
order: 400
updated: "2026-04-17"
---

Watchman Finance is a **permissioned** Next.js workspace. Finance domain routes are separate from **platform admin** routes that govern tenants and releases.

### Practical effect

Only authorized users can execute sensitive financial mutations; navigation reflects what you are allowed to do.

### For operators

Route groups include `(finance)` and `(platform)` with shared request-context resolution and permission helpers.
