// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap' }
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-app/' : '/',
    buildAssetsDir: '/nuxt-app/_nuxt/'
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/knowledge']
    }
  }
})
