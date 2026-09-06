---
title: Troubleshooting
---

# Troubleshooting

## Game won't launch

- Ensure **Plants Vs Zombies Fusion** is installed on your device
- Check that **storage permission** is granted to the launcher
- Try clearing BepInEx files in **Settings → Maintenance → Clear BepInEx Files**
- If the game crashes immediately, check the **Log Viewer** for error details

## Mods not loading

- Verify `.dll` files are in the correct modpack directory
- Check **BepInEx/LogOutput.log** for error messages
- Ensure the mod is compatible with the current game version
- Try clearing `.NET` data in **Settings → Maintenance** and re-extracting

## Crash on startup

- Disable **Use Unstripped libunity** in Settings if enabled
- Clear libunity cache in **Settings → Maintenance → Clear libunity Cache**
- Export crash logs via **Export Logs** on the crash dialog and share with developers
- Check if your device has enough free memory

## Black screen on second launch

This was a known issue in earlier versions caused by `UnityPlayer.kill()` terminating the launcher process. Update to the latest release, which hooks the kill call and delays it to allow proper cleanup.

## BepInEx extraction fails

- Ensure you have enough storage space (at least 500 MB free)
- Try clearing BepInEx files and letting it re-extract on next launch
- Check launcher log for specific error messages
- If the download is slow, try using a VPN or proxy

## libunity download is slow

The unstripped libunity library is hosted on GitHub Releases. If the download is slow in your region, enable a VPN or proxy in your network settings.

## App shows "Runtime Error Detected"

This means the `:game` process has exited unexpectedly. Tap **Export Logs** to save diagnostic information, then share the exported file with the developers for investigation.

## How to export logs

1. Open the launcher
2. Tap **Export Logs** on the main page
3. Choose a save location
4. Share the exported `.zip` file with developers via GitHub Issues

## Modpack conflicts

- Only enable one modpack at a time if you experience issues
- Check that mod DLLs don't depend on conflicting libraries
- Try resetting to vanilla state in **Settings → Maintenance**

## Launcher crashes when opening

- Clear launcher data in Android Settings → Apps → PVZRH Launcher → Storage → Clear Data
- Reinstall the launcher
- Check that you're running a supported Android version (API 26+)

## Save data access (Android 12+)

On Android 12 and above, the launcher uses **Shizuku** to access game save data. If you see a prompt to install Shizuku:

1. Install [Shizuku](https://shizuku.rikka.app/) from the Play Store or GitHub
2. Open Shizuku and start it (follow the in-app instructions)
3. Grant permission when prompted by the launcher

**Why is this needed?**
Android 12+ restricted the Storage Access Framework (SAF) from persistently accessing the `Android/data` directory. Shizuku provides shell-level access that works reliably across all Android versions.

**Shizuku won't start?**
- Ensure USB debugging is enabled in Developer Options
- On some devices, you may need to restart after enabling Developer Options
- Chinese OEM devices (Xiaomi, Huawei, OPPO, Vivo) may have additional restrictions — check Shizuku's documentation for device-specific instructions
