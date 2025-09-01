// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore - sitemap module extends config
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // 添加 sitemap、seo 和 pinia 模組
  modules: ['@nuxtjs/sitemap', '@nuxtjs/seo', '@pinia/nuxt'],
  
  // Pinia 配置
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },

  // Vite 配置
  vite: {
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['pinia-plugin-persistedstate'],
      force: true
    },
    server: {
      fs: {
        strict: false
      }
    },
    resolve: {
      alias: {
        crypto: 'crypto-browserify'
      }
    },
    esbuild: {
      target: 'node14'
    }
  },

  // Sitemap 配置
  site: {
    url: 'https://minsdreamknowledge.github.io',
    name: 'Mins Dream Knowledge',
  },
  sitemap: {
    hostname: 'https://minsdreamknowledge.github.io',
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    trailingSlash: false,
    discoverImages: false,
    discoverVideos: false,
    defaults: {
      changefreq: 'always',
      lastmod: new Date().toISOString(),
    },
    sitemapName: 'sitemap.xml',
    xsl: false,
    gzip: true,
    // 確保 sitemap 在根路徑可訪問
    sources: [
      '/api/sitemap.xml'
    ]
  },

  app: {
    head: {
      title: 'Mins Dream Knowledge',
      meta: [
        {
          name: 'description',
          content:
            '探索記憶系統與學習機制、心理學發展歷程、歷史文化、旅遊規劃等多元知識領域。提供深度學習資源，從大腦科學到人文歷史，幫助您建立完整的知識體系。',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap',
        },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.4/dist/aos.css' },
        // Favicons and web app icons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/android-chrome-512x512.png',
        },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        {
          rel: 'msapplication-TileImage',
          type: 'image/png',
          sizes: '150x150',
          href: '/mstile-150x150.png',
        },
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.4/dist/aos.js' },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-GKV4J3GE34',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GKV4J3GE34');
          `,
          type: 'text/javascript',
        },
      ],
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  ssr: true,
  nitro: {
    preset: 'github-pages',
    routeRules: {
      // 移除全域重定向禁用，改為更精確的配置
      '/api/**': { headers: { 'cache-control': 's-maxage=60' } },
      '/_nuxt/**': { headers: { 'cache-control': 's-maxage=31536000' } }
    },
    prerender: { 
      crawlLinks: true, 
      routes: ['/sitemap.xml', '/robots.txt'], 
      failOnError: false 
    }
  },
  routeRules: {
    '/': {
      sitemap: { changefreq: 'always', lastmod: '2025-08-28' },
    },
    '/memory': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-20' },
    },
    '/psychology': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-19' },
    },
    '/travel': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-18' },
    },
    '/travel/bangkok': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-17' },
    },
    '/sport': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-16' },
    },
    '/experiment': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-01-15' },
    },
    '/experiment/ainsworth-strange-situation': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-21' },
    },
    '/experiment/piaget-cognitive-development': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-20' },
    },
    '/experiment/zimbardo-prison': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-19' },
    },
    '/experiment/skinner-box': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-18' },
    },
    '/experiment/latane-bystander-effect': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-17' },
    },
    '/experiment/asch-conformity': {
      prerender: true,
      sitemap: { changefreq: 'weekly', lastmod: '2025-02-16' },
    },
    '/overview': {
      prerender: true,
      sitemap: { changefreq: 'monthly', lastmod: '2025-01-14' },
    },
    '/search': {
      prerender: true,
      sitemap: { changefreq: 'monthly', lastmod: '2025-01-13' },
    },
  },
});
