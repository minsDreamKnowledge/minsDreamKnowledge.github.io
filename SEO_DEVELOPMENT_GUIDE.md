# SEO 開發指南

## 📋 概述

本指南涵蓋了在 Nuxt.js 項目中進行 SEO 開發的完整流程，包括：
- `@nuxtjs/seo` 模組的使用
- Robots.txt 的配置和開發
- Sitemap 的生成和管理
- SEO 最佳實踐

## 🚀 開發環境設置

### 1. 安裝依賴

```bash
# 安裝 SEO 相關模組
npm install @nuxtjs/seo @nuxtjs/sitemap

# 檢查安裝狀態
npm list @nuxtjs/seo @nuxtjs/sitemap
```

### 2. 配置 nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/seo'],
  
  // 網站基本配置
  site: {
    url: 'https://yourdomain.com',
    name: 'Your Site Name'
  },
  
  // Sitemap 配置
  sitemap: {
    sitemapName: 'sitemap.xml',
    xsl: false
  }
})
```

## 🎯 @nuxtjs/seo 開發

### 1. 頁面級別 SEO

```vue
<script setup>
// 基本 SEO 設置
useSeoMeta({
  title: '頁面標題',
  description: '頁面描述',
  keywords: '關鍵字1,關鍵字2',
  author: '作者名稱'
})
</script>
```

### 2. 動態 SEO

```vue
<script setup>
const route = useRoute()
const title = computed(() => `${route.params.id} - 網站名稱`)

useSeoMeta({
  title: title,
  description: computed(() => `關於 ${route.params.id} 的詳細信息`)
})
</script>
```

### 3. Open Graph 開發

```vue
<script setup>
useSeoMeta({
  // 基本 SEO
  title: '頁面標題',
  description: '頁面描述',
  
  // Open Graph
  ogTitle: '社交媒體標題',
  ogDescription: '社交媒體描述',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogLocale: 'zh_TW',
  ogSiteName: '網站名稱'
})
</script>
```

### 4. 結構化數據開發

```vue
<script setup>
// 文章結構化數據
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '文章標題',
  description: '文章描述',
  author: {
    '@type': 'Person',
    name: '作者名稱'
  },
  publisher: {
    '@type': 'Organization',
    name: '發布者名稱',
    url: 'https://yourdomain.com'
  },
  datePublished: '2025-01-21',
  dateModified: '2025-01-21'
})
</script>
```

## 🤖 Robots.txt 開發

### 1. 靜態 Robots.txt

```txt
# robots.txt for Your Site
# https://yourdomain.com

# 允許所有搜索引擎爬蟲
User-Agent: *
Allow: /

# 允許 Google 爬蟲
User-Agent: Googlebot
Allow: /

# 允許 Bing 爬蟲
User-Agent: Bingbot
Allow: /

# 禁止爬取管理區域
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# 禁止爬取臨時文件
Disallow: /temp/
Disallow: /tmp/
Disallow: /.nuxt/
Disallow: /node_modules/

# Sitemap 位置
Sitemap: https://yourdomain.com/sitemap.xml

# 爬取延遲
Crawl-delay: 1
```

### 2. 動態 Robots.txt

```typescript
// server/api/robots.txt.ts
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  
  const baseUrl = 'https://yourdomain.com'
  
  const robotsContent = `# robots.txt for Your Site
# ${baseUrl}

User-Agent: *
Allow: /

# 禁止爬取臨時文件
Disallow: /temp/
Disallow: /tmp/
Disallow: /.nuxt/
Disallow: /node_modules/

# Sitemap 位置
Sitemap: ${baseUrl}/sitemap.xml

Crawl-delay: 1`
  
  return robotsContent
})
```

### 3. 開發環境測試

```bash
# 測試靜態 robots.txt
curl http://localhost:3000/robots.txt

# 測試動態 robots.txt
curl http://localhost:3000/api/robots.txt
```

## 🗺️ Sitemap 開發

### 1. 自動生成 Sitemap

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  sitemap: {
    sitemapName: 'sitemap.xml',
    xsl: false,
    // 自定義配置
    urls: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2025-01-21'
      }
    ]
  }
})
```

### 2. 路由規則配置

```typescript
// nuxt.config.ts
routeRules: {
  '/': {
    sitemap: { changefreq: 'daily', priority: 1, lastmod: '2025-01-21' }
  },
  '/about': {
    prerender: true,
    sitemap: { changefreq: 'weekly', priority: 0.8, lastmod: '2025-01-20' }
  },
  '/blog': {
    prerender: true,
    sitemap: { changefreq: 'weekly', priority: 0.9, lastmod: '2025-01-19' }
  }
}
```

### 3. 自定義 Sitemap API

```typescript
// server/api/sitemap.xml.ts
export default defineEventHandler(async (event) => {
  const baseUrl = 'https://yourdomain.com'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2025-01-21</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
  
  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
```

## 🔧 開發工具和測試

### 1. SEO 測試工具

```bash
# 安裝 SEO 測試工具
npm install -g lighthouse
npm install -g pa11y

# 運行 Lighthouse 測試
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html

# 運行可訪問性測試
pa11y http://localhost:3000
```

### 2. 結構化數據測試

```bash
# 使用 Google 結構化數據測試工具
# 訪問：https://search.google.com/test/rich-results

# 使用 Schema.org 驗證器
# 訪問：https://validator.schema.org/
```

### 3. 社交媒體測試

```bash
# Facebook 分享調試器
# 訪問：https://developers.facebook.com/tools/debug/

# Twitter Card 驗證器
# 訪問：https://cards-dev.twitter.com/validator
```

## 📊 監控和分析

### 1. Google Search Console

```typescript
// 添加 Google Search Console 驗證
// 在 public/ 目錄下放置驗證文件
// 或在 head 中添加 meta 標籤
useSeoMeta({
  'google-site-verification': 'your-verification-code'
})
```

### 2. 分析工具集成

```vue
<script setup>
// Google Analytics 4
useSeoMeta({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `
    }
  ]
})
</script>
```

## 🚀 部署和維護

### 1. 生產環境配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // 生產環境 SEO 配置
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  }
})
```

### 2. 自動化部署

```yaml
# .github/workflows/deploy.yml
name: Deploy with SEO
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with SEO
        run: npm run build
      
      - name: Deploy
        run: npm run deploy
```

### 3. SEO 監控腳本

```javascript
// scripts/seo-monitor.js
const fs = require('fs')
const path = require('path')

function checkSEOFiles() {
  const requiredFiles = [
    'public/robots.txt',
    'public/sitemap.xml',
    'public/favicon.ico'
  ]
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      console.log(`❌ Missing: ${file}`)
    } else {
      console.log(`✅ Found: ${file}`)
    }
  })
}

checkSEOFiles()
```

## 📈 性能優化

### 1. 圖片優化

```vue
<template>
  <img 
    src="/image.jpg" 
    alt="描述性文字"
    loading="lazy"
    width="800"
    height="600"
  />
</template>
```

### 2. 代碼分割

```typescript
// 使用動態導入
const LazyComponent = defineAsyncComponent(() => import('./HeavyComponent.vue'))
```

### 3. 緩存策略

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        url: process.env.REDIS_URL
      }
    }
  }
})
```

## 🔍 常見問題和解決方案

### 1. TypeScript 錯誤

```typescript
// types/nuxt-sitemap.d.ts
declare module 'nuxt/schema' {
  interface RouteRules {
    sitemap?: {
      changefreq?: string
      priority?: number
      lastmod?: string
    }
  }
}
```

### 2. 動態路由 SEO

```vue
<script setup>
const route = useRoute()

// 根據路由參數設置 SEO
useSeoMeta({
  title: computed(() => `${route.params.slug} - 網站名稱`),
  description: computed(() => `關於 ${route.params.slug} 的詳細信息`)
})
</script>
```

### 3. 多語言 SEO

```vue
<script setup>
const { locale } = useI18n()

useSeoMeta({
  title: locale.value === 'zh' ? '中文標題' : 'English Title',
  description: locale.value === 'zh' ? '中文描述' : 'English Description',
  lang: locale.value
})
</script>
```

## 📚 最佳實踐總結

1. **頁面級別 SEO** - 為每個頁面設置獨特的標題和描述
2. **結構化數據** - 使用適當的 Schema.org 標記
3. **圖片優化** - 使用 alt 屬性和適當的尺寸
4. **性能優化** - 確保快速加載時間
5. **移動友好** - 響應式設計和觸摸友好
6. **安全性** - HTTPS 和安全的標頭
7. **可訪問性** - 遵循 WCAG 指南
8. **監控** - 定期檢查 SEO 表現

通過遵循這個開發指南，你可以建立一個 SEO 友好的 Nuxt.js 應用程序。 