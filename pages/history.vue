<template>
  <!-- 導航欄 -->
  <nav class="navbar" role="navigation" aria-label="主要導航">
    <div class="nav-container">
      <div class="nav-logo">
        <i class="fas fa-landmark" aria-hidden="true"></i>
        <span>1900年代歷史</span>
      </div>
      <ul class="nav-menu" :class="{ active: navActive }" role="menubar">
        <li role="none"><a href="#era-features" role="menuitem" aria-label="時代特色區塊" @click.prevent="scrollToSection('era-features')"><i class="fas fa-globe" aria-hidden="true"></i>時代特色</a></li>
        <li role="none"><a href="#major-events" role="menuitem" aria-label="重大事件區塊" @click.prevent="scrollToSection('major-events')"><i class="fas fa-calendar-alt" aria-hidden="true"></i>重大事件</a></li>
        <li role="none"><a href="#important-figures" role="menuitem" aria-label="重要人物區塊" @click.prevent="scrollToSection('important-figures')"><i class="fas fa-users" aria-hidden="true"></i>重要人物</a></li>
        <li role="none"><a href="#science-tech" role="menuitem" aria-label="科學技術區塊" @click.prevent="scrollToSection('science-tech')"><i class="fas fa-flask" aria-hidden="true"></i>科學技術</a></li>
        <li role="none"><a href="#cultural-phenomena" role="menuitem" aria-label="文化現象區塊" @click.prevent="scrollToSection('cultural-phenomena')"><i class="fas fa-palette" aria-hidden="true"></i>文化現象</a></li>
      </ul>
      <button class="hamburger" :class="{ active: navActive }" aria-label="開啟導航選單" :aria-expanded="navActive ? 'true' : 'false'" aria-controls="nav-menu" @click="toggleNav">
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
      </button>
    </div>
  </nav>

  <!-- 主要內容 -->
  <main role="main">
    <!-- 英雄區域 -->
    <header class="hero" role="banner">
      <div class="hero-visual" aria-hidden="true">
        <div class="timeline-animation">
          <div class="year-marker year-1900">1900</div>
          <div class="year-marker year-1905">1905</div>
          <div class="year-marker year-1909">1909</div>
          <div class="historical-elements">
            <div class="element train"></div>
            <div class="element airplane"></div>
            <div class="element factory"></div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">🏛️ 1900年代</span>
          <span class="title-line">歷史資料</span>
        </h1>
        <p class="hero-subtitle">探索世紀之交的變革時代，見證現代世界的誕生</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('era-features')" aria-label="開始探索時代特色">
            <i class="fas fa-play" aria-hidden="true"></i>
            開始探索
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('major-events')" aria-label="探索重要事件">
            <i class="fas fa-history" aria-hidden="true"></i>
            重要事件
          </button>
        </div>
      </div>
    </header>

    <!-- 時代特色區塊 -->
    <section id="era-features" class="section" aria-labelledby="era-features-title">
      <div class="container">
        <header class="section-header">
          <h2 id="era-features-title" class="section-title">
            <i class="fas fa-globe" aria-hidden="true"></i>
            時代特色
          </h2>
          <p class="section-subtitle">帝國主義高峰與工業革命的完成</p>
        </header>
        
        <div class="features-grid" role="list">
          <!-- 全球格局變化 -->
          <article class="feature-card" data-aos="fade-up" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-crown" aria-hidden="true"></i>
              </div>
              <h3>全球格局變化</h3>
              <span class="card-subtitle">Global Changes</span>
            </header>
            <div class="card-content">
              <ul class="feature-list">
                <li><strong>帝國主義高峰</strong>：歐洲列強瓜分世界</li>
                <li><strong>工業革命完成</strong>：第二次工業革命成熟</li>
                <li><strong>科技革命</strong>：電氣化、內燃機、化學工業</li>
                <li><strong>現代化進程</strong>：城市化、交通運輸革命</li>
              </ul>
            </div>
            <div class="card-image-placeholder">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <span>帝國主義地圖</span>
              </div>
            </div>
          </article>

          <!-- 社會變遷 -->
          <article class="feature-card" data-aos="fade-up" data-aos-delay="100" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-people-arrows" aria-hidden="true"></i>
              </div>
              <h3>社會變遷</h3>
              <span class="card-subtitle">Social Changes</span>
            </header>
            <div class="card-content">
              <ul class="feature-list">
                <li><strong>中產階級興起</strong>：社會結構變化</li>
                <li><strong>婦女運動</strong>：爭取投票權、教育權</li>
                <li><strong>勞工運動</strong>：工會組織、罷工抗爭</li>
                <li><strong>教育普及</strong>：義務教育制度建立</li>
              </ul>
            </div>
            <div class="card-image-placeholder">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <span>社會階層圖</span>
              </div>
            </div>
          </article>

          <!-- 文化現代化 -->
          <article class="feature-card" data-aos="fade-up" data-aos-delay="200" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-palette" aria-hidden="true"></i>
              </div>
              <h3>文化現代化</h3>
              <span class="card-subtitle">Cultural Modernization</span>
            </header>
            <div class="card-content">
              <ul class="feature-list">
                <li><strong>藝術革命</strong>：印象派、立體派興起</li>
                <li><strong>文學變革</strong>：現代主義文學萌芽</li>
                <li><strong>音樂發展</strong>：爵士樂、古典音樂創新</li>
                <li><strong>建築革新</strong>：摩天大樓、新藝術運動</li>
              </ul>
            </div>
            <div class="card-image-placeholder">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <span>文化藝術圖</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 重大事件區塊 -->
    <section id="major-events" class="section bg-light" aria-labelledby="major-events-title">
      <div class="container">
        <header class="section-header">
          <h2 id="major-events-title" class="section-title">
            <i class="fas fa-calendar-alt" aria-hidden="true"></i>
            重大事件
          </h2>
          <p class="section-subtitle">改變世界的關鍵時刻</p>
        </header>

        <div class="timeline-container" role="list">
          <article class="timeline-item" data-aos="fade-right" role="listitem">
            <div class="timeline-year">1900</div>
            <div class="timeline-content">
              <h3>義和團運動與八國聯軍</h3>
              <p>中國近代史上的重要轉折點，西方列強進一步瓜分中國</p>
              <div class="events-list">
                <span class="event-tag">巴黎奧運會</span>
                <span class="event-tag">德國海軍法</span>
                <span class="event-tag">弗洛伊德《夢的解析》</span>
              </div>
              <div class="event-image-placeholder">
                <div class="image-placeholder">
                  <i class="fas fa-image"></i>
                  <span>義和團運動圖</span>
                </div>
              </div>
            </div>
          </article>

          <article class="timeline-item" data-aos="fade-left" role="listitem">
            <div class="timeline-year">1903</div>
            <div class="timeline-content">
              <h3>萊特兄弟首次飛行</h3>
              <p>人類實現動力飛行夢想，航空時代正式開始</p>
              <div class="events-list">
                <span class="event-tag">巴拿馬革命</span>
                <span class="event-tag">日俄戰爭前奏</span>
                <span class="event-tag">居里夫人獲諾貝爾獎</span>
              </div>
              <div class="event-image-placeholder">
                <div class="image-placeholder">
                  <i class="fas fa-image"></i>
                  <span>萊特兄弟飛機圖</span>
                </div>
              </div>
            </div>
          </article>

          <article class="timeline-item" data-aos="fade-right" role="listitem">
            <div class="timeline-year">1905</div>
            <div class="timeline-content">
              <h3>俄國1905年革命</h3>
              <p>沙皇專制受到衝擊，俄國社會政治變革的序曲</p>
              <div class="events-list">
                <span class="event-tag">日俄戰爭結束</span>
                <span class="event-tag">愛因斯坦相對論</span>
                <span class="event-tag">挪威獨立</span>
              </div>
              <div class="event-image-placeholder">
                <div class="image-placeholder">
                  <i class="fas fa-image"></i>
                  <span>1905年革命圖</span>
                </div>
              </div>
            </div>
          </article>

          <article class="timeline-item" data-aos="fade-left" role="listitem">
            <div class="timeline-year">1908</div>
            <div class="timeline-content">
              <h3>奧匈帝國併吞波士尼亞</h3>
              <p>巴爾幹危機，為第一次世界大戰埋下伏筆</p>
              <div class="events-list">
                <span class="event-tag">美國總統大選</span>
                <span class="event-tag">土耳其青年黨革命</span>
                <span class="event-tag">T型車量產</span>
              </div>
              <div class="event-image-placeholder">
                <div class="image-placeholder">
                  <i class="fas fa-image"></i>
                  <span>巴爾幹地圖</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 重要人物區塊 -->
    <section id="important-figures" class="section" aria-labelledby="important-figures-title">
      <div class="container">
        <header class="section-header">
          <h2 id="important-figures-title" class="section-title">
            <i class="fas fa-users" aria-hidden="true"></i>
            重要人物
          </h2>
          <p class="section-subtitle">影響世紀發展的關鍵人物</p>
        </header>

        <div class="figures-categories">
          <div class="category-tabs">
            <button 
              v-for="(category, key) in figureCategories" 
              :key="key"
              class="tab-btn" 
              :class="{ active: activeCategory === key }"
              @click="setActiveCategory(key)"
            >
              {{ category.name }}
            </button>
          </div>

          <div class="figures-grid" role="list">
            <article 
              v-for="figure in currentFigures" 
              :key="figure.id"
              class="figure-card" 
              data-aos="zoom-in" 
              role="listitem"
            >
              <div class="figure-image-placeholder">
                <div class="image-placeholder">
                  <i class="fas fa-user"></i>
                  <span>{{ figure.name }}</span>
                </div>
              </div>
              <div class="figure-info">
                <h3>{{ figure.name }}</h3>
                <p class="figure-role">{{ figure.role }}</p>
                <p class="figure-description">{{ figure.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 科學技術區塊 -->
    <section id="science-tech" class="section bg-light" aria-labelledby="science-tech-title">
      <div class="container">
        <header class="section-header">
          <h2 id="science-tech-title" class="section-title">
            <i class="fas fa-flask" aria-hidden="true"></i>
            科學技術
          </h2>
          <p class="section-subtitle">開創現代世界的科技突破</p>
        </header>

        <div class="tech-grid" role="list">
          <article 
            v-for="tech in technologies" 
            :key="tech.id"
            class="tech-card" 
            data-aos="flip-left" 
            role="listitem"
          >
            <header class="card-header">
              <div class="card-icon">
                <i :class="tech.icon" aria-hidden="true"></i>
              </div>
              <h3>{{ tech.title }}</h3>
              <span class="card-subtitle">{{ tech.subtitle }}</span>
            </header>
            <div class="card-content">
              <p>{{ tech.description }}</p>
              <ul class="tech-features">
                <li v-for="feature in tech.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            <div class="card-image-placeholder">
              <div class="image-placeholder">
                <i class="fas fa-image"></i>
                <span>{{ tech.imageAlt }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 文化現象區塊 -->
    <section id="cultural-phenomena" class="section" aria-labelledby="cultural-phenomena-title">
      <div class="container">
        <header class="section-header">
          <h2 id="cultural-phenomena-title" class="section-title">
            <i class="fas fa-palette" aria-hidden="true"></i>
            文化現象
          </h2>
          <p class="section-subtitle">時代精神的文化表現</p>
        </header>

        <div class="culture-grid" role="list">
          <article 
            v-for="culture in culturalPhenomena" 
            :key="culture.id"
            class="culture-item" 
            data-aos="fade-up" 
            role="listitem"
          >
            <div class="culture-image-placeholder">
              <div class="image-placeholder">
                <i :class="culture.icon"></i>
                <span>{{ culture.imageAlt }}</span>
              </div>
            </div>
            <div class="culture-content">
              <h3>{{ culture.title }}</h3>
              <p class="culture-period">{{ culture.period }}</p>
              <p>{{ culture.description }}</p>
              <ul class="culture-highlights">
                <li v-for="highlight in culture.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 返回頂部按鈕 -->
    <button 
      id="back-to-top" 
      class="back-to-top" 
      :class="{ show: showBackToTop }"
      @click="scrollToTop"
      aria-label="返回頂部"
    >
      <i class="fas fa-chevron-up" aria-hidden="true"></i>
    </button>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// SEO 設定
useHead({
  title: '🏛️ 1900年代歷史資料 - 探索世紀之交的變革時代',
  meta: [
    { name: 'description', content: '探索1900年代的歷史變遷，了解帝國主義、科技革命、文化現代化以及重要歷史事件。' },
    { name: 'keywords', content: '1900年代,歷史,帝國主義,科技革命,文化變遷,重大事件' },
    { property: 'og:title', content: '🏛️ 1900年代歷史資料 - 探索世紀之交的變革時代' },
    { property: 'og:description', content: '探索1900年代的歷史變遷，了解帝國主義、科技革命、文化現代化以及重要歷史事件。' },
    { property: 'og:type', content: 'article' }
  ]
})

// 響應式數據
const navActive = ref(false)
const showBackToTop = ref(false)
const activeCategory = ref('political')

// 人物分類數據
const figureCategories = {
  political: { name: '政治領袖' },
  science: { name: '科技領袖' },
  business: { name: '商業領袖' },
  culture: { name: '文化名人' }
}

// 人物數據
const figures = {
  political: [
    {
      id: 1,
      name: '西奧多·羅斯福',
      role: '美國總統',
      description: '進步主義改革者，推動美國現代化'
    },
    {
      id: 2,
      name: '愛德華七世',
      role: '英國國王',
      description: '維多利亞時代的結束，愛德華時代的開始'
    }
  ],
  science: [
    {
      id: 3,
      name: '阿爾伯特·愛因斯坦',
      role: '物理學家',
      description: '相對論創立者，革命性科學理論'
    },
    {
      id: 4,
      name: '萊特兄弟',
      role: '航空先驅',
      description: '人類首次動力飛行的實現者'
    }
  ],
  business: [
    {
      id: 5,
      name: '亨利·福特',
      role: '工業家',
      description: '流水線生產的推廣者，汽車工業革命'
    },
    {
      id: 6,
      name: '約翰·洛克菲勒',
      role: '石油大王',
      description: '標準石油公司創始人，現代企業管理先驅'
    }
  ],
  culture: [
    {
      id: 7,
      name: '巴布羅·畢卡索',
      role: '畫家',
      description: '立體派藝術運動創始人，現代藝術先驅'
    },
    {
      id: 8,
      name: '西格蒙德·佛洛伊德',
      role: '心理學家',
      description: '精神分析學創立者，現代心理學奠基人'
    }
  ]
}

// 科技數據
const technologies = [
  {
    id: 1,
    title: '電氣化革命',
    subtitle: 'Electrification',
    icon: 'fas fa-bolt',
    description: '電力的廣泛應用改變了生產和生活方式',
    features: ['愛迪生電力系統', '特斯拉交流電', '電燈普及', '電車系統'],
    imageAlt: '電氣化設備圖'
  },
  {
    id: 2,
    title: '內燃機技術',
    subtitle: 'Internal Combustion',
    icon: 'fas fa-car',
    description: '內燃機的發明推動了交通工具的革命',
    features: ['汽車量產', '飛機發明', '摩托車普及', '農業機械化'],
    imageAlt: '內燃機構造圖'
  },
  {
    id: 3,
    title: '化學工業',
    subtitle: 'Chemical Industry',
    icon: 'fas fa-flask',
    description: '化學工業的發展帶來新材料和新藥物',
    features: ['人工染料', '炸藥技術', '藥物合成', '化學肥料'],
    imageAlt: '化學實驗室圖'
  },
  {
    id: 4,
    title: '通訊技術',
    subtitle: 'Communication',
    icon: 'fas fa-radio',
    description: '無線電和電話技術改變了信息傳播方式',
    features: ['無線電報', '長途電話', '新聞傳播', '國際通訊'],
    imageAlt: '通訊設備圖'
  }
]

// 文化現象數據
const culturalPhenomena = [
  {
    id: 1,
    title: '新藝術運動',
    period: '1890-1910',
    icon: 'fas fa-palette',
    description: '追求自然形式和裝飾美學的藝術運動',
    highlights: ['建築裝飾革新', '家具設計創新', '平面設計發展', '工藝美術復興'],
    imageAlt: '新藝術運動作品'
  },
  {
    id: 2,
    title: '印象派繪畫',
    period: '1870-1900',
    icon: 'fas fa-brush',
    description: '強調光線和色彩變化的繪畫革命',
    highlights: ['戶外寫生流行', '色彩理論發展', '藝術市場變化', '現代美術館興起'],
    imageAlt: '印象派畫作'
  },
  {
    id: 3,
    title: '現代主義文學',
    period: '1900-1910',
    icon: 'fas fa-book',
    description: '打破傳統敘事結構的文學實驗',
    highlights: ['意識流技法', '象徵主義詩歌', '心理現實主義', '都市文學題材'],
    imageAlt: '現代主義文學作品'
  },
  {
    id: 4,
    title: '爵士音樂萌芽',
    period: '1900-1910',
    icon: 'fas fa-music',
    description: '非裔美國人創造的新音樂形式',
    highlights: ['藍調音樂發展', '即興演奏技巧', '種族文化交融', '流行音樂雛形'],
    imageAlt: '爵士樂演奏圖'
  }
]

// 計算屬性
const currentFigures = computed(() => {
  return figures[activeCategory.value] || []
})

// 方法
const toggleNav = () => {
  navActive.value = !navActive.value
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80 // 考慮固定導航欄高度
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
  navActive.value = false // 關閉移動端選單
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const setActiveCategory = (category) => {
  activeCategory.value = category
}

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300
}

const createScrollProgress = () => {
  const progressBar = document.createElement('div')
  progressBar.className = 'scroll-progress'
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #8B4513, #A0522D);
    z-index: 1001;
    transition: width 0.3s ease;
  `
  document.body.appendChild(progressBar)

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + '%'
  })
}

// 生命週期
onMounted(() => {
  // 初始化 AOS 動畫
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }

  // 添加滾動事件監聽
  window.addEventListener('scroll', handleScroll)
  
  // 創建滾動進度條
  createScrollProgress()

  // 導航欄點擊外部關閉
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      navActive.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 重置和基礎樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 導航欄樣式 */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: #8B4513;
}

.nav-logo i {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.nav-menu a:hover {
  color: #8B4513;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 3px 0;
  transition: 0.3s;
}

/* 英雄區域樣式 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 50%, #D4B895 100%);
  position: relative;
  overflow: hidden;
}

.hero-visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.timeline-animation {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.year-marker {
  position: absolute;
  font-size: 4rem;
  font-weight: 700;
  color: #8B4513;
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
}

.year-1900 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.year-1905 {
  top: 50%;
  right: 20%;
  animation-delay: 2s;
}

.year-1909 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.historical-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.15;
}

.train {
  top: 30%;
  left: 15%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238B4513"><path d="M12 2l3 7h6l-2 2 .75 3L12 11 4.25 14 5 11l-2-2h6l3-7z"/></svg>');
  animation: moveHorizontal 15s linear infinite;
}

.airplane {
  top: 60%;
  right: 25%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238B4513"><path d="M20.56 3.44C20.17 3.05 19.54 3.05 19.15 3.44L12 10.59 5.85 4.44C5.46 4.05 4.83 4.05 4.44 4.44C4.05 4.83 4.05 5.46 4.44 5.85L10.59 12 4.44 18.15C4.05 18.54 4.05 19.17 4.44 19.56C4.83 19.95 5.46 19.95 5.85 19.56L12 13.41 18.15 19.56C18.54 19.95 19.17 19.95 19.56 19.56C19.95 19.17 19.95 18.54 19.56 18.15L13.41 12 19.56 5.85C19.95 5.46 19.95 4.83 19.56 4.44Z"/></svg>');
  animation: fly 20s linear infinite;
}

.factory {
  bottom: 25%;
  left: 60%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238B4513"><path d="M12 3L2 12h3v8h14v-8h3L12 3z"/></svg>');
  animation: pulse 8s ease-in-out infinite;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-line {
  display: block;
  opacity: 0;
  animation: slideInUp 1s ease forwards;
}

.title-line:nth-child(2) {
  animation-delay: 0.3s;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #A0522D;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.6s;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.9s;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #8B4513;
  border: 2px solid #8B4513;
}

.btn-secondary:hover {
  background: #8B4513;
  color: white;
  transform: translateY(-2px);
}

/* 區塊樣式 */
.section {
  padding: 6rem 0;
}

.bg-light {
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* 特色卡片樣式 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 2rem;
}

.card-header h3 {
  font-size: 1.5rem;
  color: #8B4513;
  margin-bottom: 0.5rem;
}

.card-subtitle {
  color: #666;
  font-style: italic;
}

.feature-list {
  list-style: none;
  margin-bottom: 1.5rem;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.feature-list li:last-child {
  border-bottom: none;
}

.card-image-placeholder {
  margin-top: 1.5rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
  text-align: center;
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #8B4513;
}

.image-placeholder i {
  font-size: 3rem;
  opacity: 0.3;
}

/* 時間線樣式 */
.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #8B4513, #A0522D);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-year {
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 120px;
  text-align: center;
  position: relative;
  z-index: 10;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 2rem;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.timeline-content h3 {
  color: #8B4513;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.events-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.event-tag {
  background: rgba(139, 69, 19, 0.1);
  color: #8B4513;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.event-image-placeholder {
  margin-top: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  text-align: center;
}

/* 人物分類樣式 */
.figures-categories {
  max-width: 1000px;
  margin: 0 auto;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 1rem 2rem;
  border: 2px solid #8B4513;
  background: transparent;
  color: #8B4513;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-btn.active {
  background: #8B4513;
  color: white;
}

.tab-btn:hover {
  background: #8B4513;
  color: white;
}

.figures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.figure-card {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.figure-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.figure-image-placeholder {
  margin-bottom: 1rem;
}

.figure-info h3 {
  color: #8B4513;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.figure-role {
  color: #A0522D;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.figure-description {
  color: #666;
  line-height: 1.6;
}

/* 科技卡片樣式 */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.tech-card:hover {
  transform: translateY(-10px) rotateY(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.tech-features {
  list-style: none;
  margin-top: 1rem;
}

.tech-features li {
  padding: 0.3rem 0;
  color: #666;
}

.tech-features li::before {
  content: '▶';
  color: #8B4513;
  margin-right: 0.5rem;
}

/* 文化現象樣式 */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.culture-item {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.culture-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.culture-image-placeholder {
  height: 200px;
  background: linear-gradient(135deg, #F5E6D3, #E8D5B7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B4513;
}

.culture-image-placeholder i {
  font-size: 4rem;
  opacity: 0.3;
  margin-bottom: 0.5rem;
}

.culture-content {
  padding: 2rem;
}

.culture-content h3 {
  color: #8B4513;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.culture-period {
  color: #A0522D;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.culture-highlights {
  list-style: none;
  margin-top: 1rem;
}

.culture-highlights li {
  padding: 0.3rem 0;
  color: #666;
}

.culture-highlights li::before {
  content: '✦';
  color: #8B4513;
  margin-right: 0.5rem;
}

/* 返回頂部按鈕 */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  z-index: 1000;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
}

/* 動畫效果 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes moveHorizontal {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(calc(100vw + 100px)); }
}

@keyframes fly {
  0% { transform: translate(-100px, 50px) rotate(0deg); }
  50% { transform: translate(50vw, -50px) rotate(10deg); }
  100% { transform: translate(calc(100vw + 100px), 100px) rotate(-5deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
    gap: 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 1rem 0;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .features-grid,
  .figures-grid,
  .tech-grid,
  .culture-grid {
    grid-template-columns: 1fr;
  }

  .timeline-container::before {
    left: 30px;
  }

  .timeline-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 60px;
  }

  .timeline-year {
    position: absolute;
    left: -90px;
    min-width: 80px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }

  .timeline-content {
    margin: 0;
    margin-top: 1rem;
  }

  .category-tabs {
    flex-direction: column;
    align-items: center;
  }

  .tab-btn {
    width: 200px;
  }

  .section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .feature-card,
  .tech-card,
  .culture-content {
    padding: 1.5rem;
  }

  .back-to-top {
    width: 50px;
    height: 50px;
    bottom: 1rem;
    right: 1rem;
  }
}
</style> 