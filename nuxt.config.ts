// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore - sitemap module extends config
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // 添加 sitemap 和 seo 模組
  modules: ['@nuxtjs/sitemap', '@nuxtjs/seo'],

  // Sitemap 配置
  site: {
    url: 'https://minsdreamknowledge.github.io',
    name: 'Mins Dream Knowledge',
  },
  sitemap: {
    discoverImages: false,
    discoverVideos: false,
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly'
    },
    sitemapName: 'sitemap.xml',
    xsl: false,
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
  routeRules: {
    '/': {
      sitemap: { changefreq: 'daily', priority: 1, lastmod: '2025-01-21T11:10:44+08:00' },
    },
    '/memory/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.9, lastmod: '2025-01-20T11:10:44+08:00' },
    },
    '/psychology/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.8, lastmod: '2025-01-19T11:10:44+08:00' },
    },
    '/travel/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.8, lastmod: '2025-01-18T11:10:44+08:00' },
    },
    '/travel/bangkok/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.85, lastmod: '2025-01-17T11:10:44+08:00' },
    },
    '/sport/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.8, lastmod: '2025-01-16T11:10:44+08:00' },
    },
    '/experiment/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.8, lastmod: '2025-01-15T11:10:44+08:00' },
    },
    '/experiment/ainsworth-strange-situation/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-21T11:10:44+08:00' },
    },
    '/experiment/piaget-cognitive-development/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-20T11:10:44+08:00' },
    },
    '/experiment/zimbardo-prison/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-19T11:10:44+08:00' },
    },
    '/experiment/skinner-box/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-18T11:10:44+08:00' },
    },
    '/experiment/latane-bystander-effect/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-17T11:10:44+08:00' },
    },
    '/experiment/asch-conformity/': {
      prerender: true,
      sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: '2025-02-16T11:10:44+08:00' },
    },
    '/overview/': {
      prerender: true,
      sitemap: { changefreq: 'monthly', priority: 0.6, lastmod: '2025-01-14T11:10:44+08:00' },
    },
    '/search/': {
      prerender: true,
      sitemap: { changefreq: 'monthly', priority: 0.5, lastmod: '2025-01-13T11:10:44+08:00' },
    },
    '/sitemap.xml': { prerender: true },
    '/robots.txt': { prerender: true },
  },
});
