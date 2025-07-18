<template>
  <main>
    <!-- 英雄區塊 -->
    <header class="hero" role="banner">
      <div class="hero-visual">
        <!-- 認知發展實驗動畫區塊 -->
        <div class="cognitive-development-animation">
          <div class="experiment-lab">
            <!-- 實驗室背景 -->
            <div class="lab-background">
              <div class="floor"></div>
              <div class="wall"></div>
              <div class="window"></div>
              <div class="bookshelf"></div>
            </div>
            
            <!-- 守恆實驗區域 -->
            <div class="conservation-experiment">
              <div class="table"></div>
              <div class="liquid-containers">
                <div class="container glass-a">
                  <div class="liquid" :class="{ 'pouring': isPouring }"></div>
                </div>
                <div class="container glass-b">
                  <div class="liquid" :class="{ 'receiving': isPouring }"></div>
                </div>
                <div class="container tall-glass" :class="{ 'active': showTallGlass }">
                  <div class="liquid tall-liquid" :class="{ 'filled': isPouring }"></div>
                </div>
              </div>
              <div class="pouring-stream" v-show="isPouring"></div>
            </div>
            
            <!-- 人物 -->
            <div class="people-group">
              <div class="person piaget">
                <div class="person-head"></div>
                <div class="person-body"></div>
                <div class="thought-bubble researcher"></div>
              </div>
              <div class="person child" :class="childState">
                <div class="person-head child-head"></div>
                <div class="person-body child-body"></div>
                <div class="thought-bubble child-thought" v-show="showChildThought">
                  {{ currentThought }}
                </div>
              </div>
            </div>
            
            <!-- 認知發展階段指標 -->
            <div class="development-waves">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
          
          <!-- 發展階段指標 -->
          <div class="stage-indicators">
            <div class="indicator sensorimotor">感知運動期</div>
            <div class="indicator preoperational">前運思期</div>
            <div class="indicator concrete">具體運思期</div>
            <div class="indicator formal">形式運思期</div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">🧠 皮亞傑認知發展實驗</h1>
        <p class="hero-subtitle">兒童思維的奧秘 - 探索認知發展的階段性規律</p>
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
            <p>1920-1970年</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <h3>實驗地點</h3>
            <p>瑞士日內瓦大學</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>實驗者</h3>
            <p>讓·皮亞傑</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>實驗意義</h3>
            <p>揭示兒童認知發展的階段性</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>皮亞傑實驗室場景</span>
            <p>讓·皮亞傑在日內瓦大學實驗室中與兒童進行認知發展實驗，兒童正在進行數量守恆任務，皮亞傑耐心觀察，1920年代瑞士大學實驗室風格，黑白攝影風格，高解析度</p>
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
            <h3>教育變革</h3>
            <p>20世紀初教育理念的變革，對兒童發展的深入關注</p>
          </div>
          <div class="context-card">
            <h3>兒童研究興起</h3>
            <p>兒童心理學和發展心理學開始興起，科學研究兒童</p>
          </div>
          <div class="context-card">
            <h3>認知心理學發展</h3>
            <p>認知心理學和發展心理學的快速發展時期</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>1920年代瑞士社會場景</span>
            <p>兒童在學校中學習，象徵當時的教育理念和對兒童發展的關注，1920年代歐洲教育氛圍，復古攝影風格</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗設計區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-cogs"></i>
          實驗設計
        </h2>
        <div class="experiment-design">
          <div class="design-card conservation-tasks">
            <h3>守恆任務</h3>
            <div class="conservation-demonstration">
              <div class="task-type">
                <h4>液體守恆</h4>
                <div class="task-visual">
                  <div class="demo-container wide"></div>
                  <div class="arrow">→</div>
                  <div class="demo-container tall"></div>
                </div>
              </div>
              <div class="task-type">
                <h4>數量守恆</h4>
                <div class="task-visual">
                  <div class="demo-objects spread"></div>
                  <div class="arrow">→</div>
                  <div class="demo-objects bunched"></div>
                </div>
              </div>
              <div class="task-type">
                <h4>重量守恆</h4>
                <div class="task-visual">
                  <div class="demo-shape round"></div>
                  <div class="arrow">→</div>
                  <div class="demo-shape flat"></div>
                </div>
              </div>
            </div>
            <p>測試兒童對物質守恆概念的理解程度</p>
          </div>
          
          <div class="design-card clinical-method">
            <h3>臨床訪談法</h3>
            <div class="method-visualization">
              <div class="interview-step">
                <i class="fas fa-comments"></i>
                <span>自然對話</span>
                <div class="step-description">與兒童進行自然對話</div>
              </div>
              <div class="interview-step">
                <i class="fas fa-question-circle"></i>
                <span>深入提問</span>
                <div class="step-description">探索兒童的思維過程</div>
              </div>
              <div class="interview-step">
                <i class="fas fa-eye"></i>
                <span>行為觀察</span>
                <div class="step-description">觀察兒童的反應</div>
              </div>
              <div class="interview-step">
                <i class="fas fa-lightbulb"></i>
                <span>理解建構</span>
                <div class="step-description">理解兒童的認知結構</div>
              </div>
            </div>
            <p>皮亞傑獨創的研究方法，深入探索兒童思維</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>皮亞傑守恆實驗材料</span>
            <p>顯示兩個相同的杯子，其中一個的水被倒入細長杯子中，兒童正在判斷水量是否相等，現代插畫風格</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗過程區塊 -->
    <section id="process" class="section bg-light">
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
        
        <!-- 守恆實驗演示 -->
        <div class="conservation-demo">
          <h3>液體守恆實驗演示</h3>
          <div class="demo-controls">
            <button @click="startConservationDemo" class="btn btn-primary" :disabled="demoRunning">
              <i class="fas fa-play"></i>
              {{ demoRunning ? '實驗進行中' : '開始演示' }}
            </button>
            <button @click="resetConservationDemo" class="btn btn-secondary">
              <i class="fas fa-undo"></i>
              重置演示
            </button>
            <div class="demo-status">
              <strong>當前階段：</strong>{{ currentDemoPhase }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 認知發展階段區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-stairs"></i>
          認知發展階段
        </h2>
        <div class="stages-overview">
          <div class="stage-card sensorimotor-stage">
            <div class="stage-header">
              <i class="fas fa-hand-paper"></i>
              <h3>感知運動期</h3>
              <span class="age-range">0-2歲</span>
            </div>
            <ul>
              <li>以感知和動作為主</li>
              <li>發展物體恆存概念</li>
              <li>建立基本因果關係</li>
              <li>開始符號思維萌芽</li>
            </ul>
          </div>
          <div class="stage-card preoperational-stage">
            <div class="stage-header">
              <i class="fas fa-child"></i>
              <h3>前運思期</h3>
              <span class="age-range">2-7歲</span>
            </div>
            <ul>
              <li>開始使用符號和語言</li>
              <li>思維具有自我中心性</li>
              <li>尚未掌握守恆概念</li>
              <li>思維受直覺感知支配</li>
            </ul>
          </div>
          <div class="stage-card concrete-stage">
            <div class="stage-header">
              <i class="fas fa-puzzle-piece"></i>
              <h3>具體運思期</h3>
              <span class="age-range">7-11歲</span>
            </div>
            <ul>
              <li>掌握邏輯思維能力</li>
              <li>理解守恆概念</li>
              <li>能進行分類和排序</li>
              <li>思維仍限於具體事物</li>
            </ul>
          </div>
          <div class="stage-card formal-stage">
            <div class="stage-header">
              <i class="fas fa-atom"></i>
              <h3>形式運思期</h3>
              <span class="age-range">11歲以上</span>
            </div>
            <ul>
              <li>發展抽象思維能力</li>
              <li>能進行假設性思考</li>
              <li>掌握科學推理方法</li>
              <li>思維具有系統性</li>
            </ul>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>認知發展階段概念圖</span>
            <p>顯示兒童從感知運動期到形式運思期的發展階段，有時間軸和發展里程碑，現代插畫風格</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 心理機制區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-brain"></i>
          學習心理機制
        </h2>
        <div class="mechanism-grid">
          <div class="mechanism-card">
            <h3>同化</h3>
            <p>將新經驗納入現有的認知圖式中，用現有知識理解新事物</p>
            <div class="mechanism-icon">
              <i class="fas fa-download"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>調適</h3>
            <p>調整現有的認知圖式以適應新經驗，改變認知結構</p>
            <div class="mechanism-icon">
              <i class="fas fa-tools"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>平衡</h3>
            <p>在同化和調適之間達到平衡，實現認知的穩定發展</p>
            <div class="mechanism-icon">
              <i class="fas fa-balance-scale"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>建構</h3>
            <p>兒童主動建構知識和理解，是認知發展的主要動力</p>
            <div class="mechanism-icon">
              <i class="fas fa-building"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗意義區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-lightbulb"></i>
          實驗意義
        </h2>
        <div class="significance-grid">
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-microscope"></i>
            </div>
            <h3>理論貢獻</h3>
            <p>建立了認知發展理論，推動了建構主義和發展心理學的發展</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>教育革命</h3>
            <p>徹底改變了教育理念，強調適合兒童發展階段的教學方法</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-search"></i>
            </div>
            <h3>方法創新</h3>
            <p>創立了臨床訪談法，為兒童心理學研究提供了新的方法</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-child"></i>
            </div>
            <h3>兒童觀念</h3>
            <p>改變了對兒童的看法，視兒童為主動的知識建構者</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>理論貢獻概念圖</span>
            <p>皮亞傑作為中心，周圍有認知發展、建構主義、適應理論等概念，象徵其對發展心理學的貢獻，現代插畫風格</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 後續應用區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-arrow-right"></i>
          後續應用
        </h2>
        <div class="applications-grid">
          <div class="application-card">
            <h3>教育領域</h3>
            <p>建構主義教學、發展適配教育、課程設計、學習評估</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>現代教室場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>臨床心理學</h3>
            <p>兒童發展評估、學習困難診斷、遊戲治療、發展治療</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>兒童心理治療場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>社會工作</h3>
            <p>兒童保護、家庭服務、社區教育、政策制定</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>兒童社會工作場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>家庭教育</h3>
            <p>親職教育、發展支持、學習指導、環境創設</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>家庭教育場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>數位學習</h3>
            <p>智能教育、個性化學習、認知評估、學習分析</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>數位學習場景</span>
              </div>
            </div>
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
            <h3>數位時代的認知發展</h3>
            <p>研究數位原住民的認知發展特點和學習方式</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>數位學習場景</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>跨文化認知研究</h3>
            <p>探索不同文化背景下認知發展的共性與差異</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>跨文化教育場景</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>神經科學整合</h3>
            <p>結合腦神經科學驗證和深化認知發展理論</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>腦神經研究場景</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>現代與古典結合概念圖</span>
            <p>左側是皮亞傑的經典實驗，右側是現代數位學習，中間有橋樑連接，象徵理論的傳承與創新</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 實驗局限區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-exclamation-triangle"></i>
          實驗局限
        </h2>
        <div class="limitations-content">
          <div class="limitation-card">
            <h3>方法局限</h3>
            <ul>
              <li>過分強調邏輯思維的重要性</li>
              <li>忽視社會文化因素的影響</li>
              <li>低估了兒童的認知能力</li>
              <li>階段劃分過於絕對化</li>
            </ul>
          </div>
          <div class="limitation-card">
            <h3>理論局限</h3>
            <ul>
              <li>對個體差異考慮不足</li>
              <li>忽視情感因素的作用</li>
              <li>缺乏跨文化驗證</li>
              <li>發展連續性認識不足</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 結論區塊 -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-flag-checkered"></i>
          結論
        </h2>
        <div class="conclusion-content">
          <div class="conclusion-text">
            <h3>實驗價值</h3>
            <p>皮亞傑認知發展實驗作為發展心理學史上的里程碑，徹底改變了我們對兒童思維的理解。他的研究告訴我們，兒童不是縮小版的成人，而是具有獨特思維方式的主動學習者。這一發現對教育、心理學和社會政策都產生了深遠影響。</p>
            <blockquote>
              <p>「兒童是積極的知識建構者，而非被動的接受者。」</p>
              <cite>—— 讓·皮亞傑</cite>
            </blockquote>
          </div>
          <div class="conclusion-highlights">
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>革命性地改變兒童觀念</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>建立認知發展階段理論</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>推動建構主義教育發展</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>影響現代教育和心理學</span>
            </div>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>學者紀念場景</span>
            <p>皮亞傑的雕像在現代大學中，學生和兒童圍坐在雕像周圍進行學習活動，象徵理論的傳承和實踐</p>
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
  title: '皮亞傑認知發展實驗 - 兒童思維的奧秘',
  meta: [
    {
      name: 'description',
      content: '探索讓·皮亞傑的經典認知發展實驗，了解兒童思維發展的四個階段和建構主義學習理論，包含守恆實驗和發展心理學的重要發現。'
    },
    {
      name: 'keywords',
      content: '皮亞傑, 認知發展, 守恆實驗, 建構主義, 發展心理學, 兒童教育, 臨床訪談法, 認知階段'
    }
  ]
})

// 動畫狀態
const isPouring = ref(false)
const showTallGlass = ref(false)
const childState = ref('thinking')
const currentThought = ref('')
const showChildThought = ref(false)
const demoRunning = ref(false)
const currentDemoPhase = ref('準備階段')

const processSteps = [
  {
    title: '孩子的邏輯發現',
    description: '在20世紀的瑞士，讓·皮亞傑對兒童的思維方式充滿了好奇。他發現，孩子們犯的錯誤並非隨機，而是系統性的，這揭示了他們獨特的內在邏輯。他沒有把孩子當作什麼都不懂的「小大人」，而是將他們視為積極建構知識的科學家。',
    imageDesc: '皮亞傑在實驗室中觀察兒童行為'
  },
  {
    title: '一杯水的魔法',
    description: '一個經典的場景是「液體守恆」任務。皮亞傑向一個名叫盧西安的5歲男孩展示了兩個一模一樣的杯子，裡面裝著等量的水。當水被倒進一個又高又細的玻璃杯裡時，盧西安毫不猶豫地說高腳杯裡的水比較多，因為「它比較高啊！」',
    imageDesc: '液體守恆實驗的具體操作過程'
  },
  {
    title: '從具體到抽象的飛躍',
    description: '幾年後，皮亞傑對一個名叫雅各琳的8歲女孩進行了同樣的實驗。當水被倒入高腳杯後，雅各琳笑著說：「它們還是一樣多，因為你只是把它倒過去而已，沒有變多也沒有變少。」這標誌著她進入了「具體運思期」。',
    imageDesc: '不同年齡兒童的反應差異對比'
  },
  {
    title: '四個發展階段的建立',
    description: '透過數百個與孩子們的互動，皮亞傑逐漸描繪出兒童認知發展的宏偉藍圖——從依賴感官和動作的「感知運動期」，到運用符號但思維尚不成熟的「前運思期」，再到掌握邏輯思維的「具體運思期」，最終達到能夠進行抽象和假設性思考的「形式運思期」。',
    imageDesc: '四個認知發展階段的概念圖'
  },
  {
    title: '建構主義的誕生',
    description: '皮亞傑的發現揭示了兒童不是被動接受知識，而是主動建構理解的過程。他提出的同化、調適、平衡等概念，成為建構主義學習理論的基石，徹底改變了教育和心理學領域的觀念。',
    imageDesc: '建構主義理論的形成過程'
  },
  {
    title: '永恆的影響',
    description: '皮亞傑的實驗故事告訴我們，兒童的成長不僅是知識的積累，更是思維結構的根本性變革。每一個孩子都是在用自己的方式，一步步地解開這個世界的謎題。他的理論至今仍指導著全世界的教育實踐。',
    imageDesc: '皮亞傑理論在現代教育中的應用'
  }
]

const demoPhases = [
  {
    name: '準備階段',
    duration: 2000,
    actions: () => {
      isPouring.value = false
      showTallGlass.value = true
      childState.value = 'observing'
      currentThought.value = '兩杯水一樣多'
      showChildThought.value = true
    }
  },
  {
    name: '倒水階段',
    duration: 3000,
    actions: () => {
      isPouring.value = true
      childState.value = 'watching'
      currentThought.value = '水在移動...'
      showChildThought.value = true
    }
  },
  {
    name: '判斷階段',
    duration: 2000,
    actions: () => {
      isPouring.value = false
      childState.value = 'thinking'
      currentThought.value = '這杯比較多！'
      showChildThought.value = true
    }
  },
  {
    name: '解釋階段',
    duration: 3000,
    actions: () => {
      childState.value = 'explaining'
      currentThought.value = '因為它比較高啊！'
      showChildThought.value = true
    }
  }
]

let demoTimeout = null
let currentPhaseIndex = 0

const startConservationDemo = () => {
  if (demoRunning.value) return
  
  demoRunning.value = true
  currentPhaseIndex = 0
  runDemoPhase()
}

const runDemoPhase = () => {
  if (currentPhaseIndex >= demoPhases.length) {
    demoRunning.value = false
    return
  }

  const phase = demoPhases[currentPhaseIndex]
  currentDemoPhase.value = phase.name
  phase.actions()

  demoTimeout = setTimeout(() => {
    currentPhaseIndex++
    runDemoPhase()
  }, phase.duration)
}

const resetConservationDemo = () => {
  if (demoTimeout) {
    clearTimeout(demoTimeout)
  }
  demoRunning.value = false
  currentPhaseIndex = 0
  isPouring.value = false
  showTallGlass.value = false
  childState.value = 'neutral'
  showChildThought.value = false
  currentDemoPhase.value = '準備階段'
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 認知發展動畫效果
  const cognitiveAnimation = document.querySelector('.cognitive-development-animation')
  if (cognitiveAnimation) {
    cognitiveAnimation.classList.add('animate')
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
  const animatedElements = document.querySelectorAll('.background-card, .timeline-item, .stage-card, .significance-card, .application-card, .context-card, .mechanism-card, .modern-card, .limitation-card, .design-card')
  animatedElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* 英雄區塊樣式 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #4caf50 0%, #2196f3 50%, #9c27b0 100%);
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

.cognitive-development-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  opacity: 0.3;
}

.experiment-lab {
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  animation: labPulse 6s ease-in-out infinite;
}

.lab-background {
  position: absolute;
  inset: 0;
}

.floor {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgba(139, 69, 19, 0.3);
  border-radius: 0 0 18px 18px;
}

.wall {
  position: absolute;
  top: 0;
  width: 100%;
  height: 290px;
  background: rgba(240, 248, 255, 0.2);
  border-radius: 18px 18px 0 0;
}

.window {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 40px;
  background: rgba(135, 206, 250, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
}

.bookshelf {
  position: absolute;
  top: 40px;
  left: 20px;
  width: 40px;
  height: 80px;
  background: rgba(160, 82, 45, 0.4);
  border-radius: 4px;
}

.conservation-experiment {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 120px;
}

.table {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background: rgba(139, 69, 19, 0.5);
  border-radius: 4px;
}

.liquid-containers {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;
  align-items: flex-end;
}

.container {
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px 4px 8px 8px;
  background: rgba(255, 255, 255, 0.1);
}

.glass-a, .glass-b {
  width: 40px;
  height: 60px;
}

.tall-glass {
  width: 30px;
  height: 80px;
  opacity: 0;
  transition: opacity 1s ease;
}

.tall-glass.active {
  opacity: 1;
}

.liquid {
  position: absolute;
  bottom: 2px;
  left: 2px;
  right: 2px;
  height: 40px;
  background: rgba(33, 150, 243, 0.7);
  border-radius: 0 0 4px 4px;
  transition: all 1s ease;
}

.liquid.pouring {
  height: 20px;
  animation: liquidPouring 2s ease-in-out;
}

.liquid.receiving {
  height: 20px;
}

.tall-liquid {
  height: 0;
  transition: height 2s ease;
}

.tall-liquid.filled {
  height: 50px;
}

.pouring-stream {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 40px;
  background: rgba(33, 150, 243, 0.7);
  border-radius: 2px;
  animation: streamFlow 2s ease-in-out;
}

.people-group {
  position: absolute;
  bottom: 70px;
  left: 30px;
  display: flex;
  gap: 40px;
  align-items: flex-end;
}

.person {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
}

.person-head {
  width: 20px;
  height: 20px;
  background: rgba(255, 222, 173, 0.8);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.person-body {
  width: 24px;
  height: 30px;
  background: rgba(108, 117, 125, 0.7);
  border-radius: 8px;
  margin-top: 2px;
}

.child-head {
  width: 16px;
  height: 16px;
}

.child-body {
  width: 18px;
  height: 20px;
  background: rgba(76, 175, 80, 0.7);
}

.piaget {
  animation: researcherObserve 4s ease-in-out infinite;
}

.child.thinking {
  animation: childThinking 3s ease-in-out infinite;
}

.child.watching {
  animation: childWatching 2s ease-in-out infinite;
}

.child.explaining {
  animation: childExplaining 2s ease-in-out infinite;
}

.thought-bubble {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.thought-bubble::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(255, 255, 255, 0.9);
}

.researcher {
  background: rgba(108, 117, 125, 0.9);
  color: white;
  animation: researcherThought 5s ease-in-out infinite;
}

.child-thought {
  opacity: 1;
  animation: childThoughtBubble 3s ease-in-out infinite;
}

.development-waves {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: developmentWave 4s ease-out infinite;
}

.wave:nth-child(2) {
  animation-delay: 1.3s;
}

.wave:nth-child(3) {
  animation-delay: 2.6s;
}

.stage-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.indicator {
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 10px;
  animation: stageIndicatorPulse 3s ease-in-out infinite;
}

.sensorimotor {
  background: rgba(255, 87, 34, 0.8);
}

.preoperational {
  background: rgba(255, 193, 7, 0.8);
}

.concrete {
  background: rgba(76, 175, 80, 0.8);
}

.formal {
  background: rgba(156, 39, 176, 0.8);
}

/* 動畫定義 */
@keyframes labPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.02); opacity: 0.4; }
}

@keyframes liquidPouring {
  0% { height: 40px; }
  50% { height: 10px; }
  100% { height: 20px; }
}

@keyframes streamFlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes researcherObserve {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes childThinking {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(2deg); }
  75% { transform: translateY(2px) rotate(-2deg); }
}

@keyframes childWatching {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes childExplaining {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-2px) scale(1.05); }
}

@keyframes researcherThought {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@keyframes childThoughtBubble {
  0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
  50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
}

@keyframes developmentWave {
  0% { width: 50px; height: 50px; opacity: 0.8; }
  100% { width: 200px; height: 200px; opacity: 0; }
}

@keyframes stageIndicatorPulse {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.05); }
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

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-primary:hover:not(:disabled) {
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
  color: #4caf50;
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
  border-bottom: 2px solid #4caf50;
  padding-bottom: 0.5rem;
}

.context-card p {
  color: #666;
  line-height: 1.6;
}

/* 實驗設計 */
.experiment-design {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.design-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
}

.design-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.conservation-tasks {
  border-left: 4px solid #4caf50;
}

.clinical-method {
  border-left: 4px solid #2196f3;
}

.design-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.conservation-demonstration {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.task-type {
  text-align: center;
}

.task-type h4 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #666;
}

.task-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.demo-container {
  border: 2px solid #333;
  border-radius: 4px;
  background: rgba(33, 150, 243, 0.3);
}

.demo-container.wide {
  width: 30px;
  height: 20px;
}

.demo-container.tall {
  width: 15px;
  height: 30px;
}

.demo-objects, .demo-shape {
  background: #ff9800;
  border-radius: 4px;
}

.demo-objects.spread {
  width: 40px;
  height: 8px;
}

.demo-objects.bunched {
  width: 20px;
  height: 8px;
}

.demo-shape.round {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.demo-shape.flat {
  width: 30px;
  height: 10px;
}

.arrow {
  font-size: 1.2rem;
  color: #666;
}

.method-visualization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}

.interview-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.interview-step:hover {
  transform: scale(1.05);
}

.interview-step i {
  font-size: 1.5rem;
  color: #2196f3;
  margin-bottom: 0.5rem;
}

.interview-step span {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 0.8rem;
  color: #666;
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
  margin: 0 auto 3rem auto;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #4caf50;
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
  background: #4caf50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
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

/* 守恆實驗演示 */
.conservation-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.conservation-demo h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.demo-status {
  font-size: 1rem;
  color: #666;
  margin-left: 1rem;
}

/* 認知發展階段 */
.stages-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stage-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.stage-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stage-card:hover {
  transform: translateY(-5px);
}

.sensorimotor-stage {
  border-left: 4px solid #ff5722;
}

.preoperational-stage {
  border-left: 4px solid #ffc107;
}

.concrete-stage {
  border-left: 4px solid #4caf50;
}

.formal-stage {
  border-left: 4px solid #9c27b0;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.stage-header i {
  font-size: 2rem;
  color: #4caf50;
}

.stage-header h3 {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
  flex: 1;
}

.age-range {
  background: #f8f9fa;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
}

.stage-card ul {
  list-style: none;
  padding: 0;
}

.stage-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.stage-card li:last-child {
  border-bottom: none;
}

/* 心理機制網格 */
.mechanism-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.mechanism-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.mechanism-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.mechanism-card:hover {
  transform: translateY(-5px);
}

.mechanism-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.mechanism-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.mechanism-icon {
  font-size: 2rem;
  color: #4caf50;
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
  border-bottom: 2px solid #4caf50;
  padding-bottom: 0.5rem;
}

.application-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
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

/* 局限內容 */
.limitations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.limitation-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
}

.limitation-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.limitation-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #ffc107;
  padding-bottom: 0.5rem;
}

.limitation-card ul {
  list-style: none;
  padding: 0;
}

.limitation-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.limitation-card li:last-child {
  border-bottom: none;
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
  margin-bottom: 2rem;
}

.conclusion-text blockquote {
  background: #f8f9fa;
  border-left: 4px solid #4caf50;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.conclusion-text blockquote p {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.conclusion-text cite {
  font-size: 0.9rem;
  color: #999;
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
  .stages-overview,
  .significance-grid,
  .applications-grid,
  .context-grid,
  .mechanism-grid,
  .modern-significance,
  .limitations-content {
    grid-template-columns: 1fr;
  }
  
  .experiment-design {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  
  .cognitive-development-animation {
    width: 350px;
    height: 250px;
  }
  
  .liquid-containers {
    gap: 20px;
  }
  
  .people-group {
    gap: 20px;
  }
  
  .stage-indicators {
    gap: 5px;
  }
  
  .demo-controls {
    flex-direction: column;
    text-align: center;
  }
  
  .stage-header {
    justify-content: center;
    text-align: center;
  }
  
  .method-visualization {
    grid-template-columns: 1fr;
  }
}
</style> 