<template>
  <main>
    <!-- 英雄區塊 -->
    <header class="hero" role="banner">
      <div class="hero-visual">
        <!-- 監獄動畫區塊 -->
        <div class="prison-animation">
          <div class="prison-cell">
            <div class="cell-bars"></div>
            <div class="cell-bars"></div>
            <div class="cell-bars"></div>
          </div>
          <div class="guard-figure">
            <div class="guard-body"></div>
            <div class="guard-head"></div>
            <div class="guard-arms"></div>
          </div>
          <div class="prisoner-figure">
            <div class="prisoner-body"></div>
            <div class="prisoner-head"></div>
            <div class="prisoner-arms"></div>
          </div>
          <div class="role-switch-animation">
            <div class="switch-arrow"></div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">🏛️ 津巴多監獄實驗</h1>
        <p class="hero-subtitle">角色與人性的轉變 - 環境如何塑造人類行為</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('background')">
            <i class="fas fa-history"></i>
            實驗背景
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('process')">
            <i class="fas fa-play"></i>
            實驗過程
          </button>
        </div>
      </div>
    </header>

    <!-- 實驗背景區塊 -->
    <section id="background" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-info-circle"></i>
          實驗背景
        </h2>
        <div class="background-grid">
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-calendar"></i>
            </div>
            <h3>實驗時間</h3>
            <p>1971年8月14-20日</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <h3>實驗地點</h3>
            <p>美國史丹佛大學地下室</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>實驗者</h3>
            <p>菲利普·津巴多</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>參與者</h3>
            <p>24名健康男性大學生</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>史丹佛大學地下室監獄環境</span>
            <p>菲利普·津巴多在史丹佛大學地下室監獄實驗中觀察被試，監獄環境陰暗，獄警穿著制服，囚犯穿著囚服</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 時代背景區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-clock"></i>
          時代背景
        </h2>
        <div class="context-grid">
          <div class="context-card">
            <h3>社會環境</h3>
            <p>1970年代美國社會動盪，對權威和制度的質疑</p>
          </div>
          <div class="context-card">
            <h3>心理學發展</h3>
            <p>社會心理學快速發展時期</p>
          </div>
          <div class="context-card">
            <h3>監獄改革</h3>
            <p>對監獄制度的關注和改革</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>1970年代美國社會場景</span>
            <p>人們穿著復古服裝，社會氛圍動盪，象徵當時的社會變革和對權威的質疑</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗過程區塊 -->
    <section id="process" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-play-circle"></i>
          實驗過程故事
        </h2>
        <div class="process-timeline">
          <div class="timeline-item" v-for="(step, index) in processSteps" :key="index">
            <div class="timeline-marker">{{ index + 1 }}</div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <div class="timeline-image-placeholder">
                <div class="placeholder-content">
                  <i class="fas fa-camera"></i>
                  <span>{{ step.imageDesc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗設定區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-cogs"></i>
          實驗設定
        </h2>
        <div class="setup-grid">
          <div class="setup-card">
            <h3>監獄環境</h3>
            <ul>
              <li>史丹佛大學地下室改裝</li>
              <li>簡陋的囚室環境</li>
              <li>獄警辦公室</li>
              <li>監控設備</li>
            </ul>
          </div>
          <div class="setup-card">
            <h3>角色分配</h3>
            <ul>
              <li>12名獄警</li>
              <li>12名囚犯</li>
              <li>隨機分配</li>
              <li>角色固定</li>
            </ul>
          </div>
          <div class="setup-card">
            <h3>實驗道具</h3>
            <ul>
              <li>囚服與編號</li>
              <li>獄警制服</li>
              <li>手銬腳鐐</li>
              <li>監控系統</li>
            </ul>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>史丹佛監獄實驗環境</span>
            <p>地下室改裝的監獄，有鐵柵欄、囚室、獄警辦公室，環境陰暗壓抑</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗結果區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-chart-bar"></i>
          實驗結果
        </h2>
        <div class="results-grid">
          <div class="result-card guard-results">
            <div class="result-header">
              <i class="fas fa-user-shield"></i>
              <h3>獄警行為變化</h3>
            </div>
            <ul>
              <li>快速認同權威角色</li>
              <li>出現權力濫用行為</li>
              <li>暴力傾向增加</li>
              <li>群體壓力影響</li>
            </ul>
          </div>
          <div class="result-card prisoner-results">
            <div class="result-header">
              <i class="fas fa-user-lock"></i>
              <h3>囚犯行為變化</h3>
            </div>
            <ul>
              <li>順從和屈服行為</li>
              <li>情緒低落和焦慮</li>
              <li>認同受害者角色</li>
              <li>少數出現反抗</li>
            </ul>
          </div>
        </div>
        
        <!-- 數據可視化預留空間 -->
        <div class="data-visualization">
          <div class="chart-placeholder">
            <div class="placeholder-content">
              <i class="fas fa-chart-line"></i>
              <span>行為變化趨勢圖</span>
              <p>顯示獄警和囚犯行為的變化趨勢，有時間軸和行為強度變化</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗意義區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-lightbulb"></i>
          實驗意義
        </h2>
        <div class="significance-grid">
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>科學貢獻</h3>
            <p>建立了角色影響的理論基礎，推動了社會心理學發展</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>組織應用</h3>
            <p>影響了組織行為學，提醒權力管理的重要性</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>教育啟示</h3>
            <p>為教育環境設計和師生關係提供重要啟示</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h3>司法影響</h3>
            <p>促進監獄改革，影響司法心理學發展</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>理論貢獻概念圖</span>
            <p>津巴多作為中心，周圍有角色理論、情境影響、權力動態等概念，象徵其對社會心理學的貢獻</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 後續應用區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-arrow-right"></i>
          後續應用
        </h2>
        <div class="applications-grid">
          <div class="application-card">
            <h3>組織行為學</h3>
            <p>研究組織中的權力動態、角色影響和環境設計</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>現代企業場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>教育領域</h3>
            <p>設計合理的師生角色和學習環境</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>教育環境設計</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>司法心理學</h3>
            <p>監獄改革和司法系統改進</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>現代監獄改革場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>臨床心理學</h3>
            <p>角色治療和環境治療的應用</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>心理治療場景</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 倫理爭議區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-exclamation-triangle"></i>
          倫理爭議
        </h2>
        <div class="ethics-content">
          <div class="ethics-card">
            <h3>道德問題</h3>
            <ul>
              <li>實驗對被試造成的心理傷害</li>
              <li>被試的知情同意問題</li>
              <li>實驗過程中的控制問題</li>
              <li>實驗提前終止的決定</li>
            </ul>
          </div>
          <div class="ethics-card">
            <h3>倫理改進</h3>
            <ul>
              <li>加強實驗的倫理審查</li>
              <li>加強被試的保護措施</li>
              <li>改進知情同意的程序</li>
              <li>提供被試的心理支持</li>
            </ul>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>倫理爭議概念圖</span>
            <p>顯示實驗倫理、被試保護、心理傷害等概念，象徵實驗的倫理問題</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 現代意義區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-globe"></i>
          現代意義
        </h2>
        <div class="modern-significance">
          <div class="modern-card">
            <h3>數位時代的應用</h3>
            <p>研究虛擬世界中的角色影響，網路環境對行為的影響</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>現代數位場景</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>人工智能時代</h3>
            <p>探索AI在角色中的應用，虛擬環境的設計</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>AI與虛擬環境</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>未來研究方向</h3>
            <p>跨文化研究、神經科學結合、計算模型建立</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>未來研究概念</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 結論區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-flag-checkered"></i>
          結論
        </h2>
        <div class="conclusion-content">
          <div class="conclusion-text">
            <h3>實驗價值</h3>
            <p>津巴多監獄實驗揭示了角色和環境對人性的強大影響，不僅對心理學理論發展產生重要影響，也對社會各個領域的實踐產生深遠啟示。這個實驗提醒我們，在設計社會環境和角色時需要更加謹慎和人性化。</p>
          </div>
          <div class="conclusion-highlights">
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>成為心理學的經典實驗</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>為多個理論提供基礎</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>對社會產生深遠影響</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>促進倫理建設發展</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 設定頁面標題和描述
useHead({
  title: '津巴多監獄實驗 - 角色與人性的轉變',
  meta: [
    {
      name: 'description',
      content: '探索史丹佛監獄實驗如何揭示角色和環境對人性的深刻影響，了解這個經典心理學實驗的過程、結果和現代意義。'
    }
  ]
})

const processSteps = [
  {
    title: '靈感的誕生',
    description: '津巴多觀察到監獄暴力事件並非源於個體本身的惡，而是來自於角色和環境的影響。他開始思考：如果普通人被放進模擬監獄，會如何改變？',
    imageDesc: '津巴多在辦公室思考實驗設計'
  },
  {
    title: '實驗設計',
    description: '將史丹佛大學地下室改造成真實監獄，招募24名健康男性大學生，隨機分配為獄警和囚犯，制定嚴格的監獄規則。',
    imageDesc: '監獄環境設計圖'
  },
  {
    title: '角色分配',
    description: '囚犯穿上簡陋囚服，戴上編號，失去個人身份；獄警穿上制服，配備警棍和墨鏡，象徵權威和匿名性。',
    imageDesc: '角色分配過程'
  },
  {
    title: '實驗開始',
    description: '囚犯被警車帶到監獄，經歷搜身、剃髮、編號等入獄流程。獄警開始制定規則，安排作息。',
    imageDesc: '實驗開始場景'
  },
  {
    title: '角色轉變',
    description: '普通大學生在短短幾天內完全融入角色。獄警變得冷酷無情，囚犯變得被動順從。',
    imageDesc: '角色轉變過程'
  },
  {
    title: '實驗終止',
    description: '因一名囚犯情緒崩潰，原本計劃兩週的實驗在第六天被迫終止。實驗影響遠超預期。',
    imageDesc: '實驗終止場景'
  }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 監獄動畫效果
  const prisonAnimation = document.querySelector('.prison-animation')
  if (prisonAnimation) {
    prisonAnimation.classList.add('animate')
  }

  // 滾動動畫
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll('.background-card, .timeline-item, .setup-card, .result-card, .significance-card, .ethics-card, .modern-card, .application-card, .context-card')
  animatedElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* 英雄區塊樣式 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
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

.prison-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  opacity: 0.3;
}

.prison-cell {
  position: absolute;
  width: 200px;
  height: 150px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  animation: cellPulse 3s ease-in-out infinite;
}

.cell-bars {
  position: absolute;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  animation: barMove 2s ease-in-out infinite;
}

.cell-bars:nth-child(1) { top: 30%; }
.cell-bars:nth-child(2) { top: 50%; }
.cell-bars:nth-child(3) { top: 70%; }

.guard-figure, .prisoner-figure {
  position: absolute;
  width: 40px;
  height: 60px;
  animation: figureMove 4s ease-in-out infinite;
}

.guard-figure {
  top: 20%;
  right: 20%;
}

.prisoner-figure {
  bottom: 20%;
  left: 20%;
}

.guard-body, .prisoner-body {
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
}

.guard-head, .prisoner-head {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin: 0 auto;
  margin-top: -15px;
}

.guard-arms, .prisoner-arms {
  width: 60px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  position: absolute;
  top: 15px;
  left: -10px;
}

.role-switch-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  animation: switchRotate 6s linear infinite;
}

.switch-arrow {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
  animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes cellPulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}

@keyframes barMove {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes figureMove {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes switchRotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: titleSlideIn 1s ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: subtitleSlideIn 1s ease-out 0.3s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: buttonsSlideIn 1s ease-out 0.6s both;
}

@keyframes titleSlideIn {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes subtitleSlideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes buttonsSlideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* 按鈕樣式 */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* 區塊樣式 */
.section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
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

/* 背景卡片網格 */
.background-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.background-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.background-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.background-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.background-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.background-card p {
  color: #666;
  font-size: 1.1rem;
}

/* 時代背景網格 */
.context-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.context-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.context-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.context-card:hover {
  transform: translateY(-5px);
}

.context-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.context-card p {
  color: #666;
  line-height: 1.6;
}

/* 圖片預留空間 */
.image-placeholder {
  background: #e9ecef;
  border: 2px dashed #adb5bd;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
}

.image-placeholder.small {
  padding: 1.5rem;
  margin: 1rem 0;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #6c757d;
}

.placeholder-content i {
  font-size: 3rem;
}

.placeholder-content span {
  font-size: 1.2rem;
  font-weight: 600;
}

.placeholder-content p {
  font-size: 0.9rem;
  margin: 0;
  max-width: 400px;
}

/* 過程時間軸 */
.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #667eea;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
  opacity: 0;
  transform: translateX(-30px);
}

.timeline-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-image-placeholder {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

/* 設定網格 */
.setup-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.setup-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
}

.setup-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.setup-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.setup-card ul {
  list-style: none;
  padding: 0;
}

.setup-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.setup-card li:last-child {
  border-bottom: none;
}

/* 結果網格 */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.result-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
}

.result-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.guard-results {
  border-left: 4px solid #dc3545;
}

.prisoner-results {
  border-left: 4px solid #28a745;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.result-header i {
  font-size: 2rem;
  color: #667eea;
}

.result-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.result-card ul {
  list-style: none;
  padding: 0;
}

.result-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.result-card li:last-child {
  border-bottom: none;
}

/* 數據可視化 */
.data-visualization {
  margin-top: 3rem;
}

.chart-placeholder {
  background: #e9ecef;
  border: 2px dashed #adb5bd;
  border-radius: 12px;
  padding: 4rem;
  text-align: center;
}

/* 意義網格 */
.significance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.significance-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.significance-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.significance-card:hover {
  transform: translateY(-5px);
}

.significance-card h3 {
  font-size: 1.3rem;
  margin: 1rem 0;
  color: #333;
}

.significance-card p {
  color: #666;
  line-height: 1.6;
}

/* 應用網格 */
.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.application-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.application-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.application-card:hover {
  transform: translateY(-5px);
}

.application-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.application-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* 倫理內容 */
.ethics-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.ethics-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
}

.ethics-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.ethics-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #ffc107;
  padding-bottom: 0.5rem;
}

.ethics-card ul {
  list-style: none;
  padding: 0;
}

.ethics-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.ethics-card li:last-child {
  border-bottom: none;
}

/* 現代意義 */
.modern-significance {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.modern-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.modern-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.modern-card:hover {
  transform: translateY(-5px);
}

.modern-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.modern-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* 結論區塊 */
.conclusion-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.conclusion-text h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.conclusion-text p {
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
}

.conclusion-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.highlight-item i {
  color: #ffc107;
  font-size: 1.2rem;
}

.highlight-item span {
  color: #333;
  font-weight: 500;
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
  
  .section-title {
    font-size: 2rem;
  }
  
  .background-grid,
  .setup-grid,
  .results-grid,
  .significance-grid,
  .ethics-content,
  .modern-significance,
  .applications-grid,
  .context-grid {
    grid-template-columns: 1fr;
  }
  
  .process-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-marker {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .conclusion-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style> 