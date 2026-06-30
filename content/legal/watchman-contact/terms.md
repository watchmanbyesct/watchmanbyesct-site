# Watchman Contact Terms of Service

Effective Date: June 24, 2026  
Product: Watchman Contact  
Owner: ESCT Holding Inc.  
Repository: watchmanbyesct/watchman-contact  
Version: watchman-contact-terms-v1.0

## 1. Acceptance of Terms

By accessing, installing, activating, or using Watchman Contact, you agree to these Terms of Service. If you use Watchman Contact on behalf of an organization, you represent that you are authorized to bind that organization to these terms.

Users who do not agree must not access or use Watchman Contact.

## 2. Product Description

Watchman Contact is a lightweight contact intake, form capture, export, and records management application provided by ESCT Holding Inc.. The platform may be delivered through a web application, mobile application, progressive web app, hosted service, tenant portal, administrative dashboard, API, or related integration.

## 3. Eligibility and Authority

You may use Watchman Contact only if you are authorized by ESCT Holding Inc., a tenant administrator, an employer, a client organization, or another lawful account owner. You must provide accurate account information and keep login credentials secure.

## 4. Tenant Administration

Tenant administrators may configure users, roles, permissions, integrations, retention settings, reports, audit access, and product settings. Users of organizational accounts understand that tenant administrators may access and manage product records according to organizational policy, contract rights, and applicable law.

## 5. Acceptable Use

You agree not to use Watchman Contact to:

1. Violate law, regulation, contract, court order, licensing rule, employment obligation, or third-party rights.
2. Access, collect, view, alter, delete, export, or disclose data without authorization.
3. Upload malware, harmful code, unlawful material, or deceptive content.
4. Harass, threaten, exploit, impersonate, defraud, or misrepresent identity or authority.
5. Circumvent authentication, role permissions, audit controls, tenant boundaries, or security systems.
6. Interfere with platform availability, integrity, performance, or security.
7. Use product data for unauthorized surveillance, advertising resale, data brokerage, or unlawful profiling.

## 6. User Content and Records

Users and tenant organizations remain responsible for the content, records, files, reports, communications, and data they submit to Watchman Contact. You represent that you have the necessary rights and authority to submit and process that information.

ESCT Holding Inc. may process user content and tenant data only as necessary to provide the service, maintain security, provide support, comply with law, enforce agreements, and improve platform functionality.

## 7. Platform-Specific Terms

Watchman Contact should emphasize that organizations using the platform are responsible for what information they collect through custom forms and for obtaining appropriate consent from data subjects.

## 8. Fees, Payments, and Subscriptions

If Watchman Contact is offered as a paid service, fees, billing terms, subscriptions, renewals, cancellations, taxes, refunds, and payment responsibilities will be governed by the applicable order form, subscription agreement, invoice, checkout terms, or written customer agreement.

## 9. Third-Party Services

Watchman Contact may connect to third-party services. ESCT Holding Inc. is not responsible for third-party outages, data practices, permission changes, API changes, service suspensions, provider errors, or third-party account restrictions.

## 10. Availability and Changes

ESCT Holding Inc. may modify, suspend, discontinue, update, or replace features to improve security, comply with law, address technical needs, or support platform development. Material changes affecting data rights, user obligations, or privacy practices should be reflected in updated legal documents.

## 11. Suspension and Termination

ESCT Holding Inc. may suspend or terminate access for misuse, nonpayment, security risk, legal compliance, unauthorized access, tenant instruction, provider restriction, or violation of these Terms.

## 12. Disclaimers

Watchman Contact is provided on an “as available” basis. ESCT Holding Inc. does not guarantee uninterrupted operation, error-free performance, message delivery, payment success, provider availability, data recovery, or suitability for every operational or regulatory use case.

## 13. Limitation of Liability

To the fullest extent permitted by law, ESCT Holding Inc. is not liable for indirect, incidental, consequential, special, punitive, exemplary, lost-profit, business interruption, reputational, or data-loss damages arising from use or inability to use Watchman Contact.

## 14. Indemnification

You agree to defend, indemnify, and hold harmless ESCT Holding Inc. from claims, losses, damages, liabilities, costs, and expenses arising from your misuse of Watchman Contact, violation of these Terms, unlawful content, unauthorized access, or violation of third-party rights.

## 15. Governing Law

These Terms are governed by the laws of the State of New York, unless a written customer agreement states otherwise.

## 16. Contact

Legal questions may be directed to:

ESCT Holding Inc.  
875 E. Main St. Ste 500 Rochester, NY 14605  
Legal: legal@watchmanbyesct.com

## Cursor Implementation Instructions

1. Create a public route for this document at `/legal/watchman-contact/terms` or `/terms/watchman-contact`.
2. Store this document as `terms.md` in `legal/watchman-contact/terms.md` or the product repository equivalent.
3. Display the version `watchman-contact-terms-v1.0` and effective date in the UI.
4. Add Terms links to website footers, login screens, install screens, checkout/enrollment screens where applicable, app settings, and tenant admin settings.
5. Require acceptance of the current Terms of Service before workspace activation, form publication, contact record creation, export, or mobile/tablet installation.
6. Record acceptance in `legal_acceptances` with version, user, tenant, timestamp, IP address, user agent, acceptance source, and product name.
7. Require re-acceptance when the Terms version changes or when material product functionality changes.
8. Add middleware or route guards to prevent protected use until acceptance is complete.
9. For tenant administrators, include an additional checkbox confirming authority to enable the product for the organization.
10. Have counsel review final legal text before production publication.
