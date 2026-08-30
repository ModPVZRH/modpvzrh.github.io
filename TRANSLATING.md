# Translation Guide

Thank you for your interest in translating PVZRH Launcher! This guide will help you get started.

## Project Structure

The documentation uses [VitePress](https://vitepress.dev/) with built-in i18n support.

```
docs/
├── .vitepress/config.js    # Locale configuration
├── index.md                # English (root)
├── installation.md
├── settings.md
├── ...
├── zh/                     # 简体中文
│   ├── index.md
│   ├── installation.md
│   ├── settings.md
│   └── ...
```

## How to Add a New Language

1. Fork the [documentation repository](https://github.com/ModPVZRH/modpvzrh.github.io)
2. Create a new directory under the root for your locale (e.g., `ja/` for Japanese, `ko/` for Korean)
3. Copy all `.md` files from the root directory into your new locale directory
4. Translate the content of each file
5. Add your locale configuration in `.vitepress/config.js`:

```javascript
ja: {
  label: '日本語',
  lang: 'ja-JP',
  link: '/ja/',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      // ...
    ],
    sidebar: [
      // ... translated sidebar
    ]
  }
}
```

6. Submit a Pull Request

## Using GitLocalize

We use [GitLocalize](https://gitlocalize.com/) to manage translations. This tool makes it easy to:

- See which strings need translation
- Track changes in source files
- Collaborate with other translators

### Getting Started with GitLocalize

1. Go to [gitlocalize.com](https://gitlocalize.com/)
2. Sign in with your GitHub account
3. Find our project: `ModPVZRH/modpvzrh.github.io`
4. Select your language and start translating

## Translation Guidelines

### File Format
- Keep the Markdown structure intact
- Do not translate code blocks, URLs, or technical identifiers
- Keep YAML frontmatter keys (like `title`) translated

### Tone
- Use a friendly, helpful tone
- Keep translations natural and idiomatic
- Use polite forms where appropriate

### Technical Terms
Some terms are kept in English even in translations:
- BepInEx
- .NET / dotnet
- libunity
- IL2CPP
- Git
- GitHub
- DLL
- APK

### Locale Codes
Use standard ISO 639-1 codes:
- `zh` - 简体中文
- `zh-TW` - 繁體中文
- `ja` - 日本語
- `ko` - 한국어
- `es` - Español
- `pt-BR` - Português (Brasil)
- etc.

## Testing Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open `http://localhost:5173/<locale>/` to preview your translations.

## Questions?

If you have questions about translating, feel free to open a [Discussion](https://github.com/ModPVZRH/PVZRH.Android.Launcher/discussions) on GitHub.
