<template>
  <div class="sitemap-page">
    <!-- 頁面標題 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">
          <span class="title-icon">🗺️</span>
          網站地圖
        </h1>
        <p class="page-subtitle">探索我們完整的知識系統結構</p>
      </div>
    </section>

    <!-- 主要內容區塊 -->
    <section class="sitemap-content">
      <div class="container">
        <!-- 主要頁面 -->
        <div class="sitemap-section">
          <h2 class="section-title">
            <span class="section-icon">📄</span>
            主要頁面
          </h2>
          <div class="page-grid">
            <div class="page-card" data-aos="fade-up">
              <div class="page-icon">🏠</div>
              <h3>首頁</h3>
              <p>歡迎頁面，提供網站概覽和主要導航</p>
              <NuxtLink to="/library" class="page-link">訪問頁面</NuxtLink>
            </div>
            <div class="page-card" data-aos="fade-up" data-aos-delay="100">
              <div class="page-icon">📚</div>
              <h3>知識庫</h3>
              <p>記憶系統與學習機制的完整知識體系</p>
              <NuxtLink to="/" class="page-link">訪問頁面</NuxtLink>
            </div>
            <div class="page-card" data-aos="fade-up" data-aos-delay="200">
              <div class="page-icon">🇹🇭</div>
              <h3>曼谷旅遊</h3>
              <p>泰國曼谷旅遊規劃完整指南</p>
              <NuxtLink to="/travel/bangkok" class="page-link">訪問頁面</NuxtLink>
            </div>
          </div>
        </div>

        <!-- 知識庫內容結構 -->
        <div class="sitemap-section">
          <h2 class="section-title">
            <span class="section-icon">🧠</span>
            知識庫內容結構
          </h2>
          <div class="content-tree">
            <div class="tree-item main-item" data-aos="slide-in-left">
              <div class="tree-icon">📚</div>
              <div class="tree-content">
                <h3>知識庫主頁</h3>
                <p>記憶系統與學習機制的核心概念</p>
              </div>
            </div>
            
            <div class="tree-branch">
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="100">
                <div class="tree-icon">🧠</div>
                <div class="tree-content">
                  <h4>大腦基礎結構</h4>
                  <p>大腦基礎結構與功能解析</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="200">
                <div class="tree-icon">💭</div>
                <div class="tree-content">
                  <h4>記憶系統</h4>
                  <p>記憶系統與學習機制詳解</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="300">
                <div class="tree-icon">🤔</div>
                <div class="tree-content">
                  <h4>思考與決策</h4>
                  <p>思考與決策心理學研究</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="400">
                <div class="tree-icon">🧪</div>
                <div class="tree-content">
                  <h4>大腦實驗</h4>
                  <p>大腦實驗與認知研究</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 曼谷旅遊內容結構 -->
        <div class="sitemap-section">
          <h2 class="section-title">
            <span class="section-icon">🇹🇭</span>
            曼谷旅遊內容結構
          </h2>
          <div class="content-tree">
            <div class="tree-item main-item" data-aos="slide-in-left">
              <div class="tree-icon">🇹🇭</div>
              <div class="tree-content">
                <h3>曼谷旅遊主頁</h3>
                <p>泰國曼谷旅遊完整規劃指南</p>
              </div>
            </div>
            
            <div class="tree-branch">
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="100">
                <div class="tree-icon">📋</div>
                <div class="tree-content">
                  <h4>前置準備</h4>
                  <p>簽證、機票、住宿、交通票券</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="200">
                <div class="tree-icon">🗺️</div>
                <div class="tree-content">
                  <h4>必訪景點</h4>
                  <p>大皇宮、臥佛寺、鄭王廟、考山路、暹羅廣場</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="300">
                <div class="tree-icon">🍜</div>
                <div class="tree-content">
                  <h4>美食文化</h4>
                  <p>泰式炒河粉、冬陰功湯、青咖哩、芒果糯米飯</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="400">
                <div class="tree-icon">⚠️</div>
                <div class="tree-content">
                  <h4>注意事項</h4>
                  <p>文化禁忌、安全注意、禮儀規範</p>
                </div>
              </div>
              
              <div class="tree-item" data-aos="slide-in-left" data-aos-delay="500">
                <div class="tree-icon">💰</div>
                <div class="tree-content">
                  <h4>預算規劃</h4>
                  <p>經濟型、標準型、豪華型預算方案</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能特色 -->
        <div class="sitemap-section">
          <h2 class="section-title">
            <span class="section-icon">⚡</span>
            功能特色
          </h2>
          <div class="features-grid">
            <div class="feature-card" data-aos="fade-up">
              <div class="feature-icon">🔍</div>
              <h3>智能搜尋</h3>
              <p>快速搜尋網站內容，支援關鍵字匹配</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-icon">📱</div>
              <h3>響應式設計</h3>
              <p>適配各種設備，提供最佳瀏覽體驗</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-icon">🎨</div>
              <h3>現代化UI</h3>
              <p>美觀的界面設計，流暢的動畫效果</p>
            </div>
            <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div class="feature-icon">⚡</div>
              <h3>快速載入</h3>
              <p>優化的性能表現，快速響應用戶操作</p>
            </div>
          </div>
        </div>

        <!-- 內容分類 -->
        <div class="sitemap-section">
          <h2 class="section-title">
            <span class="section-icon">📂</span>
            內容分類
          </h2>
          <div class="categories-grid">
            <div class="category-card education" data-aos="fade-up">
              <div class="category-icon">📚</div>
              <h3>教育知識</h3>
              <ul>
                <li>大腦科學</li>
                <li>記憶系統</li>
                <li>學習機制</li>
                <li>認知研究</li>
              </ul>
            </div>
            <div class="category-card travel" data-aos="fade-up" data-aos-delay="100">
              <div class="category-icon">✈️</div>
              <h3>旅遊指南</h3>
              <ul>
                <li>目的地規劃</li>
                <li>景點介紹</li>
                <li>美食文化</li>
                <li>實用資訊</li>
              </ul>
            </div>
            <div class="category-card lifestyle" data-aos="fade-up" data-aos-delay="200">
              <div class="category-icon">🌟</div>
              <h3>生活應用</h3>
              <ul>
                <li>學習技巧</li>
                <li>記憶方法</li>
                <li>文化體驗</li>
                <li>實用工具</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 返回首頁 -->
    <div class="back-to-home">
      <div class="container">
        <NuxtLink to="/" class="btn btn-primary">
          <span>🏠</span>
          返回首頁
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 頁面載入動畫
onMounted(() => {
  // 初始化 AOS 動畫
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }
})
</script>

<style scoped>
.sitemap-page {
  padding-top: 70px;
  min-height: 100vh;
}

/* 頁面標題 */
.page-header {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 3.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 內容區塊 */
.sitemap-content {
  padding: 4rem 0;
}

.sitemap-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-icon {
  font-size: 2.5rem;
}

/* 主要頁面網格 */
.page-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.page-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.page-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.page-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.page-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.page-card p {
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.page-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.page-link:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* 內容樹狀結構 */
.content-tree {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tree-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: var(--color-background-light);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.tree-item:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tree-item.main-item {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
}

.tree-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.tree-content h3,
.tree-content h4 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.tree-content p {
  margin: 0;
  opacity: 0.8;
  line-height: 1.5;
}

.tree-branch {
  margin-left: 3rem;
  border-left: 2px solid var(--color-border);
  padding-left: 2rem;
}

/* 功能特色網格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.feature-card p {
  color: var(--color-text-light);
  line-height: 1.6;
}

/* 內容分類網格 */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}

.category-card.education::before {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
}

.category-card.travel::before {
  background: linear-gradient(90deg, #f39c12, #e67e22);
}

.category-card.lifestyle::before {
  background: linear-gradient(90deg, #9b59b6, #8e44ad);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.category-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.category-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

.category-card li:last-child {
  border-bottom: none;
}

/* 返回首頁按鈕 */
.back-to-home {
  padding: 3rem 0;
  text-align: center;
  background: var(--color-background-light);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .title-icon {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .tree-branch {
    margin-left: 1rem;
    padding-left: 1rem;
  }
  
  .page-grid,
  .features-grid,
  .categories-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 2rem 0;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .title-icon {
    font-size: 2rem;
  }
  
  .sitemap-content {
    padding: 2rem 0;
  }
}
</style> 