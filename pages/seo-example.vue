<template>
  <div class="seo-example-page">
    <div class="container">
      <h1>SEO 模組使用示例</h1>
      
      <section class="seo-section">
        <h2>基本 SEO 設置</h2>
        <p>這個頁面展示了如何使用 @nuxtjs/seo 模組的各種功能。</p>
        
        <div class="seo-features">
          <div class="feature-card">
            <h3>📝 頁面標題與描述</h3>
            <p>使用 useSeoMeta() 設置頁面特定的 SEO 標籤</p>
          </div>
          
          <div class="feature-card">
            <h3>🖼️ Open Graph 標籤</h3>
            <p>為社交媒體分享優化頁面顯示</p>
          </div>
          
          <div class="feature-card">
            <h3>🐦 Twitter Card</h3>
            <p>優化 Twitter 分享時的顯示效果</p>
          </div>
          
          <div class="feature-card">
            <h3>📊 結構化數據</h3>
            <p>添加 JSON-LD 結構化數據</p>
          </div>
        </div>
      </section>
      
      <section class="code-examples">
        <h2>代碼示例</h2>
        
        <div class="example-block">
          <h3>基本 SEO 設置</h3>
          <pre><code>// 在 setup() 中使用
useSeoMeta({
  title: '頁面標題',
  description: '頁面描述',
  keywords: '關鍵字1,關鍵字2,關鍵字3',
  author: '作者名稱'
})</code></pre>
        </div>
        
        <div class="example-block">
          <h3>Open Graph 設置</h3>
          <pre><code>useSeoMeta({
  ogTitle: '社交媒體標題',
  ogDescription: '社交媒體描述',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogLocale: 'zh_TW'
})</code></pre>
        </div>
        
        <div class="example-block">
          <h3>Twitter Card 設置</h3>
          <pre><code>useSeoMeta({
  twitterCard: 'summary_large_image',
  twitterTitle: 'Twitter 標題',
  twitterDescription: 'Twitter 描述',
  twitterImage: '/twitter-image.jpg'
})</code></pre>
        </div>
        
        <div class="example-block">
          <h3>結構化數據</h3>
          <pre><code>useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '文章標題',
  author: {
    '@type': 'Person',
    name: '作者名稱'
  }
})</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 使用 @nuxtjs/seo 模組的功能
useSeoMeta({
  // 基本 SEO 設置
  title: 'SEO 模組使用示例 - Mins Dream Knowledge',
  description: '學習如何在 Nuxt.js 中使用 @nuxtjs/seo 模組來優化網站的 SEO 表現，包括頁面標題、描述、Open Graph 標籤、Twitter Card 和結構化數據。',
  keywords: 'SEO,Nuxt.js,@nuxtjs/seo,Open Graph,Twitter Card,結構化數據,網站優化',
  author: 'Mins Dream Knowledge',
  
  // Open Graph 設置
  ogTitle: 'SEO 模組使用示例 - Mins Dream Knowledge',
  ogDescription: '學習如何在 Nuxt.js 中使用 @nuxtjs/seo 模組來優化網站的 SEO 表現。',
  ogImage: '/og-seo-example.jpg',
  ogType: 'article',
  ogLocale: 'zh_TW',
  ogSiteName: 'Mins Dream Knowledge',
  
  // Twitter Card 設置
  twitterCard: 'summary_large_image',
  twitterTitle: 'SEO 模組使用示例 - Mins Dream Knowledge',
  twitterDescription: '學習如何在 Nuxt.js 中使用 @nuxtjs/seo 模組來優化網站的 SEO 表現。',
  twitterImage: '/twitter-seo-example.jpg',
  twitterSite: '@minsdreamknowledge',
  twitterCreator: '@minsdreamknowledge',
  
  // 額外的 meta 標籤
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8'
})

// 頁面載入時的初始化
onMounted(() => {
  // 可以添加頁面特定的初始化邏輯
  console.log('SEO 示例頁面已載入')
})
</script>

<style scoped>
.seo-example-page {
  padding: 2rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ffd700;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.seo-section {
  margin-bottom: 3rem;
}

.seo-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.code-examples {
  margin-top: 3rem;
}

.example-block {
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #ffd700;
}

pre {
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

code {
  color: #00ff88;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .seo-features {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 