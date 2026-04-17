---
title: "Public site and page publication"
description: "Marketing pages, gated sections, and “Coming soon” for drafts."
order: 200
updated: "2026-04-17"
---

Watchman Launch powers the **public ESCT-facing site**: services, training, careers, resources, legal pages, and dynamic CMS pages.

### Draft vs live

Unpublished pages can show a **Coming soon** experience to visitors while administrators continue editing.

### For operators

Routing is a React SPA with lazy-loaded pages. Publication status is read from `website_pages.status` and enforced with a gate component.
