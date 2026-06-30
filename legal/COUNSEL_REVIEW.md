# Legal Publication Checklist

Operational drafts are integrated across Watchman repositories. **Do not treat these as final legal advice.**

## Before production publish

1. Have qualified counsel review all 36 product documents in [`content/legal/`](../content/legal/).
2. Replace placeholder address lines (`[Insert ESCT Holding Inc. mailing address]`) in each markdown file.
3. Apply Supabase migrations:
   - [`esct-watchman-operations/supabase/migrations/20260624120000_legal_acceptances.sql`](../../esct-watchman-operations/supabase/migrations/20260624120000_legal_acceptances.sql)
   - [`watchman-exchange-web/supabase/migrations/20260624120000_legal_acceptances.sql`](../../Projects/watchman-exchange-web/supabase/migrations/20260624120000_legal_acceptances.sql)
4. Deploy [`watchman-site`](.) so canonical URLs resolve at `https://www.watchmanbyesct.com/legal/...`.
5. Re-run `node scripts/sync-legal-docs.mjs` after any per-repo legal markdown edits.

## Verification matrix

| Check | Expected |
|---|---|
| `/legal` hub | Lists all 12 products |
| `/legal/{product}/{privacy\|terms\|eula}` | Renders markdown with version + effective date |
| New user registration (Launch, Exchange) | Requires privacy + terms + EULA + authority |
| Authenticated app access | Redirects to `/legal/acceptance` when versions not accepted |
| Mobile settings | Opens watchmanbyesct.com legal URLs |
| ESCT launch `/privacy` and `/terms` | ESCT services copy + link to Watchman platform legal |
