🇺🇸 **English** | 🇩🇪 [Deutsch](README_de.md) | 🇪🇸 [Español](README_es.md) | 🇫🇷 [Français](README_fr.md) | 🇯🇵 [日本語](README_ja.md) | 🇨🇳 [中文](README_zh-Hans.md)

# Mindful Body – Body Composition Tracker for iPhone with HealthKit & iCloud Sync

[![App Store](https://img.shields.io/badge/App_Store-Download-blue?logo=apple&logoColor=white)](https://apps.apple.com/app/id6760477510)
[![Swift](https://img.shields.io/badge/Swift-6.0-orange?logo=swift&logoColor=white)](https://swift.org)
[![Platform](https://img.shields.io/badge/Platform-iOS_17+-lightgrey?logo=apple)](https://developer.apple.com/ios/)
[![GitHub stars](https://img.shields.io/github/stars/aloth/mindful-body?style=social)](https://github.com/aloth/mindful-body/stargazers)

<p align="center">
  <img src="assets/images/mindful-body-body-composition-tracker-hero.jpg" alt="Mindful Body — body composition tracking with HealthKit, iCloud sync, and progress photos" width="700">
</p>

**Track your body composition journey with clarity and confidence.**

Mindful Body is a beautifully designed iOS app for tracking weight, body fat, muscle mass, circumferences, and more. Set goals, capture progress photos, and gain data-driven insights — all with full Apple Health integration and iCloud sync across your devices.

Part of the **Mindful Apps** family, alongside [Mindful Coffee](https://github.com/aloth/mindful-coffee).

## Why Mindful Body?

Most body trackers just log weight. Mindful Body goes deeper — it tracks your full body composition, visualizes trends over time, and gives you science-backed insights into what's working. Whether you're cutting, bulking, or just staying healthy, this app gives you the complete picture.

## Key Features

### 📊 Complete Body Tracking

- **Weight & BMI** — Log weight with automatic BMI calculation based on your height
- **Body Composition** — Track body fat percentage, muscle mass, visceral fat level, and basal metabolic rate
- **Circumferences** — Chest, waist, hips, neck, arms, and thighs — all in one place
- **Smart Units** — Seamlessly switch between metric (kg/cm) and imperial (lbs/in)

### 📈 Insights & Trends

- **Trend Charts** — Interactive charts for every metric with customizable time ranges
- **Science-Backed Insights** — Understand body recomposition, metabolic changes, and circumference trends
- **Logging Streaks** — Stay motivated with streak tracking and milestone celebrations
- **Goal-Aware Dashboard** — Cards turn green when you're on track toward your targets

### 🎯 Goal Setting

- **Flexible Goals** — Set targets for weight, body fat, waist circumference, or any tracked metric
- **Deadlines** — Optional deadline tracking to keep you accountable
- **Achievement Tracking** — Celebrate when you hit your goals

### 📸 Progress Photos

- **Face ID Protected** — Your photos stay private with biometric authentication
- **Pose Categories** — Organize by front, back, side-left, and side-right
- **Before & After** — Visual progress tracking alongside your measurements
- **iCloud Sync** — Photos sync securely across your devices via CloudKit

### 💊 Supplement Tracking

- **Custom Supplements** — Create your own (protein, creatine, vitamins, etc.) with default doses
- **Timing Hints** — Set when to take each supplement (morning, before workout, after workout, before bed, and more)
- **One-Tap Logging** — Quick-log default doses or enter custom amounts
- **Dashboard Card** — Today's intake status at a glance
- **Multi-Dose Support** — Log multiple doses per day with totals
- **Unified History** — Measurements and supplements in one timeline

### ❤️ Apple Health Integration

- **Two-Way Sync** — Read from and write to Apple Health automatically
- **Import History** — Pull in up to 365 days of weight data from HealthKit
- **Multiple Metrics** — Syncs weight, body fat, BMI, lean body mass, waist circumference, and BMR

### ☁️ iCloud Sync

- **Seamless Multi-Device** — All measurements, goals, and progress photos sync via CloudKit
- **Sync Status Dashboard** — See sync status, last sync time, and force sync on demand
- **Deduplication Tool** — Built-in maintenance to clean up duplicate records

### 🔔 Smart Reminders

- **Daily Weigh-In** — Gentle nudge to step on the scale each morning
- **Weekly Check-In** — Reminder for comprehensive body composition logging
- **Monthly Progress Photo** — Don't forget to capture your visual progress

### 🌍 Localization

- **6 Languages** — English, German, Spanish, French, Japanese, and Chinese Simplified

## Screenshots

<table>
<tr>
<td width="50%">

### Your Complete Dashboard
Weight, body fat, BMI, muscle mass — all your key metrics at a glance with trend charts and goal-aware color coding.

<img src="screenshots/mindful-body-dashboard-weight-body-fat-bmi-tracking.png" alt="Mindful Body Dashboard showing weight, body fat, BMI tracking with trend charts and goals" width="400"/>

</td>
<td width="50%">

### Beautiful in Dark Mode
Designed for day and night with a stunning dark theme that's easy on the eyes.

<img src="screenshots/mindful-body-dark-mode-dashboard-trend-charts.png" alt="Mindful Body Dashboard in Dark Mode" width="400"/>

</td>
</tr>
<tr>
<td width="50%">

### Insights That Matter
Track streaks, view weekly and monthly averages, and get science-backed insights into your body composition changes.

<img src="screenshots/mindful-body-insights-body-composition-analysis.png" alt="Mindful Body Insights showing body composition analysis and logging streaks" width="400"/>

</td>
<td width="50%">

### Log Everything
Weight, body fat, muscle mass, BMR, visceral fat, and circumferences — all in one streamlined form.

<img src="screenshots/mindful-body-log-weight-muscle-mass-circumferences.png" alt="Mindful Body Log view for tracking weight, body composition, and circumferences" width="400"/>

</td>
</tr>
<tr>
<td width="50%">

### Visual Progress
Capture your transformation with Face ID-protected progress photos organized by pose.

<img src="screenshots/mindful-body-progress-photos-face-id-protected.png" alt="Mindful Body Progress Photos with Face ID protection" width="400"/>

</td>
<td width="50%">

### Set Goals, Stay Motivated
Track progress toward your targets with visual indicators and achievement celebrations.

<img src="screenshots/mindful-body-goals-target-tracking-achievements.png" alt="Mindful Body Goals showing target tracking and achievements" width="400"/>

</td>
</tr>
</table>

## Privacy

Mindful Body takes your privacy seriously:

- **No camera roll access for saving** — Progress photos are stored in the app's private container, never in your photo library
- **Face ID protection** — Progress photos can be locked behind biometric authentication
- **On-device processing** — All calculations happen locally
- **No analytics or tracking** — Zero third-party SDKs
- **iCloud encryption** — Synced data is encrypted in transit and at rest
- **Your data is yours** — Full data export capability

## Related Projects

- [**Mindful Coffee**](https://github.com/aloth/mindful-coffee) — Smart caffeine tracking with sleep prediction & cortisol rhythm modeling
- [**Trackless Links**](https://github.com/aloth/trackless-links) — Safari extension for tracker removal from URLs

## License

This repository contains documentation, assets, and supporting files for Mindful Body.
The app source code is proprietary. © 2026 Alexander Loth. All rights reserved.

---

<p align="center">
  <a href="https://apps.apple.com/app/id6760477510">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download Mindful Body on the App Store" height="50">
  </a>
</p>
