---
title: "How to publish or unpublish a website page (CMS)"
description: "Control whether visitors see a page or a Coming soon state."
order: 108
kind: how-to
updated: "2026-04-17"
---

Administrators use Launch’s **CMS** so public pages can be drafted, reviewed, and published safely.

### Before you start

- You need **admin** access to the Launch admin dashboard.
- Know the **page slug** or title you are editing.

### Steps

1. Sign in to **Admin** and open **Website pages** (or the equivalent pages list for your tenant).
2. Open the page you want to change, or **create** a new page and save a draft first.
3. Set **status** to **Published** when the content is final and should appear to the public.
4. Set status to **Draft** or **Unpublished** (wording varies) to **hide** the page from visitors; most sites show **Coming soon** for unpublished routes.
5. **Save** changes. Use **preview** if your build offers it before publishing.
6. In a **private browser window**, load the public URL and confirm visitors see the expected version.

### Tips

- Avoid publishing placeholder text; search engines and clients may cache the first live version.
- Coordinate with training or legal if the page references **compliance** or **pricing**.

### For operators

Publication is enforced by **PageGate** against `website_pages.status` in the Launch SPA.
