<template>
  <nav class="app-navigation" :class="{ 'nav-scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <div class="nav-logo">
          <NuxtLink to="/" class="logo-link">
            <span class="logo-icon">🧠</span>
            <span class="logo-text">知識系統</span>
          </NuxtLink>
        </div>

        <!-- 主要導航 -->
        <div class="nav-menu" :class="{ 'nav-open': isMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink to="/library" class="nav-link" @click="closeMenu">
                <span class="nav-icon">🏠</span>
                首頁
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMenu">
                <span class="nav-icon">📚</span>
                記憶系統
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/psychology" class="nav-link" @click="closeMenu">
                <span class="nav-icon">🧠</span>
                心理學
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/travel" class="nav-link" @click="closeMenu">
                <span class="nav-icon">🌍</span>
                旅遊指南
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/search" class="nav-link" @click="closeMenu">
                <span class="nav-icon">🔍</span>
                搜尋
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 搜尋功能 -->
        <div class="nav-search">
          <div class="search-container">
            <input 
              v-model="searchQuery" 
              @input="handleSearch"
              @focus="showSearchResults = true"
              @blur="hideSearchResults"
              type="text" 
              placeholder="搜尋內容..." 
              class="search-input"
            />
            <button class="search-btn">
              <span class="search-icon">🔍</span>
            </button>
          </div>
          
          <!-- 搜尋結果 -->
          <div v-if="showSearchResults && searchResults.length > 0" class="search-results">
            <div 
              v-for="result in searchResults" 
              :key="result.id"
              class="search-result-item"
              @click="navigateToResult(result)"
            >
              <div class="result-icon">{{ result.icon }}</div>
              <div class="result-content">
                <div class="result-title">{{ result.title }}</div>
                <div class="result-description">{{ result.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 移動端選單按鈕 -->
        <button class="mobile-menu-btn" @click="toggleMenu">
          <span class="menu-icon">☰</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// 響應式狀態
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const searchQuery = ref('')
const showSearchResults = ref(false)
const searchResults = ref([])

// 搜尋資料
const searchData = [
  {
    id: 'home',
    title: '首頁',
    description: '歡迎來到知識系統',
    path: '/library',
    icon: '🏠'
  },
  {
    id: 'knowledge',
    title: '知識庫',
    description: '記憶系統與學習機制',
    path: '/',
    icon: '📚'
  },
  {
    id: 'bangkok',
    title: '曼谷旅遊規劃',
    description: '泰國曼谷旅遊完整指南',
    path: '/travel/bangkok',
    icon: '🇹🇭'
  },
  {
    id: 'brain-structure',
    title: '大腦基礎結構',
    description: '大腦基礎結構與功能',
    path: '/#brain-structure',
    icon: '🧠'
  },
  {
    id: 'memory-system',
    title: '記憶系統',
    description: '記憶系統與學習機制',
    path: '/#memory-system',
    icon: '💭'
  },
  {
    id: 'preparation',
    title: '前置準備',
    description: '曼谷旅遊前置準備事項',
    path: '/travel/bangkok#preparation',
    icon: '📋'
  },
  {
    id: 'attractions',
    title: '必訪景點',
    description: '曼谷必訪景點推薦',
    path: '/travel/bangkok#attractions',
    icon: '🗺️'
  },
  {
    id: 'food-culture',
    title: '美食文化',
    description: '泰國美食與文化特色',
    path: '/travel/bangkok#food',
    icon: '🍜'
  }
]

// 監聽滾動事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 處理滾動
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 切換選單
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 關閉選單
const closeMenu = () => {
  isMenuOpen.value = false
}

// 處理搜尋
const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase()
  searchResults.value = searchData.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  ).slice(0, 5)
}

// 隱藏搜尋結果
const hideSearchResults = () => {
  setTimeout(() => {
    showSearchResults.value = false
  }, 200)
}

// 導航到搜尋結果
const navigateToResult = (result) => {
  router.push(result.path)
  searchQuery.value = ''
  searchResults.value = []
  showSearchResults.value = false
  closeMenu()
}
</script>

<style scoped>
.app-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* Logo 樣式 */
.nav-logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 700;
  font-size: 1.2rem;
}

.logo-icon {
  font-size: 1.5rem;
}

/* 導航選單 */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.1rem;
}

/* 搜尋功能 */
.nav-search {
  position: relative;
  flex-shrink: 0;
}

.search-container {
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.search-container:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.search-input {
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  width: 250px;
  font-size: 0.9rem;
  background: transparent;
}

.search-btn {
  background: var(--color-primary);
  border: none;
  padding: 0.75rem 1rem;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

.search-icon {
  font-size: 1rem;
}

/* 搜尋結果 */
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1001;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  border-bottom: 1px solid var(--color-border);
}

.search-result-item:last-child {
  border-bottom: none;
}

.search-result-item:hover {
  background: var(--color-background-light);
}

.result-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.result-content {
  flex-grow: 1;
}

.result-title {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.result-description {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

/* 移動端選單按鈕 */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-text);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid var(--color-border);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.nav-open {
    transform: translateY(0);
  }

  .nav-list {
    flex-direction: column;
    gap: 0;
  }

  .nav-item {
    border-bottom: 1px solid var(--color-border);
  }

  .nav-link {
    padding: 1rem;
    border-radius: 0;
    justify-content: flex-start;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    background: var(--color-primary);
    color: white;
    transform: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .search-input {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .nav-content {
    height: 60px;
  }

  .logo-text {
    display: none;
  }

  .search-input {
    width: 150px;
  }

  .nav-menu {
    top: 60px;
  }
}
</style> 