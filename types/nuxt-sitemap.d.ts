declare module 'nuxt/schema' {
  interface RouteRules {
    sitemap?: {
      changefreq?: string
      priority?: number
      lastmod?: string
    }
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    sitemap?: any
  }
} 