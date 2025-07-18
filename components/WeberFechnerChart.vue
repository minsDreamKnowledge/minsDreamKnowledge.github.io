<template>
  <div class="weber-fechner-chart">
    <!-- 數學公式區域 -->
    <div class="formula-section">
      <div class="formula">
        <div class="fraction">
          <span class="numerator">ΔI</span>
          <span class="division-line"></span>
          <span class="denominator">I</span>
        </div>
        <span class="equals">=</span>
        <span class="constant">k</span>
      </div>
    </div>

    <!-- 圖表區域 -->
    <div class="chart-section">
      <div class="y-axis"></div>
      <div class="bars-container">
        <div
          v-for="sense in senses"
          :key="sense.name"
          class="bar-item"
        >
          <div class="value-label" :style="{ color: sense.color }">
            {{ sense.value }}
          </div>
          <div
            class="bar"
            :style="{ backgroundColor: sense.color, height: `${(sense.value / maxValue) * 200}px` }"
          ></div>
          <div class="bar-label">
            <div class="sense-icon">{{ sense.icon }}</div>
            <div class="sense-name">{{ sense.name }}</div>
          </div>
        </div>
      </div>
      <div class="x-axis"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const senses = ref([
  {
    name: 'vision',
    value: 0.01,
    color: '#20B2AA', // 青綠色
    icon: '👁️'
  },
  {
    name: 'hearing',
    value: 0.05,
    color: '#FF6B35', // 橙紅色
    icon: '👂'
  },
  {
    name: 'taste',
    value: 0.15,
    color: '#FFD700', // 金黃色
    icon: '👅'
  },
  {
    name: 'touch',
    value: 0.14,
    color: '#9370DB', // 紫色
    icon: '🖐️'
  }
])
const maxValue = computed(() => Math.max(...senses.value.map(s => s.value)))
</script>

<style scoped>
.weber-fechner-chart {
  background: #faf8f3;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  max-width: 480px;
  margin: 0 auto;
}
.formula-section {
  text-align: center;
  margin-bottom: 2.5rem;
}
.formula {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  gap: 1.2rem;
}
.fraction {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.2em;
}
.numerator {
  font-size: 1.1em;
}
.division-line {
  width: 2.2em;
  height: 2px;
  background: #222;
  margin: 0.1em 0 0.1em 0;
  display: block;
}
.denominator {
  font-size: 1.1em;
}
.equals {
  margin: 0 0.5em;
}
.constant {
  font-size: 1.1em;
}
.chart-section {
  position: relative;
  padding: 1.5rem 0 0.5rem 0;
}
.y-axis {
  position: absolute;
  left: 0;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: #222;
  z-index: 1;
}
.x-axis {
  height: 2px;
  background: #222;
  width: 100%;
  margin-top: 0.5rem;
}
.bars-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 1.5rem;
  min-height: 220px;
  position: relative;
  z-index: 2;
}
.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 90px;
}
.value-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.bar {
  width: 60px;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s;
  min-height: 10px;
  margin-bottom: 0.4rem;
}
.bar-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  margin-top: 0.2rem;
}
.sense-icon {
  font-size: 2rem;
  margin-bottom: 0.1rem;
}
.sense-name {
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
  text-transform: capitalize;
}
@media (max-width: 600px) {
  .weber-fechner-chart {
    padding: 1rem 0.2rem;
    max-width: 100vw;
  }
  .bars-container {
    gap: 0.5rem;
  }
  .bar {
    width: 36px;
  }
  .sense-icon {
    font-size: 1.3rem;
  }
  .sense-name {
    font-size: 0.85rem;
  }
}
</style> 