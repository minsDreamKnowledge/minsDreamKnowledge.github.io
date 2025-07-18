<template>
  <main>
    <!-- 英雄區塊 -->
    <ExperimentHero
      :title="heroData.title"
      :subtitle="heroData.subtitle"
      :hero-background="heroData.background"
      :buttons="heroButtons"
      @button-click="handleButtonClick"
    >
      <template #animation>
        <!-- 旁觀者效應動畫區塊 -->
        <div class="bystander-animation">
          <div class="experiment-room">
            <div class="emergency-scene">
              <div class="victim">
                <div class="victim-circle"></div>
                <div class="help-waves">
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
                </div>
              </div>
            </div>
            <div class="bystanders-group">
              <div class="scenario scenario-1">
                <div class="bystander single" v-for="n in 1" :key="n">
                  <div class="bystander-head"></div>
                  <div class="bystander-body"></div>
                  <div class="response-indicator positive"></div>
                </div>
              </div>
              <div class="scenario scenario-2 hidden">
                <div class="bystander group" v-for="n in 3" :key="n">
                  <div class="bystander-head"></div>
                  <div class="bystander-body"></div>
                  <div class="response-indicator uncertain"></div>
                </div>
              </div>
              <div class="scenario scenario-3 hidden">
                <div class="bystander crowd" v-for="n in 5" :key="n">
                  <div class="bystander-head"></div>
                  <div class="bystander-body"></div>
                  <div class="response-indicator negative"></div>
                </div>
              </div>
            </div>
            <div class="responsibility-waves">
              <div class="r-wave"></div>
              <div class="r-wave"></div>
              <div class="r-wave"></div>
            </div>
          </div>
          <div class="bystander-indicators">
            <div class="indicator helping">85%</div>
            <div class="indicator diffusion">31%</div>
          </div>
        </div>
      </template>
    </ExperimentHero>

    <!-- 實驗背景區塊 -->
    <ExperimentSection
      id="background"
      title="實驗背景"
      icon="fas fa-info-circle"
    >
      <BackgroundGrid
        :time="backgroundData.time"
        :location="backgroundData.location"
        :researcher="backgroundData.researcher"
        :significance="backgroundData.significance"
      />
      
      <ImagePlaceholder
        :title="imageData.background.title"
        :description="imageData.background.description"
      />
    </ExperimentSection>

    <!-- 時代背景區塊 -->
    <ExperimentSection
      title="時代背景"
      icon="fas fa-clock"
      bg-light
    >
      <div class="context-grid">
        <ExperimentCard
          v-for="context in contextData"
          :key="context.id"
          variant="context"
          :title="context.title"
          :description="context.description"
        />
      </div>
      
      <ImagePlaceholder
        :title="imageData.context.title"
        :description="imageData.context.description"
      />
    </ExperimentSection>

    <!-- 實驗設計區塊 -->
    <ExperimentSection
      title="實驗設計"
      icon="fas fa-cogs"
    >
      <div class="experiment-design">
        <ExperimentCard
          v-for="design in designData"
          :key="design.id"
          :title="design.title"
          :description="design.description"
          :border-color="accentColor"
        >
          <div v-html="design.content"></div>
        </ExperimentCard>
      </div>
      
      <ImagePlaceholder
        :title="imageData.design.title"
        :description="imageData.design.description"
      />
    </ExperimentSection>

    <!-- 實驗過程區塊 -->
    <ExperimentSection
      id="process"
      title="實驗過程故事"
      icon="fas fa-play-circle"
      bg-light
    >
      <ProcessTimeline
        :steps="processSteps"
        :accent-color="accentColor"
      />
    </ExperimentSection>

    <!-- 實驗結果區塊 -->
    <ExperimentSection
      title="實驗結果"
      icon="fas fa-chart-bar"
    >
      <ResultsOverview
        :stats="resultStats"
        :accent-color="accentColor"
      />
      
      <div class="results-grid">
        <ExperimentCard
          v-for="result in resultCards"
          :key="result.id"
          variant="result"
          :title="result.title"
          :icon="result.icon"
          :items="result.items"
          :border-color="accentColor"
        />
      </div>
      
      <div class="data-visualization">
        <div class="chart-placeholder">
          <ImagePlaceholder
            icon="fas fa-chart-line"
            title="助人行為數據圖表"
            description="顯示不同群體大小下的助人率變化趨勢圖"
            small
          />
        </div>
      </div>
    </ExperimentSection>

    <!-- 心理機制區塊 -->
    <ExperimentSection
      title="心理機制分析"
      icon="fas fa-brain"
      bg-light
    >
      <div class="mechanism-grid">
        <ExperimentCard
          v-for="mechanism in mechanismData"
          :key="mechanism.id"
          variant="significance"
          :title="mechanism.title"
          :icon="mechanism.icon"
          :description="mechanism.description"
          :border-color="accentColor"
        />
      </div>
    </ExperimentSection>

    <!-- 現代意義區塊 -->
    <ExperimentSection
      title="現代意義與應用"
      icon="fas fa-lightbulb"
    >
      <div class="applications-grid">
        <ExperimentCard
          v-for="application in applicationsData"
          :key="application.id"
          :title="application.title"
          :icon="application.icon"
          :items="application.items"
          :border-color="accentColor"
        />
      </div>
    </ExperimentSection>

    <!-- 限制與批評區塊 -->
    <ExperimentSection
      title="實驗限制與後續研究"
      icon="fas fa-exclamation-triangle"
      bg-light
    >
      <div class="limitations-grid">
        <ExperimentCard
          v-for="limitation in limitationsData"
          :key="limitation.id"
          :title="limitation.title"
          :icon="limitation.icon"
          :items="limitation.items"
          border-color="#dc3545"
        />
      </div>
    </ExperimentSection>

    <!-- 結論區塊 -->
    <ExperimentSection
      title="實驗結論"
      icon="fas fa-graduation-cap"
    >
      <div class="conclusion-content">
        <ExperimentCard
          title="研究貢獻"
          icon="fas fa-star"
          :border-color="accentColor"
        >
          <blockquote>
            <p>「旁觀者效應的發現徹底改變了我們對助人行為的理解，揭示了社會情境對個體行為的深刻影響。」</p>
            <cite>— 社會心理學史</cite>
          </blockquote>
        </ExperimentCard>
        
        <div class="conclusion-highlights">
          <div 
            v-for="highlight in conclusionHighlights"
            :key="highlight.id"
            class="highlight-item"
          >
            <i :class="highlight.icon"></i>
            <span>{{ highlight.text }}</span>
          </div>
        </div>
      </div>
    </ExperimentSection>
  </main>
</template>

<script setup>
const accentColor = '#dc2626'

// 使用共用邏輯
const { initializeExperiment, createStandardButtons, createStatsConfig } = useExperiment({
  title: '拉塔內旁觀者效應實驗 - 責任分散的奧秘',
  description: '探索約翰·達利和比布·拉塔內的經典旁觀者效應實驗如何揭示群體中責任分散現象對助人行為的深刻影響，了解85%到31%助人率差異的驚人發現。',
  accentColor
})

// 英雄區塊數據
const heroData = {
  title: '🚨 拉塔內旁觀者效應實驗',
  subtitle: '責任分散的奧秘 - 當群體面對緊急情況時會發生什麼？',
  background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #d97706 100%)'
}

// 按鈕配置
const heroButtons = createStandardButtons()

// 背景數據
const backgroundData = {
  time: '1968年',
  location: '美國哥倫比亞大學',
  researcher: '約翰·達利、比布·拉塔內',
  significance: '揭示群體中責任分散的現象'
}

// 時代背景數據
const contextData = [
  {
    id: 'social',
    title: '社會環境',
    description: '1960年代美國社會變革時期，基蒂案引發對社會冷漠的反思'
  },
  {
    id: 'psychology',
    title: '心理學發展',
    description: '社會心理學快速發展時期，助人行為研究興起'
  },
  {
    id: 'motivation',
    title: '研究動機',
    description: '基蒂·吉諾維斯案震驚社會，38名目擊者無人及時救助'
  }
]

// 實驗設計數據
const designData = [
  {
    id: 'emergency',
    title: '緊急情境任務',
    description: '被試聽到緊急求救聲，測量其助人行為和反應時間',
    content: `
      <div class="emergency-demonstration">
        <div class="demo-emergency">
          <h4>模擬緊急情況</h4>
          <div class="demo-scenario">
            <div class="scenario-icon">🚨</div>
            <div class="scenario-text">癲癇發作求救</div>
          </div>
        </div>
        <div class="demo-response">
          <h4>助人行為測量</h4>
          <div class="response-metrics">
            <div class="metric">反應時間</div>
            <div class="metric">助人率</div>
            <div class="metric">行為強度</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'manipulation',
    title: '群體操縱',
    description: '操縱被試認為的在場人數，觀察責任分散效應',
    content: `
      <div class="group-visualization">
        <div class="condition single-condition">
          <i class="fas fa-user"></i>
          <span>單獨條件</span>
          <div class="help-rate">85%</div>
        </div>
        <div class="condition group-condition">
          <i class="fas fa-users"></i>
          <span>群體條件</span>
          <div class="help-rate">31%</div>
        </div>
      </div>
    `
  }
]

// 實驗過程步驟
const processSteps = [
  {
    title: '基蒂案的震撼',
    description: '1964年紐約基蒂·吉諾維斯案震驚全美，據報導38名目擊者無人及時救助。兩位年輕心理學家達利和拉塔內開始思考：這真的是人性冷漠嗎？還是有其他原因？',
    imageDesc: '基蒂案現場重現'
  },
  {
    title: '實驗的構思',
    description: '達利和拉塔內提出大膽假設：也許正是因為目擊者太多，才導致無人救助。他們決定在實驗室中重現這種情境，用科學方法驗證責任分散理論。',
    imageDesc: '實驗設計過程'
  },
  {
    title: '緊急情境的設計',
    description: '實驗邀請大學生參與"討論"，實際上只有一名真實被試。討論進行中，一名"參與者"突然癲癇發作，發出痛苦求救聲。真實被試將如何反應？',
    imageDesc: '實驗室緊急情境'
  },
  {
    title: '單獨的勇氣',
    description: '當被試認為只有自己聽到求救時，85%的人在60秒內衝出房間尋求幫助。面對一對一的責任，人們展現出強烈的助人傾向。',
    imageDesc: '單獨條件下的反應'
  },
  {
    title: '群體的猶豫',
    description: '當被試認為還有其他人在場時，助人行為急劇下降。三人組中只有62%會助人，五人組更是降至31%。人數越多，行動越少。',
    imageDesc: '群體條件下的猶豫'
  },
  {
    title: '責任的分散',
    description: '實驗揭示了驚人真相：責任會在群體中分散。每個人都認為"別人會幫忙"，結果卻是集體的沉默。這就是著名的旁觀者效應。',
    imageDesc: '責任分散效應圖'
  }
]

// 統計數據
const resultStats = createStatsConfig([
  {
    id: 'single',
    value: '85%',
    label: '單獨條件助人率'
  },
  {
    id: 'group',
    value: '31%',
    label: '群體條件助人率'
  },
  {
    id: 'diffusion',
    value: '54%',
    label: '責任分散程度'
  }
])

// 結果卡片
const resultCards = [
  {
    id: 'diffusion',
    title: '責任分散現象',
    icon: 'fas fa-users',
    items: [
      '群體大小與助人行為呈負相關',
      '單獨條件下85%的人會助人',
      '群體條件下僅31%的人會助人',
      '責任感隨旁觀者增加而稀釋'
    ]
  },
  {
    id: 'timing',
    title: '反應時間影響',
    icon: 'fas fa-clock',
    items: [
      '單獨條件反應時間較短',
      '群體條件反應時間延長',
      '猶豫時間隨群體增大',
      '決策過程更加複雜'
    ]
  },
  {
    id: 'factors',
    title: '影響因素',
    icon: 'fas fa-user',
    items: [
      '緊急情況的明確程度',
      '個體責任感強度',
      '社會規範認知',
      '他人行為的影響'
    ]
  }
]

// 心理機制數據
const mechanismData = [
  {
    id: 'diffusion',
    title: '責任分散',
    icon: 'fas fa-share-alt',
    description: '當有其他人在場時，個體感受到的責任感會被分散到群體中的每個成員'
  },
  {
    id: 'ambiguity',
    title: '情境模糊性',
    icon: 'fas fa-question-circle',
    description: '在模糊情境中，人們會觀察他人行為來判斷是否需要行動'
  },
  {
    id: 'evaluation',
    title: '評價憂慮',
    icon: 'fas fa-eye',
    description: '擔心在他人面前做錯事或被負面評價，導致行動遲疑'
  }
]

// 現代應用數據
const applicationsData = [
  {
    id: 'emergency',
    title: '緊急救援系統',
    icon: 'fas fa-ambulance',
    items: [
      '911緊急電話系統設計',
      '公共場所急救培訓',
      '明確責任分配機制',
      '旁觀者干預訓練'
    ]
  },
  {
    id: 'workplace',
    title: '職場安全管理',
    icon: 'fas fa-briefcase',
    items: [
      '安全事故報告制度',
      '個人責任明確化',
      '團隊協作機制',
      '領導決策培訓'
    ]
  },
  {
    id: 'social',
    title: '社會問題干預',
    icon: 'fas fa-hands-helping',
    items: [
      '霸凌事件處理',
      '社區安全維護',
      '公共道德教育',
      '公民責任培養'
    ]
  }
]

// 限制數據
const limitationsData = [
  {
    id: 'ethics',
    title: '倫理考量',
    icon: 'fas fa-balance-scale',
    items: [
      '欺騙性實驗設計的爭議',
      '心理壓力對被試的影響',
      '現代倫理標準的限制',
      '知情同意的複雜性'
    ]
  },
  {
    id: 'validity',
    title: '生態效度',
    icon: 'fas fa-flask',
    items: [
      '實驗室環境與真實情境差異',
      '大學生樣本的代表性問題',
      '文化背景的影響',
      '時代變遷的考量'
    ]
  }
]

// 結論亮點
const conclusionHighlights = [
  {
    id: 'discovery',
    icon: 'fas fa-lightbulb',
    text: '發現了群體中責任分散的普遍現象'
  },
  {
    id: 'theory',
    icon: 'fas fa-book',
    text: '建立了旁觀者效應的理論基礎'
  },
  {
    id: 'application',
    icon: 'fas fa-cogs',
    text: '為現代緊急救援系統提供科學依據'
  },
  {
    id: 'society',
    icon: 'fas fa-users',
    text: '促進了社會對公民責任的反思'
  }
]

// 圖片數據
const imageData = {
  background: {
    title: '達利和拉塔內實驗室場景',
    description: '約翰·達利和比布·拉塔內在哥倫比亞大學實驗室中進行旁觀者效應實驗，被試面對緊急情況時的困惑表情'
  },
  context: {
    title: '1960年代紐約街頭場景',
    description: '基蒂案發生的街頭，營造都市冷漠氛圍，象徵當時的社會問題和群體冷漠現象'
  },
  design: {
    title: '實驗設計示意圖',
    description: '顯示不同條件下的實驗設置，包括單獨條件和群體條件的對比'
  }
}

// 處理按鈕點擊
const handleButtonClick = (button) => {
  // 可以添加額外的處理邏輯
  console.log('Button clicked:', button)
}

// 頁面初始化
onMounted(() => {
  initializeExperiment('bystander-animation')
})
</script>

<style scoped>
/* 動畫相關樣式 */
.bystander-animation {
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
}

.emergency-scene {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 80px;
  height: 80px;
}

.victim {
  position: relative;
  width: 100%;
  height: 100%;
}

.victim-circle {
  width: 40px;
  height: 40px;
  background: #ff4444;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.help-waves {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wave {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid #ff4444;
  border-radius: 50%;
  animation: expandWave 3s ease-out infinite;
}

.wave:nth-child(2) { animation-delay: 1s; }
.wave:nth-child(3) { animation-delay: 2s; }

.bystanders-group {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 300px;
  height: 120px;
}

.scenario {
  position: absolute;
  display: flex;
  gap: 15px;
  transition: opacity 0.5s ease;
}

.scenario.hidden {
  opacity: 0;
}

.bystander {
  width: 30px;
  height: 50px;
  position: relative;
}

.bystander-head {
  width: 15px;
  height: 15px;
  background: #4a90e2;
  border-radius: 50%;
  margin: 0 auto 5px;
}

.bystander-body {
  width: 20px;
  height: 30px;
  background: #4a90e2;
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
}

.response-indicator {
  position: absolute;
  top: -10px;
  right: -5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.response-indicator.positive { background: #4CAF50; }
.response-indicator.uncertain { background: #FFC107; }
.response-indicator.negative { background: #F44336; }

.responsibility-waves {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}

.r-wave {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: responsibilitySpread 4s ease-out infinite;
}

.r-wave:nth-child(2) { animation-delay: 1.3s; }
.r-wave:nth-child(3) { animation-delay: 2.6s; }

.bystander-indicators {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 20px;
}

.indicator {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.indicator.helping { border-left: 3px solid #4CAF50; }
.indicator.diffusion { border-left: 3px solid #F44336; }

/* 網格佈局 */
.context-grid,
.experiment-design,
.results-grid,
.mechanism-grid,
.applications-grid,
.limitations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.conclusion-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
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

/* 實驗設計特殊樣式 */
.emergency-demonstration {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 1rem 0;
}

.demo-emergency,
.demo-response {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: #f8f9fa;
}

.demo-scenario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.scenario-icon {
  font-size: 2rem;
}

.scenario-text {
  font-size: 0.9rem;
  color: #666;
}

.response-metrics {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metric {
  padding: 8px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #666;
}

.group-visualization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 1.5rem 0;
}

.condition {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
}

.single-condition {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  color: #065f46;
}

.group-condition {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #991b1b;
}

.condition i {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}

.help-rate {
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
}

/* 動畫關鍵幀 */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

@keyframes expandWave {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}

@keyframes responsibilitySpread {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .context-grid,
  .experiment-design,
  .results-grid,
  .mechanism-grid,
  .applications-grid,
  .limitations-grid {
    grid-template-columns: 1fr;
  }
  
  .conclusion-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .bystander-animation {
    width: 350px;
    height: 250px;
  }
  
  .emergency-demonstration {
    grid-template-columns: 1fr;
  }
}
</style> 