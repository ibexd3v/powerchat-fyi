import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Powerchat",
  description: "Documentation for Powerchat, a privacy-first BYOK AI chat app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/icon.png',
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quickstart', link: '/' },
          { text: 'RAG', link: '/rag' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
