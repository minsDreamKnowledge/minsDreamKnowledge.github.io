<template>
  <nav class="breadcrumb" v-if="breadcrumbs.length > 1">
    <div class="container">
      <ol class="breadcrumb-list">
        <li 
          v-for="(crumb, index) in breadcrumbs" 
          :key="crumb.path"
          class="breadcrumb-item"
          :class="{ 'active': index === breadcrumbs.length - 1 }"
        >
          <NuxtLink 
            v-if="index < breadcrumbs.length - 1" 
            :to="crumb.path" 
            class="breadcrumb-link"
          >
            <span class="breadcrumb-icon">{{ crumb.icon }}</span>
            {{ crumb.title }}
          </NuxtLink>
          <span v-else class="breadcrumb-current">
            <span class="breadcrumb-icon">{{ crumb.icon }}</span>
            {{ crumb.title }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

// 麵包屑資料
const breadcrumbData = {
  '/': { title: '首頁', icon: '🏠' },
  '/knowledge': { title: '知識庫', icon: '📚' },
  '/bangkok': { title: '曼谷旅遊', icon: '🇹🇭' },
  '/sitemap': { title: '網站地圖', icon: '🗺️' },
  '/search': { title: '搜尋', icon: '🔍' }
}

// 計算麵包屑
const breadcrumbs = computed(() => {
  const path = route.path
  const crumbs = []
  
  // 添加首頁
  crumbs.push(breadcrumbData['/'])
  
  // 如果不是首頁，添加當前頁面
  if (path !== '/') {
    const currentPage = breadcrumbData[path]
    if (currentPage) {
      crumbs.push({
        ...currentPage,
        path
      })
    }
  }
  
  return crumbs
})
</script>

<style scoped>
.breadcrumb {
  background: var(--color-background-light);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  margin-top: 70px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.breadcrumb-item:not(:last-child)::after {
  content: "›";
  margin-left: 0.5rem;
  color: var(--color-text-light);
  font-weight: bold;
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--color-primary-dark);
}

.breadcrumb-current {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-weight: 600;
}

.breadcrumb-icon {
  font-size: 1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .breadcrumb {
    padding: 0.75rem 0;
  }
  
  .breadcrumb-list {
    font-size: 0.8rem;
  }
  
  .breadcrumb-icon {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .breadcrumb-item:not(:last-child)::after {
    margin-left: 0.25rem;
  }
  
  .breadcrumb-link,
  .breadcrumb-current {
    gap: 0.25rem;
  }
}
</style> 