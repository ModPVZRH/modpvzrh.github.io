---
title: Architecture
---

# Architecture

## How the Launcher Works

The PVZRH Launcher injects BepInEx into the game process at runtime using **Pine** (a Java method hooking framework). No native bootstrap library is required — all hooks are installed from Kotlin/Java.

### Injection Flow

1. **Package Context** — `createPackageContext()` for PVZRH obtains the game's class loader and DEX access.
2. **Pine Hooks** — Installs hooks for ClassLoader (bidirectional), Instrumentation, PackageManager, native library loading, and UnityPlayer.
3. **Activity Redirection** — `Instrumentation.execStartActivity` hook redirects the game activity to a manifest-registered `StubActivity`.
4. **Activity Restoration** — `Instrumentation.newActivity` restores the real game activity class and original Intent.
5. **Context Wrapping** — `Activity.attachBaseContext` hook wraps the Context with a three-way `CustomContextWrapper`:
   - **Game resources** (Assets, Resources, Theme) → PVZRH package context
   - **File/storage** (getFilesDir, SharedPreferences) → launcher Application
   - **Window services** (getDisplay, getSystemService) → original Activity base Context
6. **Native Library Redirection** — `ClassLoader.findLibrary()` hook routes .so loading: game libs from game APK, Fusion libs from launcher, .NET/il2cpp/unity libs from data directory.
7. **UnityPlayer Setup** — Constructor hook sets the activity field and shows injection overlay.
8. **Integrity Check Bypass** — `UnityPlayer.kill()` hook blocks the first call for 5 seconds to survive Unity's integrity checks.

### Context Wrapper

The `CustomContextWrapper` is the core mechanism that allows the game and launcher to coexist in the same process:

| Method | Routes To | Purpose |
|--------|-----------|---------|
| `getAssets()`, `getResources()`, `getTheme()` | Game package context | Game loads its own resources |
| `getFilesDir()`, `getCacheDir()`, `getSharedPreferences()` | Launcher Application | Launcher storage isolated from game |
| `getSystemService()`, `getDisplay()` | Original Activity context | Window services work normally |
| `getApplicationContext()` | Launcher Application | App-level singletons stay in launcher |

### Native Library Loading

The `ClassLoader.findLibrary()` hook uses a three-way redirection table:

| Category | Source | Example |
|----------|--------|---------|
| **Fusion libraries** | Launcher APK | `libmain.so`, `libfusion.so` |
| **Data libraries** | Data directory | `libil2cpp.so`, `libunity.so` |
| **Game libraries** | Game APK | All other `.so` files |

### ClassLoader Hook

A bidirectional ClassLoader hook enables cross-class-loader references:
- Game classes can reference BepInEx mod types
- BepInEx mods can reference game types
- Falls back to the other loader on `ClassNotFoundException`
