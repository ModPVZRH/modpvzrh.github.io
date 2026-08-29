import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PVZRH Launcher',
  description: 'PVZRH Android Launcher Documentation',
  base: '/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/docs' },
          { text: 'Sponsor', link: '/sponsor' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'GitHub', link: 'https://github.com/ModPVZRH/PVZRH.Android.Launcher' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Installation', link: '/installation' },
              { text: 'Quick Start', link: '/quick-start' }
            ]
          },
          {
            text: 'Features',
            items: [
              { text: 'Modpack Management', link: '/modpacks' },
              { text: 'Settings', link: '/settings' },
              { text: 'Crash Detection', link: '/crash-detection' },
              { text: 'Log Viewer', link: '/log-viewer' }
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Troubleshooting', link: '/troubleshooting' },
              { text: 'FAQ', link: '/faq' },
              { text: 'Contributing', link: '/contributing' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ModPVZRH/PVZRH.Android.Launcher' }
        ],
        footer: {
          message: 'PVZRH Launcher',
          copyright: '©2026 PVZRH Mod Dev'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/docs' },
          { text: '赞助', link: '/zh/sponsor' },
          { text: '隐私政策', link: '/zh/privacy' },
          { text: 'GitHub', link: 'https://github.com/ModPVZRH/PVZRH.Android.Launcher' }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '安装', link: '/zh/installation' },
              { text: '快速开始', link: '/zh/quick-start' }
            ]
          },
          {
            text: '功能',
            items: [
              { text: '整合包管理', link: '/zh/modpacks' },
              { text: '设置', link: '/zh/settings' },
              { text: '崩溃检测', link: '/zh/crash-detection' },
              { text: '日志查看器', link: '/zh/log-viewer' }
            ]
          },
          {
            text: '帮助',
            items: [
              { text: '故障排查', link: '/zh/troubleshooting' },
              { text: '常见问题', link: '/zh/faq' },
              { text: '贡献指南', link: '/zh/contributing' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ModPVZRH/PVZRH.Android.Launcher' }
        ],
        footer: {
          message: 'PVZRH Launcher',
          copyright: '©2026 PVZRH Mod Dev'
        }
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
