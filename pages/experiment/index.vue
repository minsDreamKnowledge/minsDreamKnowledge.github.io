<template>
  <div class="experiment-index">
    <!-- 英雄區域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-icon">🧪</span>
            經典心理學實驗
          </h1>
          <p class="hero-subtitle">
            探索改變心理學歷史的重要實驗，從認知發展到社會行為，深入了解人類心理的奧秘
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">6</span>
              <span class="stat-label">經典實驗</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">1920-1970</span>
              <span class="stat-label">實驗時期</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">∞</span>
              <span class="stat-label">啟發價值</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-experiments">
            <div class="experiment-icon" v-for="(exp, index) in experiments" :key="exp.id" 
                 :style="{ animationDelay: `${index * 0.5}s` }">
              {{ exp.icon }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗分類導航 -->
    <section class="category-nav-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">📊</span>
          實驗分類
        </h2>
        <div class="category-grid">
          <div class="category-card" data-aos="fade-up">
            <div class="category-icon">🧠</div>
            <h3>認知發展</h3>
            <p>兒童思維發展與認知能力研究</p>
            <div class="category-experiments">
              <NuxtLink to="/experiment/piaget-cognitive-development" class="experiment-link">
                皮亞傑認知發展
              </NuxtLink>
            </div>
          </div>
          
          <div class="category-card" data-aos="fade-up" data-aos-delay="100">
            <div class="category-icon">👶</div>
            <h3>依戀關係</h3>
            <p>嬰兒與照顧者之間的依戀類型</p>
            <div class="category-experiments">
              <NuxtLink to="/experiment/ainsworth-strange-situation" class="experiment-link">
                艾因斯沃斯陌生情境
              </NuxtLink>
            </div>
          </div>
          
          <div class="category-card" data-aos="fade-up" data-aos-delay="200">
            <div class="category-icon">🏛️</div>
            <h3>社會心理學</h3>
            <p>群體行為與社會影響研究</p>
            <div class="category-experiments">
              <NuxtLink to="/experiment/asch-conformity" class="experiment-link">
                阿希從眾實驗
              </NuxtLink>
              <NuxtLink to="/experiment/latane-bystander-effect" class="experiment-link">
                拉塔內旁觀者效應
              </NuxtLink>
            </div>
          </div>
          
          <div class="category-card" data-aos="fade-up" data-aos-delay="300">
            <div class="category-icon">🔬</div>
            <h3>學習理論</h3>
            <p>行為學習與制約反射研究</p>
            <div class="category-experiments">
              <NuxtLink to="/experiment/skinner-box" class="experiment-link">
                史金納箱實驗
              </NuxtLink>
            </div>
          </div>
          
          <div class="category-card" data-aos="fade-up" data-aos-delay="400">
            <div class="category-icon">⚖️</div>
            <h3>權威與服從</h3>
            <p>權威影響與角色扮演研究</p>
            <div class="category-experiments">
              <NuxtLink to="/experiment/zimbardo-prison" class="experiment-link">
                津巴多監獄實驗
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗列表 -->
    <section class="experiments-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🔬</span>
          實驗詳情
        </h2>
        <div class="experiments-grid">
          <div 
            v-for="experiment in experiments" 
            :key="experiment.id"
            class="experiment-card"
            data-aos="fade-up"
          >
            <div class="experiment-header">
              <div class="experiment-icon">{{ experiment.icon }}</div>
              <div class="experiment-meta">
                <span class="experiment-year">{{ experiment.year }}</span>
                <span class="experiment-researcher">{{ experiment.researcher }}</span>
              </div>
            </div>
            
            <div class="experiment-content">
              <h3 class="experiment-title">{{ experiment.title }}</h3>
              <p class="experiment-description">{{ experiment.description }}</p>
              
              <div class="experiment-highlights">
                <div class="highlight-item">
                  <span class="highlight-icon">🎯</span>
                  <span class="highlight-text">{{ experiment.focus }}</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-icon">👥</span>
                  <span class="highlight-text">{{ experiment.participants }}</span>
                </div>
                <div class="highlight-item">
                  <span class="highlight-icon">📊</span>
                  <span class="highlight-text">{{ experiment.method }}</span>
                </div>
              </div>
              
              <div class="experiment-tags">
                <span 
                  v-for="tag in experiment.tags" 
                  :key="tag"
                  class="experiment-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div class="experiment-actions">
              <NuxtLink :to="experiment.path" class="btn btn-primary">
                <span class="btn-icon">📖</span>
                查看詳情
              </NuxtLink>
              <button @click="showExperimentPreview(experiment)" class="btn btn-secondary">
                <span class="btn-icon">👁️</span>
                快速預覽
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗時間軸 -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">⏰</span>
          實驗時間軸
        </h2>
        <div class="timeline">
          <div 
            v-for="(experiment, index) in experiments" 
            :key="experiment.id"
            class="timeline-item"
            :class="{ 'timeline-item-right': index % 2 === 1 }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="timeline-marker">
              <div class="marker-icon">{{ experiment.icon }}</div>
            </div>
            <div class="timeline-content">
              <div class="timeline-year">{{ experiment.year }}</div>
              <h3 class="timeline-title">{{ experiment.title }}</h3>
              <p class="timeline-description">{{ experiment.shortDescription }}</p>
              <NuxtLink :to="experiment.path" class="timeline-link">
                了解更多 →
              </NuxtLink>
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
              <h3>認知發展路徑</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">皮亞傑認知發展實驗</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">艾因斯沃斯依戀實驗</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">理解兒童發展規律</span>
              </div>
            </div>
            <NuxtLink to="/experiment/piaget-cognitive-development" class="path-link">
              開始學習
            </NuxtLink>
          </div>
          
          <div class="path-card" data-aos="fade-up" data-aos-delay="100">
            <div class="path-header">
              <div class="path-icon">🏛️</div>
              <h3>社會心理學路徑</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">阿希從眾實驗</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">拉塔內旁觀者效應</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">津巴多監獄實驗</span>
              </div>
            </div>
            <NuxtLink to="/experiment/asch-conformity" class="path-link">
              開始探索
            </NuxtLink>
          </div>
          
          <div class="path-card" data-aos="fade-up" data-aos-delay="200">
            <div class="path-header">
              <div class="path-icon">🔬</div>
              <h3>學習理論路徑</h3>
            </div>
            <div class="path-steps">
              <div class="path-step">
                <span class="step-number">1</span>
                <span class="step-text">史金納箱實驗</span>
              </div>
              <div class="path-step">
                <span class="step-number">2</span>
                <span class="step-text">理解操作制約</span>
              </div>
              <div class="path-step">
                <span class="step-number">3</span>
                <span class="step-text">應用學習原理</span>
              </div>
            </div>
            <NuxtLink to="/experiment/skinner-box" class="path-link">
              開始研究
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗影響 -->
    <section class="impact-section">
      <div class="container">
        <h2 class="section-title">
          <span class="section-icon">🌟</span>
          實驗影響
        </h2>
        <div class="impact-grid">
          <div class="impact-card" data-aos="fade-up">
            <div class="impact-icon">🎓</div>
            <h3>教育應用</h3>
            <p>這些實驗深刻影響了教育理論和實踐，為個性化學習提供了科學基礎。</p>
          </div>
          
          <div class="impact-card" data-aos="fade-up" data-aos-delay="100">
            <div class="impact-icon">🏥</div>
            <h3>心理治療</h3>
            <p>實驗發現為心理治療和諮商提供了重要的理論依據和實踐方法。</p>
          </div>
          
          <div class="impact-card" data-aos="fade-up" data-aos-delay="200">
            <div class="impact-icon">🏢</div>
            <h3>組織管理</h3>
            <p>社會心理學實驗對組織行為學和領導力發展產生了深遠影響。</p>
          </div>
          
          <div class="impact-card" data-aos="fade-up" data-aos-delay="300">
            <div class="impact-icon">🌍</div>
            <h3>社會政策</h3>
            <p>實驗結果為社會政策和公共服務設計提供了科學依據。</p>
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
          <NuxtLink 
            v-for="experiment in experiments" 
            :key="experiment.id"
            :to="experiment.path"
            class="quick-nav-card"
            data-aos="fade-up"
          >
            <div class="quick-nav-icon">{{ experiment.icon }}</div>
            <h3>{{ experiment.shortTitle }}</h3>
            <p>{{ experiment.year }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 實驗數據
const experiments = ref([
  {
    id: 'piaget-cognitive-development',
    icon: '🧠',
    title: '皮亞傑認知發展實驗',
    shortTitle: '皮亞傑實驗',
    year: '1920-1970',
    researcher: '讓·皮亞傑',
    description: '探索兒童認知發展的階段性規律，揭示兒童思維發展的奧秘。',
    shortDescription: '兒童認知發展的階段性研究',
    focus: '認知發展階段',
    participants: '兒童群體',
    method: '觀察法',
    tags: ['認知發展', '兒童心理學', '發展心理學'],
    path: '/experiment/piaget-cognitive-development'
  },
  {
    id: 'ainsworth-strange-situation',
    icon: '👶',
    title: '艾因斯沃斯陌生情境實驗',
    shortTitle: '艾因斯沃斯實驗',
    year: '1978',
    researcher: '瑪麗·艾因斯沃斯',
    description: '研究嬰兒與照顧者之間的依戀關係，揭示依戀類型的形成機制。',
    shortDescription: '嬰兒依戀類型研究',
    focus: '依戀關係',
    participants: '嬰兒與母親',
    method: '觀察法',
    tags: ['依戀理論', '發展心理學', '親子關係'],
    path: '/experiment/ainsworth-strange-situation'
  },
  {
    id: 'asch-conformity',
    icon: '🏛️',
    title: '阿希從眾實驗',
    shortTitle: '阿希實驗',
    year: '1951',
    researcher: '所羅門·阿希',
    description: '研究群體壓力對個人判斷的影響，揭示從眾行為的心理機制。',
    shortDescription: '群體壓力與從眾行為',
    focus: '從眾行為',
    participants: '大學生',
    method: '實驗法',
    tags: ['社會心理學', '從眾行為', '群體影響'],
    path: '/experiment/asch-conformity'
  },
  {
    id: 'latane-bystander-effect',
    icon: '👥',
    title: '拉塔內旁觀者效應',
    shortTitle: '旁觀者效應',
    year: '1968',
    researcher: '比布·拉塔內',
    description: '研究緊急情況下旁觀者數量對助人行為的影響。',
    shortDescription: '旁觀者效應與助人行為',
    focus: '助人行為',
    participants: '大學生',
    method: '實驗法',
    tags: ['社會心理學', '助人行為', '責任分散'],
    path: '/experiment/latane-bystander-effect'
  },
  {
    id: 'skinner-box',
    icon: '🔬',
    title: '史金納箱實驗',
    shortTitle: '史金納箱',
    year: '1938',
    researcher: 'B.F.史金納',
    description: '研究操作制約學習，揭示行為強化的心理機制。',
    shortDescription: '操作制約學習研究',
    focus: '操作制約',
    participants: '動物',
    method: '實驗法',
    tags: ['學習理論', '行為主義', '操作制約'],
    path: '/experiment/skinner-box'
  },
  {
    id: 'zimbardo-prison',
    icon: '⚖️',
    title: '津巴多監獄實驗',
    shortTitle: '津巴多實驗',
    year: '1971',
    researcher: '菲利普·津巴多',
    description: '研究角色扮演對行為的影響，揭示權威和環境的力量。',
    shortDescription: '角色扮演與權威影響',
    focus: '角色扮演',
    participants: '大學生',
    method: '實驗法',
    tags: ['社會心理學', '權威服從', '角色扮演'],
    path: '/experiment/zimbardo-prison'
  }
])

// 顯示實驗預覽
const showExperimentPreview = (experiment) => {
  // 這裡可以實現彈窗預覽功能
  console.log('預覽實驗:', experiment.title)
}

// 初始化 AOS 動畫
onMounted(() => {
  import("aos").then((AOS) => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      easing: 'ease-in-out',
    });
  });
})
</script>

<style scoped>
.experiment-index {
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
  margin-top: 70px;
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

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b6b;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 浮動實驗圖標 */
.hero-visual {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-experiments {
  position: relative;
  width: 100%;
  height: 100%;
}

.experiment-icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.experiment-icon:nth-child(1) {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.experiment-icon:nth-child(2) {
  top: 40%;
  right: 20%;
  animation-delay: 1s;
}

.experiment-icon:nth-child(3) {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.experiment-icon:nth-child(4) {
  top: 80%;
  right: 25%;
  animation-delay: 3s;
}

.experiment-icon:nth-child(5) {
  top: 30%;
  right: 30%;
  animation-delay: 4s;
}

.experiment-icon:nth-child(6) {
  top: 70%;
  right: 5%;
  animation-delay: 5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 分類導航 */
.category-nav-section {
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

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.category-card p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.category-experiments {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.experiment-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #e8f4fd;
  color: #3498db;
  text-decoration: none;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.experiment-link:hover {
  background: #3498db;
  color: white;
}

/* 實驗列表 */
.experiments-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.experiments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.experiment-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.experiment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.experiment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.experiment-icon {
  font-size: 2.5rem;
}

.experiment-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.experiment-year {
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.experiment-researcher {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.experiment-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.experiment-description {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.experiment-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight-icon {
  font-size: 1rem;
}

.highlight-text {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.experiment-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.experiment-tag {
  background: #f0f0f0;
  color: #7f8c8d;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.experiment-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.btn-secondary:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1rem;
}

/* 時間軸 */
.timeline-section {
  padding: 4rem 0;
  background: white;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3498db;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
}

.timeline-item-right {
  margin-left: 55%;
}

.timeline-marker {
  position: absolute;
  left: -25px;
  top: 0;
  width: 50px;
  height: 50px;
  background: white;
  border: 3px solid #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-item-right .timeline-marker {
  left: auto;
  right: -25px;
}

.marker-icon {
  font-size: 1.5rem;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
}

.timeline-item-right .timeline-content {
  margin-left: 0;
  margin-right: 30px;
}

.timeline-year {
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.timeline-description {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.timeline-link:hover {
  color: #2980b9;
}

/* 學習路徑 */
.learning-paths-section {
  padding: 4rem 0;
  background: #f8f9fa;
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

/* 實驗影響 */
.impact-section {
  padding: 4rem 0;
  background: white;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.impact-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.impact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.impact-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.impact-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

/* 快速導航 */
.quick-nav-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.quick-nav-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.quick-nav-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.quick-nav-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.quick-nav-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.quick-nav-card p {
  color: #7f8c8d;
  font-size: 0.8rem;
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
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item,
  .timeline-item-right {
    width: 100%;
    margin-left: 0;
  }
  
  .timeline-marker {
    left: -10px;
  }
  
  .timeline-item-right .timeline-marker {
    left: -10px;
    right: auto;
  }
  
  .timeline-content {
    margin-left: 20px;
  }
  
  .timeline-item-right .timeline-content {
    margin-right: 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .experiments-grid {
    grid-template-columns: 1fr;
  }
  
  .experiment-actions {
    flex-direction: column;
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
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  
  .category-card,
  .experiment-card,
  .path-card,
  .impact-card {
    padding: 1.5rem;
  }
}
</style> 