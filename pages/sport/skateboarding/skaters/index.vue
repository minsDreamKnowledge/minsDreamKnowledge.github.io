<template>
  <main>
    <!-- 英雄區域 -->
    <header class="hero skaters-hero" role="banner">
      <div class="hero-content">
        <h1 class="hero-title">🛹 滑板手社群</h1>
        <p class="hero-subtitle">探索世界各地的滑板手，了解他們的故事、技巧與風格</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">{{ totalSkaters }}</span>
            <span class="stat-label">滑板手</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalCountries }}</span>
            <span class="stat-label">國家</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalStyles }}</span>
            <span class="stat-label">風格</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 搜尋和篩選區域 -->
    <section class="search-section">
      <div class="container">
        <div class="search-container">
          <div class="search-box">
            <i class="fas fa-search search-icon"></i>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜尋滑板手姓名、國家或風格..."
              class="search-input"
            />
          </div>
          <div class="filter-controls">
            <select v-model="selectedCountry" class="filter-select">
              <option value="">所有國家</option>
              <option v-for="country in countries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
            <select v-model="selectedStyle" class="filter-select">
              <option value="">所有風格</option>
              <option v-for="style in styles" :key="style" :value="style">
                {{ style }}
              </option>
            </select>
            <select v-model="selectedLevel" class="filter-select">
              <option value="">所有等級</option>
              <option v-for="level in levels" :key="level" :value="level">
                {{ level }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- 檢視模式切換 -->
    <section class="view-controls">
      <div class="container">
        <div class="view-toggle">
          <button
            :class="['view-btn', { active: viewMode === 'grid' }]"
            @click="viewMode = 'grid'"
          >
            <i class="fas fa-th"></i>
            網格檢視
          </button>
          <button
            :class="['view-btn', { active: viewMode === 'list' }]"
            @click="viewMode = 'list'"
          >
            <i class="fas fa-list"></i>
            列表檢視
          </button>
        </div>
        <div class="results-info">
          顯示 {{ paginatedSkaters.length }} 位滑板手，共 {{ filteredSkaters.length }} 位
        </div>
      </div>
    </section>

    <!-- 滑板手列表 -->
    <section class="skaters-section">
      <div class="container">
        <!-- 網格檢視 -->
        <div v-if="viewMode === 'grid'" class="skaters-grid">
          <div
            v-for="skater in paginatedSkaters"
            :key="skater.id"
            class="skater-card"
            @click="navigateToSkater(skater.id)"
          >
            <div class="skater-image">
              <img :src="skater.image" :alt="skater.name" />
              <div class="skater-level">{{ skater.level }}</div>
            </div>
            <div class="skater-info">
              <h3 class="skater-name">{{ skater.name }}</h3>
              <p class="skater-country">{{ skater.country }}</p>
              <p class="skater-style">{{ skater.style }}</p>
              <div class="skater-stats">
                <div class="stat">
                  <i class="fas fa-star"></i>
                  <span>{{ skater.rating }}</span>
                </div>
                <div class="stat">
                  <i class="fas fa-trophy"></i>
                  <span>{{ skater.achievements }}</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>{{ formatNumber(skater.followers) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 列表檢視 -->
        <div v-else class="skaters-list">
          <div
            v-for="skater in paginatedSkaters"
            :key="skater.id"
            class="skater-item"
            @click="navigateToSkater(skater.id)"
          >
            <div class="skater-avatar">
              <img :src="skater.image" :alt="skater.name" />
              <div class="level-badge">{{ skater.level }}</div>
            </div>
            <div class="skater-details">
              <h3 class="skater-name">{{ skater.name }}</h3>
              <p class="skater-description">{{ skater.description }}</p>
              <div class="skater-meta">
                <span class="meta-item">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ skater.country }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-palette"></i>
                  {{ skater.style }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-star"></i>
                  {{ skater.rating }}
                </span>
              </div>
            </div>
            <div class="skater-actions">
              <button class="btn btn-outline" @click.stop="navigateToSkater(skater.id)">
                查看詳情
              </button>
            </div>
          </div>
        </div>

        <!-- 分頁控制 -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            :disabled="currentPage === 1"
            @click="currentPage = currentPage - 1"
            class="page-btn"
          >
            <i class="fas fa-chevron-left"></i>
            上一頁
          </button>
          
          <div class="page-numbers">
            <button
              v-for="page in visiblePages"
              :key="page"
              :class="['page-number', { active: page === currentPage }]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
          
          <button
            :disabled="currentPage === totalPages"
            @click="currentPage = currentPage + 1"
            class="page-btn"
          >
            下一頁
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- 特色滑板手 -->
    <section class="featured-section bg-light">
      <div class="container">
        <h2 class="section-title">🌟 特色滑板手</h2>
        <div class="featured-grid">
          <div
            v-for="skater in featuredSkaters"
            :key="skater.id"
            class="featured-card"
            @click="navigateToSkater(skater.id)"
          >
            <div class="featured-image">
              <img :src="skater.image" :alt="skater.name" />
              <div class="featured-badge">特色</div>
            </div>
            <div class="featured-content">
              <h3 class="featured-name">{{ skater.name }}</h3>
              <p class="featured-title">{{ skater.title || skater.style }}</p>
              <p class="featured-description">{{ skater.description }}</p>
              <div class="featured-stats">
                <span class="stat">
                  <i class="fas fa-star"></i>
                  {{ skater.rating }}
                </span>
                <span class="stat">
                  <i class="fas fa-trophy"></i>
                  {{ skater.achievements }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計資訊 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-globe"></i>
            </div>
            <div class="stat-content">
              <h3 class="stat-title">全球覆蓋</h3>
              <p class="stat-description">來自 {{ totalCountries }} 個國家的滑板手</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-palette"></i>
            </div>
            <div class="stat-content">
              <h3 class="stat-title">多元風格</h3>
              <p class="stat-description">{{ totalStyles }} 種不同的滑板風格</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="stat-content">
              <h3 class="stat-title">社群規模</h3>
              <p class="stat-description">超過 {{ formatNumber(totalFollowers) }} 位追蹤者</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// 滑板手資料
const skaters = ref([
  {
    id: 'tony-hawk',
    name: 'Tony Hawk',
    country: '美國',
    style: '垂直滑板',
    level: '專業級',
    rating: 5.0,
    achievements: 15,
    followers: 2500000,
    description: '垂直滑板傳奇人物，首個完成900度轉體的滑板手，被譽為"滑板之王"',
    image: '/images/skaters/tony-hawk.jpg',
    title: '滑板傳奇人物'
  },
  {
    id: 'rodney-mullen',
    name: 'Rodney Mullen',
    country: '美國',
    style: '自由式滑板',
    level: '專業級',
    rating: 5.0,
    achievements: 12,
    followers: 1800000,
    description: '自由式滑板之父，發明了許多基礎技巧，被譽為"滑板技巧大師"',
    image: '/images/skaters/rodney-mullen.jpg',
    title: '自由式滑板之父'
  },
  {
    id: 'bam-margera',
    name: 'Bam Margera',
    country: '美國',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.8,
    achievements: 8,
    followers: 1500000,
    description: '街頭滑板代表人物，以大膽的跳躍和獨特的風格聞名',
    image: '/images/skaters/bam-margera.jpg',
    title: '街頭滑板代表'
  },
  {
    id: 'paul-rodriguez',
    name: 'Paul Rodriguez',
    country: '美國',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.9,
    achievements: 10,
    followers: 1200000,
    description: '街頭滑板技巧大師，以精準的技術和流暢的動作著稱',
    image: '/images/skaters/paul-rodriguez.jpg',
    title: '街頭滑板技巧大師'
  },
  {
    id: 'nyjah-huston',
    name: 'Nyjah Huston',
    country: '美國',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.9,
    achievements: 13,
    followers: 2000000,
    description: '現代街頭滑板冠軍，多次獲得世界冠軍，技術全面且穩定',
    image: '/images/skaters/nyjah-huston.jpg',
    title: '現代街頭滑板冠軍'
  },
  {
    id: 'luan-oliveira',
    name: 'Luan Oliveira',
    country: '巴西',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.7,
    achievements: 7,
    followers: 800000,
    description: '巴西滑板新星，以創新的技巧和獨特的風格在國際賽事中嶄露頭角',
    image: '/images/skaters/luan-oliveira.jpg',
    title: '巴西滑板新星'
  },
  {
    id: 'yuto-horigome',
    name: 'Yuto Horigome',
    country: '日本',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.8,
    achievements: 6,
    followers: 600000,
    description: '日本滑板選手，在國際賽事中表現優異，代表亞洲滑板的新力量',
    image: '/images/skaters/yuto-horigome.jpg',
    title: '日本滑板選手'
  },
  {
    id: 'shane-oneill',
    name: 'Shane O\'Neill',
    country: '澳洲',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.6,
    achievements: 5,
    followers: 500000,
    description: '澳洲滑板選手，以流暢的風格和精準的技術在國際賽事中表現出色',
    image: '/images/skaters/shane-oneill.jpg',
    title: '澳洲滑板選手'
  },
  {
    id: 'tiago-lemos',
    name: 'Tiago Lemos',
    country: '巴西',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.7,
    achievements: 4,
    followers: 400000,
    description: '巴西滑板選手，以創新的技巧和大膽的動作在滑板界引起關注',
    image: '/images/skaters/tiago-lemos.jpg',
    title: '巴西滑板選手'
  },
  {
    id: 'kelvin-hoefler',
    name: 'Kelvin Hoefler',
    country: '巴西',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.5,
    achievements: 3,
    followers: 300000,
    description: '巴西滑板選手，在國際賽事中表現穩定，代表南美洲滑板水準',
    image: '/images/skaters/kelvin-hoefler.jpg',
    title: '巴西滑板選手'
  },
  {
    id: 'gustavo-ribeiro',
    name: 'Gustavo Ribeiro',
    country: '葡萄牙',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.4,
    achievements: 2,
    followers: 250000,
    description: '葡萄牙滑板選手，在歐洲賽事中表現出色，代表歐洲滑板的新生代',
    image: '/images/skaters/gustavo-ribeiro.jpg',
    title: '葡萄牙滑板選手'
  },
  {
    id: 'jake-illyes',
    name: 'Jake Illyes',
    country: '匈牙利',
    style: '街頭滑板',
    level: '專業級',
    rating: 4.3,
    achievements: 1,
    followers: 200000,
    description: '匈牙利滑板選手，在歐洲賽事中嶄露頭角，代表東歐滑板的發展',
    image: '/images/skaters/jake-illyes.jpg',
    title: '匈牙利滑板選手'
  }
])

// 響應式狀態
const searchQuery = ref('')
const selectedCountry = ref('')
const selectedStyle = ref('')
const selectedLevel = ref('')
const viewMode = ref('grid')
const currentPage = ref(1)
const itemsPerPage = 8

// 計算屬性
const filteredSkaters = computed(() => {
  return skaters.value.filter(skater => {
    const matchesSearch = skater.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         skater.country.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         skater.style.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesCountry = !selectedCountry.value || skater.country === selectedCountry.value
    const matchesStyle = !selectedStyle.value || skater.style === selectedStyle.value
    const matchesLevel = !selectedLevel.value || skater.level === selectedLevel.value
    
    return matchesSearch && matchesCountry && matchesStyle && matchesLevel
  })
})

const paginatedSkaters = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredSkaters.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredSkaters.value.length / itemsPerPage)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const countries = computed(() => {
  return [...new Set(skaters.value.map(s => s.country))]
})

const styles = computed(() => {
  return [...new Set(skaters.value.map(s => s.style))]
})

const levels = computed(() => {
  return [...new Set(skaters.value.map(s => s.level))]
})

const totalSkaters = computed(() => skaters.value.length)
const totalCountries = computed(() => countries.value.length)
const totalStyles = computed(() => styles.value.length)
const totalFollowers = computed(() => {
  return skaters.value.reduce((sum, skater) => sum + skater.followers, 0)
})

const featuredSkaters = computed(() => {
  return skaters.value
    .filter(skater => skater.rating >= 4.8)
    .slice(0, 3)
})

// 方法
const navigateToSkater = (skaterId) => {
  navigateTo(`/sport/skateboarding/skaters/${skaterId}`)
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// 監聽篩選變化，重置分頁
watch([searchQuery, selectedCountry, selectedStyle, selectedLevel], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/* 通用樣式 */
.section {
  padding: 4rem 0;
}

.bg-light {
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

/* 英雄區域 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* 搜尋區域 */
.search-section {
  background: white;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
}

.search-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 300px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e9ecef;
  border-radius: 50px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
}

.filter-controls {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  background: white;
  font-size: 0.9rem;
  min-width: 120px;
}

/* 檢視控制 */
.view-controls {
  background: #f8f9fa;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.view-controls .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.view-toggle {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e9ecef;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.view-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.view-btn:hover {
  border-color: #667eea;
}

.results-info {
  color: #6c757d;
  font-size: 0.9rem;
}

/* 滑板手網格 */
.skaters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.skater-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.skater-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.skater-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.skater-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skater-level {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.skater-info {
  padding: 1.5rem;
}

.skater-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.skater-country,
.skater-style {
  color: #6c757d;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.skater-stats {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6c757d;
  font-size: 0.8rem;
}

.stat i {
  color: #667eea;
}

/* 滑板手列表 */
.skaters-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.skater-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.skater-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.skater-avatar {
  position: relative;
  flex-shrink: 0;
}

.skater-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.level-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: #667eea;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}

.skater-details {
  flex: 1;
}

.skater-name {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.skater-description {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.skater-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.meta-item i {
  color: #667eea;
}

.skater-actions {
  flex-shrink: 0;
}

/* 分頁 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.page-btn {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-btn:hover:not(:disabled) {
  border-color: #667eea;
  color: #667eea;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  width: 40px;
  height: 40px;
  border: 2px solid #e9ecef;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-number.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.page-number:hover:not(.active) {
  border-color: #667eea;
}

/* 特色滑板手 */
.featured-section {
  padding: 5rem 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
}

.featured-card:hover {
  transform: translateY(-10px);
}

.featured-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ffd700;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.featured-content {
  padding: 2rem;
}

.featured-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.featured-title {
  color: #667eea;
  margin-bottom: 1rem;
  font-weight: 600;
}

.featured-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.featured-stats {
  display: flex;
  gap: 1rem;
}

.featured-stats .stat {
  font-size: 0.9rem;
}

/* 統計資訊 */
.stats-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.stat-icon {
  font-size: 3rem;
  opacity: 0.8;
}

.stat-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.stat-content p {
  opacity: 0.9;
  line-height: 1.5;
}

/* 按鈕樣式 */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .search-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    min-width: auto;
  }
  
  .view-controls .container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .skaters-grid {
    grid-template-columns: 1fr;
  }
  
  .skater-item {
    flex-direction: column;
    text-align: center;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 4rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-controls {
    flex-direction: column;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
