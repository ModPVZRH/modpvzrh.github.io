# PVZRH Launcher Documentation

## Introduction

PVZRH Launcher is a BepInEx loader for Plants vs Zombies RH on Android. It enables modding support by injecting the BepInEx framework into the game process.

## Installation

1. Download the latest APK from [GitHub Releases](https://github.com/HayashiUme/PVZRH.Android.Launcher/releases)
2. Install the APK on your Android device
3. Grant "All files access" permission when prompted
4. The launcher will scan for Plants vs Zombies RH automatically

## Quick Start

1. Open PVZRH Launcher
2. Wait for game detection to complete
3. Tap **Launch** to start the game with BepInEx
4. To use mods, create or activate a modpack first

## Modpack Management

### Creating a Modpack
1. Go to the **Modpacks** tab
2. Tap **Create Modpack**
3. Enter a name and confirm
4. Add .dll mod files to the modpack

### Activating a Modpack
1. Select a modpack from the list
2. Tap **Activate**
3. Launch the game — the active modpack will be applied

### Import/Export
- Export: Share your modpack as a .zip file
- Import: Load a modpack from a .zip file

## Settings

| Setting | Description |
|---------|-------------|
| Theme | Dark / Light / System Default |
| Language | English / 简体中文 / System Default |
| Use Unstripped libunity | Download and use unstripped libunity.so with full icalls |
| Floating Log | Show a floating log button in-game |

## Crash Detection

When the game crashes, the launcher shows a dialog with:
- The crash signal (if available)
- A snippet of the crash log
- An option to export full logs

Exported logs are shared via the system share sheet.

## Log Viewer

Access BepInEx logs from the launcher's log screen:
- Filter by: All / Errors / Warnings
- Auto-scroll toggle
- Copy or share log content

## Troubleshooting

### Game won't launch
- Ensure Plants vs Zombies RH is installed
- Check that storage permission is granted
- Try clearing BepInEx files in Settings

### Mods not loading
- Verify .dll files are in the correct modpack
- Check BepInEx log for errors
- Ensure mod is compatible with the game version

### Crash on startup
- Disable "Use Unstripped libunity" if enabled
- Clear libunity cache in Settings
- Export crash logs and share with developers

## FAQ

**Q: Does this work with the original PVZ?**
A: No, this launcher is specifically designed for Plants vs Zombies RH (融合版).

**Q: Do I need root?**
A: No, root is not required.

**Q: Is it safe?**
A: The app is fully open source. Review the code at [GitHub](https://github.com/HayashiUme/PVZRH.Android.Launcher).
