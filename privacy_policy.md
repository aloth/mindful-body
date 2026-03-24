# Privacy Policy for Mindful Body

**Last Updated: March 24, 2026**

## Overview

Mindful Body ("the App") is developed by Alexander Loth. This privacy policy explains how the App handles your data.

## Data Collection

**Mindful Body does not collect, transmit, or share any personal data with third parties.**

All data stays on your device or in your private iCloud account:

- **Body measurements** (weight, body fat, circumferences, etc.) are stored locally using SwiftData
- **Progress photos** are stored in the app's private container — never in your camera roll or photo library
- **iCloud Sync** (optional) uses Apple's CloudKit to sync data between your own devices only
- **Apple Health** data is read/written only with your explicit permission via HealthKit

## Data Storage

| Data Type | Storage Location | Synced via iCloud? |
|-----------|-----------------|-------------------|
| Measurements | SwiftData (on-device) | Yes, if enabled |
| Goals | SwiftData (on-device) | Yes, if enabled |
| Progress Photos | App private container | Yes, via CKAsset |
| Settings | UserDefaults (on-device) | No |
| Subscription | StoreKit (Apple) | Via Apple ID |

## Third-Party Services

- **Apple HealthKit** — Read/write health data (with your permission)
- **Apple CloudKit** — iCloud sync (with your permission)
- **Apple StoreKit** — In-app purchases and subscriptions

No third-party analytics, advertising, or tracking SDKs are used.

## Progress Photos

Progress photos are stored in the app's **private sandboxed container**, not in your photo library or camera roll. Photos can be additionally protected with Face ID or device passcode. When iCloud Sync is enabled, photos sync as encrypted CloudKit assets.

## Your Rights

- You can delete all your data at any time from within the app
- You can disable iCloud Sync at any time
- You can revoke HealthKit permissions in iOS Settings
- You can request data export from within the app

## Contact

If you have questions about this privacy policy:

**Email:** support@alexloth.com
**Website:** https://alexloth.com

## Changes

We may update this privacy policy from time to time. Changes will be reflected in the "Last Updated" date above.
