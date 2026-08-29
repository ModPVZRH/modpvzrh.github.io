---
title: Crash Detection
---

# Crash Detection

PVZRH Launcher automatically detects when the game process crashes.

## How It Works

After launching the game, the launcher monitors the game process in the background. If the process exits unexpectedly, the launcher checks logcat for crash signals like:

- `FATAL EXCEPTION` — Java/Kotlin crash
- `SIGSEGV` — Segmentation fault (native crash)
- `SIGABRT` — Process aborted

## Crash Dialog

When a crash is detected, a dialog appears showing:

- The crash signal (if available)
- A snippet of the crash log (last 25 relevant lines)
- An option to **Export Logs**

## Exporting Logs

Tap **Export Logs** to share the full log files via the system share sheet. This creates a zip containing:

- `bepinex_launcher.log` — Launcher debug log
- `logcat.txt` — System logcat output

Send this zip to developers for investigation.
