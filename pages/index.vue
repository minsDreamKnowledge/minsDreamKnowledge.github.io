<template>
  <div class="homepage">
    <!-- 英雄區域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-icon">🧠</span>
            知識系統
          </h1>
          <p class="hero-subtitle">
            探索記憶系統、學習機制與心理學實驗的完整知識體系
          </p>
          <div class="hero-actions">
            <NuxtLink to="/memory" class="btn btn-primary">
              <span class="btn-icon">📚</span>
              開始學習
            </NuxtLink>
            <NuxtLink to="/overview" class="btn btn-secondary">
              <span class="btn-icon">🗺️</span>
              瀏覽地圖
            </NuxtLink>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-icons">
            <span class="floating-icon">🧠</span>
            <span class="floating-icon">💭</span>
            <span class="floating-icon">🔬</span>
            <span class="floating-icon">📖</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速導航 -->
    <section class="quick-nav-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">⚡</span>
          快速導航
        </h2>
        <div class="quick-nav-grid">
          <div class="nav-card" data-aos="fade-up">
            <div class="nav-icon">🧠</div>
            <h3>記憶系統</h3>
            <p>深入了解記憶形成與學習機制</p>
            <NuxtLink to="/memory" class="nav-link">探索記憶</NuxtLink>
          </div>
          
          <div class="nav-card" data-aos="fade-up" data-aos-delay="100">
            <div class="nav-icon">🔬</div>
            <h3>心理實驗</h3>
            <p>經典心理學實驗與認知研究</p>
            <NuxtLink to="/experiment" class="nav-link">查看實驗</NuxtLink>
          </div>
          
          <div class="nav-card" data-aos="fade-up" data-aos-delay="200">
            <div class="nav-icon">🇹🇭</div>
            <h3>曼谷旅遊</h3>
            <p>泰國曼谷完整旅遊規劃指南</p>
            <NuxtLink to="/travel/bangkok" class="nav-link">規劃旅程</NuxtLink>
          </div>
          
          <div class="nav-card" data-aos="fade-up" data-aos-delay="300">
            <div class="nav-icon">🏃‍♂️</div>
            <h3>運動科學</h3>
            <p>運動生理學與訓練理論</p>
            <NuxtLink to="/sport" class="nav-link">了解運動</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色內容 -->
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">⭐</span>
          特色內容
        </h2>
        <div class="featured-grid">
          <div class="featured-card featured-large" data-aos="fade-right" data-aos-duration="800">
            <div class="featured-content">
              <div class="featured-icon">🧪</div>
              <h3>經典心理實驗</h3>
              <p>探索改變心理學歷史的重要實驗，包括皮亞傑認知發展、艾斯沃斯陌生情境、史金納箱等經典研究。</p>
              <div class="featured-links">
                <NuxtLink to="/experiment/piaget-cognitive-development" class="featured-link">皮亞傑實驗</NuxtLink>
                <NuxtLink to="/experiment/ainsworth-strange-situation" class="featured-link">艾斯沃斯實驗</NuxtLink>
                <NuxtLink to="/experiment/skinner-box" class="featured-link">史金納箱</NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="featured-card" data-aos="fade-left" data-aos-duration="800">
            <div class="featured-content">
              <div class="featured-icon">🧠</div>
              <h3>大腦與記憶</h3>
              <p>深入了解大腦結構、記憶形成機制與學習理論，掌握高效學習的方法。</p>
              <NuxtLink to="/memory" class="featured-link">開始學習</NuxtLink>
            </div>
          </div>
          
          <div class="featured-card" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
            <div class="featured-content">
              <div class="featured-icon">🇹🇭</div>
              <h3>曼谷旅遊指南</h3>
              <p>完整的曼谷旅遊規劃，包含景點、美食、住宿與交通資訊。</p>
              <NuxtLink to="/travel/bangkok" class="featured-link">查看指南</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜尋功能 -->
    <section class="search-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🔍</span>
          搜尋知識
        </h2>
        <div class="search-container">
          <div class="search-input-wrapper">
            <input 
              v-model="searchQuery" 
              @input="performSearch"
              @keyup.enter="performSearch"
              type="text" 
              placeholder="搜尋記憶、實驗、旅遊等內容..." 
              class="search-input"
            />
            <button @click="performSearch" class="search-btn">
              <span class="search-btn-icon">🔍</span>
            </button>
          </div>
          <div class="search-suggestions">
            <span class="suggestion-label">熱門搜尋：</span>
            <button 
              v-for="tag in popularTags" 
              :key="tag"
              @click="searchByTag(tag)"
              class="suggestion-tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新更新 -->
    <section class="updates-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🆕</span>
          最新更新
        </h2>
        <div class="updates-grid">
          <div class="update-card" data-aos="fade-up">
            <div class="update-icon">🔬</div>
            <div class="update-content">
              <h3>新增心理實驗</h3>
              <p>新增多個經典心理學實驗，包括從眾實驗、旁觀者效應等</p>
              <NuxtLink to="/experiment" class="update-link">查看實驗</NuxtLink>
            </div>
          </div>
          
          <div class="update-card" data-aos="fade-up" data-aos-delay="100">
            <div class="update-icon">🗺️</div>
            <div class="update-content">
              <h3>網站地圖</h3>
              <p>新增完整的網站地圖，幫助您快速找到所需內容</p>
              <NuxtLink to="/overview" class="update-link">瀏覽地圖</NuxtLink>
            </div>
          </div>
          
          <div class="update-card" data-aos="fade-up" data-aos-delay="200">
            <div class="update-icon">🔍</div>
            <div class="update-content">
              <h3>搜尋功能</h3>
              <p>增強搜尋功能，支援跨頁面內容搜尋</p>
              <NuxtLink to="/search" class="update-link">開始搜尋</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 學習路徑 -->
    <section class="learning-paths-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🎯</span>
          學習路徑
        </h2>
        <div class="paths-grid">
          <div class="path-card" data-aos="fade-up">
            <div class="path-header">
              <div class="path-icon">🧠</div>
              <h3>心理學入門</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">了解大腦基礎結構</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">學習記憶系統</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">探索心理實驗</span>
              </div>
            </div>
            <NuxtLink to="/memory" class="path-link">開始學習</NuxtLink>
          </div>
          
          <div class="path-card" data-aos="fade-up" data-aos-delay="100">
            <div class="path-header">
              <div class="path-icon">🔬</div>
              <h3>實驗研究</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">皮亞傑認知發展</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">艾斯沃斯陌生情境</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">史金納箱實驗</span>
              </div>
            </div>
            <NuxtLink to="/experiment" class="path-link">開始探索</NuxtLink>
          </div>
          
          <div class="path-card" data-aos="fade-up" data-aos-delay="200">
            <div class="path-header">
              <div class="path-icon">🇹🇭</div>
              <h3>旅遊規劃</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">了解曼谷景點</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">規劃行程路線</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">準備旅遊攻略</span>
              </div>
            </div>
            <NuxtLink to="/travel/bangkok" class="path-link">開始規劃</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 互動功能 -->
    <section class="interactive-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🎮</span>
          互動功能
        </h2>
        <div class="interactive-grid">
          <div class="interactive-card" data-aos="fade-up">
            <div class="interactive-icon">🔍</div>
            <h3>智能搜尋</h3>
            <p>快速找到您需要的內容</p>
            <NuxtLink to="/search" class="interactive-link">開始搜尋</NuxtLink>
          </div>
          
          <div class="interactive-card" data-aos="fade-up" data-aos-delay="100">
            <div class="interactive-icon">🗺️</div>
            <h3>網站地圖</h3>
            <p>瀏覽完整的網站結構</p>
            <NuxtLink to="/overview" class="interactive-link">查看地圖</NuxtLink>
          </div>
          
          <div class="interactive-card" data-aos="fade-up" data-aos-delay="200">
            <div class="interactive-icon">📚</div>
            <h3>知識庫</h3>
            <p>深入學習記憶與心理學</p>
            <NuxtLink to="/memory" class="interactive-link">進入學習</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 搜尋相關狀態
const searchQuery = ref('')
const searchResults = ref([])

// 熱門搜尋標籤
const popularTags = ref([
  '記憶', '大腦', '學習', '心理學', '實驗', '曼谷', '旅遊', '皮亞傑', '史金納'
])

// 執行搜尋
const performSearch = () => {
  if (searchQuery.value.trim()) {
    // 導向搜尋頁面
    navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`)
  }
}

// 按標籤搜尋
const searchByTag = (tag) => {
  searchQuery.value = tag
  performSearch()
}

// 初始化 AOS 動畫
onMounted(() => {
  import("aos").then((AOS) => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  });
})
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 英雄區域 */
.hero-section {
  margin-top: 5rem;
  padding: 4rem 0;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 4rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2rem;
}

/* 浮動圖標 */
.hero-visual {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-icons {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  font-size: 3rem;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.floating-icon:nth-child(1) {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.floating-icon:nth-child(2) {
  top: 40%;
  right: 20%;
  animation-delay: 2s;
}

.floating-icon:nth-child(3) {
  top: 60%;
  right: 15%;
  animation-delay: 4s;
}

.floating-icon:nth-child(4) {
  top: 80%;
  right: 25%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 快速導航 */
.quick-nav-section {
  padding: 4rem 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-icon {
  font-size: 2rem;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.nav-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.nav-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.nav-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.nav-card p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.nav-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

/* 特色內容 */
.featured-section {
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.featured-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.featured-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  position: relative;
  z-index: 2;
  opacity: 1;
  visibility: visible;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.featured-large {
  grid-row: span 2;
}

.featured-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.featured-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.featured-card p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.featured-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.featured-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #e8f4fd;
  color: #3498db;
  text-decoration: none;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.featured-link:hover {
  background: #3498db;
  color: white;
}

/* 搜尋區域 */
.search-section {
  padding: 4rem 0;
  background: white;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.search-btn {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover {
  background: #2980b9;
}

.search-suggestions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.suggestion-label {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.suggestion-tag {
  background: #f0f0f0;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
}

.suggestion-tag:hover {
  background: #3498db;
  color: white;
}

/* 最新更新 */
.updates-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.updates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.update-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.update-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.update-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.update-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.update-content p {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.update-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.update-link:hover {
  color: #2980b9;
}

/* 學習路徑 */
.learning-paths-section {
  padding: 4rem 0;
  background: white;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.path-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.path-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.path-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.path-icon {
  font-size: 2rem;
}

.path-header h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
}

.path-steps {
  margin-bottom: 1.5rem;
}

.path-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.step-number {
  background: #3498db;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.step-text {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.path-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.path-link:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

/* 互動功能 */
.interactive-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.interactive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interactive-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.interactive-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.interactive-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.interactive-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.interactive-card p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.interactive-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.interactive-link:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .title-icon {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .featured-large {
    grid-row: auto;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .search-suggestions {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .update-card {
    flex-direction: column;
    text-align: center;
  }
  
  .path-header {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .nav-card,
  .featured-card,
  .update-card,
  .path-card,
  .interactive-card {
    padding: 1.5rem;
  }
}
</style> 