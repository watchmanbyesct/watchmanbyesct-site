# Watchman Operations Privacy Policy

Effective Date: June 24, 2026  
Product: Watchman Operations  
Owner: ESCT Holding Inc.  
Repository: watchmanbyesct/esct-watchman-operations  
Version: watchman-operations-privacy-v1.0

## 1. Purpose

This Privacy Policy explains how ESCT Holding Inc. collects, uses, stores, shares, protects, and retains information through Watchman Operations. This document is intended for publication on the public website and for display inside the application before account activation, installation, or first use.

Watchman Operations is a security operations management application.

## 2. Information We Collect

Depending on configuration and enabled features, Watchman Operations may collect or process the following categories of information:

1. Account information, including name, email address, phone number, user role, tenant organization, login identifiers, account status, and profile settings.
2. Operational or product data, including guard schedules, assignments, time clock records, patrol scans, GPS location data, post orders, pass-on logs, reports, incidents, attachments, supervisor review actions, client/site information, and audit logs.
3. Device and usage information, including IP address, browser type, device type, operating system, mobile app version, session activity, feature usage, and error or crash logs.
4. Security and audit data, including login events, permission changes, administrative actions, access attempts, system alerts, and investigation records.
5. Support information, including messages, screenshots, files, and communications submitted for troubleshooting, training, billing, onboarding, or customer service.
6. Payment or billing references if payment, subscription, enrollment, or invoicing features are enabled. Full payment card details should be handled by authorized payment processors and should not be stored by Watchman Operations unless explicitly approved through a secure payment architecture.

## 3. How We Use Information

ESCT Holding Inc. uses information to:

1. Provide, operate, secure, maintain, and improve Watchman Operations.
2. Authenticate users and enforce role-based access controls.
3. Support tenant administration, user management, reporting, notifications, and auditability.
4. Process user-submitted records, workflows, reports, communications, or transactions.
5. Provide customer support, troubleshooting, onboarding, training, and account administration.
6. Detect, investigate, and prevent unauthorized access, abuse, fraud, security incidents, and policy violations.
7. Comply with applicable legal, regulatory, contractual, tax, accounting, insurance, employment, security, and reporting obligations.

## 4. Platform-Specific Privacy Notice

Watchman Operations handles field activity and supervisory records. Legal acceptance must be required before staff can clock in, file reports, scan checkpoints, upload media, or view assigned posts.

## 5. Tenant and Organizational Accounts

If Watchman Operations is provided through an employer, client, ministry, nonprofit, public agency, contractor, tenant organization, or other business account, that organization may control access to the account, configure permissions, view audit records, manage users, set retention settings, and request exports or deletion according to its contractual rights and applicable law.

Users should not use an organizational account for personal, unrelated, unauthorized, or unlawful activity.

## 6. Data Sharing

ESCT Holding Inc. does not sell personal information, user content, operational records, mailbox data, employee records, client records, or tenant data.

Information may be shared only as necessary with:

1. Authorized tenant administrators and users according to configured permissions.
2. Service providers that support hosting, storage, authentication, payments, email delivery, notifications, analytics, logging, support, or security.
3. Third-party integration providers selected or authorized by the user or tenant.
4. Legal, regulatory, law enforcement, or governmental authorities when required by law or necessary to protect rights, safety, or security.
5. Successor entities in a merger, acquisition, restructuring, or sale of assets, subject to applicable law and appropriate confidentiality protections.

## 7. Third-Party Services and Integrations

Watchman Operations may integrate with third-party services such as Microsoft, Google, payment processors, email providers, accounting systems, payroll systems, mapping services, notification services, cloud hosting providers, or other business tools. Third-party services are governed by their own terms and privacy policies.

Users and tenant administrators are responsible for approving only integrations they are authorized to use.

## 8. Data Retention

ESCT Holding Inc. retains information only as long as reasonably necessary to provide the service, meet operational requirements, support auditability, comply with law, resolve disputes, enforce agreements, and satisfy security, tax, accounting, insurance, employment, or contractual obligations.

Retention may vary by tenant configuration, product function, legal requirement, and record type. Deleting data from Watchman Operations may not delete copies retained by third-party providers, integrations, backups, audit logs, legal holds, or tenant-controlled exports.

## 9. Security Safeguards

ESCT Holding Inc. will use reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, loss, misuse, alteration, or disclosure. Safeguards should include encryption in transit, secure authentication, role-based access control, audit logging, tenant isolation, secure storage, backup controls, and incident-response procedures.

No system can be guaranteed to be completely secure. Users must protect passwords, devices, credentials, and access tokens and must promptly report suspected unauthorized access.

## 10. Data Breach and Security Incident Response

ESCT Holding Inc. will investigate suspected security incidents and provide legally required notices when applicable. For New York-related operations, security incident procedures should account for New York data-security and breach-notification obligations.

## 11. User Choices and Rights

Depending on the product, tenant configuration, and applicable law, users may request access, correction, deletion, export, restriction, or support relating to their information. Organizational users may need to direct requests through their tenant administrator.

## 12. Children

Watchman Operations is not intended for children under 13. Tenant administrators must not knowingly authorize child-directed use unless a separate child-privacy review and written legal approval have been completed.

## 13. Changes to This Policy

ESCT Holding Inc. may update this Privacy Policy from time to time. Material changes to data collection, data use, data sharing, retention, or third-party access should require renewed user acceptance before continued use where appropriate.

## 14. Contact

Privacy questions may be directed to:

ESCT Holding Inc.  
875 E. Main St. Ste 500 Rochester, NY 14605  
Privacy: privacy@watchmanbyesct.com  
Security: security@watchmanbyesct.com

## Cursor Implementation Instructions

1. Create a public route for this document at `/legal/watchman-operations/privacy` or `/privacy/watchman-operations`.
2. Add footer links to Privacy Policy, Terms of Service, and EULA on public product pages, login pages, install screens, and account settings.
3. Store this document as `privacy.md` in `legal/watchman-operations/privacy.md` or the product repository equivalent.
4. Display the version `watchman-operations-privacy-v1.0` and effective date in the UI.
5. Require users to accept the current Privacy Policy before first login, app installation, shift clock-in, report submission, media upload, or location tracking activation.
6. Record acceptance in a `legal_acceptances` table with user ID, tenant ID, product name, policy version, accepted timestamp, IP address, user agent, and acceptance source.
7. Do not overwrite prior acceptance records. Create a new record for each version acceptance.
8. Block access to protected product functionality until current legal versions are accepted.
9. Update OAuth, integration, mobile permission, or provider-connection screens to display contextual data-use notices before the user grants access.
10. Have counsel review final legal text before production publication.
