<template>
  <main>
    <header class="hero" role="banner">
      <div class="hero-visual">
        <!-- 大腦動畫區塊 -->
        <div class="brain-animation">
          <div class="brain-lobe lobe-frontal"></div>
          <div class="brain-lobe lobe-temporal"></div>
          <div class="brain-lobe lobe-parietal"></div>
          <div class="brain-lobe lobe-occipital"></div>
          <div class="synapse-container">
            <div class="synapse"></div>
            <div class="synapse"></div>
            <div class="synapse"></div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">🧠 心理學發展歷程</h1>
        <p class="hero-subtitle">從哲學到現代科學，探索人類心靈的奧秘</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('timeline')">
            <i class="fas fa-history"></i>
            探索歷史
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('experiments')">
            <i class="fas fa-flask"></i>
            經典實驗
          </button>
        </div>
      </div>
    </header>

    <!-- 歷史時間軸區塊 -->
    <section id="timeline" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-history"></i>
          心理學歷史時間軸
        </h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(era, index) in timeline" :key="era.period" :class="{ 'left': index % 2 === 0, 'right': index % 2 === 1 }">
            <div class="timeline-content">
              <div class="timeline-date">{{ era.period }}</div>
              <h3>{{ era.title }}</h3>
              <p>{{ era.description }}</p>
              <div class="timeline-icon">
                <i :class="era.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 重要人物區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-users"></i>
          重要人物
        </h2>
        <div class="person-grid">
          <div class="person-card" v-for="person in persons" :key="person.name" @click="showPersonDetail(person)">
            <div class="person-image-placeholder">
              <img v-if="person.img" :src="person.img" :alt="person.name" />
              <div v-else class="person-avatar">
                <i class="fas fa-user"></i>
              </div>
            </div>
            <h3>{{ person.name }}</h3>
            <p>{{ person.desc }}</p>
            <div class="person-years">{{ person.years }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 經典實驗區塊 -->
    <section id="experiments" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-flask"></i>
          經典心理學實驗
        </h2>
        <div class="experiment-grid">
          <div class="experiment-card" v-for="experiment in experiments" :key="experiment.name">
            <div class="experiment-header">
              <div class="experiment-icon">
                <i :class="experiment.icon"></i>
              </div>
              <h3>{{ experiment.name }}</h3>
              <span class="experiment-year">{{ experiment.year }}</span>
            </div>
            <div class="experiment-content">
              <p><strong>研究者：</strong>{{ experiment.researcher }}</p>
              <p><strong>實驗內容：</strong>{{ experiment.description }}</p>
              <p><strong>重要發現：</strong>{{ experiment.finding }}</p>
            </div>
            <div class="experiment-image-placeholder">
              <div class="placeholder-content">
                <i class="fas fa-microscope"></i>
                <span>實驗圖解</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要門派區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-graduation-cap"></i>
          心理學主要門派
        </h2>
        <div class="school-grid">
          <div class="school-card" v-for="school in schools" :key="school.name">
            <div class="school-icon">
              <i :class="school.icon"></i>
            </div>
            <h3>{{ school.name }}</h3>
            <p>{{ school.desc }}</p>
            <div class="school-period">{{ school.period }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 人物詳情彈窗 -->
    <div v-if="selectedPerson" class="person-modal" @click="closePersonDetail">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closePersonDetail">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img v-if="selectedPerson.img" :src="selectedPerson.img" :alt="selectedPerson.name" />
            <div v-else class="modal-avatar">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div class="modal-info">
            <h2>{{ selectedPerson.name }}</h2>
            <p class="modal-years">{{ selectedPerson.years }}</p>
            <p class="modal-desc">{{ selectedPerson.desc }}</p>
            <div class="modal-contributions">
              <h3>主要貢獻</h3>
              <ul>
                <li v-for="contribution in selectedPerson.contributions" :key="contribution">{{ contribution }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedPerson = ref(null)
const animatedElements = ref([])

const timeline = [
  {
    period: '前6世紀-17世紀',
    title: '古代哲學時期',
    description: '柏拉圖、亞里斯多德的心靈論，中世紀神學對靈魂的探討',
    icon: 'fas fa-scroll'
  },
  {
    period: '17-18世紀',
    title: '啟蒙運動時期',
    description: '洛克、休謨的經驗主義，聯想主義心理機制',
    icon: 'fas fa-lightbulb'
  },
  {
    period: '19世紀',
    title: '科學化時期',
    description: '馮特建立實驗室，達爾文進化論影響，神經科學發展',
    icon: 'fas fa-microscope'
  },
  {
    period: '20世紀初',
    title: '精神分析誕生',
    description: '佛洛伊德《夢的解析》，潛意識理論建立',
    icon: 'fas fa-brain'
  },
  {
    period: '1913年',
    title: '行為主義革命',
    description: '華生宣言，只研究可觀察行為，制約反射研究',
    icon: 'fas fa-mouse-pointer'
  },
  {
    period: '1950年代',
    title: '認知革命',
    description: '信息處理模型，計算機類比，人工智能興起',
    icon: 'fas fa-cogs'
  },
  {
    period: '1960年代',
    title: '人本主義心理學',
    description: '馬斯洛需求層次，羅傑斯治療，積極心理學',
    icon: 'fas fa-heart'
  },
  {
    period: '21世紀',
    title: '現代整合',
    description: '神經科學技術，人工智能，大數據心理學',
    icon: 'fas fa-network-wired'
  }
]

const persons = [
  { 
    name: '威廉·馮特', 
    years: '1832-1920',
    desc: '實驗心理學之父，建立第一個心理學實驗室',
    contributions: [
      '建立萊比錫大學第一個心理學實驗室',
      '確立實驗心理學方法論',
      '《心理學原理》奠定科學心理學基礎'
    ]
  },
  { 
    name: '西格蒙德·佛洛伊德', 
    years: '1856-1939',
    desc: '精神分析學派創始人，潛意識理論',
    contributions: [
      '創立精神分析學派',
      '提出潛意識理論',
      '《夢的解析》開創心理治療'
    ]
  },
  { 
    name: '約翰·華生', 
    years: '1878-1958',
    desc: '行為主義創始人，強調可觀察行為',
    contributions: [
      '發表行為主義宣言',
      '強調客觀研究方法',
      '推動心理學科學化'
    ]
  },
  { 
    name: 'B.F.史金納', 
    years: '1904-1990',
    desc: '操作制約理論，行為塑造',
    contributions: [
      '發展操作制約理論',
      '設計史金納箱實驗',
      '應用行為分析創始人'
    ]
  },
  { 
    name: '亞伯拉罕·馬斯洛', 
    years: '1908-1970',
    desc: '人本主義心理學，需求層次理論',
    contributions: [
      '提出需求層次理論',
      '創立人本主義心理學',
      '強調自我實現概念'
    ]
  },
  { 
    name: '讓·皮亞傑', 
    years: '1896-1980',
    desc: '認知發展理論，兒童思維發展',
    contributions: [
      '建立認知發展理論',
      '研究兒童思維發展階段',
      '影響教育心理學發展'
    ]
  },
  { 
    name: '馬丁·塞利格曼', 
    years: '1942-',
    desc: '積極心理學創始人',
    contributions: [
      '創立積極心理學',
      '研究習得性無助',
      '推動心理健康正向發展'
    ]
  }
]

const experiments = [
  {
    name: '巴夫洛夫古典制約',
    year: '1903',
    researcher: '伊凡·巴夫洛夫',
    description: '狗與鈴聲實驗，建立古典制約理論',
    finding: '中性刺激與無條件刺激配對可產生制約反應',
    icon: 'fas fa-bell',
    // path: '/experiment/classical-conditioning'
  },
  {
    name: '史金納箱實驗',
    year: '1938',
    researcher: 'B.F.史金納',
    description: '操作制約實驗，研究行為後果對行為的影響',
    finding: '正增強可增加行為頻率，負增強可減少行為',
    icon: 'fas fa-box',
    path: '/experiment/skinner-box'
  },
  {
    name: '米爾格蘭姆服從實驗',
    year: '1963',
    researcher: '史丹利·米爾格蘭姆',
    description: '研究權威對服從行為的影響',
    finding: '普通人可能因權威而做出傷害他人的行為',
    icon: 'fas fa-user-tie'
  },
  {
    name: '史丹佛監獄實驗',
    year: '1971',
    researcher: '菲利普·津巴多',
    description: '模擬監獄環境，研究角色對行為的影響',
    finding: '環境和角色可顯著影響人的行為和態度',
    icon: 'fas fa-user-secret'
  },
  {
    name: '艾賓浩斯遺忘曲線',
    year: '1885',
    researcher: '赫爾曼·艾賓浩斯',
    description: '系統性研究記憶遺忘規律',
    finding: '遺忘在學習後立即開始，初期遺忘速度最快',
    icon: 'fas fa-chart-line'
  },
  {
    name: '阿希從眾實驗',
    year: '1951',
    researcher: '所羅門·阿希',
    description: '研究群體壓力對判斷的影響',
    finding: '群體壓力可導致個人放棄正確判斷',
    icon: 'fas fa-users'
  }
]

const schools = [
  { 
    name: '結構主義', 
    period: '1879-1920',
    desc: '分析心理結構，強調內省法',
    icon: 'fas fa-puzzle-piece'
  },
  { 
    name: '功能主義', 
    period: '1890-1920',
    desc: '心理功能與適應，強調實用性',
    icon: 'fas fa-cogs'
  },
  { 
    name: '精神分析', 
    period: '1900-至今',
    desc: '潛意識、夢的解析、心理治療',
    icon: 'fas fa-brain'
  },
  { 
    name: '行為主義', 
    period: '1913-1960',
    desc: '只研究可觀察行為，制約學習',
    icon: 'fas fa-mouse-pointer'
  },
  { 
    name: '格式塔心理學', 
    period: '1920-1940',
    desc: '強調知覺的整體性',
    icon: 'fas fa-eye'
  },
  { 
    name: '人本主義', 
    period: '1960-至今',
    desc: '自我實現、積極心理學',
    icon: 'fas fa-heart'
  },
  { 
    name: '認知心理學', 
    period: '1950-至今',
    desc: '信息處理、思維、記憶',
    icon: 'fas fa-lightbulb'
  },
  { 
    name: '神經心理學', 
    period: '1970-至今',
    desc: '大腦與行為關係',
    icon: 'fas fa-brain'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const showPersonDetail = (person) => {
  selectedPerson.value = person
}

const closePersonDetail = () => {
  selectedPerson.value = null
}

// 初始化動畫觀察器
const initAnimationObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target) // 只觸發一次
      }
    })
  }, {
    threshold: 0.1, // 當10%的元素可見時觸發
    rootMargin: '0px 0px -50px 0px' // 提前50px觸發
  })

  // 觀察所有需要動畫的元素
  const elementsToAnimate = document.querySelectorAll('.timeline-item, .person-card, .experiment-card, .school-card')
  elementsToAnimate.forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  initAnimationObserver()
})
</script>

<style scoped>
/* 變數定義 */
:root {
  --color-primary: #1976d2;
  --color-secondary: #42a5f5;
  --color-accent: #ff9800;
  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-text: #333;
  --color-text-light: #666;
  --color-background: #fff;
  --color-background-light: #f5f5f5;
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
  --transition: all 0.3s ease;
}

/* 英雄區域 */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  flex: 2;
  padding-left: 2rem;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: slideInLeft 1s ease-out;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: slideInLeft 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  animation: slideInLeft 1s ease-out 0.4s both;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--color-accent);
  color: white;
}

.btn-secondary {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* 大腦動畫 */
.brain-animation {
  position: relative;
  width: 200px;
  height: 200px;
}

.brain-lobe {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.4);
  animation: pulse 2s infinite;
}

.lobe-frontal { width: 80px; height: 60px; top: 40px; left: 60px; animation-delay: 0s; }
.lobe-temporal { width: 70px; height: 45px; top: 100px; left: 30px; animation-delay: 0.5s; }
.lobe-parietal { width: 75px; height: 50px; top: 70px; right: 50px; animation-delay: 1s; }
.lobe-occipital { width: 60px; height: 35px; bottom: 50px; left: 70px; animation-delay: 1.5s; }

.synapse-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.synapse {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: synapsePulse 3s infinite;
}

.synapse:nth-child(1) { top: 30%; left: 20%; animation-delay: 0s; }
.synapse:nth-child(2) { top: 60%; right: 30%; animation-delay: 1s; }
.synapse:nth-child(3) { bottom: 40%; left: 60%; animation-delay: 2s; }

/* 區塊樣式 */
.section {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-title i {
  color: var(--color-primary);
  font-size: 2rem;
}

.bg-light {
  background: var(--color-background-light);
}

/* 時間軸樣式 */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 55%;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.timeline-item.animate-in .timeline-content {
  opacity: 1;
  transform: translateY(0);
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}

.timeline-item.left .timeline-content::before {
  right: -20px;
  border-left-color: white;
}

.timeline-item.right .timeline-content::before {
  left: -20px;
  border-right-color: white;
}

.timeline-date {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.timeline-content p {
  color: var(--color-text-light);
  line-height: 1.6;
}

.timeline-icon {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transform: translateY(-50%);
  box-shadow: var(--shadow);
}

.timeline-item.left .timeline-icon {
  right: -65px;
}

.timeline-item.right .timeline-icon {
  left: -65px;
}

/* 人物卡片樣式 */
.person-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.person-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out, var(--transition);
}

.person-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.person-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.person-image-placeholder {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}

.person-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-avatar {
  color: white;
  font-size: 3rem;
}

.person-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.person-card p {
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.person-years {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

/* 實驗卡片樣式 */
.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.experiment-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out, var(--transition);
}

.experiment-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.experiment-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--color-accent);
}

.experiment-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.experiment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.experiment-icon {
  width: 50px;
  height: 50px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-size: 1.2rem;
}

.experiment-header h3 {
  flex: 1;
  font-size: 1.3rem;
  color: var(--color-text);
}

.experiment-year {
  background: var(--color-primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.experiment-content p {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: var(--color-text-light);
}

.experiment-content strong {
  color: var(--color-text);
}

.experiment-image-placeholder {
  margin-top: 1.5rem;
  height: 150px;
  background: var(--color-background-light);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
}

.placeholder-content {
  text-align: center;
}

.placeholder-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

/* 門派卡片樣式 */
.school-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.school-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out, var(--transition);
}

.school-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.school-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.school-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.school-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.school-card p {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.school-period {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
}

/* 彈窗樣式 */
.person-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: white;
  border-radius: var(--border-radius);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.3s ease-out;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-light);
  z-index: 1;
}

.modal-body {
  padding: 2rem;
}

.modal-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-avatar {
  color: white;
  font-size: 4rem;
}

.modal-info h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  text-align: center;
}

.modal-years {
  color: var(--color-primary);
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.modal-desc {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
}

.modal-contributions h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.modal-contributions ul {
  list-style: none;
  padding: 0;
}

.modal-contributions li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-background-light);
  color: var(--color-text-light);
}

.modal-contributions li:last-child {
  border-bottom: none;
}

/* 動畫 */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 移除舊的 fadeInUp 動畫，因為現在使用 CSS transition */

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes synapsePulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 1rem 0;
    text-align: center;
  }
  
  .hero-content {
    padding-left: 0;
    padding-top: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    width: calc(100% - 60px);
    left: 60px !important;
  }
  
  .timeline-item.left .timeline-icon,
  .timeline-item.right .timeline-icon {
    left: -45px;
  }
  
  .timeline-item.left .timeline-content::before,
  .timeline-item.right .timeline-content::before {
    left: -20px;
    border-right-color: white;
    border-left-color: transparent;
  }
  
  /* 確保動畫在移動端也能正常工作 */
  .timeline-item.animate-in .timeline-content,
  .person-card.animate-in,
  .experiment-card.animate-in,
  .school-card.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .person-grid {
    grid-template-columns: 1fr;
  }
  
  .experiment-grid {
    grid-template-columns: 1fr;
  }
  
  .school-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .section {
    padding: 2rem 0;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
  
  .person-card,
  .experiment-card,
  .school-card {
    padding: 1.5rem;
  }
}
</style> 