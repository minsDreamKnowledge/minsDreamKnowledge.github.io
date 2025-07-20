<template>
  <div class="travel-filter" :class="{ 'filter-open': isOpen }">
    <!-- 過濾器觸發按鈕 (移動端) -->
    <button 
      class="filter-toggle"
      @click="toggleFilter"
      aria-label="切換過濾器"
    >
      <i class="fas fa-filter"></i>
      <span>篩選條件</span>
      <i class="fas fa-chevron-down toggle-icon" :class="{ 'rotated': isOpen }"></i>
    </button>

    <!-- 過濾器內容 -->
    <div class="filter-content">
      <!-- 搜尋框 -->
      <div class="filter-group">
        <label class="filter-label">
          <i class="fas fa-search"></i>
          搜尋目的地
        </label>
        <div class="search-box">
          <input
            v-model="filters.search"
            type="text"
            placeholder="輸入城市或國家名稱..."
            class="search-input"
            @input="updateFilters"
          />
          <button 
            v-if="filters.search"
            class="clear-search"
            @click="clearSearch"
            aria-label="清除搜尋"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- 地區過濾 -->
      <div class="filter-group">
        <label class="filter-label">
          <i class="fas fa-globe-asia"></i>
          地區
        </label>
        <div class="filter-options">
          <button
            v-for="continent in continents"
            :key="continent.value"
            :class="[
              'filter-chip',
              { 'active': filters.continent === continent.value }
            ]"
            @click="setContinent(continent.value)"
          >
            <span class="chip-emoji">{{ continent.emoji }}</span>
            {{ continent.label }}
          </button>
        </div>
      </div>

      <!-- 最佳旅遊季節過濾 -->
      <div class="filter-group">
        <label class="filter-label">
          <i class="fas fa-calendar-alt"></i>
          最佳旅遊季節
        </label>
        <div class="filter-options">
          <button
            v-for="season in seasons"
            :key="season.value"
            :class="[
              'filter-chip',
              { 'active': filters.season === season.value }
            ]"
            @click="setSeason(season.value)"
          >
            <span class="chip-emoji">{{ season.emoji }}</span>
            {{ season.label }}
          </button>
        </div>
      </div>

      <!-- 排序選項 -->
      <div class="filter-group">
        <label class="filter-label">
          <i class="fas fa-sort"></i>
          排序方式
        </label>
        <select
          v-model="filters.sortBy"
          class="sort-select"
          @change="updateFilters"
        >
          <option value="default">預設排序</option>
          <option value="name">按名稱排序</option>
          <option value="continent">按地區排序</option>
          <option value="popular">按熱門程度</option>
        </select>
      </div>

      <!-- 重置和應用按鈕 -->
      <div class="filter-actions">
        <button class="reset-btn" @click="resetFilters">
          <i class="fas fa-undo"></i>
          重置篩選
        </button>
        <div class="active-filters" v-if="hasActiveFilters">
          <span class="filter-count">{{ activeFilterCount }} 個篩選條件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      search: '',
      continent: '',
      season: '',
      sortBy: 'default'
    })
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const filters = reactive({
  search: props.modelValue.search || '',
  continent: props.modelValue.continent || '',
  season: props.modelValue.season || '',
  sortBy: props.modelValue.sortBy || 'default'
})

const continents = [
  { value: '', label: '全部地區', emoji: '🌍' },
  { value: 'asia', label: '亞洲', emoji: '🏯' },
  { value: 'europe', label: '歐洲', emoji: '🏰' },
  { value: 'america', label: '美洲', emoji: '🗽' },
  { value: 'oceania', label: '大洋洲', emoji: '🏄‍♂️' },
  { value: 'africa', label: '非洲', emoji: '🦁' }
]

const seasons = [
  { value: '', label: '全年適宜', emoji: '🌈' },
  { value: 'spring', label: '春季最佳', emoji: '🌸' },
  { value: 'summer', label: '夏季最佳', emoji: '☀️' },
  { value: 'autumn', label: '秋季最佳', emoji: '🍂' },
  { value: 'winter', label: '冬季最佳', emoji: '❄️' }
]

const hasActiveFilters = computed(() => {
  return filters.search || filters.continent || filters.season || filters.sortBy !== 'default'
})

const activeFilterCount = computed(() => {
  let count = 0
  if (filters.search) count++
  if (filters.continent) count++
  if (filters.season) count++
  if (filters.sortBy !== 'default') count++
  return count
})

const toggleFilter = () => {
  isOpen.value = !isOpen.value
}

const setContinent = (continent) => {
  if (filters.continent === continent) {
    filters.continent = ''
  } else {
    filters.continent = continent
  }
  updateFilters()
}

const setSeason = (season) => {
  if (filters.season === season) {
    filters.season = ''
  } else {
    filters.season = season
  }
  updateFilters()
}

const clearSearch = () => {
  filters.search = ''
  updateFilters()
}

const resetFilters = () => {
  filters.search = ''
  filters.continent = ''
  filters.season = ''
  filters.sortBy = 'default'
  updateFilters()
}

const updateFilters = () => {
  emit('update:modelValue', { ...filters })
}

// 監聽外部傳入的 modelValue 變化
watch(() => props.modelValue, (newValue) => {
  Object.assign(filters, newValue)
}, { deep: true })

// 點擊外部關閉過濾器
onMounted(() => {
  const handleClickOutside = (event) => {
    const filterElement = event.target.closest('.travel-filter')
    if (!filterElement && isOpen.value) {
      isOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
.travel-filter {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.filter-toggle {
  display: none;
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: none;
  color: #4a5568;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.toggle-icon {
  transition: transform 0.3s ease;
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.filter-content {
  padding: 1.5rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.filter-label i {
  color: #667eea;
  width: 16px;
}

/* 搜尋框 */
.search-box {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.clear-search {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s ease;
}

.clear-search:hover {
  color: #718096;
}

/* 過濾選項 */
.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-chip {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.filter-chip:hover {
  background: #edf2f7;
  border-color: #cbd5e0;
}

.filter-chip.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: #667eea;
}

.chip-emoji {
  font-size: 0.9em;
}

/* 排序選擇 */
.sort-select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sort-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 過濾器操作 */
.filter-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
}

.reset-btn {
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #718096;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reset-btn:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
  color: #4a5568;
}

.active-filters {
  color: #667eea;
  font-size: 0.85rem;
  font-weight: 600;
}

.filter-count {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .filter-toggle {
    display: flex;
  }
  
  .filter-content {
    display: none;
    padding: 0 1rem 1rem;
  }
  
  .filter-open .filter-content {
    display: block;
  }
  
  .filter-options {
    gap: 0.25rem;
  }
  
  .filter-chip {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
  
  .filter-actions {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }
  
  .reset-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .filter-chip {
    flex: 1;
    justify-content: center;
    min-width: calc(50% - 0.125rem);
  }
}
</style> 