<template>
  <div class="process-timeline">
    <div 
      v-for="(step, index) in steps" 
      :key="index"
      class="timeline-item"
    >
      <div class="timeline-marker">{{ index + 1 }}</div>
      <div class="timeline-content">
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
        <div v-if="step.imageDesc" class="timeline-image-placeholder">
          <div class="placeholder-content">
            <i class="fas fa-camera"></i>
            <span>{{ step.imageDesc }}</span>
          </div>
        </div>
        <slot :name="`step-${index}`" :step="step" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
    validator: (steps) => {
      return steps.every(step => 
        step.title && step.description
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
.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: v-bind(accentColor);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
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
  background: v-bind(accentColor);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid v-bind(accentColor);
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
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
  margin-top: 1rem;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
}

.placeholder-content i {
  font-size: 1.5rem;
}

.placeholder-content span {
  font-size: 0.9rem;
  font-weight: 500;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .process-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
    margin-bottom: 2rem;
  }
  
  .timeline-marker {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
  
  .timeline-content h3 {
    font-size: 1.3rem;
  }
}
</style> 