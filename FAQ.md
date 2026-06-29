🇺🇸 **English** | 🇩🇪 [Deutsch](FAQ_de.md) | 🇪🇸 [Español](FAQ_es.md) | 🇫🇷 [Français](FAQ_fr.md) | 🇯🇵 [日本語](FAQ_ja.md) | 🇨🇳 [中文](FAQ_zh-Hans.md)

# Frequently Asked Questions

## General

### What is Mindful Body?
Mindful Body is an iOS app that combines a workout tracker, habit tracker, and body composition tracker in one privacy-first package. Build routines, track daily habits, log measurements, and watch one number, your Body Score, capture how it all comes together.

### Is Mindful Body free?
Mindful Body offers a 7-day free trial. After that, you can continue with a monthly or annual subscription, or with a one-time lifetime purchase.

### What devices does Mindful Body support?
Mindful Body runs on iPhone, iPad, and modern Macs (via iPad compatibility) with iOS 17 or later.

### What languages does the app support?
Mindful Body is fully localized in 11 languages: English, German, Spanish, French, Italian, Japanese, Korean, Norwegian, Portuguese (Brazilian), Swedish, and Chinese (Simplified).

## Workouts

### How do workouts work in Mindful Body?
Build routines from a curated exercise library or start from sample studio plans. When you train, run a live session and check off sets one by one. The app records every working set so you have a real history to learn from.

### What is "smart progression"?
After each session, Mindful Body looks at your last performance and suggests the next jump. The increment is equipment-aware: barbell, machine and cable lifts move in 2.5 kg steps; dumbbell and kettlebell in 1.0 kg; bodyweight and cardio do not change weight. The rule: if every top set hit your high rep, bump up. If every top set hit your low rep, hold. Otherwise, deload one step.

### Can I see how my training affects body composition?
Yes. The Trends tab surfaces lean-mass cross-insights tied to your training volume so you can see how the work shows up on the body, not just on the bar.

### Does Mindful Body support imperial units in workouts?
Yes. Toggle Metric or Imperial in Settings and weights, set entry, last-session hints, and volume badges all switch. Storage stays in kg behind the scenes so your history stays consistent if you ever switch back.

## Habits & Streaks

### How do habits work?
Habits come in three modes: Avoid (e.g. "No alcohol"), Do It (e.g. "Daily walk"), and Measure (e.g. "10,000 steps"). Pick from curated templates across nutrition, recovery, movement, mindset, and substance categories, or create your own.

### How are streaks counted?
Each habit tracks a streak that rewards consistency. Slip-ups don't punish you forever, the streak just resets and you start fresh.

### Can habits read from Apple Health?
Yes. The HealthKit bridge can pull in steps, mindful minutes, sunscreen and other supported metrics so qualifying habits update automatically.

## Body Score

### What is the Body Score?
The Body Score is a single number from 0 to 100 that combines body fat percentage (40%), waist-to-height ratio (30%), and lean mass index (20%). When body fat is missing, BMI fills in (30%). A 30-day trend bonus contributes up to 10%.

### Is the Body Score age- and sex-aware?
Yes. The score is calibrated against Gallagher (2000) and AHA references and adjusts for age (18–39 baseline; 40–59 +1 percentage point ideal / +2 acceptable upper; 60+ +3/+4) and biological sex.

### Why is my score not lower when I'm missing data?
By design. Missing components reduce the denominator instead of zeroing out the score. You won't be punished for not having a body-fat scale yet.

### What do the tiers mean?
- 85+ Athletic
- 70–84 Healthy
- 55–69 Average
- 40–54 Watch
- < 40 Risk

The labels are honest, not flattering. They're meant to help, not sell.

## Tracking

### What metrics can I track?
- Weight (kg or lbs)
- Body fat percentage
- Muscle mass percentage
- Visceral fat level
- Basal metabolic rate (BMR)
- BMI (calculated automatically)
- Circumferences: chest, waist, hips, neck, arms, thighs

### Do I need a smart scale?
No. You can enter all measurements manually. If you use a smart scale that writes to Apple Health, Mindful Body imports automatically.

### Can I import my existing weight data?
Yes. Mindful Body imports up to 365 days of weight, body fat, lean mass, and waist history from Apple Health in one tap.

## Supplements

### How do I track supplements?
Go to the Supplements section, create your own (protein, creatine, vitamins) with a default dose. Log intake with one tap or enter a custom amount.

### Can I log multiple doses per day?
Yes. The dashboard shows your total intake for each supplement.

### Do supplement logs sync via iCloud?
Yes. Supplement logs sync seamlessly via CloudKit, just like measurements, workouts, habits, and goals.

### Can I set when to take each supplement?
Yes. Add timing hints like "morning", "before workout", "after workout", or "before bed". Multiple timings are allowed and you can add custom entries.

### Can I create supplement schedules?
Yes. Daily, specific days, every N days, or cycles such as X days on / Y days off. You can also pause a supplement until a chosen date. The app shows whether something is due today, already taken, not scheduled, or paused.

## Progress Photos

### Are my progress photos private?
Absolutely. Photos live in the app's private container, never in your camera roll or photo library. Face ID/passcode protection adds an extra layer.

### Do progress photos sync across devices?
Yes. With iCloud Sync enabled, progress photos sync securely via CloudKit as encrypted assets.

## iCloud Sync

### What syncs via iCloud?
Measurements, goals, workouts, habits, supplement logs, and progress photos all sync via CloudKit across iPhone, iPad, and modern Macs (via iPad compatibility).

### What stays on my device?
Settings, preferences, HealthKit data, and subscription status remain local.

### Why do I need to restart the app after enabling iCloud?
The database configuration (local vs. cloud) is set at app launch. A restart applies the change.

## Apple Health

### What data does Mindful Body read from Apple Health?
Weight, body fat percentage, BMI, lean body mass, waist circumference, steps, and mindful minutes (for habits).

### What data does Mindful Body write to Apple Health?
Weight, body fat, BMI, lean body mass, waist circumference, and basal energy burned. You can toggle this per measurement.

## Advanced Training

### What are drop sets and how does Mindful Body use them?
A drop set means finishing your last working set, immediately reducing the weight by about 20%, and repping to near failure without rest. It's a proven plateau-breaker for hypertrophy. Mindful Body detects when an exercise has stagnated (same weight for multiple sessions) and suggests a drop set with the exact reduced weight — right inside your live workout session. Tap the suggestion chip and the drop set is added automatically. You can also configure persistent drop sets per exercise in your routine settings.

### What is RIR and why does it matter?
RIR stands for Reps in Reserve — how many reps you could still do after finishing a set. RIR 2 means you stopped with two reps left in the tank. Lower RIR means higher intensity and more stimulus for growth. Mindful Body lets you set a target RIR per exercise (suggested automatically based on movement type) and shows it as a color-coded badge during your workout so you always know how hard to push: green for comfortable reserve, yellow for moderate, red for max effort.

### How does stagnation detection work?
Mindful Body tracks your top working weight per exercise across sessions. When it notices you've been stuck at the same weight for multiple sessions in a row, it flags the exercise as stagnating and suggests a drop set to break through the plateau. The suggestion appears as a tappable purple chip in your workout — tap it and the drop set is added with the pre-calculated weight. This works alongside the existing smart progression system (bump / hold / deload) and only appears when the progression engine confirms you're not ready to increase weight.

### What's the difference between movement types (compound, isolation, isometric)?
Compound exercises use multiple joints (squats, bench press, rows). Isolation exercises target a single muscle (bicep curls, leg extensions). Isometric exercises involve holding a position without movement (planks, wall sits). Mindful Body uses this classification to suggest appropriate rest times, RIR targets, and progression increments. You can set the movement type for custom exercises.

## Support

### How do I contact support?
[Open an issue on GitHub](https://github.com/aloth/mindful-body/issues/new/choose) or use the Contact option in Settings.

### How do I report a bug?
[Open a bug report on GitHub](https://github.com/aloth/mindful-body/issues/new?template=bug_report.yml). You can also use the "Report a Bug" option in Settings.

### How do I suggest a feature?
[Open a feature request on GitHub](https://github.com/aloth/mindful-body/issues/new?template=feature_request.yml). We read every suggestion!
