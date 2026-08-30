---
title: 架构
---

# 架构

## 启动器工作原理

PVZRH 启动器使用 **Pine**（Java 方法 Hook 框架）在运行时将 BepInEx 注入游戏进程。无需原生引导库——所有 Hook 均通过 Kotlin/Java 安装。

### 注入流程

1. **包上下文** — 通过 `createPackageContext()` 获取 PVZRH 的 ClassLoader 和 DEX 访问权限。
2. **Pine Hook** — 安装双向 ClassLoader、Instrumentation、PackageManager、原生库加载和 UnityPlayer 的 Hook。
3. **Activity 重定向** — `Instrumentation.execStartActivity` Hook 将游戏 Activity 重定向到清单中注册的 `StubActivity`。
4. **Activity 恢复** — `Instrumentation.newActivity` 恢复真实的游戏 Activity 类和原始 Intent。
5. **Context 包装** — `Activity.attachBaseContext` Hook 用三路 `CustomContextWrapper` 包装 Context：
   - **游戏资源**（Assets、Resources、Theme）→ PVZRH 包上下文
   - **文件/存储**（getFilesDir、SharedPreferences）→ 启动器 Application
   - **窗口服务**（getDisplay、getSystemService）→ 原始 Activity 基础 Context
6. **原生库重定向** — `ClassLoader.findLibrary()` Hook 路由 .so 加载：游戏库来自游戏 APK，Fusion 库来自启动器，.NET/il2cpp/unity 库来自数据目录。
7. **UnityPlayer 设置** — 构造函数 Hook 设置 activity 字段并显示注入覆盖层。
8. **完整性检查绕过** — `UnityPlayer.kill()` Hook 阻止首次调用 5 秒以通过 Unity 的完整性检查。

### Context 包装器

`CustomContextWrapper` 是允许游戏和启动器在同一进程中并存的核心机制：

| 方法 | 路由至 | 用途 |
|------|--------|------|
| `getAssets()`、`getResources()`、`getTheme()` | 游戏包上下文 | 游戏加载自己的资源 |
| `getFilesDir()`、`getCacheDir()`、`getSharedPreferences()` | 启动器 Application | 启动器存储与游戏隔离 |
| `getSystemService()`、`getDisplay()` | 原始 Activity 上下文 | 窗口服务正常工作 |
| `getApplicationContext()` | 启动器 Application | 应用级单例留在启动器中 |

### 原生库加载

`ClassLoader.findLibrary()` Hook 使用三路重定向表：

| 类别 | 来源 | 示例 |
|------|------|------|
| **Fusion 库** | 启动器 APK | `libmain.so`、`libfusion.so` |
| **数据库** | 数据目录 | `libil2cpp.so`、`libunity.so` |
| **游戏库** | 游戏 APK | 所有其他 `.so` 文件 |

### ClassLoader Hook

双向 ClassLoader Hook 实现跨类加载器引用：
- 游戏类可以引用 BepInEx 模组类型
- BepInEx 模组可以引用游戏类型
- 遇到 `ClassNotFoundException` 时回退到另一个加载器
