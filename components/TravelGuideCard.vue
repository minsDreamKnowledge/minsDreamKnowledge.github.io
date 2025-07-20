<template>
  <div 
    :class="[
      'travel-guide-card',
      { 'animate-in': animate }
    ]"
    data-aos="fade-up"
    :data-aos-delay="delay"
  >
    <!-- 圖片區域 -->
    <div class="card-image">
      <div class="image-placeholder" v-if="!imageLoaded">
        <div class="loading-shimmer">
          <span class="flag-emoji">{{ destination.flag }}</span>
        </div>
      </div>
      <img 
        v-if="destination.image" 
        :src="destination.image" 
        :alt="`${destination.name}旅遊指南`"
        @load="handleImageLoad"
        @error="handleImageError"
        loading="lazy"
      />
      <div v-else class="default-image">
        <span class="flag-emoji large">{{ destination.flag }}</span>
        <div class="image-overlay">
          <span class="placeholder-text">圖片即將上線</span>
        </div>
      </div>
      
      <!-- 懸浮標籤 -->
      <div class="card-badge">
        <span class="badge-text">{{ destination.continentName }}</span>
      </div>
    </div>

    <!-- 卡片內容 -->
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">
          <span class="title-flag">{{ destination.flag }}</span>
          {{ destination.name }}
        </h3>
        <p class="card-subtitle">{{ destination.country }}</p>
      </div>

      <div class="card-body">
        <!-- 最佳旅遊時間 -->
        <div class="travel-info">
          <div class="info-item">
            <i class="fas fa-calendar-alt"></i>
            <span>{{ destination.bestTime }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-thermometer-half"></i>
            <span>{{ destination.climate }}</span>
          </div>
        </div>

        <!-- 特色景點預覽 -->
        <div class="highlights">
          <h4 class="highlights-title">
            <i class="fas fa-map-marker-alt"></i>
            必訪景點
          </h4>
          <div class="highlights-list">
            <span 
              v-for="(attraction, index) in destination.attractions.slice(0, 3)" 
              :key="index"
              class="highlight-tag"
            >
              {{ attraction }}
            </span>
            <span v-if="destination.attractions.length > 3" class="more-tag">
              +{{ destination.attractions.length - 3 }}個
            </span>
          </div>
        </div>

        <!-- 美食預覽 -->
        <div class="highlights">
          <h4 class="highlights-title">
            <i class="fas fa-utensils"></i>
            特色美食
          </h4>
          <div class="highlights-list">
            <span 
              v-for="(food, index) in destination.foods.slice(0, 2)" 
              :key="index"
              class="highlight-tag food-tag"
            >
              {{ food }}
            </span>
            <span v-if="destination.foods.length > 2" class="more-tag">
              +{{ destination.foods.length - 2 }}種
            </span>
          </div>
        </div>
      </div>

      <!-- 卡片底部 -->
      <div class="card-footer">
        <button 
          class="view-guide-btn"
          @click="$emit('view-guide', destination)"
          :aria-label="`查看${destination.name}旅遊指南`"
        >
          <i class="fas fa-book-open"></i>
          查看完整指南
        </button>
        <div class="card-actions">
          <button 
            class="action-btn"
            @click="$emit('favorite', destination)"
            :aria-label="`收藏${destination.name}`"
          >
            <i class="far fa-heart"></i>
          </button>
          <button 
            class="action-btn"
            @click="$emit('share', destination)"
            :aria-label="`分享${destination.name}`"
          >
            <i class="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  destination: {
    type: Object,
    required: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['view-guide', 'favorite', 'share'])

const imageLoaded = ref(false)

const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = () => {
  console.warn(`Failed to load image for ${props.destination.name}`)
}
</script>

<style scoped>
.travel-guide-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.travel-guide-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.travel-guide-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 圖片區域 */
.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.image-placeholder,
.default-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.loading-shimmer {
  background: linear-gradient(90deg, 
    rgba(255,255,255,0.1) 25%, 
    rgba(255,255,255,0.3) 50%, 
    rgba(255,255,255,0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.travel-guide-card:hover .card-image img {
  transform: scale(1.1);
}

.flag-emoji {
  font-size: 3rem;
  display: block;
}

.flag-emoji.large {
  font-size: 4rem;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: white;
  padding: 1rem;
  text-align: center;
}

.placeholder-text {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* 懸浮標籤 */
.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 卡片內容 */
.card-content {
  padding: 1.5rem;
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-flag {
  font-size: 1.1em;
}

.card-subtitle {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 500;
}

/* 旅遊信息 */
.travel-info {
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #4a5568;
}

.info-item i {
  color: #667eea;
  width: 14px;
}

/* 亮點信息 */
.highlights {
  margin-bottom: 1rem;
}

.highlights:last-child {
  margin-bottom: 0;
}

.highlights-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlights-title i {
  color: #667eea;
  font-size: 0.8rem;
}

.highlights-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.highlight-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}

.food-tag {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.more-tag {
  background: #e2e8f0;
  color: #4a5568;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
}

.view-guide-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.view-guide-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #718096;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: #f7fafc;
  color: #667eea;
  border-color: #667eea;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .card-image {
    height: 180px;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .highlights-list {
    gap: 0.25rem;
  }
  
  .highlight-tag,
  .more-tag {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
}
</style> 