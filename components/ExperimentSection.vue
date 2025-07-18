<template>
  <section 
    :id="id" 
    :class="['section', { 'bg-light': bgLight }]"
  >
    <div class="container">
      <h2 v-if="title" class="section-title">
        <i v-if="icon" :class="icon"></i>
        {{ title }}
      </h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  bgLight: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.section {
  padding: 4rem 0;
}

.bg-light {
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.section-title i {
  color: #667eea;
  font-size: 2rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 