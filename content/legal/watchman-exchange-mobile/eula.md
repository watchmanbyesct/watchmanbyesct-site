# Watchman Exchange Mobile End User License Agreement

Effective Date: June 24, 2026  
Product: Watchman Exchange Mobile  
Owner: ESCT Holding Inc.  
Repository: watchmanbyesct/watchman-exchange-mobile  
Version: watchman-exchange-mobile-eula-v1.0

## 1. License Grant

Subject to this EULA and any applicable customer agreement, ESCT Holding Inc. grants you a limited, non-exclusive, non-transferable, revocable license to access and use Watchman Exchange Mobile for authorized business, organizational, ministry, security, administrative, training, or operational purposes.

## 2. Ownership

Watchman Exchange Mobile, including software, source code, object code, workflows, architecture, interface designs, documentation, names, logos, branding, templates, and related intellectual property, is owned by ESCT Holding Inc. or its licensors. No ownership rights are transferred to users or tenant organizations.

## 3. Authorized Use

You may use Watchman Exchange Mobile only through authorized accounts, approved devices, approved browsers, approved mobile apps, or other approved access methods. You must follow all administrative, security, tenant, and legal requirements applicable to your account.

## 4. Restrictions

You may not:

1. Copy, modify, reverse engineer, decompile, disassemble, or attempt to extract source code.
2. Resell, sublicense, rent, lease, timeshare, or commercially exploit Watchman Exchange Mobile without written authorization.
3. Remove proprietary notices, ownership statements, copyright language, or branding.
4. Bypass security controls, tenant boundaries, licensing controls, subscription limits, or usage restrictions.
5. Use Watchman Exchange Mobile to build, train, support, or market a competing product.
6. Use bots, scrapers, unauthorized automation, or bulk extraction tools unless expressly authorized.
7. Introduce malware, exploit vulnerabilities, test security without authorization, or interfere with system integrity.

## 5. User and Tenant Data

Users and tenant organizations retain ownership of their own data. ESCT Holding Inc. receives a limited license to process tenant and user data as necessary to provide, secure, support, maintain, and improve Watchman Exchange Mobile and to comply with applicable law.

## 6. Updates and Modifications

ESCT Holding Inc. may provide updates, patches, improvements, bug fixes, security changes, feature additions, or feature removals. Continued use after an update means you accept the updated application and any updated legal terms that are presented for acceptance.

## 7. Mobile, PWA, and Device Permissions

Where Watchman Exchange Mobile is installed as a mobile application, desktop application, or progressive web app, the application may request device permissions necessary for its functionality, such as camera, location, microphone, notifications, file access, local storage, NFC, Bluetooth, or biometric unlock. Permission requests must be shown in context and should be limited to implemented features.

## 8. Platform-Specific License Notice

The mobile EULA must address installation, updates, mobile permissions, push notifications, device-level data, and app-store-style usage restrictions even if distributed directly.

## 9. Third-Party Components and Services

Watchman Exchange Mobile may use third-party software components, open-source packages, APIs, hosting providers, identity providers, notification services, payment processors, or platform integrations. Those components may be subject to separate licenses and terms.

## 10. Termination

This license terminates when your account is terminated, the applicable subscription ends, your access is suspended, you stop using the application, or you violate this EULA. Upon termination, you must stop using Watchman Exchange Mobile and remove any unauthorized copies.

## 11. Disclaimer of Warranties

Watchman Exchange Mobile is provided on an “as available” basis. ESCT Holding Inc. disclaims warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted operation, error-free performance, and compatibility with every device, browser, third-party system, or operational requirement.

## 12. Limitation of Liability

To the fullest extent permitted by law, ESCT Holding Inc. is not liable for indirect, incidental, consequential, special, punitive, lost-profit, business interruption, data-loss, or reputational damages arising from access to or use of Watchman Exchange Mobile.

## 13. Governing Law

This EULA is governed by the laws of the State of New York, unless a written customer agreement states otherwise.

## 14. Contact

Legal questions may be directed to:

ESCT Holding Inc.  
875 E. Main St. Ste 500 Rochester, NY 14605  
Legal: legal@watchmanbyesct.com

## Cursor Implementation Instructions

1. Create a public route for this document at `/legal/watchman-exchange-mobile/eula` or `/eula/watchman-exchange-mobile`.
2. Store this document as `EULA.md` in `legal/watchman-exchange-mobile/EULA.md` or the product repository equivalent.
3. Display the version `watchman-exchange-mobile-eula-v1.0` and effective date in the UI.
4. Require acceptance of the current EULA during mobile installation, first app launch, account activation, push notification enablement, media upload, or material legal update.
5. For mobile or PWA builds, show EULA acceptance during installation or first launch before protected features load.
6. Record acceptance in `legal_acceptances` with version, user, tenant, timestamp, IP address, user agent, device/app version, and acceptance source.
7. Require re-acceptance when the EULA version changes or when distribution model, license scope, mobile permissions, or device access changes materially.
8. Add a settings page where users can review current legal documents after acceptance.
9. Add administrator acceptance for tenant-level product enablement.
10. Have counsel review final legal text before production publication.
