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
        <!-- 從眾實驗動畫區塊 -->
        <div class="conformity-animation">
          <div class="experiment-room">
            <div class="line-cards">
              <div class="standard-card">
                <div class="standard-line"></div>
              </div>
              <div class="comparison-card">
                <div class="line line-a"></div>
                <div class="line line-b"></div>
                <div class="line line-c"></div>
              </div>
            </div>
            <div class="participants-group">
              <div class="participant confederate" v-for="n in 7" :key="n">
                <div class="participant-head"></div>
                <div class="participant-body"></div>
                <div class="thought-bubble wrong-answer"></div>
              </div>
              <div class="participant subject">
                <div class="participant-head"></div>
                <div class="participant-body"></div>
                <div class="thought-bubble confused"></div>
              </div>
            </div>
            <div class="pressure-waves">
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
          <div class="conformity-indicators">
            <div class="indicator independent">25%</div>
            <div class="indicator conforming">75%</div>
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
            title="從眾行為數據圖表"
            description="顯示不同群體大小下的從眾率變化趨勢"
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

    <!-- 實驗意義區塊 -->
    <ExperimentSection
      title="實驗意義"
      icon="fas fa-star"
    >
      <div class="significance-grid">
        <ExperimentCard
          v-for="significance in significanceData"
          :key="significance.id"
          variant="significance"
          :title="significance.title"
          :icon="significance.icon"
          :items="significance.items"
          :border-color="accentColor"
        />
      </div>
    </ExperimentSection>

    <!-- 現代應用區塊 -->
    <ExperimentSection
      title="現代應用"
      icon="fas fa-lightbulb"
      bg-light
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
      bg-light
    >
      <div class="conclusion-content">
        <ExperimentCard
          title="研究影響"
          icon="fas fa-star"
          :border-color="accentColor"
        >
          <blockquote>
            <p>「阿希的從眾實驗徹底改變了我們對群體影響力的理解，揭示了社會壓力如何塑造個體行為。」</p>
            <cite>— 社會心理學經典研究</cite>
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
const accentColor = '#667eea'

// 使用共用邏輯
const { initializeExperiment, createStandardButtons, createStatsConfig } = useExperiment({
  title: '阿希從眾實驗 - 群體壓力的力量',
  description: '探索所羅門·阿希的經典從眾實驗如何揭示群體壓力對個體判斷的深刻影響，了解75%的人會在群體壓力下改變正確判斷的驚人發現。',
  accentColor
})

// 英雄區塊數據
const heroData = {
  title: '👥 阿希從眾實驗',
  subtitle: '群體壓力的力量 - 當個體面對群體錯誤判斷時會發生什麼？',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
}

// 按鈕配置
const heroButtons = createStandardButtons()

// 背景數據
const backgroundData = {
  time: '1951年',
  location: '美國斯沃斯莫爾學院',
  researcher: '所羅門·阿希',
  significance: '揭示群體壓力對個體判斷的影響'
}

// 時代背景數據
const contextData = [
  {
    id: 'social',
    title: '社會背景',
    description: '二戰後美國社會關注個體與群體關係，從眾行為成為重要研究議題'
  },
  {
    id: 'psychology',
    title: '心理學發展',
    description: '社會心理學興起，格式塔心理學影響下的知覺研究蓬勃發展'
  },
  {
    id: 'motivation',
    title: '研究動機',
    description: '阿希觀察到日常生活中的從眾現象，決定用科學方法驗證群體影響'
  }
]

// 實驗設計數據
const designData = [
  {
    id: 'task',
    title: '視覺判斷任務',
    description: '使用簡單的線段長度比較任務，確保答案明確無爭議',
    content: `
      <div class="line-comparison-demo">
        <div class="demo-cards">
          <div class="demo-standard">
            <h4>標準線</h4>
            <div class="demo-line standard"></div>
          </div>
          <div class="demo-comparison">
            <h4>比較線</h4>
            <div class="demo-lines">
              <div class="demo-line line-a">A</div>
              <div class="demo-line line-b">B</div>
              <div class="demo-line line-c">C</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'group',
    title: '群體設置',
    description: '7名假被試故意給錯誤答案，1名真實被試最後回答',
    content: `
      <div class="group-setup">
        <div class="confederates">
          <i class="fas fa-users"></i>
          <span>7名假被試</span>
          <div class="answer wrong">錯誤答案</div>
        </div>
        <div class="subject">
          <i class="fas fa-user"></i>
          <span>1名真實被試</span>
          <div class="answer pressure">面臨壓力</div>
        </div>
      </div>
    `
  }
]

// 實驗過程步驟
const processSteps = [
  {
    title: '靈感的來源',
    description: '1951年的斯沃斯莫爾學院，所羅門·阿希思考為什麼人們會順從群體的意見，即使這些意見明顯是錯誤的。他觀察到社會生活中的從眾現象，決定用科學方法研究這個問題。',
    imageDesc: '阿希在實驗室中思考從眾問題'
  },
  {
    title: '實驗的設計',
    description: '阿希精心設計了視覺判斷任務，準備兩張卡片：標準線和三條比較線。關鍵在於群體設置：招募假被試故意給出錯誤答案，真實被試坐在中間最後回答。',
    imageDesc: '實驗設計和材料準備過程'
  },
  {
    title: '第一個被試的經歷',
    description: '湯姆走進實驗室，發現已有七個"被試"等待。當所有假被試都說B線與標準線等長時，湯姆清楚看到A線才是正確的，但面對群體一致的錯誤答案，他感到前所未有的壓力。',
    imageDesc: '被試面對群體壓力的困惑表情'
  },
  {
    title: '內心的掙扎',
    description: '被試們經歷深刻的心理衝突，開始懷疑自己的感知能力和理性判斷。他們會為群體的錯誤答案尋找合理解釋，如"也許他們看到了我沒注意到的細節"。',
    imageDesc: '被試內心掙扎的心理過程'
  },
  {
    title: '個體差異的發現',
    description: '阿希發現個體間巨大差異：有些被試完全順從群體，有些堅持獨立判斷。保持獨立的被試通常具有較強自信心，但仍報告感受到巨大心理壓力。',
    imageDesc: '不同被試的反應差異對比'
  },
  {
    title: '群體大小的影響',
    description: '實驗顯示群體影響有臨界點：3-4人的群體產生最大從眾效應，超過這個數字後影響增加緩慢。這為理解群體動力學提供了重要線索。',
    imageDesc: '不同群體大小的影響效果圖'
  }
]

// 統計數據
const resultStats = createStatsConfig([
  {
    id: 'conformity',
    value: '75%',
    label: '至少從眾一次的比例'
  },
  {
    id: 'independent',
    value: '25%',
    label: '完全獨立判斷的比例'
  },
  {
    id: 'critical',
    value: '37%',
    label: '平均從眾率'
  }
])

// 結果卡片
const resultCards = [
  {
    id: 'conformity',
    title: '從眾行為模式',
    icon: 'fas fa-users',
    items: [
      '75%的被試至少從眾一次',
      '平均每人從眾37%的試驗',
      '只有25%完全保持獨立',
      '群體一致性產生強大壓力'
    ]
  },
  {
    id: 'group-size',
    title: '群體大小效應',
    icon: 'fas fa-chart-line',
    items: [
      '3-4人群體產生最大影響',
      '超過4人影響增加緩慢',
      '單獨對抗時從眾率最低',
      '群體規模存在臨界點'
    ]
  },
  {
    id: 'individual',
    title: '個體差異因素',
    icon: 'fas fa-user',
    items: [
      '自信心影響抗壓能力',
      '文化背景造成差異',
      '性格特質起關鍵作用',
      '教育程度相關但非決定性'
    ]
  }
]

// 心理機制數據
const mechanismData = [
  {
    id: 'normative',
    title: '規範性影響',
    icon: 'fas fa-balance-scale',
    description: '為了被群體接納和避免衝突，個體選擇與群體保持一致'
  },
  {
    id: 'informational',
    title: '資訊性影響',
    icon: 'fas fa-info-circle',
    description: '面對不確定情境時，將他人行為視為正確行為的線索'
  },
  {
    id: 'social-proof',
    title: '社會認證',
    icon: 'fas fa-check-circle',
    description: '認為多數人的選擇更可能是正確的，依賴群體智慧'
  }
]

// 實驗意義數據
const significanceData = [
  {
    id: 'theoretical',
    title: '理論貢獻',
    icon: 'fas fa-book',
    items: [
      '建立了從眾行為的科學基礎',
      '區分了資訊性和規範性影響',
      '證明了群體壓力的真實存在',
      '為社會影響理論奠定基礎'
    ]
  },
  {
    id: 'methodological',
    title: '方法論創新',
    icon: 'fas fa-flask',
    items: [
      '創立了從眾研究的經典範式',
      '展示了實驗控制的重要性',
      '證明了實驗室研究的有效性',
      '影響了後續研究設計'
    ]
  },
  {
    id: 'social',
    title: '社會意義',
    icon: 'fas fa-globe',
    items: [
      '揭示了社會壓力的普遍性',
      '解釋了日常從眾現象',
      '促進了教育思考',
      '推動了批判思維培養'
    ]
  }
]

// 現代應用數據
const applicationsData = [
  {
    id: 'education',
    title: '教育領域',
    icon: 'fas fa-graduation-cap',
    items: [
      '培養學生獨立思考能力',
      '課堂討論設計原則',
      '同儕壓力的管理',
      '批判思維訓練'
    ]
  },
  {
    id: 'workplace',
    title: '職場管理',
    icon: 'fas fa-briefcase',
    items: [
      '團隊決策過程優化',
      '避免群體迷思',
      '鼓勵不同意見',
      '建立開放文化'
    ]
  },
  {
    id: 'marketing',
    title: '行銷心理學',
    icon: 'fas fa-bullhorn',
    items: [
      '社會認證策略運用',
      '消費者行為分析',
      '口碑行銷設計',
      '群體影響力行銷'
    ]
  }
]

// 限制數據
const limitationsData = [
  {
    id: 'artificial',
    title: '人工情境',
    icon: 'fas fa-flask',
    items: [
      '實驗室環境與現實差異',
      '任務過於簡單明確',
      '缺乏真實生活複雜性',
      '時間壓力不同'
    ]
  },
  {
    id: 'sample',
    title: '樣本限制',
    icon: 'fas fa-users',
    items: [
      '主要使用大學生樣本',
      '文化背景相對單一',
      '性別比例不均',
      '社會經濟地位相似'
    ]
  },
  {
    id: 'ethics',
    title: '倫理考量',
    icon: 'fas fa-balance-scale',
    items: [
      '欺騙性實驗設計',
      '心理壓力的產生',
      '現代倫理標準限制',
      '知情同意的複雜性'
    ]
  }
]

// 結論亮點
const conclusionHighlights = [
  {
    id: 'discovery',
    icon: 'fas fa-lightbulb',
    text: '發現了群體壓力對個體判斷的顯著影響'
  },
  {
    id: 'theory',
    icon: 'fas fa-book',
    text: '建立了從眾行為的理論框架'
  },
  {
    id: 'application',
    icon: 'fas fa-cogs',
    text: '為教育和管理提供科學依據'
  },
  {
    id: 'awareness',
    icon: 'fas fa-eye',
    text: '提高了人們對群體影響的認識'
  }
]

// 圖片數據
const imageData = {
  background: {
    title: '阿希實驗室場景',
    description: '所羅門·阿希在斯沃斯莫爾學院實驗室中準備從眾實驗，展示線段卡片和實驗設置'
  },
  context: {
    title: '1950年代美國大學校園',
    description: '二戰後的美國大學環境，學生們在課堂和宿舍中的群體互動場景'
  },
  design: {
    title: '從眾實驗設計圖',
    description: '詳細展示實驗室佈置、參與者座位安排和線段比較卡片'
  }
}

// 處理按鈕點擊
const handleButtonClick = (button) => {
  console.log('Button clicked:', button)
}

// 頁面初始化
onMounted(() => {
  initializeExperiment('conformity-animation')
})
</script>

<style scoped>
/* 動畫相關樣式 */
.conformity-animation {
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

.line-cards {
  position: absolute;
  top: 10%;
  left: 20%;
  display: flex;
  gap: 30px;
}

.standard-card,
.comparison-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.standard-line {
  width: 4px;
  height: 80px;
  background: #333;
  margin: 0 auto;
}

.comparison-card {
  display: flex;
  gap: 15px;
  align-items: end;
}

.line {
  width: 4px;
  background: #333;
  position: relative;
}

.line-a { height: 40px; }
.line-b { height: 80px; }
.line-c { height: 60px; }

.participants-group {
  position: absolute;
  bottom: 20%;
  left: 10%;
  display: flex;
  gap: 15px;
  width: 400px;
  flex-wrap: wrap;
}

.participant {
  width: 40px;
  height: 60px;
  position: relative;
}

.participant-head {
  width: 20px;
  height: 20px;
  background: #4a90e2;
  border-radius: 50%;
  margin: 0 auto 5px;
}

.participant-body {
  width: 30px;
  height: 35px;
  background: #4a90e2;
  border-radius: 15px 15px 0 0;
  margin: 0 auto;
}

.confederate .participant-head,
.confederate .participant-body {
  background: #e74c3c;
}

.thought-bubble {
  position: absolute;
  top: -15px;
  right: -10px;
  width: 20px;
  height: 15px;
  border-radius: 10px;
}

.thought-bubble.wrong-answer {
  background: #e74c3c;
}

.thought-bubble.confused {
  background: #f39c12;
  animation: pulse 2s ease-in-out infinite;
}

.pressure-waves {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wave {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid rgba(231, 76, 60, 0.3);
  border-radius: 50%;
  animation: pressureWave 3s ease-out infinite;
}

.wave:nth-child(2) { animation-delay: 1s; }
.wave:nth-child(3) { animation-delay: 2s; }

.conformity-indicators {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 15px;
}

.indicator {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.indicator.independent { border-left: 3px solid #27ae60; }
.indicator.conforming { border-left: 3px solid #e74c3c; }

/* 網格佈局 */
.context-grid,
.experiment-design,
.results-grid,
.mechanism-grid,
.significance-grid,
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
.line-comparison-demo {
  margin: 1rem 0;
}

.demo-cards {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.demo-standard,
.demo-comparison {
  text-align: center;
}

.demo-line {
  background: #333;
  margin: 10px auto;
  position: relative;
}

.demo-line.standard {
  width: 4px;
  height: 60px;
}

.demo-lines {
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.demo-lines .demo-line {
  width: 4px;
  color: #666;
  font-size: 12px;
  text-align: center;
}

.demo-line.line-a { height: 30px; }
.demo-line.line-b { height: 60px; }
.demo-line.line-c { height: 45px; }

.group-setup {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 1rem 0;
}

.confederates,
.subject {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
}

.confederates {
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
}

.subject {
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid #3498db;
}

.answer {
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.answer.wrong {
  background: #e74c3c;
  color: white;
}

.answer.pressure {
  background: #f39c12;
  color: white;
}

/* 動畫關鍵幀 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes pressureWave {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .context-grid,
  .experiment-design,
  .results-grid,
  .mechanism-grid,
  .significance-grid,
  .applications-grid,
  .limitations-grid {
    grid-template-columns: 1fr;
  }
  
  .conclusion-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .conformity-animation {
    width: 350px;
    height: 250px;
  }
  
  .participants-group {
    width: 250px;
    gap: 10px;
  }
  
  .participant {
    width: 25px;
    height: 40px;
  }
  
  .demo-cards {
    grid-template-columns: 1fr;
  }
  
  .group-setup {
    grid-template-columns: 1fr;
  }
}
</style> 