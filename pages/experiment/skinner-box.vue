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
        <!-- 史金納箱動畫區塊 -->
        <div class="skinner-box-animation">
          <div class="box-container">
            <div class="box-frame"></div>
            <div class="lever">
              <div class="lever-arm"></div>
              <div class="lever-press-indicator"></div>
            </div>
            <div class="food-dispenser">
              <div class="food-pellet"></div>
              <div class="food-pellet"></div>
              <div class="food-pellet"></div>
            </div>
            <div class="mouse-figure">
              <div class="mouse-body"></div>
              <div class="mouse-head"></div>
              <div class="mouse-tail"></div>
            </div>
            <div class="recording-device">
              <div class="recording-line"></div>
              <div class="recording-line"></div>
              <div class="recording-line"></div>
            </div>
          </div>
          <div class="reinforcement-arrows">
            <div class="arrow behavior-arrow"></div>
            <div class="arrow consequence-arrow"></div>
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

    <!-- 實驗設置區塊 -->
    <ExperimentSection
      title="實驗設置"
      icon="fas fa-cogs"
    >
      <div class="setup-grid">
        <ExperimentCard
          v-for="setup in setupData"
          :key="setup.id"
          :title="setup.title"
          :description="setup.description"
          :border-color="accentColor"
        >
          <div v-html="setup.content"></div>
        </ExperimentCard>
      </div>
      
      <ImagePlaceholder
        :title="imageData.setup.title"
        :description="imageData.setup.description"
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

    <!-- 強化時程區塊 -->
    <ExperimentSection
      title="強化時程研究"
      icon="fas fa-calendar-alt"
    >
      <div class="schedule-grid">
        <ExperimentCard
          v-for="schedule in scheduleData"
          :key="schedule.id"
          variant="result"
          :title="schedule.title"
          :icon="schedule.icon"
          :items="schedule.features"
          :border-color="accentColor"
        >
          <template #footer>
            <div class="schedule-example">
              <strong>範例：</strong>{{ schedule.example }}
            </div>
          </template>
        </ExperimentCard>
      </div>
    </ExperimentSection>

    <!-- 實驗結果區塊 -->
    <ExperimentSection
      title="實驗結果"
      icon="fas fa-chart-bar"
      bg-light
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
            title="學習曲線圖表"
            description="顯示不同強化時程下的行為習得和消退模式"
            small
          />
        </div>
      </div>
    </ExperimentSection>

    <!-- 理論意義區塊 -->
    <ExperimentSection
      title="理論意義"
      icon="fas fa-lightbulb"
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
      icon="fas fa-rocket"
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
      title="實驗限制與後續發展"
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
          title="科學貢獻"
          icon="fas fa-star"
          :border-color="accentColor"
        >
          <blockquote>
            <p>「史金納箱實驗建立了操作制約學習的科學基礎，揭示了行為如何被其後果所塑造，為現代行為主義心理學奠定了堅實基礎。」</p>
            <cite>— 學習心理學經典</cite>
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
const accentColor = '#4facfe'

// 使用共用邏輯
const { initializeExperiment, createStandardButtons, createStatsConfig } = useExperiment({
  title: '史金納箱實驗 - 操作制約學習的奧秘',
  description: '探索B.F.史金納的經典實驗如何揭示操作制約學習的機制，了解強化對行為形成和維持的重要作用，以及這個實驗對現代心理學和教育的深遠影響。',
  accentColor
})

// 英雄區塊數據
const heroData = {
  title: '📦 史金納箱實驗',
  subtitle: '操作制約學習的奧秘 - 行為如何被強化塑造',
  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
}

// 按鈕配置
const heroButtons = createStandardButtons()

// 背景數據
const backgroundData = {
  time: '1938年',
  location: '美國哈佛大學',
  researcher: 'B.F.史金納',
  significance: '發現操作制約學習機制'
}

// 時代背景數據
const contextData = [
  {
    id: 'behaviorism',
    title: '行為主義興起',
    description: '1930年代行為主義心理學盛行，強調可觀察行為的科學研究'
  },
  {
    id: 'methodology',
    title: '實驗方法革新',
    description: '追求更精確的實驗控制和客觀的行為測量方法'
  },
  {
    id: 'learning',
    title: '學習理論發展',
    description: '巴夫洛夫古典制約後，學者開始探索主動學習的機制'
  }
]

// 實驗設置數據
const setupData = [
  {
    id: 'apparatus',
    title: '史金納箱構造',
    description: '精密設計的實驗裝置，能自動記錄和控制動物行為',
    content: `
      <div class="apparatus-demo">
        <div class="box-components">
          <div class="component">
            <i class="fas fa-hand-pointer"></i>
            <span>操控桿</span>
          </div>
          <div class="component">
            <i class="fas fa-cookie-bite"></i>
            <span>食物投放器</span>
          </div>
          <div class="component">
            <i class="fas fa-chart-line"></i>
            <span>記錄裝置</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'subjects',
    title: '實驗對象',
    description: '主要使用白鼠和鴿子進行實驗，研究不同種類的學習行為',
    content: `
      <div class="subjects-demo">
        <div class="subject-type">
          <i class="fas fa-mouse"></i>
          <span>白鼠</span>
          <div class="behavior">槓桿按壓</div>
        </div>
        <div class="subject-type">
          <i class="fas fa-dove"></i>
          <span>鴿子</span>
          <div class="behavior">鍵盤啄擊</div>
        </div>
      </div>
    `
  }
]

// 實驗過程步驟
const processSteps = [
  {
    title: '靈感的誕生',
    description: '1938年的哈佛大學，B.F.史金納思考如何更好地研究動物的學習行為。他意識到動物的行為是主動的操作，而不是被動的反應，決定設計一個能控制環境變量的實驗箱。',
    imageDesc: '史金納在實驗室中設計史金納箱'
  },
  {
    title: '箱子的誕生',
    description: '經過幾個月的設計和改進，史金納箱誕生了：一個密閉的箱子，有可按壓的槓桿、自動食物投放裝置和精確的記錄系統。史金納選擇白鼠作為實驗動物。',
    imageDesc: '史金納箱的設計和製造過程'
  },
  {
    title: '偶然的發現',
    description: '白鼠在探索過程中偶然碰到了槓桿，食物掉了出來。這個意外的結果開始在動物大腦中建立聯繫，雖然微弱，但卻是學習的開始。',
    imageDesc: '白鼠首次偶然按壓槓桿的瞬間'
  },
  {
    title: '學習的過程',
    description: '隨著時間推移，白鼠開始更頻繁地接觸槓桿。每次接觸都會得到食物，這種正面結果開始強化槓桿按壓行為。史金納觀察到按壓頻率逐漸增加。',
    imageDesc: '白鼠學習過程的行為變化'
  },
  {
    title: '行為的塑造',
    description: '史金納發現可以通過控制強化的時機來"塑造"動物的行為。他實驗了不同的強化模式：固定比率、變動比率、固定間隔、變動間隔。',
    imageDesc: '不同強化模式下的行為表現'
  },
  {
    title: '理論的建立',
    description: '通過系統觀察，史金納建立了操作制約理論：動物的行為是由其後果塑造的。正面結果強化行為，負面結果弱化行為。',
    imageDesc: '史金納整理實驗數據和理論建構'
  }
]

// 強化時程數據
const scheduleData = [
  {
    id: 'fixed-ratio',
    title: '固定比率時程',
    icon: 'fas fa-calculator',
    features: [
      '固定次數後給予強化',
      '產生高速穩定反應',
      '強化後短暫停頓',
      '抗消退性中等'
    ],
    example: '每按5次槓桿給一粒食物'
  },
  {
    id: 'variable-ratio',
    title: '變動比率時程',
    icon: 'fas fa-dice',
    features: [
      '平均次數後給予強化',
      '產生持續高頻反應',
      '最抗消退',
      '類似賭博機制'
    ],
    example: '平均每按10次給一粒食物（範圍5-15次）'
  },
  {
    id: 'fixed-interval',
    title: '固定間隔時程',
    icon: 'fas fa-clock',
    features: [
      '固定時間後首次反應強化',
      '產生扇貝狀反應模式',
      '強化前反應增加',
      '抗消退性較低'
    ],
    example: '每60秒後首次按壓給予強化'
  },
  {
    id: 'variable-interval',
    title: '變動間隔時程',
    icon: 'fas fa-stopwatch',
    features: [
      '平均時間後首次反應強化',
      '產生穩定中等反應',
      '反應率較平穩',
      '抗消退性良好'
    ],
    example: '平均每45秒首次按壓給予強化（範圍20-70秒）'
  }
]

// 統計數據
const resultStats = createStatsConfig([
  {
    id: 'learning',
    value: '95%',
    label: '成功學習率'
  },
  {
    id: 'speed',
    value: '3-5天',
    label: '平均學習時間'
  },
  {
    id: 'retention',
    value: '數週',
    label: '行為保持時間'
  }
])

// 結果卡片
const resultCards = [
  {
    id: 'conditioning',
    title: '操作制約機制',
    icon: 'fas fa-cogs',
    items: [
      '行為頻率受後果影響',
      '正強化增加行為頻率',
      '負強化移除厭惡刺激',
      '懲罰降低行為頻率'
    ]
  },
  {
    id: 'shaping',
    title: '行為塑造過程',
    icon: 'fas fa-hand-paper',
    items: [
      '逐步接近目標行為',
      '連續逼近法有效',
      '複雜行為可分解學習',
      '時機控制至關重要'
    ]
  },
  {
    id: 'extinction',
    title: '消退與恢復',
    icon: 'fas fa-chart-line-down',
    items: [
      '停止強化導致消退',
      '不同時程消退速度不同',
      '自發恢復現象存在',
      '重新學習較快'
    ]
  }
]

// 理論意義數據
const significanceData = [
  {
    id: 'behavioral',
    title: '行為主義理論',
    icon: 'fas fa-brain',
    items: [
      '建立操作制約理論基礎',
      '強調環境對行為的影響',
      '提供客觀的行為分析方法',
      '影響後續學習理論發展'
    ]
  },
  {
    id: 'methodology',
    title: '研究方法創新',
    icon: 'fas fa-flask',
    items: [
      '精確的實驗控制技術',
      '自動化記錄系統',
      '單一被試設計方法',
      '行為基線建立技術'
    ]
  },
  {
    id: 'applications',
    title: '應用心理學',
    icon: 'fas fa-tools',
    items: [
      '行為改變技術發展',
      '代幣經濟系統設計',
      '教學機器概念提出',
      '行為治療方法基礎'
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
      '程序化教學設計',
      '行為目標設定',
      '即時回饋系統',
      '個別化學習進度'
    ]
  },
  {
    id: 'therapy',
    title: '行為治療',
    icon: 'fas fa-heartbeat',
    items: [
      '代幣經濟治療',
      '行為契約法',
      '消退程序治療',
      '正增強治療方案'
    ]
  },
  {
    id: 'training',
    title: '動物訓練',
    icon: 'fas fa-paw',
    items: [
      '寵物訓練技術',
      '動物表演訓練',
      '導盲犬培訓',
      '動物園行為管理'
    ]
  },
  {
    id: 'technology',
    title: '科技應用',
    icon: 'fas fa-robot',
    items: [
      '遊戲化設計',
      '人工智能強化學習',
      '用戶行為分析',
      '產品設計心理學'
    ]
  }
]

// 限制數據
const limitationsData = [
  {
    id: 'simplification',
    title: '過度簡化',
    icon: 'fas fa-compress',
    items: [
      '忽略認知過程作用',
      '過度強調外在強化',
      '低估內在動機重要性',
      '忽略個體差異因素'
    ]
  },
  {
    id: 'generalization',
    title: '推廣限制',
    icon: 'fas fa-arrows-alt',
    items: [
      '動物實驗與人類差異',
      '實驗室與真實環境差距',
      '簡單行為與複雜行為差別',
      '文化背景影響被忽視'
    ]
  },
  {
    id: 'ethics',
    title: '倫理爭議',
    icon: 'fas fa-balance-scale',
    items: [
      '動物實驗倫理問題',
      '行為控制的道德考量',
      '人類尊嚴與行為操控',
      '現代動物權利關注'
    ]
  }
]

// 結論亮點
const conclusionHighlights = [
  {
    id: 'foundation',
    icon: 'fas fa-foundation',
    text: '建立了操作制約學習的科學基礎'
  },
  {
    id: 'methodology',
    icon: 'fas fa-microscope',
    text: '創新了行為研究的實驗方法'
  },
  {
    id: 'applications',
    icon: 'fas fa-rocket',
    text: '廣泛應用於教育、治療和訓練'
  },
  {
    id: 'influence',
    icon: 'fas fa-star',
    text: '深刻影響了現代心理學發展'
  }
]

// 圖片數據
const imageData = {
  background: {
    title: '史金納實驗室場景',
    description: 'B.F.史金納在哈佛大學實驗室中操作史金納箱，手持記錄本，觀察箱內動物的行為，背景是1930年代的實驗室設備'
  },
  context: {
    title: '1930年代哈佛大學心理系',
    description: '行為主義心理學蓬勃發展的哈佛大學心理系實驗室，研究人員進行各種動物學習實驗'
  },
  setup: {
    title: '史金納箱詳細構造圖',
    description: '展示史金納箱的內部構造、操控桿、食物投放裝置和記錄系統的技術細節'
  }
}

// 處理按鈕點擊
const handleButtonClick = (button) => {
  console.log('Button clicked:', button)
}

// 頁面初始化
onMounted(() => {
  initializeExperiment('skinner-box-animation')
})
</script>

<style scoped>
/* 動畫相關樣式 */
.skinner-box-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  opacity: 0.3;
}

.box-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.box-frame {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
}

.lever {
  position: absolute;
  top: 50%;
  left: 20px;
  width: 30px;
  height: 20px;
}

.lever-arm {
  width: 25px;
  height: 4px;
  background: #ffd700;
  border-radius: 2px;
  animation: leverPress 3s ease-in-out infinite;
}

.lever-press-indicator {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: pressIndicate 3s ease-in-out infinite;
}

.food-dispenser {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.food-pellet {
  width: 6px;
  height: 6px;
  background: #8b4513;
  border-radius: 50%;
  margin: 5px auto;
  animation: pelletDrop 4s ease-in-out infinite;
}

.food-pellet:nth-child(2) { animation-delay: 1.3s; }
.food-pellet:nth-child(3) { animation-delay: 2.6s; }

.mouse-figure {
  position: absolute;
  bottom: 30px;
  left: 60px;
  width: 40px;
  height: 25px;
}

.mouse-body {
  width: 30px;
  height: 15px;
  background: #696969;
  border-radius: 15px;
  animation: mouseMove 3s ease-in-out infinite;
}

.mouse-head {
  width: 12px;
  height: 12px;
  background: #696969;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: -8px;
}

.mouse-tail {
  width: 20px;
  height: 2px;
  background: #696969;
  position: absolute;
  top: 8px;
  right: -18px;
  border-radius: 1px;
}

.recording-device {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.recording-line {
  width: 40px;
  height: 2px;
  background: #4facfe;
  margin: 4px auto;
  animation: recordingActive 2s ease-in-out infinite;
}

.recording-line:nth-child(2) { animation-delay: 0.7s; }
.recording-line:nth-child(3) { animation-delay: 1.4s; }

.reinforcement-arrows {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
}

.arrow {
  width: 60px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  position: relative;
  margin: 10px 0;
}

.arrow::after {
  content: '';
  position: absolute;
  right: -10px;
  top: -4px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left: 10px solid rgba(255, 255, 255, 0.6);
}

.behavior-arrow {
  animation: arrowFlow 2s ease-in-out infinite;
}

.consequence-arrow {
  animation: arrowFlow 2s ease-in-out infinite reverse;
}

/* 網格佈局 */
.context-grid,
.setup-grid,
.schedule-grid,
.results-grid,
.significance-grid,
.applications-grid,
.limitations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.schedule-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

/* 特殊組件樣式 */
.apparatus-demo .box-components {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 1rem 0;
}

.component,
.subject-type {
  text-align: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.component i,
.subject-type i {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #4facfe;
}

.subjects-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 1rem 0;
}

.behavior {
  font-size: 0.8rem;
  color: #666;
  margin-top: 5px;
  font-style: italic;
}

.schedule-example {
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #666;
}

/* 動畫關鍵幀 */
@keyframes leverPress {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-15deg); }
  40% { transform: rotate(0deg); }
}

@keyframes pressIndicate {
  0%, 80%, 100% { opacity: 0; transform: scale(0); }
  20%, 60% { opacity: 1; transform: scale(1); }
}

@keyframes pelletDrop {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(30px); opacity: 0.5; }
}

@keyframes mouseMove {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

@keyframes recordingActive {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes arrowFlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .context-grid,
  .setup-grid,
  .schedule-grid,
  .results-grid,
  .significance-grid,
  .applications-grid,
  .limitations-grid {
    grid-template-columns: 1fr;
  }
  
  .conclusion-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skinner-box-animation {
    width: 300px;
    height: 200px;
  }
  
  .apparatus-demo .box-components {
    grid-template-columns: 1fr;
  }
  
  .subjects-demo {
    grid-template-columns: 1fr;
  }
}
</style> 