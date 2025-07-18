<template>
  <header class="hero" role="banner" :style="{ background: heroBackground }">
    <div class="hero-visual">
      <!-- 實驗特定動畫插槽 -->
      <slot name="animation"></slot>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
      <div class="hero-buttons">
        <button 
          v-for="button in buttons" 
          :key="button.id"
          :class="['btn', button.type || 'btn-primary']" 
          @click="handleButtonClick(button)"
        >
          <i :class="button.icon"></i>
          {{ button.text }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  heroBackground: {
    type: String,
    default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  buttons: {
    type: Array,
    default: () => [
      {
        id: 'background',
        text: '實驗背景',
        icon: 'fas fa-history',
        type: 'btn-primary',
        action: 'scroll',
        target: 'background'
      },
      {
        id: 'process',
        text: '實驗過程',
        icon: 'fas fa-play',
        type: 'btn-secondary', 
        action: 'scroll',
        target: 'process'
      }
    ]
  }
})

const emit = defineEmits(['buttonClick'])

const handleButtonClick = (button) => {
  if (button.action === 'scroll' && button.target) {
    const element = document.getElementById(button.target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  emit('buttonClick', button)
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
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

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: 2px solid transparent;
}

.btn-secondary:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
  
  .btn {
    min-width: 200px;
  }
}
</style> 