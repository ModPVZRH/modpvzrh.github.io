---
title: 翻译指南
---

# 翻译指南

感谢你有兴趣为 PVZRH 启动器翻译！本指南将帮助你快速上手。

## 使用 GitLocalize

我们使用 [GitLocalize](https://gitlocalize.com/) 管理翻译。

1. 访问 [gitlocalize.com](https://gitlocalize.com/)
2. 使用你的 GitHub 账号登录
3. 找到我们的项目：`ModPVZRH/modpvzrh.github.io`
4. 选择你的语言并开始翻译

GitLocalize 会将文件解析为可翻译的段落，并高亮显示缺失的翻译。当源文件更改时，你可以看到差异。

## 如何添加新语言

1. Fork [文档仓库](https://github.com/ModPVZRH/modpvzrh.github.io)
2. 在根目录下创建新的语言目录（例如 `ja/` 代表日语）
3. 将根目录下的所有 `.md` 文件复制到你的新语言目录中
4. 翻译每个文件的内容
5. 在 `.vitepress/config.js` 中添加你的语言配置：

```javascript
ja: {
  label: '日本語',
  lang: 'ja-JP',
  link: '/ja/',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
    ],
    sidebar: [
      // ... 翻译后的侧边栏
    ]
  }
}
```

6. 提交 Pull Request

## 翻译规范

### 文件格式
- 保持 Markdown 结构不变
- 不要翻译代码块、URL 或技术标识符
- 保持 YAML frontmatter 键（如 `title`）已翻译

### 语气
- 使用友好、有帮助的语气
- 翻译要自然流畅

### 技术术语
以下术语在翻译中保留英文：
BepInEx、.NET、libunity、IL2CPP、Git、GitHub、DLL、APK、BepInEx Launcher

### 语言代码
使用标准 ISO 639-1 代码：
- `zh` - 简体中文
- `zh-TW` - 繁體中文
- `ja` - 日本語
- `ko` - 한국어
- `es` - Español
- `pt-BR` - Português (Brasil)

## 本地测试

```bash
cd modpvzrh.github.io
npm install
npm run dev
```

然后打开 `http://localhost:5173/<locale>/` 预览你的翻译。

## 有问题？

如果你有疑问，欢迎在 GitHub 上发起 [Discussion](https://github.com/ModPVZRH/PVZRH.Android.Launcher/discussions)。
