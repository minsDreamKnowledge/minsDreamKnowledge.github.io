# 實驗頁面共用組件使用指南

## 組件概覽

我們已經建立了以下共用組件來重構實驗頁面：

### 1. ExperimentHero - 英雄區塊
用於頁面頂部的主標題區域，包含動畫插槽。

### 2. ExperimentSection - 區段容器  
標準化的區段包裝器，包含標題和內容。

### 3. BackgroundGrid - 背景資訊網格
顯示實驗的基本資訊（時間、地點、研究者、意義）。

### 4. ProcessTimeline - 過程時間軸
展示實驗步驟的時間軸組件。

### 5. ResultsOverview - 結果概覽
統計數據展示卡片。

### 6. ExperimentCard - 通用卡片
多功能卡片組件，支援不同變體。

### 7. ImagePlaceholder - 圖片佔位符
圖片描述和預留位置組件。

### 8. useExperiment - 共用邏輯
包含SEO設定、動畫管理等共用功能的 composable。

## 使用示例

以下是如何使用這些組件重構實驗頁面：

```vue
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
        <!-- 實驗特定動畫 -->
        <div class="experiment-animation">
          <!-- 動畫內容 -->
        </div>
      </template>
    </ExperimentHero>

    <!-- 實驗背景 -->
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
        :title="imageData.title"
        :description="imageData.description"
      />
    </ExperimentSection>

    <!-- 實驗過程 -->
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

    <!-- 實驗結果 -->
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
          :description="result.description"
          :icon="result.icon"
          :items="result.items"
          :border-color="accentColor"
        />
      </div>
    </ExperimentSection>
  </main>
</template>

<script setup>
const accentColor = '#dc2626' // 拉塔內實驗的紅色主題

// 使用共用邏輯
const { initializeExperiment, createStandardButtons, createStatsConfig } = useExperiment({
  title: '拉塔內旁觀者效應實驗 - 責任分散的奧秘',
  description: '探索約翰·達利和比布·拉塔內的經典旁觀者效應實驗...',
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

// 實驗過程步驟
const processSteps = [
  {
    title: '基蒂案的震撼',
    description: '1964年紐約基蒂·吉諾維斯案震驚全美...',
    imageDesc: '基蒂案現場重現'
  },
  // ... 更多步驟
]

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
  // ... 更多卡片
]

// 圖片數據
const imageData = {
  title: '達利和拉塔內實驗室場景',
  description: '約翰·達利和比布·拉塔內在哥倫比亞大學實驗室中進行旁觀者效應實驗...'
}

// 處理按鈕點擊
const handleButtonClick = (button) => {
  console.log('Button clicked:', button)
}

// 頁面初始化
onMounted(() => {
  initializeExperiment('bystander-animation')
})
</script>

<style scoped>
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.experiment-animation {
  /* 實驗特定動畫樣式 */
}

/* 響應式設計 */
@media (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}
</style>

## 組件特性

### 共同特性
- 響應式設計
- 動畫支援
- 主題顏色配置
- 可插拔內容槽

### 彈性配置
- 所有組件都支援自定義樣式
- 可以通過 props 調整行為
- 支援插槽擴展功能

### 動畫系統
- 自動滾動動畫
- 進入視窗時觸發
- 可配置動畫選擇器

## 重構建議

1. **逐步重構**：一次重構一個實驗頁面
2. **保持一致性**：使用相同的 accentColor 和樣式配置
3. **測試功能**：確保動畫和交互功能正常
4. **優化性能**：移除重複的CSS和JavaScript代碼

## 下一步

可以考慮創建更多專用組件：
- ExperimentDesignCard - 實驗設計展示
- SignificanceGrid - 重要性說明網格
- ModernApplications - 現代應用展示
- LimitationsCard - 限制說明卡片 