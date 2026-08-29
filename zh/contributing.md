---
title: 贡献指南
---

# 贡献指南

感谢您对 PVZRH Android Launcher 的关注！

## 快速开始

1. Fork [仓库](https://github.com/ModPVZRH/PVZRH.Android.Launcher)
2. 克隆您的 Fork
3. 创建功能分支 (`git checkout -b feature/my-feature`)
4. 进行修改
5. 提交并推送
6. 创建 Pull Request

## 开发环境

- Android Studio Ladybug 或更高版本
- JDK 17
- Android SDK，包含 NDK 27.0.12077973 和 CMake 3.22.1

## 构建

```powershell
.\gradlew.bat assembleDebug
```

输出路径：`app/build/outputs/apk/debug/app-debug.apk`

## 代码规范

- Kotlin + Jetpack Compose
- 遵循代码库中的现有模式
- 注释保持简洁 — 描述"做什么"和"为什么"，而非"怎么做"
- 代码注释最多 2 行

## 提交规范

- `feat: 添加新功能`
- `fix: 修复问题`
- `refactor: 重构代码`
- `docs: 更新文档`
- `ci: 修改 CI 配置`

## Pull Request

- 保持 PR 聚焦于单一更改
- 描述您更改了什么以及为什么
- 提交前在真实设备上测试
- 确保构建通过

## 问题反馈

- 使用 [GitHub Issues](https://github.com/ModPVZRH/PVZRH.Android.Launcher/issues)
- 包含设备型号、Android 版本和启动器版本
- 如有崩溃日志请附上
- 描述重现步骤

## 许可证

贡献即表示您同意您的贡献将在 GPL-3.0 许可证下发布。
