<template>
  <div class="background-grid">
    <div 
      v-for="item in backgroundItems" 
      :key="item.id"
      class="background-card"
    >
      <div class="card-icon">
        <i :class="item.icon"></i>
      </div>
      <h3>{{ item.label }}</h3>
      <p>{{ item.value }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  researcher: {
    type: String,
    required: true
  },
  significance: {
    type: String,
    required: true
  },
  customItems: {
    type: Array,
    default: () => []
  }
})

const backgroundItems = computed(() => {
  const defaultItems = [
    {
      id: 'time',
      icon: 'fas fa-calendar',
      label: '實驗時間',
      value: props.time
    },
    {
      id: 'location',
      icon: 'fas fa-university',
      label: '實驗地點',
      value: props.location
    },
    {
      id: 'researcher',
      icon: 'fas fa-user-tie',
      label: '實驗者',
      value: props.researcher
    },
    {
      id: 'significance',
      icon: 'fas fa-lightbulb',
      label: '實驗意義',
      value: props.significance
    }
  ]
  
  return [...defaultItems, ...props.customItems]
})
</script>

<style scoped>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.background-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.background-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-icon {
  margin-bottom: 1rem;
}

.card-icon i {
  font-size: 2.5rem;
  color: #667eea;
}

.background-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
}

.background-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .background-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .background-card {
    padding: 1.5rem;
  }
  
  .card-icon i {
    font-size: 2rem;
  }
  
  .background-card h3 {
    font-size: 1.2rem;
  }
}
</style> 