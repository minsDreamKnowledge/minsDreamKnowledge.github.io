// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'google-site-verification', content: 'U7x9cSCfgcjUN9brcEBtzO73WqYcKt6troHvTioCpEc' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.4/dist/aos.css' }
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.4/dist/aos.js' }
      ]
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/knowledge']
    }
  }
})
