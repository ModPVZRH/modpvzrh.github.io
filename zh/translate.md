---
title: 翻译指南
---

# 翻译指南

感谢你有兴趣为 PVZRH 启动器翻译！本指南将帮助你快速上手。

## 使用 Crowdin

我们使用 [Crowdin](https://crowdin.com/project/pvzrh-launcher) 管理翻译。

1. 访问 [crowdin.com](https://crowdin.com/) 并注册账号
2. 联系开发者获取写入权限：
   - Discord：**elinmei0710** / **librahp_0928**
   - QQ：**2558527373** / **718038005**
3. 找到我们的项目：[pvzrh-launcher](https://crowdin.com/project/pvzrh-launcher)
4. 选择你的语言并开始翻译

Crowdin 会将 XML 文件解析为可翻译的段落，并高亮显示缺失的翻译。当源文件更改时，你可以看到差异。

## 支持的语言（26 种）

English, 简体中文, 繁體中文, 日本語, 한국어, Русский, Português (巴西), Português (葡萄牙), Español, Deutsch, Français, Italiano, Nederlands, العربية (埃及), العربية (沙特), Bahasa Indonesia, Bahasa Melayu, മലയാളം, Türkçe, Українська, ไทย, vec（威尼斯语）

## 翻译规范

### 文件格式
- 保持 XML 结构不变
- 不要翻译技术标识符（字符串 `name` 属性）
- 保持格式说明符（`%s`、`%d`、`%1$s` 等）顺序不变

### 语气
- 使用友好、有帮助的语气
- 翻译要自然流畅

### 技术术语
以下术语在翻译中保留英文：
BepInEx、.NET、libunity、IL2CPP、Git、GitHub、DLL、APK

## 添加新语言

1. 在 Discord 或 QQ 上联系开发者
2. 我们会将该语言添加到 Crowdin 和 Android 项目中
3. 在 Crowdin 上开始翻译
4. 翻译完成后，我们会合并你的翻译

## 有问题？

如果你有疑问，欢迎在 GitHub 上发起 [Discussion](https://github.com/ModPVZRH/PVZRH.Android.Launcher/discussions)。
