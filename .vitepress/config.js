import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PVZRH Launcher',
  description: 'PVZRH Android Launcher Documentation',
  base: '/',
  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/docs' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'GitHub', link: 'https://github.com/HayashiUme/PVZRH.Android.Launcher' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/docs#introduction' },
              { text: 'Installation', link: '/docs#installation' },
              { text: 'Quick Start', link: '/docs#quick-start' }
            ]
          },
          {
            text: 'Features',
            items: [
              { text: 'Modpack Management', link: '/docs#modpack-management' },
              { text: 'Settings', link: '/docs#settings' },
              { text: 'Crash Detection', link: '/docs#crash-detection' },
              { text: 'Log Viewer', link: '/docs#log-viewer' }
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Troubleshooting', link: '/docs#troubleshooting' },
              { text: 'FAQ', link: '/docs#faq' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HayashiUme/PVZRH.Android.Launcher' }
        ],
        footer: {
          message: 'PVZRH Launcher',
          copyright: '©2026 Modded-PVZRH/'
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
          { text: '隐私政策', link: '/zh/privacy' },
          { text: 'GitHub', link: 'https://github.com/HayashiUme/PVZRH.Android.Launcher' }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '简介', link: '/zh/docs#简介' },
              { text: '安装', link: '/zh/docs#安装' },
              { text: '快速开始', link: '/zh/docs#快速开始' }
            ]
          },
          {
            text: '功能',
            items: [
              { text: '整合包管理', link: '/zh/docs#整合包管理' },
              { text: '设置', link: '/zh/docs#设置' },
              { text: '崩溃检测', link: '/zh/docs#崩溃检测' },
              { text: '日志查看器', link: '/zh/docs#日志查看器' }
            ]
          },
          {
            text: '帮助',
            items: [
              { text: '故障排查', link: '/zh/docs#故障排查' },
              { text: '常见问题', link: '/zh/docs#常见问题' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HayashiUme/PVZRH.Android.Launcher' }
        ],
        footer: {
          message: 'PVZRH Launcher',
          copyright: '©2026 Modded-PVZRH/'
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
