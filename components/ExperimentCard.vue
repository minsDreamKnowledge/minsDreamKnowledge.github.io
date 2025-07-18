<template>
  <div 
    :class="[
      'experiment-card',
      variant,
      { 'animate-in': animate }
    ]"
    :style="{ borderLeftColor: borderColor }"
  >
    <div v-if="icon || title" class="card-header">
      <div v-if="icon" class="card-icon">
        <i :class="icon" :style="{ color: iconColor }"></i>
      </div>
      <h3 v-if="title" class="card-title">{{ title }}</h3>
    </div>
    
    <div class="card-content">
      <p v-if="description" class="card-description">{{ description }}</p>
      
      <!-- 列表內容 -->
      <ul v-if="items && items.length" class="card-list">
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
      
      <!-- 自定義內容插槽 -->
      <slot></slot>
    </div>
    
    <!-- 底部插槽 -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: '#667eea'
  },
  borderColor: {
    type: String,
    default: '#667eea'
  },
  items: {
    type: Array,
    default: () => []
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'result', 'background', 'context', 'significance'].includes(value)
  },
  animate: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.experiment-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
  border-left: 4px solid v-bind(borderColor);
  opacity: 0;
  transform: translateY(30px);
}

.experiment-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.experiment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* 變體樣式 */
.experiment-card.result {
  border-left-width: 6px;
}

.experiment-card.background {
  text-align: center;
}

.experiment-card.context {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.experiment-card.significance {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-left-color: #856404;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  flex-shrink: 0;
}

.card-icon i {
  font-size: 2rem;
  color: v-bind(iconColor);
}

.card-title {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.card-content {
  flex-grow: 1;
}

.card-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.card-list li:last-child {
  border-bottom: none;
}

.card-list li::before {
  content: '•';
  color: v-bind(borderColor);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

/* 背景變體特殊樣式 */
.experiment-card.background .card-header {
  flex-direction: column;
  text-align: center;
}

.experiment-card.background .card-icon {
  margin-bottom: 1rem;
}

.experiment-card.background .card-icon i {
  font-size: 2.5rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .experiment-card {
    padding: 1.5rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .card-icon i {
    font-size: 1.5rem;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
}
</style> 