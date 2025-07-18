<template>
  <div class="results-overview">
    <div 
      v-for="stat in stats" 
      :key="stat.id"
      class="result-stat"
    >
      <div class="stat-number" :style="{ color: stat.color || accentColor }">
        {{ stat.value }}
      </div>
      <div class="stat-label">{{ stat.label }}</div>
      <div v-if="stat.description" class="stat-description">
        {{ stat.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: {
    type: Array,
    required: true,
    validator: (stats) => {
      return stats.every(stat => 
        stat.value && stat.label
      )
    }
  },
  accentColor: {
    type: String,
    default: '#667eea'
  }
})
</script>

<style scoped>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.result-stat.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.result-stat:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: v-bind(accentColor);
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .results-overview {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .result-stat {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
  }
}
</style> 