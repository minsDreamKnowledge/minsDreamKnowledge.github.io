<template>
  <div class="search-page">
    <!-- 搜尋標題 -->
    <section class="search-header">
      <div class="container">
        <h1 class="search-title">
          <span class="search-icon">🔍</span>
          搜尋結果
        </h1>
        <div class="search-form">
          <div class="search-input-container">
            <input 
              v-model="searchQuery" 
              @input="performSearch"
              @keyup.enter="performSearch"
              type="text" 
              placeholder="輸入關鍵字搜尋..." 
              class="search-input"
            />
            <button @click="performSearch" class="search-btn">
              <span class="search-btn-icon">🔍</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜尋結果 -->
    <section class="search-results">
      <div class="container">
        <!-- 搜尋統計 -->
        <div class="search-stats" v-if="searchResults.length > 0">
          <p class="stats-text">
            找到 <strong>{{ searchResults.length }}</strong> 個結果
            <span v-if="searchQuery">關於 "{{ searchQuery }}"</span>
          </p>
        </div>

        <!-- 無結果提示 -->
        <div v-if="searchQuery && searchResults.length === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h2>沒有找到相關結果</h2>
          <p>嘗試使用不同的關鍵字或瀏覽以下建議內容：</p>
          <div class="suggestions">
            <NuxtLink to="/" class="suggestion-link">
              <span class="suggestion-icon">📚</span>
              知識庫
            </NuxtLink>
            <NuxtLink to="/travel/bangkok" class="suggestion-link">
              <span class="suggestion-icon">🇹🇭</span>
              曼谷旅遊
            </NuxtLink>
            <NuxtLink to="/overview" class="suggestion-link">
              <span class="suggestion-icon">🗺️</span>
              網站地圖
            </NuxtLink>
          </div>
        </div>

        <!-- 搜尋結果列表 -->
        <div v-if="searchResults.length > 0" class="results-list">
          <div 
            v-for="result in searchResults" 
            :key="result.id"
            class="result-item"
            data-aos="fade-up"
          >
            <div class="result-icon">{{ result.icon }}</div>
            <div class="result-content">
              <h3 class="result-title">
                <NuxtLink :to="result.path" class="result-link">
                  {{ result.title }}
                </NuxtLink>
              </h3>
              <p class="result-description">{{ result.description }}</p>
              <div class="result-meta">
                <span class="result-category">{{ result.category }}</span>
                <span class="result-path">{{ result.path }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 熱門搜尋 -->
        <div v-if="!searchQuery" class="popular-searches">
          <h2 class="popular-title">熱門搜尋</h2>
          <div class="popular-tags">
            <button 
              v-for="tag in popularTags" 
              :key="tag"
              @click="searchByTag(tag)"
              class="popular-tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- 搜尋建議 -->
        <div v-if="!searchQuery" class="search-suggestions">
          <h2 class="suggestions-title">搜尋建議</h2>
          <div class="suggestions-grid">
            <div class="suggestion-card" data-aos="fade-up">
              <div class="suggestion-card-icon">🧠</div>
              <h3>大腦科學</h3>
              <p>探索大腦基礎結構與功能</p>
              <NuxtLink to="/#brain-structure" class="suggestion-link">
                了解更多
              </NuxtLink>
            </div>
            <div class="suggestion-card" data-aos="fade-up" data-aos-delay="100">
              <div class="suggestion-card-icon">💭</div>
              <h3>記憶系統</h3>
              <p>了解記憶系統與學習機制</p>
              <NuxtLink to="/#memory-system" class="suggestion-link">
                了解更多
              </NuxtLink>
            </div>
            <div class="suggestion-card" data-aos="fade-up" data-aos-delay="200">
              <div class="suggestion-card-icon">🇹🇭</div>
              <h3>曼谷旅遊</h3>
              <p>泰國曼谷旅遊完整指南</p>
              <NuxtLink to="/travel/bangkok" class="suggestion-link">
                了解更多
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// 響應式狀態
const searchQuery = ref('')
const searchResults = ref([])

// 搜尋資料庫
const searchDatabase = [
  {
    id: 'home',
    title: '首頁',
    description: '歡迎來到知識系統，提供記憶系統與學習機制的完整知識體系',
    path: '/library',
    icon: '🏠',
    category: '主要頁面'
  },
  {
    id: 'knowledge',
    title: '知識庫',
    description: '記憶系統與學習機制的完整知識體系，包含大腦科學、認知研究等內容',
    path: '/',
    icon: '📚',
    category: '教育知識'
  },
  {
    id: 'bangkok',
    title: '曼谷旅遊規劃',
    description: '泰國曼谷旅遊完整指南，包含景點介紹、美食文化、預算規劃等',
    path: '/travel/bangkok',
    icon: '🇹🇭',
    category: '旅遊指南'
  },
  {
    id: 'overview',
    title: '網站地圖',
    description: '探索我們完整的知識系統結構，了解網站內容組織',
    path: '/overview',
    icon: '🗺️',
    category: '網站資訊'
  },
  {
    id: 'brain-structure',
    title: '大腦基礎結構',
    description: '大腦基礎結構與功能解析，了解大腦運作原理',
    path: '/#brain-structure',
    icon: '🧠',
    category: '大腦科學'
  },
  {
    id: 'memory-system',
    title: '記憶系統',
    description: '記憶系統與學習機制詳解，提升學習效率',
    path: '/#memory-system',
    icon: '💭',
    category: '學習機制'
  },
  {
    id: 'preparation',
    title: '前置準備',
    description: '曼谷旅遊前置準備事項，包含簽證、機票、住宿等',
    path: '/travel/bangkok#preparation',
    icon: '📋',
    category: '旅遊準備'
  },
  {
    id: 'attractions',
    title: '必訪景點',
    description: '曼谷必訪景點推薦，包含大皇宮、臥佛寺等',
    path: '/travel/bangkok#attractions',
    icon: '🗺️',
    category: '旅遊景點'
  },
  {
    id: 'food-culture',
    title: '美食文化',
    description: '泰國美食與文化特色，包含經典泰式料理',
    path: '/travel/bangkok#food',
    icon: '🍜',
    category: '美食文化'
  }
]

// 熱門搜尋標籤
const popularTags = [
  '大腦科學',
  '記憶系統',
  '曼谷旅遊',
  '泰式美食',
  '學習方法',
  '認知研究'
]

// 執行搜尋
const performSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase()
  searchResults.value = searchDatabase.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  )
}

// 按標籤搜尋
const searchByTag = (tag) => {
  searchQuery.value = tag
  performSearch()
}

// 頁面載入時處理 URL 參數
onMounted(() => {
  const query = route.query.q
  if (query) {
    searchQuery.value = query
    performSearch()
  }
  
  // 初始化 AOS 動畫
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }
})

// 監聽路由變化
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    searchQuery.value = newQuery
    performSearch()
  }
})
</script>

<style scoped>
.search-page {
  padding-top: 70px;
  min-height: 100vh;
}

/* 搜尋標題 */
.search-header {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.search-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.search-icon {
  font-size: 3rem;
}

.search-form {
  max-width: 600px;
  margin: 0 auto;
}

.search-input-container {
  display: flex;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background: transparent;
}

.search-btn {
  background: var(--color-primary);
  border: none;
  padding: 1rem 1.5rem;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

.search-btn-icon {
  font-size: 1.2rem;
}

/* 搜尋結果 */
.search-results {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.search-stats {
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--color-background-light);
  border-radius: 10px;
}

.stats-text {
  margin: 0;
  color: var(--color-text);
  font-size: 1.1rem;
}

/* 無結果提示 */
.no-results {
  text-align: center;
  padding: 3rem 0;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results h2 {
  color: var(--color-text);
  margin-bottom: 1rem;
}

.no-results p {
  color: var(--color-text-light);
  margin-bottom: 2rem;
}

.suggestions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.suggestion-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.suggestion-link:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

.suggestion-icon {
  font-size: 1.2rem;
}

/* 搜尋結果列表 */
.results-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.result-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.result-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.result-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.result-content {
  flex-grow: 1;
}

.result-title {
  margin-bottom: 0.5rem;
}

.result-link {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.result-link:hover {
  color: var(--color-primary-dark);
}

.result-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.result-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
}

.result-category {
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.result-path {
  color: var(--color-text-light);
}

/* 熱門搜尋 */
.popular-searches {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--color-background-light);
  border-radius: 15px;
}

.popular-title {
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.popular-tags {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.popular-tag {
  padding: 0.5rem 1rem;
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.popular-tag:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

/* 搜尋建議 */
.search-suggestions {
  margin-top: 3rem;
}

.suggestions-title {
  color: var(--color-text);
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.suggestion-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.suggestion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.suggestion-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.suggestion-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.suggestion-card p {
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.suggestion-card .suggestion-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.suggestion-card .suggestion-link:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .search-title {
    font-size: 2rem;
  }
  
  .search-icon {
    font-size: 2.5rem;
  }
  
  .result-item {
    flex-direction: column;
    text-align: center;
  }
  
  .result-meta {
    justify-content: center;
  }
  
  .suggestions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .search-header {
    padding: 2rem 0;
  }
  
  .search-title {
    font-size: 1.5rem;
  }
  
  .search-icon {
    font-size: 2rem;
  }
  
  .search-input {
    font-size: 1rem;
  }
  
  .popular-tags {
    justify-content: center;
  }
}
</style> 