<template>
  <main>
    <!-- 英雄區域 -->
    <header class="hero" role="banner">
      <div class="hero-visual">
        <!-- 運動動畫區塊 -->
        <div class="sports-animation">
          <div class="sport-icon sport-basketball">
            <i class="fas fa-basketball-ball"></i>
          </div>
          <div class="sport-icon sport-football">
            <i class="fas fa-futbol"></i>
          </div>
          <div class="sport-icon sport-swimming">
            <i class="fas fa-swimming-pool"></i>
          </div>
          <div class="sport-icon sport-running">
            <i class="fas fa-running"></i>
          </div>
          <div class="sport-icon sport-tennis">
            <i class="fas fa-table-tennis"></i>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">🏃‍♀️ 運動教學課程</h1>
        <p class="hero-subtitle">28種熱門運動完整教學，從入門到專業的系統性學習</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('sports-grid')">
            <i class="fas fa-th-large"></i>
            探索運動
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('categories')">
            <i class="fas fa-tags"></i>
            分類瀏覽
          </button>
        </div>
      </div>
    </header>

    <!-- 搜尋與篩選區塊 -->
    <section class="section bg-light">
      <div class="container">
        <div class="search-filter-container">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="搜尋運動項目..."
              @input="filterSports"
            />
          </div>
          <div class="filter-buttons">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="['filter-btn', { active: activeCategory === category.id }]"
              @click="filterByCategory(category.id)"
            >
              <i :class="category.icon"></i>
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 運動項目網格 -->
    <section id="sports-grid" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-dumbbell"></i>
          運動項目總覽
        </h2>
        <div class="sports-grid">
          <div 
            v-for="sport in filteredSports" 
            :key="sport.id"
            class="sport-card"
            @click="navigateToSport(sport.id)"
          >
            <div class="sport-card-header">
              <div class="sport-icon">
                <i :class="sport.icon"></i>
              </div>
              <div class="sport-number">{{ sport.number }}</div>
            </div>
            <div class="sport-card-content">
              <h3 class="sport-title">{{ sport.name }}</h3>
              <p class="sport-description">{{ sport.description }}</p>
              <p v-if="sport.intro" class="sport-intro">{{ sport.intro }}</p>
              <div class="sport-category">
                <span class="category-tag">{{ sport.category }}</span>
              </div>
            </div>
            <div class="sport-card-footer">
              <div class="sport-features">
                <span class="feature">
                  <i class="fas fa-graduation-cap"></i>
                  三階段課程
                </span>
                <span class="feature">
                  <i class="fas fa-clock"></i>
                  12堂課程
                </span>
              </div>
              <button class="btn btn-outline">
                <i class="fas fa-arrow-right"></i>
                開始學習
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 分類展示區塊 -->
    <section id="categories" class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-tags"></i>
          運動分類
        </h2>
        <div class="category-grid">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="category-card"
            @click="filterByCategory(category.id)"
          >
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <div class="category-count">{{ category.count }} 種運動</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 學習特色區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-star"></i>
          學習特色
        </h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-layer-group"></i>
            </div>
            <h3>系統性學習</h3>
            <p>三階段遞進式課程設計，從基礎到高級的完整學習路徑</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h3>專業指導</h3>
            <p>詳細的技巧分解與說明，實用的練習項目與建議</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>進步追蹤</h3>
            <p>完整的評估系統，定期測試與進步追蹤</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>社群支援</h3>
            <p>與其他學員交流分享，專業教練提供技術指導</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 響應式數據
const searchQuery = ref('')
const activeCategory = ref('all')
const filteredSports = ref([])

// 運動項目數據
const sports = ref([
  {
    id: 'basketball',
    number: '01',
    name: '🏀 籃球',
    description: '學習投籃、運球、傳球等技巧',
    icon: 'fas fa-basketball-ball',
    category: '球類運動'
  },
  {
    id: 'football',
    number: '02',
    name: '⚽ 足球',
    description: '掌握踢球、控球、射門等技能',
    icon: 'fas fa-futbol',
    category: '球類運動'
  },
  {
    id: 'table-tennis',
    number: '03',
    name: '🏓 桌球',
    description: '學習發球、接球、抽球等技術',
    icon: 'fas fa-table-tennis',
    category: '球類運動'
  },
  {
    id: 'badminton',
    number: '04',
    name: '🏸 羽球',
    description: '掌握揮拍、步法、戰術等',
    icon: 'fas fa-table-tennis',
    category: '球類運動'
  },
  {
    id: 'running',
    number: '05',
    name: '🏃 跑步',
    description: '提升跑步技巧與耐力',
    icon: 'fas fa-running',
    category: '田徑運動'
  },
  {
    id: 'swimming',
    number: '06',
    name: '🏊 游泳',
    description: '掌握各種泳姿與技巧',
    icon: 'fas fa-swimming-pool',
    category: '水上運動'
  },
  {
    id: 'tennis',
    number: '07',
    name: '🎾 網球',
    description: '學習發球、擊球、戰術等',
    icon: 'fas fa-table-tennis',
    category: '球類運動'
  },
  {
    id: 'volleyball',
    number: '08',
    name: '🏓 排球',
    description: '掌握發球、扣球、攔網等',
    icon: 'fas fa-volleyball-ball',
    category: '球類運動'
  },
  {
    id: 'fitness',
    number: '09',
    name: '🏋️ 健身',
    description: '學習各種健身動作與計劃',
    icon: 'fas fa-dumbbell',
    category: '力量運動'
  },
  {
    id: 'boxing',
    number: '10',
    name: '🥊 拳擊',
    description: '掌握拳擊技巧與戰術',
    icon: 'fas fa-fist-raised',
    category: '格鬥運動'
  },
  {
    id: 'archery',
    number: '11',
    name: '🎯 射箭',
    description: '學習瞄準、拉弓、射箭等',
    icon: 'fas fa-bullseye',
    category: '精準運動'
  },
  {
    id: 'skiing',
    number: '12',
    name: '🏂 滑雪',
    description: '掌握滑雪技巧與平衡',
    icon: 'fas fa-skiing',
    category: '極限運動'
  },
  {
    id: 'golf',
    number: '13',
    name: '⛳ 高爾夫',
    description: '學習揮桿、擊球、推桿等',
    icon: 'fas fa-golf-ball',
    category: '球類運動'
  },
  {
    id: 'diving',
    number: '14',
    name: '🏊‍♀️ 跳水',
    description: '學習入水、翻轉、空中技巧',
    icon: 'fas fa-swimming-pool',
    category: '水上運動'
  },
  {
    id: 'athletics',
    number: '15',
    name: '🏃‍♀️ 田徑',
    description: '學習跳躍、投擲、跑步等',
    icon: 'fas fa-running',
    category: '田徑運動'
  },
  {
    id: 'weightlifting',
    number: '16',
    name: '🏋️‍♂️ 舉重',
    description: '掌握抓舉、挺舉、深蹲等',
    icon: 'fas fa-dumbbell',
    category: '力量運動'
  },
  {
    id: 'water-polo',
    number: '17',
    name: '🏊‍♂️ 水球',
    description: '掌握水中移動、控球、傳球等',
    icon: 'fas fa-swimming-pool',
    category: '水上運動'
  },
  {
    id: 'hockey',
    number: '18',
    name: '🏓 曲棍球',
    description: '掌握控球、傳球、射門等',
    icon: 'fas fa-hockey-puck',
    category: '球類運動'
  },
  {
    id: 'taekwondo',
    number: '19',
    name: '🥋 跆拳道',
    description: '學習拳法、踢法、防禦等',
    icon: 'fas fa-fist-raised',
    category: '格鬥運動'
  },
  {
    id: 'synchronized-swimming',
    number: '20',
    name: '🏊‍♀️ 花式游泳',
    description: '學習水中協調、配合、音樂配合等',
    icon: 'fas fa-swimming-pool',
    category: '水上運動'
  },
  {
    id: 'squash',
    number: '21',
    name: '🏓 壁球',
    description: '學習擊球、移動、戰術等',
    icon: 'fas fa-table-tennis',
    category: '球類運動'
  },
  {
    id: 'handball',
    number: '22',
    name: '🏓 手球',
    description: '掌握控球、傳球、射門等',
    icon: 'fas fa-hand-paper',
    category: '球類運動'
  },
  {
    id: 'karate',
    number: '23',
    name: '🥊 空手道',
    description: '掌握拳法、踢法、防禦等',
    icon: 'fas fa-fist-raised',
    category: '格鬥運動'
  },
  {
    id: 'rhythmic-gymnastics',
    number: '24',
    name: '🏊‍♀️ 藝術體操',
    description: '學習柔韌性、平衡、跳躍等',
    icon: 'fas fa-balance-scale',
    category: '藝術運動'
  },
  {
    id: 'surfing',
    number: '25',
    name: '🏄‍♂️ 衝浪',
    description: '掌握衝浪技巧、讀浪、平衡等',
    icon: 'fas fa-water',
    category: '水上運動'
  },
  {
    id: 'skateboarding',
    number: '26',
    name: '🛹 滑板',
    description: '學習滑板技巧、花式動作等',
    icon: 'fas fa-skating',
    category: '極限運動',
    intro: '滑板是一項充滿挑戰與創意的極限運動，結合了技巧、平衡與藝術表現'
  },
  {
    id: 'bmx',
    number: '27',
    name: '🚴‍♂️ 極限單車',
    description: '掌握極限單車技巧、跳躍等',
    icon: 'fas fa-bicycle',
    category: '極限運動'
  },
  {
    id: 'climbing',
    number: '28',
    name: '🧗‍♂️ 攀岩',
    description: '學習攀岩技巧、路線規劃等',
    icon: 'fas fa-mountain',
    category: '極限運動'
  }
])

// 分類數據
const categories = ref([
  {
    id: 'all',
    name: '全部運動',
    icon: 'fas fa-th-large',
    description: '所有28種運動項目',
    count: 28
  },
  {
    id: 'ball',
    name: '球類運動',
    icon: 'fas fa-basketball-ball',
    description: '籃球、足球、網球等球類運動',
    count: 10
  },
  {
    id: 'water',
    name: '水上運動',
    icon: 'fas fa-swimming-pool',
    description: '游泳、跳水、水球等水上運動',
    count: 5
  },
  {
    id: 'track',
    name: '田徑運動',
    icon: 'fas fa-running',
    description: '跑步、田徑等田徑運動',
    count: 2
  },
  {
    id: 'combat',
    name: '格鬥運動',
    icon: 'fas fa-fist-raised',
    description: '拳擊、跆拳道、空手道等格鬥運動',
    count: 3
  },
  {
    id: 'precision',
    name: '精準運動',
    icon: 'fas fa-bullseye',
    description: '射箭等精準運動',
    count: 1
  },
  {
    id: 'extreme',
    name: '極限運動',
    icon: 'fas fa-mountain',
    description: '滑雪、滑板、攀岩等極限運動',
    count: 4
  },
  {
    id: 'strength',
    name: '力量運動',
    icon: 'fas fa-dumbbell',
    description: '健身、舉重等力量運動',
    count: 2
  },
  {
    id: 'artistic',
    name: '藝術運動',
    icon: 'fas fa-balance-scale',
    description: '藝術體操等藝術運動',
    count: 1
  }
])

// 計算屬性
const filteredSportsComputed = computed(() => {
  let filtered = sports.value

  // 按分類篩選
  if (activeCategory.value !== 'all') {
    const categoryMap = {
      'ball': '球類運動',
      'water': '水上運動',
      'track': '田徑運動',
      'combat': '格鬥運動',
      'precision': '精準運動',
      'extreme': '極限運動',
      'strength': '力量運動',
      'artistic': '藝術運動'
    }
    const categoryName = categoryMap[activeCategory.value]
    filtered = filtered.filter(sport => sport.category === categoryName)
  }

  // 按搜尋關鍵字篩選
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(sport => 
      sport.name.toLowerCase().includes(query) ||
      sport.description.toLowerCase().includes(query) ||
      sport.category.toLowerCase().includes(query)
    )
  }

  return filtered
})

// 方法
const filterSports = () => {
  filteredSports.value = filteredSportsComputed.value
}

const filterByCategory = (categoryId) => {
  activeCategory.value = categoryId
  filterSports()
}

const navigateToSport = (sportId) => {
  // 導航到具體的運動課程頁面
  console.log(`導航到運動: ${sportId}`)
  // 這裡可以添加實際的導航邏輯
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 生命週期
onMounted(() => {
  filteredSports.value = sports.value
})
</script>

<style scoped>
/* 英雄區域 */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.hero-visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.sports-animation {
  position: relative;
  width: 100%;
  height: 100%;
}

.sport-icon {
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.3);
  animation: float 6s ease-in-out infinite;
}

.sport-basketball {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.sport-football {
  top: 30%;
  right: 15%;
  animation-delay: 1s;
}

.sport-swimming {
  bottom: 25%;
  left: 20%;
  animation-delay: 2s;
}

.sport-running {
  bottom: 35%;
  right: 25%;
  animation-delay: 3s;
}

.sport-tennis {
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* 搜尋與篩選 */
.search-filter-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-box input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-box input:focus {
  outline: none;
  border-color: #667eea;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: #667eea;
  background: #667eea;
  color: white;
}

/* 運動網格 */
.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.sport-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.sport-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.sport-card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sport-icon {
  font-size: 2rem;
}

.sport-number {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.8;
}

.sport-card-content {
  padding: 1.5rem;
}

.sport-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.sport-description, .sport-intro {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.sport-category {
  margin-bottom: 1rem;
}

.category-tag {
  background: #f0f0f0;
  color: #666;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.sport-card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sport-features {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.btn-outline {
  padding: 0.5rem 1rem;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* 分類展示 */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.category-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.category-icon {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.category-card p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.category-count {
  background: #f0f0f0;
  color: #666;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* 特色展示 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
}

/* 通用樣式 */
.section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.bg-light {
  background: #f8f9fa;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .sports-grid {
    grid-template-columns: 1fr;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .sport-card-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .sport-features {
    justify-content: center;
  }
}
</style> 