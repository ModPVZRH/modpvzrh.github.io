---
title: 常见问题
---

# 常见问题

## 基本

**Q: PVZRH Launcher 是什么？**
A: 面向植物大战僵尸融合版的 Android BepInEx 加载器，通过注入 BepInEx 框架为游戏提供模组支持。

**Q: 能用在原版植物大战僵尸上吗？**
A: 不能，本启动器专为植物大战僵尸融合版设计。

**Q: 需要 Root 吗？**
A: 不需要 Root。

**Q: 安全吗？**
A: 应用完全开源，可在 [GitHub](https://github.com/ModPVZRH/PVZRH.Android.Launcher) 查看源码。

## 模组

**Q: 模组文件放哪里？**
A: 创建或打开整合包，然后点击添加模组选择 .dll 文件。

**Q: 可以同时用多个模组吗？**
A: 可以，将多个 .dll 文件添加到同一个整合包中。

**Q: 模组不工作，该怎么检查？**
A: 确认模组版本与游戏版本匹配，检查 BepInEx 日志中的错误，确认模组兼容 Android/IL2CPP。

## 故障排查

**Q: 游戏启动时崩溃了。**
A: 尝试关闭未剥离的 libunity、清除 libunity 缓存，或清除 BepInEx 文件。

**Q: 如何报告 Bug？**
A: 从崩溃弹窗或日志查看器导出日志，然后在 [GitHub Discussions](https://github.com/ModPVZRH/PVZRH.Android.Launcher/discussions) 分享。
