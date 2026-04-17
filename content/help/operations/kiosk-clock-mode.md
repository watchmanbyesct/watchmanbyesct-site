---
title: "Kiosk clock (shared tablet)"
description: "Clock in and out on a shared device with guard ID and PIN."
order: 80
updated: "2026-04-17"
---

**Kiosk mode** lets officers clock in or out on a **locked shared tablet** using a guard identifier and **4-digit PIN**, without a full personal session login.

### Where it shows up

Supervisors provision kiosk devices and PINs from settings. Guards use a full-screen kiosk route (for example `/kiosk` or `/kiosk/:deviceCode`).

### For operators

Server-side actions authenticate the device and guard, then reuse standard `clock_in` / `clock_out` policy enforcement. Environment variables can tune PIN/device lock thresholds. Optional tenant settings can expire PINs or limit rotation frequency.
