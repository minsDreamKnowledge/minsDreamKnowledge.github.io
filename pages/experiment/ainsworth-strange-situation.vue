<template>
  <main>
    <!-- 英雄區塊 -->
    <header class="hero" role="banner">
      <div class="hero-visual">
        <!-- 陌生情境實驗動畫區塊 -->
        <div class="strange-situation-animation">
          <div class="experiment-room">
            <!-- 實驗室背景 -->
            <div class="room-background">
              <div class="floor"></div>
              <div class="wall"></div>
              <div class="window"></div>
              <div class="door"></div>
            </div>
            
            <!-- 玩具區 -->
            <div class="toys-area">
              <div class="toy toy-ball"></div>
              <div class="toy toy-block"></div>
              <div class="toy toy-car"></div>
            </div>
            
            <!-- 椅子 -->
            <div class="chair"></div>
            
            <!-- 人物 -->
            <div class="people-group">
              <div class="person mother" :class="{ 'leaving': motherGone }">
                <div class="person-head"></div>
                <div class="person-body"></div>
              </div>
              <div class="person baby" :class="babyState">
                <div class="person-head baby-head"></div>
                <div class="person-body baby-body"></div>
                <div class="emotion-indicator" v-show="showEmotion">{{ currentEmotion }}</div>
              </div>
              <div class="person stranger" :class="{ 'present': strangerPresent }">
                <div class="person-head"></div>
                <div class="person-body"></div>
              </div>
            </div>
            
            <!-- 分離焦慮波紋 -->
            <div class="anxiety-waves" v-show="showAnxiety">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
          
          <!-- 依戀類型指標 -->
          <div class="attachment-indicators">
            <div class="indicator secure">安全型 65%</div>
            <div class="indicator avoidant">迴避型 20%</div>
            <div class="indicator resistant">抗拒型 15%</div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">👶 艾因斯沃斯陌生情境實驗</h1>
        <p class="hero-subtitle">依戀關係的奧秘 - 探索嬰兒依戀類型的經典實驗</p>
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
            <p>1978年</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <h3>實驗地點</h3>
            <p>美國約翰霍普金斯大學</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>實驗者</h3>
            <p>瑪麗·艾因斯沃斯</p>
          </div>
          <div class="background-card">
            <div class="card-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>實驗意義</h3>
            <p>揭示嬰兒依戀關係的類型</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>艾因斯沃斯實驗室場景</span>
            <p>瑪麗·艾因斯沃斯在約翰霍普金斯大學實驗室中進行陌生情境實驗，嬰兒與母親分離後重聚，觀察嬰兒的反應，1970年代美國大學實驗室風格，黑白攝影風格，高解析度</p>
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
            <h3>依戀理論發展</h3>
            <p>鮑爾比依戀理論的發展，對兒童早期發展的重視</p>
          </div>
          <div class="context-card">
            <h3>發展心理學興起</h3>
            <p>發展心理學快速發展時期，親子關係研究興起</p>
          </div>
          <div class="context-card">
            <h3>社會環境變遷</h3>
            <p>1970年代美國社會對親子關係的重視和研究</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>1970年代美國社會場景</span>
            <p>母親與嬰兒的親密互動，象徵當時對親子關係的重視，1970年代家庭氛圍，復古攝影風格</p>
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
          <div class="design-card separation-procedure">
            <h3>分離重聚程序</h3>
            <div class="procedure-demonstration">
              <div class="procedure-step">
                <h4>適應階段</h4>
                <div class="step-visual">
                  <div class="mini-person mother-mini"></div>
                  <div class="mini-person baby-mini"></div>
                  <div class="connection-line"></div>
                </div>
              </div>
              <div class="procedure-step">
                <h4>分離階段</h4>
                <div class="step-visual">
                  <div class="mini-person mother-mini leaving"></div>
                  <div class="mini-person baby-mini crying"></div>
                  <div class="separation-line"></div>
                </div>
              </div>
              <div class="procedure-step">
                <h4>重聚階段</h4>
                <div class="step-visual">
                  <div class="mini-person mother-mini"></div>
                  <div class="mini-person baby-mini happy"></div>
                  <div class="reunion-line"></div>
                </div>
              </div>
            </div>
            <p>嬰兒經歷母親離開和返回的過程，觀察依戀行為</p>
          </div>
          
          <div class="design-card attachment-setup">
            <h3>依戀類型觀察</h3>
            <div class="attachment-visualization">
              <div class="attachment-type secure-demo">
                <i class="fas fa-heart"></i>
                <span>安全型</span>
                <div class="type-description">分離焦慮，重聚尋求安慰</div>
              </div>
              <div class="attachment-type avoidant-demo">
                <i class="fas fa-user-minus"></i>
                <span>迴避型</span>
                <div class="type-description">對分離重聚無明顯反應</div>
              </div>
              <div class="attachment-type resistant-demo">
                <i class="fas fa-exclamation-triangle"></i>
                <span>抗拒型</span>
                <div class="type-description">極度焦慮，重聚時抗拒</div>
              </div>
            </div>
            <p>12-18個月大的嬰兒，觀察其依戀行為模式</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>陌生情境實驗環境</span>
            <p>顯示實驗室的佈局，有玩具、椅子、門等，嬰兒和母親在實驗室中，現代插畫風格</p>
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
        
        <!-- 實驗控制按鈕 -->
        <div class="experiment-controls">
          <button @click="startExperiment" class="btn btn-primary" :disabled="experimentRunning">
            <i class="fas fa-play"></i>
            {{ experimentRunning ? '實驗進行中' : '開始實驗' }}
          </button>
          <button @click="resetExperiment" class="btn btn-secondary">
            <i class="fas fa-undo"></i>
            重置實驗
          </button>
          <div class="experiment-status">
            <strong>當前階段：</strong>{{ currentPhase }}
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
        <div class="results-overview">
          <div class="result-stat">
            <div class="stat-number">65%</div>
            <div class="stat-label">安全型依戀</div>
          </div>
          <div class="result-stat">
            <div class="stat-number">20%</div>
            <div class="stat-label">迴避型依戀</div>
          </div>
          <div class="result-stat">
            <div class="stat-number">15%</div>
            <div class="stat-label">抗拒型依戀</div>
          </div>
        </div>
        
        <div class="results-grid">
          <div class="result-card secure-attachment">
            <div class="result-header">
              <i class="fas fa-heart"></i>
              <h3>安全型依戀</h3>
            </div>
            <ul>
              <li>母親在場時積極探索環境</li>
              <li>分離時表現出明顯焦慮</li>
              <li>重聚時迅速尋求安慰</li>
              <li>容易被母親安慰和平靜</li>
            </ul>
          </div>
          <div class="result-card avoidant-attachment">
            <div class="result-header">
              <i class="fas fa-user-minus"></i>
              <h3>迴避型依戀</h3>
            </div>
            <ul>
              <li>對母親缺乏明顯反應</li>
              <li>分離時不顯示焦慮</li>
              <li>重聚時迴避母親接觸</li>
              <li>情緒表達相對平淡</li>
            </ul>
          </div>
          <div class="result-card resistant-attachment">
            <div class="result-header">
              <i class="fas fa-exclamation-triangle"></i>
              <h3>抗拒型依戀</h3>
            </div>
            <ul>
              <li>對母親過度依賴</li>
              <li>分離時極度焦慮痛苦</li>
              <li>重聚時表現出矛盾行為</li>
              <li>既尋求又抗拒母親安慰</li>
            </ul>
          </div>
        </div>
        
        <!-- 數據可視化預留空間 -->
        <div class="data-visualization">
          <div class="chart-placeholder">
            <div class="placeholder-content">
              <i class="fas fa-chart-pie"></i>
              <span>依戀類型分布圖</span>
              <p>顯示不同依戀類型的分布，有餅圖和百分比數據，現代數據可視化風格</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 心理機制區塊 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-brain"></i>
          心理機制
        </h2>
        <div class="mechanism-grid">
          <div class="mechanism-card">
            <h3>依戀系統</h3>
            <p>嬰兒天生的依戀系統被激活，尋求與照顧者的親密關係</p>
            <div class="mechanism-icon">
              <i class="fas fa-link"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>分離焦慮</h3>
            <p>與主要照顧者分離時產生的情緒反應和行為表現</p>
            <div class="mechanism-icon">
              <i class="fas fa-heart-broken"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>探索行為</h3>
            <p>安全依戀為基礎的環境探索和學習行為</p>
            <div class="mechanism-icon">
              <i class="fas fa-search"></i>
            </div>
          </div>
          <div class="mechanism-card">
            <h3>情緒調節</h3>
            <p>通過依戀關係學習情緒管理和自我調節能力</p>
            <div class="mechanism-icon">
              <i class="fas fa-balance-scale"></i>
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
            <p>建立了依戀類型分類系統，完善了依戀理論體系</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-stethoscope"></i>
            </div>
            <h3>臨床應用</h3>
            <p>為兒童心理評估和親子關係診斷提供科學依據</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>教育啟示</h3>
            <p>指導早期教育和親職教育，培養安全依戀關係</p>
          </div>
          <div class="significance-card">
            <div class="card-icon">
              <i class="fas fa-home"></i>
            </div>
            <h3>家庭影響</h3>
            <p>影響現代家庭教育理念和親子互動模式</p>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>理論貢獻概念圖</span>
            <p>艾因斯沃斯作為中心，周圍有依戀理論、親子關係、發展心理學等概念，象徵其對發展心理學的貢獻</p>
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
            <h3>臨床心理學</h3>
            <p>依戀評估、親子治療、發展評估、干預設計</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>現代醫院場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>教育領域</h3>
            <p>早期教育、親子教育、環境設計、教師培訓</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>早期教育場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>社會工作</h3>
            <p>家庭支持、親子輔導、危機干預、政策制定</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>社會工作場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>家庭教育</h3>
            <p>親職教育、親子技巧、情緒管理、發展支持</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>家庭教育場景</span>
              </div>
            </div>
          </div>
          <div class="application-card">
            <h3>數位時代應用</h3>
            <p>虛擬依戀、智能育兒、遠程評估、AI輔助</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>數位育兒場景</span>
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
            <h3>數位時代的依戀</h3>
            <p>社交媒體和智能設備對親子依戀關係的影響</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>數位親子互動</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>跨文化依戀研究</h3>
            <p>不同文化背景下依戀類型的表現和差異</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>跨文化家庭</span>
              </div>
            </div>
          </div>
          <div class="modern-card">
            <h3>神經科學整合</h3>
            <p>結合腦神經科學研究依戀關係的生理基礎</p>
            <div class="image-placeholder small">
              <div class="placeholder-content">
                <i class="fas fa-image"></i>
                <span>大腦研究場景</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>現代與古典結合概念圖</span>
            <p>左側是艾因斯沃斯的原始實驗，右側是現代數位育兒，中間有橋樑連接，象徵理論的傳承與發展</p>
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
              <li>實驗室情境與自然環境有差距</li>
              <li>觀察時間相對較短</li>
              <li>主要基於西方文化背景</li>
              <li>樣本代表性有限</li>
            </ul>
          </div>
          <div class="limitation-card">
            <h3>理論局限</h3>
            <ul>
              <li>對文化因素考慮不足</li>
              <li>個體差異解釋不夠深入</li>
              <li>長期發展追蹤不足</li>
              <li>現代家庭結構變化影響</li>
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
            <p>艾因斯沃斯陌生情境實驗作為發展心理學史上的重要里程碑，不僅揭示了嬰兒依戀關係的奧秘，更為我們理解親子關係和兒童發展提供了重要的科學基礎。這個實驗告訴我們，早期依戀關係對一個人一生的發展都有深遠影響。</p>
            <blockquote>
              <p>「依戀關係是嬰兒探索世界的安全基地。」</p>
              <cite>—— 瑪麗·艾因斯沃斯</cite>
            </blockquote>
          </div>
          <div class="conclusion-highlights">
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>建立依戀類型分類系統</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>完善依戀理論體系</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>影響多個應用領域發展</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-star"></i>
              <span>啟發現代親子教育理念</span>
            </div>
          </div>
        </div>
        
        <!-- 圖片預留空間 -->
        <div class="image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-image"></i>
            <span>學者紀念場景</span>
            <p>艾因斯沃斯的雕像在現代大學中，學生們圍坐在雕像周圍討論依戀理論，象徵科學精神的傳承</p>
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
  title: '艾因斯沃斯陌生情境實驗 - 依戀關係的奧秘',
  meta: [
    {
      name: 'description',
      content: '探索瑪麗·艾因斯沃斯著名的陌生情境實驗，了解嬰兒依戀類型的分類和發展心理學的重要發現，包含實驗過程、結果分析和現代應用。'
    },
    {
      name: 'keywords',
      content: '艾因斯沃斯, 陌生情境實驗, 依戀理論, 嬰兒發展, 親子關係, 發展心理學, 安全型依戀, 迴避型依戀'
    }
  ]
})

// 動畫狀態
const motherGone = ref(false)
const strangerPresent = ref(false)
const babyState = ref('exploring')
const currentPhase = ref('適應階段')
const currentEmotion = ref('')
const showEmotion = ref(false)
const showAnxiety = ref(false)
const experimentRunning = ref(false)

const processSteps = [
  {
    title: '實驗的靈感',
    description: '1978年的約翰霍普金斯大學，瑪麗·艾因斯沃斯思考如何科學地測量嬰兒的依戀關係。她觀察到嬰兒與母親分離時的不同反應，決定設計一個標準化的實驗來研究這些差異。',
    imageDesc: '艾因斯沃斯在實驗室中觀察嬰兒行為'
  },
  {
    title: '實驗室的設置',
    description: '艾因斯沃斯精心設計了一個標準化的實驗室環境，房間裡擺放著適合嬰兒的玩具、一張椅子供母親坐著，還有一扇門供陌生人進出。每個細節都經過深思熟慮。',
    imageDesc: '標準化實驗室環境設置'
  },
  {
    title: '第一對母嬰的經歷',
    description: '瑪麗帶著12個月大的湯米進入實驗室。一開始，湯米在母親的陪伴下快樂地探索玩具。當陌生人進入房間時，湯米顯得有些警惕，但仍然玩耍。',
    imageDesc: '母嬰在實驗室中的初期互動'
  },
  {
    title: '分離的時刻',
    description: '當母親悄悄離開房間時，湯米立刻意識到了變化。他停止玩耍，開始尋找母親，臉上露出困惑和焦慮的表情。這一刻，艾因斯沃斯仔細記錄著每一個細節。',
    imageDesc: '嬰兒意識到母親離開時的反應'
  },
  {
    title: '重聚的反應',
    description: '當母親回到房間時，湯米立刻撲向她尋求安慰。有些嬰兒會迅速平靜下來，有些則需要更長時間，還有些會表現出矛盾的行為。這些差異正是依戀類型的關鍵。',
    imageDesc: '母嬰重聚時的不同反應模式'
  },
  {
    title: '模式的發現',
    description: '經過數百次實驗，艾因斯沃斯發現了三種主要的依戀模式：安全型、迴避型和抗拒型。這個發現革命性地改變了我們對親子關係的理解。',
    imageDesc: '依戀類型分類圖表和統計數據'
  }
]

const phases = [
  {
    name: '適應階段',
    duration: 3000,
    actions: () => {
      motherGone.value = false
      strangerPresent.value = false
      babyState.value = 'exploring'
      showEmotion.value = false
      showAnxiety.value = false
    }
  },
  {
    name: '陌生人進入',
    duration: 2000,
    actions: () => {
      strangerPresent.value = true
      babyState.value = 'cautious'
      currentEmotion.value = '🤔'
      showEmotion.value = true
    }
  },
  {
    name: '第一次分離',
    duration: 3000,
    actions: () => {
      motherGone.value = true
      babyState.value = 'distressed'
      currentEmotion.value = '😢'
      showEmotion.value = true
      showAnxiety.value = true
    }
  },
  {
    name: '第一次重聚',
    duration: 2000,
    actions: () => {
      motherGone.value = false
      babyState.value = 'seeking-comfort'
      currentEmotion.value = '😊'
      showEmotion.value = true
      showAnxiety.value = false
    }
  },
  {
    name: '第二次分離',
    duration: 3000,
    actions: () => {
      motherGone.value = true
      strangerPresent.value = false
      babyState.value = 'very-distressed'
      currentEmotion.value = '😭'
      showEmotion.value = true
      showAnxiety.value = true
    }
  },
  {
    name: '第二次重聚',
    duration: 2000,
    actions: () => {
      motherGone.value = false
      strangerPresent.value = false
      babyState.value = 'reunited'
      currentEmotion.value = '🥰'
      showEmotion.value = true
      showAnxiety.value = false
    }
  }
]

let experimentTimeout = null
let currentPhaseIndex = 0

const startExperiment = () => {
  if (experimentRunning.value) return
  
  experimentRunning.value = true
  currentPhaseIndex = 0
  runPhase()
}

const runPhase = () => {
  if (currentPhaseIndex >= phases.length) {
    experimentRunning.value = false
    return
  }

  const phase = phases[currentPhaseIndex]
  currentPhase.value = phase.name
  phase.actions()

  experimentTimeout = setTimeout(() => {
    currentPhaseIndex++
    runPhase()
  }, phase.duration)
}

const resetExperiment = () => {
  if (experimentTimeout) {
    clearTimeout(experimentTimeout)
  }
  experimentRunning.value = false
  currentPhaseIndex = 0
  phases[0].actions()
  currentPhase.value = phases[0].name
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 陌生情境動畫效果
  const situationAnimation = document.querySelector('.strange-situation-animation')
  if (situationAnimation) {
    situationAnimation.classList.add('animate')
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
  const animatedElements = document.querySelectorAll('.background-card, .timeline-item, .result-card, .significance-card, .application-card, .context-card, .mechanism-card, .modern-card, .limitation-card, .design-card')
  animatedElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* 英雄區塊樣式 */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #673ab7 100%);
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

.strange-situation-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  opacity: 0.3;
}

.experiment-room {
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  animation: roomPulse 6s ease-in-out infinite;
}

.room-background {
  position: absolute;
  inset: 0;
}

.floor {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 193, 7, 0.3);
  border-radius: 0 0 18px 18px;
}

.wall {
  position: absolute;
  top: 0;
  width: 100%;
  height: 290px;
  background: rgba(135, 206, 235, 0.2);
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

.door {
  position: absolute;
  top: 50%;
  left: 0;
  width: 8px;
  height: 60px;
  background: rgba(139, 69, 19, 0.4);
  border-radius: 0 4px 4px 0;
  transform: translateY(-50%);
}

.toys-area {
  position: absolute;
  bottom: 70px;
  left: 20px;
  display: flex;
  gap: 10px;
}

.toy {
  border-radius: 50%;
  animation: toyBounce 3s ease-in-out infinite;
}

.toy-ball {
  width: 20px;
  height: 20px;
  background: rgba(255, 99, 132, 0.7);
}

.toy-block {
  width: 16px;
  height: 16px;
  background: rgba(255, 205, 86, 0.7);
  border-radius: 4px;
  animation-delay: 0.5s;
}

.toy-car {
  width: 24px;
  height: 12px;
  background: rgba(75, 192, 192, 0.7);
  border-radius: 6px;
  animation-delay: 1s;
}

.chair {
  position: absolute;
  bottom: 70px;
  right: 40px;
  width: 30px;
  height: 40px;
  background: rgba(160, 82, 45, 0.6);
  border-radius: 4px;
}

.people-group {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
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
  background: rgba(100, 149, 237, 0.7);
  border-radius: 8px;
  margin-top: 2px;
}

.baby-head {
  width: 16px;
  height: 16px;
}

.baby-body {
  width: 18px;
  height: 20px;
}

.mother.leaving {
  transform: translateX(100px);
  opacity: 0;
}

.stranger {
  opacity: 0;
  transform: translateX(-50px);
}

.stranger.present {
  opacity: 1;
  transform: translateX(0);
}

.baby.exploring {
  animation: babyExplore 4s ease-in-out infinite;
}

.baby.cautious {
  animation: babyCautious 3s ease-in-out infinite;
}

.baby.distressed {
  animation: babyDistressed 2s ease-in-out infinite;
}

.baby.seeking-comfort {
  animation: babyComfort 3s ease-in-out infinite;
}

.baby.very-distressed {
  animation: babyVeryDistressed 1.5s ease-in-out infinite;
}

.baby.reunited {
  animation: babyReunited 4s ease-in-out infinite;
}

.emotion-indicator {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  animation: emotionFloat 2s ease-in-out infinite;
}

.anxiety-waves {
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
  animation: anxietyWave 3s ease-out infinite;
}

.wave:nth-child(2) {
  animation-delay: 1s;
}

.wave:nth-child(3) {
  animation-delay: 2s;
}

.attachment-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.indicator {
  padding: 6px 12px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 12px;
  animation: indicatorPulse 2s ease-in-out infinite;
}

.secure {
  background: rgba(40, 167, 69, 0.8);
}

.avoidant {
  background: rgba(0, 123, 255, 0.8);
}

.resistant {
  background: rgba(220, 53, 69, 0.8);
}

/* 動畫定義 */
@keyframes roomPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.02); opacity: 0.4; }
}

@keyframes toyBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes babyExplore {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-2px) rotate(2deg); }
  75% { transform: translateY(2px) rotate(-2deg); }
}

@keyframes babyCautious {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes babyDistressed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(-3deg); }
  75% { transform: translateY(3px) rotate(3deg); }
}

@keyframes babyComfort {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes babyVeryDistressed {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-5deg); }
  75% { transform: translateY(5px) rotate(5deg); }
}

@keyframes babyReunited {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-3px) scale(1.1); }
}

@keyframes emotionFloat {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
}

@keyframes anxietyWave {
  0% { width: 50px; height: 50px; opacity: 0.8; }
  100% { width: 200px; height: 200px; opacity: 0; }
}

@keyframes indicatorPulse {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.1); }
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
  color: #e91e63;
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
  border-bottom: 2px solid #e91e63;
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

.separation-procedure {
  border-left: 4px solid #e91e63;
}

.attachment-setup {
  border-left: 4px solid #9c27b0;
}

.design-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.procedure-demonstration {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  justify-content: space-around;
}

.procedure-step {
  text-align: center;
  flex: 1;
}

.procedure-step h4 {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #666;
}

.step-visual {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 0.5rem;
}

.mini-person {
  width: 12px;
  height: 20px;
  background: #333;
  border-radius: 6px 6px 2px 2px;
  position: relative;
}

.mini-person::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
}

.mother-mini {
  background: #e91e63;
}

.mother-mini::before {
  background: #e91e63;
}

.baby-mini {
  background: #ffc107;
}

.baby-mini::before {
  background: #ffc107;
}

.mother-mini.leaving {
  opacity: 0.3;
  transform: translateX(10px);
}

.baby-mini.crying {
  animation: miniCry 1s ease-in-out infinite;
}

.baby-mini.happy {
  background: #28a745;
}

.baby-mini.happy::before {
  background: #28a745;
}

.connection-line {
  width: 15px;
  height: 2px;
  background: #28a745;
  border-radius: 1px;
}

.separation-line {
  width: 15px;
  height: 2px;
  background: #dc3545;
  border-radius: 1px;
}

.reunion-line {
  width: 15px;
  height: 2px;
  background: #28a745;
  border-radius: 1px;
  animation: reunionGlow 1s ease-in-out infinite;
}

@keyframes miniCry {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes reunionGlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; box-shadow: 0 0 8px #28a745; }
}

.attachment-visualization {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}

.attachment-type {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.attachment-type:hover {
  transform: scale(1.02);
}

.secure-demo {
  background: rgba(40, 167, 69, 0.1);
  border: 1px solid #28a745;
  color: #28a745;
}

.avoidant-demo {
  background: rgba(0, 123, 255, 0.1);
  border: 1px solid #007bff;
  color: #007bff;
}

.resistant-demo {
  background: rgba(220, 53, 69, 0.1);
  border: 1px solid #dc3545;
  color: #dc3545;
}

.attachment-type i {
  font-size: 1.2rem;
}

.attachment-type span {
  font-weight: 600;
  font-size: 1rem;
}

.type-description {
  font-size: 0.8rem;
  opacity: 0.8;
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
  background: #e91e63;
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
  background: #e91e63;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(233, 30, 99, 0.3);
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

/* 實驗控制 */
.experiment-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.experiment-status {
  font-size: 1rem;
  color: #666;
  margin-left: 1rem;
}

/* 結果概覽 */
.results-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.result-stat {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
}

/* 結果網格 */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

.secure-attachment {
  border-left: 4px solid #28a745;
}

.avoidant-attachment {
  border-left: 4px solid #007bff;
}

.resistant-attachment {
  border-left: 4px solid #dc3545;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.result-header i {
  font-size: 2rem;
  color: #e91e63;
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
  color: #e91e63;
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
  border-bottom: 2px solid #e91e63;
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
  border-left: 4px solid #e91e63;
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
  .results-grid,
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
  
  .results-overview {
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
  
  .strange-situation-animation {
    width: 350px;
    height: 250px;
  }
  
  .people-group {
    gap: 20px;
  }
  
  .attachment-indicators {
    gap: 10px;
  }
  
  .experiment-controls {
    flex-direction: column;
    text-align: center;
  }
}
</style> 