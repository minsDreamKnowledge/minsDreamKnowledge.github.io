<template>
  <div class="store-demo">
    <h1>Pinia Store 示範頁面</h1>
    
    <!-- 使用組合式函數的範例 -->
    <div class="demo-section">
      <h2>組合式函數範例</h2>
      
              <!-- 認證功能 -->
        <div class="auth-demo">
          <h3>認證功能 (useAuth)</h3>
        <div v-if="!auth.isLoggedIn" class="login-form">
          <input v-model="loginForm.email" type="email" placeholder="電子郵件" class="input" />
          <input v-model="loginForm.password" type="password" placeholder="密碼" class="input" />
          <button @click="handleLogin" class="btn btn-primary" :disabled="auth.isLoading">
            {{ auth.isLoading ? '登入中...' : '登入' }}
          </button>
        </div>
        <div v-else class="user-info">
          <p>歡迎，{{ auth.user?.name }}！</p>
          <p>目前主題：{{ auth.currentTheme }}</p>
          <p>目前語言：{{ auth.currentLanguage }}</p>
          <div class="user-actions">
            <button @click="auth.toggleUserTheme()" class="btn">切換主題</button>
            <button @click="auth.setUserLanguage('en')" class="btn">切換到英文</button>
            <button @click="auth.setUserLanguage('zh-TW')" class="btn">切換到中文</button>
            <button @click="auth.logout()" class="btn btn-danger">登出</button>
          </div>
        </div>
      </div>
      
              <!-- 內容管理功能 -->
        <div class="content-demo">
          <h3>內容管理功能 (useContent)</h3>
        
                  <!-- 搜尋和過濾 -->
          <div class="search-filters">
            <input 
              v-model="searchQuery" 
              placeholder="搜尋內容..." 
              class="input"
              @keyup.enter="handleSearch"
            />
            <button @click="handleSearch" class="btn btn-primary">搜尋</button>
            <button @click="content.resetFilters()" class="btn">重設篩選</button>
          </div>
        
                  <!-- 分類篩選 -->
          <div class="category-filters">
            <span>按分類篩選：</span>
          <button 
            v-for="category in content.categories" 
            :key="category"
            @click="content.filterByCategory(category)"
            class="btn btn-sm"
            :class="{ 'btn-primary': content.filters?.category === category }"
          >
            {{ category }}
          </button>
        </div>
        
                  <!-- 排序選項 -->
          <div class="sort-options">
            <span>排序方式：</span>
            <select v-model="sortBy" @change="handleSort" class="select">
              <option value="publishedAt">發布時間</option>
              <option value="title">標題</option>
              <option value="views">瀏覽量</option>
              <option value="likes">按讚數</option>
            </select>
            <button @click="toggleSortOrder" class="btn btn-sm">
              {{ sortOrder === 'desc' ? '降序' : '升序' }}
            </button>
          </div>
        
                  <!-- 內容列表 -->
          <div class="content-list">
          <div v-for="item in content.paginatedContent" :key="item.id" class="content-item">
            <h4>{{ item.title }}</h4>
            <p>{{ item.excerpt }}</p>
            <div class="content-meta">
              <span>分類：{{ item.category }}</span>
              <span>作者：{{ item.author }}</span>
              <span>瀏覽量：{{ item.views }}</span>
              <span>按讚：{{ item.likes }}</span>
            </div>
            <div class="content-actions">
              <button @click="content.toggleFavorite(item.id)" class="btn btn-sm">
                {{ content.isFavorite(item.id) ? '❤️ 已收藏' : '🤍 收藏' }}
              </button>
              <button @click="content.likeContent(item.id)" class="btn btn-sm btn-primary">
                👍 按讚
              </button>
              <button @click="content.markAsRead(item.id)" class="btn btn-sm btn-info">
                📖 標記已讀
              </button>
            </div>
          </div>
        </div>
        
        <!-- 分頁 -->
        <div class="pagination">
          <button @click="content.goToPreviousPage()" :disabled="content.pagination.currentPage === 1" class="btn">
            ← 上一頁
          </button>
          <span class="page-info">
            第 {{ content.pagination.currentPage }} 頁，共 {{ content.pagination.totalPages }} 頁
          </span>
          <button @click="content.goToNextPage()" :disabled="content.pagination.currentPage === content.pagination.totalPages" class="btn">
            下一頁 →
          </button>
        </div>
        
        <!-- 匯出功能 -->
        <div class="export-actions">
          <button @click="content.exportContent('json')" class="btn btn-success">匯出 JSON</button>
          <button @click="content.exportContent('csv')" class="btn btn-success">匯出 CSV</button>
        </div>
      </div>
    </div>
    
    <!-- 直接使用 Store 的範例 -->
    <div class="demo-section">
      <h2>直接使用 Store 範例</h2>
      
              <!-- 應用設定 -->
        <div class="app-settings">
          <h3>應用設定 (useAppStore)</h3>
        <div class="settings-grid">
          <label>
            <input 
              type="checkbox" 
              v-model="appStore.settings.sidebarCollapsed"
              @change="appStore.setSidebarCollapsed(appStore.settings.sidebarCollapsed)"
            />
            側邊欄摺疊
          </label>
          <label>
            <input 
              type="checkbox" 
              v-model="appStore.settings.notificationsEnabled"
            />
            啟用通知
          </label>
          <label>
            <input 
              type="checkbox" 
              v-model="appStore.settings.autoSave"
            />
            自動儲存
          </label>
        </div>
        
        <div class="app-actions">
          <button @click="appStore.toggleSidebar()" class="btn">
            {{ appStore.isSidebarCollapsed ? '展開' : '摺疊' }}側邊欄
          </button>
          <button @click="showAllNotifications" class="btn btn-info">顯示所有通知類型</button>
          <button @click="appStore.clearNotifications()" class="btn">清除所有通知</button>
        </div>
      </div>
      
              <!-- 搜尋歷史 -->
        <div class="search-history">
          <h3>搜尋歷史</h3>
          <div v-if="appStore.searchHistory.length > 0" class="history-list">
            <span 
              v-for="query in appStore.searchHistory" 
              :key="query"
              @click="searchContent(query)"
              class="history-item"
            >
              {{ query }}
            </span>
            <button @click="appStore.clearSearchHistory()" class="btn btn-sm btn-danger">清除歷史</button>
          </div>
          <p v-else>暫無搜尋歷史</p>
        </div>
      
      <!-- 最近造訪頁面 -->
      <div class="recent-pages">
        <h3>最近造訪頁面</h3>
        <div v-if="appStore.recentPages.length > 0" class="pages-list">
          <span 
            v-for="page in appStore.recentPages" 
            :key="page"
            class="page-item"
          >
            {{ page }}
          </span>
        </div>
        <p v-else>暫無造訪記錄</p>
      </div>
    </div>
    
    <!-- 通知顯示區域 -->
    <div class="notifications">
      <div 
        v-for="notification in appStore.activeNotifications" 
        :key="notification.id"
        :class="['notification', `notification-${notification.type}`]"
      >
        {{ notification.message }}
        <button @click="appStore.removeNotification(notification.id)" class="close-btn">
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useContent } from '~/composables/useContent'
import { useAppStore } from '~/stores/app'

// 使用組合式函數
const auth = useAuth()
const content = useContent()
const appStore = useAppStore()

// 表單資料
const loginForm = ref({
  email: 'test@example.com',
  password: 'password123'
})

const searchQuery = ref('')
const sortBy = ref('publishedAt')
const sortOrder = ref<'asc' | 'desc'>('desc')

// 處理登入
const handleLogin = async () => {
  await auth.login(loginForm.value.email, loginForm.value.password)
}

// 處理搜尋
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    content.searchContent(searchQuery.value)
  }
}

// 處理排序
const handleSort = () => {
  content.sortContent(sortBy.value, sortOrder.value)
}

// 切換排序順序
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc'
  content.sortContent(sortBy.value, sortOrder.value)
}

// 搜尋內容（用於搜尋歷史點擊）
const searchContent = (query) => {
  searchQuery.value = query
  content.searchContent(query)
}

// 顯示所有類型的通知
const showAllNotifications = () => {
  appStore.showSuccess('這是一個成功通知！')
  setTimeout(() => {
    appStore.showInfo('這是一個資訊通知')
  }, 1000)
  setTimeout(() => {
    appStore.showWarning('這是一個警告通知')
  }, 2000)
  setTimeout(() => {
    appStore.showError('這是一個錯誤通知')
  }, 3000)
}

// 頁面載入時設定頁面資訊
onMounted(() => {
  appStore.setCurrentPage('store-demo', 'Store 示範頁面')
  appStore.setBreadcrumbs(['首頁', '示範', 'Store 示範'])
  
  // 模擬一些內容資料
  if (content.contentItems.length === 0) {
    const mockContent = [
      {
        id: '1',
        title: '記憶系統與學習機制',
        slug: 'memory-system',
        category: '心理學',
        tags: ['記憶', '學習', '認知'],
        content: '這是一篇關於記憶系統的詳細文章...',
        excerpt: '探索人類記憶系統的工作原理和學習機制...',
        author: '張三',
        publishedAt: '2025-01-15T10:00:00Z',
        updatedAt: '2025-01-15T10:00:00Z',
        readTime: 5,
        views: 150,
        likes: 25,
        isPublished: true
      },
      {
        id: '2',
        title: '心理學發展歷程',
        slug: 'psychology-history',
        category: '心理學',
        tags: ['心理學', '歷史', '發展'],
        content: '這是一篇關於心理學發展歷程的文章...',
        excerpt: '從古代哲學到現代心理學的演變過程...',
        author: '李四',
        publishedAt: '2025-01-14T14:30:00Z',
        updatedAt: '2025-01-14T14:30:00Z',
        readTime: 8,
        views: 89,
        likes: 12,
        isPublished: true
      },
      {
        id: '3',
        title: '曼谷旅遊攻略',
        slug: 'bangkok-travel',
        category: '旅遊',
        tags: ['旅遊', '曼谷', '攻略'],
        content: '這是一篇關於曼谷旅遊的詳細攻略...',
        excerpt: '探索曼谷的美食、文化和景點...',
        author: '王五',
        publishedAt: '2025-01-13T09:15:00Z',
        updatedAt: '2025-01-13T09:15:00Z',
        readTime: 12,
        views: 234,
        likes: 45,
        isPublished: true
      }
    ]
    
    content.setContentItems(mockContent)
  }
})
</script>

<style scoped>
.store-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.demo-section h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.demo-section h3 {
  color: #555;
  margin-top: 20px;
}

/* 認證示範 */
.auth-demo {
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.user-info p {
  margin: 8px 0;
}

.user-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

/* 內容管理示範 */
.content-demo {
  margin-bottom: 30px;
}

.search-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.category-filters {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.sort-options {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.content-list {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.content-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
}

.content-item h4 {
  margin-top: 0;
  color: #333;
}

.content-meta {
  display: flex;
  gap: 15px;
  margin: 10px 0;
  font-size: 12px;
  color: #666;
  flex-wrap: wrap;
}

.content-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}

/* 分頁 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
}

.page-info {
  font-size: 14px;
  color: #666;
}

/* 匯出功能 */
.export-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

/* 應用設定 */
.app-settings {
  margin-bottom: 30px;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.settings-grid label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.app-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 搜尋歷史 */
.search-history {
  margin-bottom: 20px;
}

.history-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
}

.history-item {
  padding: 5px 10px;
  background: #e9ecef;
  border-radius: 15px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.history-item:hover {
  background: #dee2e6;
}

/* 最近造訪頁面 */
.recent-pages {
  margin-bottom: 20px;
}

.pages-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.page-item {
  padding: 5px 10px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 12px;
  color: #6c757d;
}

/* 通用樣式 */
.input, .select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.input {
  min-width: 200px;
}

.select {
  min-width: 150px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.btn:hover {
  opacity: 0.8;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

/* 通知樣式 */
.notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 300px;
}

.notification {
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  position: relative;
  animation: slideIn 0.3s ease-out;
}

.notification-success {
  background-color: #28a745;
}

.notification-error {
  background-color: #dc3545;
}

.notification-warning {
  background-color: #ffc107;
  color: #333;
}

.notification-info {
  background-color: #17a2b8;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .login-form,
  .search-filters,
  .category-filters,
  .sort-options {
    flex-direction: column;
    align-items: stretch;
  }
  
  .input, .select {
    min-width: auto;
  }
  
  .content-meta,
  .content-actions {
    flex-direction: column;
    gap: 5px;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .user-actions,
  .app-actions {
    flex-direction: column;
  }
}
</style>
