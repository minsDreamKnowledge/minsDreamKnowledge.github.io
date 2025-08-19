# @nuxtjs/seo 模組使用指南

## 概述

`@nuxtjs/seo` 是 Nuxt.js 的官方 SEO 模組，提供了強大的 SEO 優化功能，包括頁面標題、描述、Open Graph 標籤、Twitter Card 和結構化數據。

## 安裝

```bash
npm install @nuxtjs/seo
```

## 配置

### 1. 在 nuxt.config.ts 中添加模組

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/seo'
  ],
  
  // 其他配置...
})
```

## 基本使用

### 1. 頁面級別 SEO

在頁面的 `<script setup>` 中使用：

```vue
<script setup>
// 基本 SEO 設置
useSeoMeta({
  title: '頁面標題',
  description: '頁面描述',
  keywords: '關鍵字1,關鍵字2,關鍵字3',
  author: '作者名稱'
})
</script>
```

### 2. Open Graph 設置

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

### 3. Twitter Card 設置

```vue
<script setup>
useSeoMeta({
  // 基本 SEO
  title: '頁面標題',
  description: '頁面描述',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Twitter 標題',
  twitterDescription: 'Twitter 描述',
  twitterImage: '/twitter-image.jpg',
  twitterSite: '@yourtwitter',
  twitterCreator: '@yourtwitter'
})
</script>
```

### 4. 結構化數據

```vue
<script setup>
// 添加 JSON-LD 結構化數據
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
    url: 'https://yourwebsite.com'
  },
  datePublished: '2025-01-21',
  dateModified: '2025-01-21'
})
</script>
```

## 自定義 SEO Composable

為了簡化 SEO 設置，我們創建了一個自定義的 composable：

### 使用方式

```vue
<script setup>
const { setPageSeo } = useSeo()

// 簡單的頁面 SEO 設置
setPageSeo({
  title: '頁面標題',
  description: '頁面描述',
  keywords: '關鍵字1,關鍵字2'
})
</script>
```

### 完整功能

```vue
<script setup>
const { setCompleteSeo } = useSeo()

// 完整的 SEO 設置
setCompleteSeo({
  title: '完整標題',
  description: '完整描述',
  keywords: '關鍵字',
  image: '/custom-image.jpg',
  type: 'article',
  structuredDataType: 'article'
})
</script>
```

## 可用的 Composable 函數

### 1. setBasicSeo(config)
設置基本 SEO 標籤

```javascript
setBasicSeo({
  title: '標題',
  description: '描述',
  keywords: '關鍵字',
  author: '作者',
  robots: 'index, follow'
})
```

### 2. setOpenGraph(config)
設置 Open Graph 標籤

```javascript
setOpenGraph({
  title: '標題',
  description: '描述',
  image: '/image.jpg',
  type: 'website',
  locale: 'zh_TW',
  siteName: '網站名稱'
})
```

### 3. setTwitterCard(config)
設置 Twitter Card 標籤

```javascript
setTwitterCard({
  title: '標題',
  description: '描述',
  image: '/image.jpg',
  card: 'summary_large_image',
  site: '@yoursite',
  creator: '@yourcreator'
})
```

### 4. setArticleStructuredData(config)
設置文章結構化數據

```javascript
setArticleStructuredData({
  title: '文章標題',
  description: '文章描述',
  author: '作者',
  datePublished: '2025-01-21',
  dateModified: '2025-01-21',
  image: '/article-image.jpg',
  url: 'https://yourwebsite.com/article'
})
```

### 5. setWebsiteStructuredData(config)
設置網站結構化數據

```javascript
setWebsiteStructuredData({
  name: '網站名稱',
  description: '網站描述',
  url: 'https://yourwebsite.com'
})
```

### 6. setOrganizationStructuredData(config)
設置組織結構化數據

```javascript
setOrganizationStructuredData({
  name: '組織名稱',
  description: '組織描述',
  url: 'https://yourwebsite.com',
  logo: '/logo.png'
})
```

## 示例頁面

### 1. SEO 模組示例
訪問 `/seo-example` 查看基本 SEO 功能的使用示例。

### 2. SEO Composable 示例
訪問 `/seo-composable-example` 查看自定義 composable 的使用示例。

## 最佳實踐

### 1. 頁面標題
- 保持簡潔，不超過 60 個字符
- 包含主要關鍵字
- 每個頁面使用獨特的標題

### 2. 頁面描述
- 保持在 150-160 個字符以內
- 包含主要關鍵字
- 吸引用戶點擊

### 3. 圖片優化
- 使用高質量的圖片
- 設置適當的 alt 屬性
- 優化圖片大小

### 4. 結構化數據
- 根據內容類型選擇適當的 Schema.org 類型
- 確保數據準確性
- 使用 Google 結構化數據測試工具驗證

### 5. 社交媒體優化
- 為每個頁面設置獨特的 Open Graph 圖片
- 測試在不同社交媒體平台的顯示效果
- 使用適當的標籤類型

## 測試工具

### 1. Google Search Console
- 提交 sitemap
- 監控搜索表現
- 檢查結構化數據

### 2. Facebook Sharing Debugger
- 測試 Open Graph 標籤
- 預覽社交媒體分享效果

### 3. Twitter Card Validator
- 測試 Twitter Card 標籤
- 預覽 Twitter 分享效果

### 4. Google 結構化數據測試工具
- 驗證 JSON-LD 結構化數據
- 檢查語法錯誤

## 常見問題

### Q: 如何設置動態 SEO？
A: 在 `useSeoMeta` 中使用響應式數據：

```vue
<script setup>
const route = useRoute()
const title = computed(() => `${route.params.id} - 網站名稱`)

useSeoMeta({
  title: title
})
</script>
```

### Q: 如何設置多語言 SEO？
A: 根據當前語言設置不同的標籤：

```vue
<script setup>
const { locale } = useI18n()

useSeoMeta({
  title: locale.value === 'zh' ? '中文標題' : 'English Title',
  description: locale.value === 'zh' ? '中文描述' : 'English Description'
})
</script>
```

### Q: 如何設置 noindex 頁面？
A: 設置 robots 標籤：

```vue
<script setup>
useSeoMeta({
  robots: 'noindex, nofollow'
})
</script>
```

## Robots.txt 配置

### 1. 靜態 Robots.txt

在 `public/robots.txt` 中創建靜態文件：

```txt
# robots.txt for Mins Dream Knowledge
# https://minsdreamknowledge.github.io

# 允許所有搜索引擎爬蟲
User-Agent: *
Allow: /

# 允許 Google 爬蟲
User-Agent: Googlebot
Allow: /

# 允許 Google AdSense 和 Analytics
User-Agent: Mediapartners-Google
Allow: /

# 允許 Bing 爬蟲
User-Agent: Bingbot
Allow: /

# 禁止爬取臨時文件
Disallow: /temp/
Disallow: /tmp/
Disallow: /.nuxt/
Disallow: /node_modules/

# Sitemap 位置
Sitemap: https://minsdreamknowledge.github.io/sitemap.xml

# 爬取延遲（可選）
Crawl-delay: 1
```

### 2. 動態 Robots.txt

創建 `server/api/robots.txt.ts` 來動態生成：

```typescript
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'text/plain')
  
  const baseUrl = 'https://minsdreamknowledge.github.io'
  
  const robotsContent = `# robots.txt for Mins Dream Knowledge
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

### 3. Robots.txt 測試

訪問以下頁面測試 robots.txt 配置：
- `/robots.txt` - 靜態版本
- `/api/robots.txt` - 動態版本
- `/robots-test` - 測試頁面

## 測試工具

### 1. Google Search Console
- 提交 robots.txt 並監控爬取狀態
- 檢查爬取錯誤和問題

### 2. Bing Webmaster Tools
- Bing 搜索引擎的 robots.txt 測試
- 監控 Bing 爬蟲行為

### 3. Online Robots.txt Tester
- 在線 robots.txt 語法檢查工具
- 驗證語法正確性

## 最佳實踐

### 1. Robots.txt 規則
- 使用明確的 User-Agent 規則
- 避免過於複雜的規則
- 定期檢查和更新

### 2. 爬取控制
- 使用 Crawl-delay 控制爬取頻率
- 避免服務器過載
- 監控爬取日誌

### 3. 安全考慮
- 禁止爬取敏感目錄
- 保護管理區域
- 避免暴露內部結構

## 總結

`@nuxtjs/seo` 模組提供了強大的 SEO 功能，結合自定義的 composable 和 robots.txt 配置，可以大大簡化 SEO 設置流程。通過正確使用這些功能，可以顯著提升網站的搜索引擎優化效果。 