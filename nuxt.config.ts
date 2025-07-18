// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // 添加 sitemap 模組
  modules: [
    '@nuxtjs/sitemap'
  ],
  
  // Sitemap 配置
  runtimeConfig: {
    public: {
      siteUrl: 'https://minsdreamknowledge.github.io'
    }
  },
  
  app: {
    head: {
      title: 'Mins Dream Knowledge',
      meta: [
        { name: 'description', content: '探索記憶系統與學習機制、心理學發展歷程、歷史文化、旅遊規劃等多元知識領域。提供深度學習資源，從大腦科學到人文歷史，幫助您建立完整的知識體系。' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.4/dist/aos.css' },
        // Favicons and web app icons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'msapplication-TileImage', type: 'image/png', sizes: '150x150', href: '/mstile-150x150.png' }
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.4/dist/aos.js' },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-GKV4J3GE34', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GKV4J3GE34');
          `,
          type: 'text/javascript'
        }
      ]
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  // ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
