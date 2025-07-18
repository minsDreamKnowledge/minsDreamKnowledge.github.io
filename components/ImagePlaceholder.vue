<template>
  <div :class="['image-placeholder', { small: small }]">
    <div class="placeholder-content">
      <i :class="icon"></i>
      <span v-if="title">{{ title }}</span>
      <p v-if="description">{{ description }}</p>
      <slot></slot>
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
    default: 'fas fa-image'
  },
  small: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.image-placeholder {
  background: #e9ecef;
  border: 2px dashed #adb5bd;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  background: #dee2e6;
  border-color: #6c757d;
}

.image-placeholder.small {
  padding: 1.5rem;
  margin: 1rem 0;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #6c757d;
}

.placeholder-content i {
  font-size: 3rem;
  opacity: 0.7;
}

.image-placeholder.small .placeholder-content i {
  font-size: 2rem;
}

.placeholder-content span {
  font-size: 1.2rem;
  font-weight: 600;
  color: #495057;
}

.image-placeholder.small .placeholder-content span {
  font-size: 1rem;
}

.placeholder-content p {
  font-size: 0.9rem;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
  color: #6c757d;
}

.image-placeholder.small .placeholder-content p {
  font-size: 0.8rem;
  max-width: 300px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .image-placeholder {
    padding: 2rem;
    margin: 1.5rem 0;
  }
  
  .image-placeholder.small {
    padding: 1rem;
    margin: 0.5rem 0;
  }
  
  .placeholder-content i {
    font-size: 2.5rem;
  }
  
  .image-placeholder.small .placeholder-content i {
    font-size: 1.5rem;
  }
  
  .placeholder-content span {
    font-size: 1rem;
  }
  
  .placeholder-content p {
    font-size: 0.8rem;
    max-width: 250px;
  }
}
</style> 