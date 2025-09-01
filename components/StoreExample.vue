<template>
  <div class="store-example">
    <h2>Pinia Store 使用示例</h2>
    
    <!-- 用户状态示例 -->
    <div class="section">
      <h3>用户状态管理</h3>
      <div v-if="userStore.isLoggedIn" class="user-info">
        <p>欢迎，{{ userStore.currentUser?.name }}！</p>
        <p>邮箱：{{ userStore.currentUser?.email }}</p>
        <p>主题：{{ userStore.currentTheme }}</p>
        <p>语言：{{ userStore.currentLanguage }}</p>
        <button @click="userStore.toggleTheme()" class="btn">
          切换主题
        </button>
        <button @click="userStore.logout()" class="btn btn-danger">
          登出
        </button>
      </div>
      <div v-else class="login-form">
        <input v-model="loginForm.email" type="email" placeholder="邮箱" class="input" />
        <input v-model="loginForm.password" type="password" placeholder="密码" class="input" />
        <button @click="handleLogin" class="btn btn-primary" :disabled="userStore.isLoading">
          {{ userStore.isLoading ? '登入中...' : '登入' }}
        </button>
      </div>
      <div v-if="userStore.error" class="error">
        {{ userStore.error }}
      </div>
    </div>

    <!-- 应用设置示例 -->
    <div class="section">
      <h3>应用设置</h3>
      <div class="settings">
        <label>
          <input 
            type="checkbox" 
            v-model="appStore.settings.sidebarCollapsed"
            @change="appStore.setSidebarCollapsed(appStore.settings.sidebarCollapsed)"
          />
          侧边栏折叠
        </label>
        <label>
          <input 
            type="checkbox" 
            v-model="appStore.settings.notificationsEnabled"
          />
          启用通知
        </label>
        <label>
          <input 
            type="checkbox" 
            v-model="appStore.settings.autoSave"
          />
          自动保存
        </label>
      </div>
      <button @click="appStore.toggleSidebar()" class="btn">
        {{ appStore.isSidebarCollapsed ? '展开' : '折叠' }}侧边栏
      </button>
      <button @click="showNotification" class="btn btn-info">
        显示通知
      </button>
    </div>

    <!-- 内容管理示例 -->
    <div class="section">
      <h3>内容管理</h3>
      <div class="content-filters">
        <input 
          v-model="contentStore.filters.search" 
          placeholder="搜索内容..." 
          class="input"
          @input="updateContentFilters"
        />
        <select v-model="contentStore.filters.category" @change="updateContentFilters" class="select">
          <option value="">所有分类</option>
          <option v-for="category in contentStore.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <select v-model="contentStore.filters.sortBy" @change="updateContentFilters" class="select">
          <option value="publishedAt">发布时间</option>
          <option value="title">标题</option>
          <option value="views">浏览量</option>
          <option value="likes">点赞数</option>
        </select>
      </div>
      
      <div class="content-list">
        <div v-for="item in contentStore.paginatedContent" :key="item.id" class="content-item">
          <h4>{{ item.title }}</h4>
          <p>{{ item.excerpt }}</p>
          <div class="content-meta">
            <span>分类：{{ item.category }}</span>
            <span>作者：{{ item.author }}</span>
            <span>浏览量：{{ item.views }}</span>
            <span>点赞：{{ item.likes }}</span>
          </div>
          <div class="content-actions">
            <button @click="contentStore.toggleFavorite(item.id)" class="btn btn-sm">
              {{ contentStore.isFavorite(item.id) ? '取消收藏' : '收藏' }}
            </button>
            <button @click="contentStore.incrementLikes(item.id)" class="btn btn-sm btn-primary">
              点赞
            </button>
            <button @click="contentStore.addToReadingHistory(item.id)" class="btn btn-sm btn-info">
              标记已读
            </button>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="pagination">
        <button 
          @click="contentStore.previousPage()" 
          :disabled="contentStore.pagination.currentPage === 1"
          class="btn btn-sm"
        >
          上一页
        </button>
        <span class="page-info">
          第 {{ contentStore.pagination.currentPage }} 页，共 {{ contentStore.pagination.totalPages }} 页
        </span>
        <button 
          @click="contentStore.nextPage()" 
          :disabled="contentStore.pagination.currentPage === contentStore.pagination.totalPages"
          class="btn btn-sm"
        >
          下一页
        </button>
      </div>
    </div>

    <!-- 通知显示 -->
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import { useAppStore } from '~/stores/app'
import { useContentStore } from '~/stores/content'

// 使用 store
const userStore = useUserStore()
const appStore = useAppStore()
const contentStore = useContentStore()

// 登录表单
const loginForm = ref({
  email: 'test@example.com',
  password: 'password123'
})

// 处理登录
const handleLogin = async () => {
  const success = await userStore.login(loginForm.value.email, loginForm.value.password)
  if (success) {
    appStore.showSuccess('登录成功！')
  }
}

// 显示通知
const showNotification = () => {
  appStore.showSuccess('这是一个成功通知！')
  setTimeout(() => {
    appStore.showInfo('这是一个信息通知')
  }, 1000)
  setTimeout(() => {
    appStore.showWarning('这是一个警告通知')
  }, 2000)
  setTimeout(() => {
    appStore.showError('这是一个错误通知')
  }, 3000)
}

// 更新内容过滤器
const updateContentFilters = () => {
  contentStore.setFilters({
    search: contentStore.filters.search,
    category: contentStore.filters.category,
    sortBy: contentStore.filters.sortBy
  })
}

// 模拟内容数据
onMounted(() => {
  const mockContent = [
    {
      id: '1',
      title: '记忆系统与学习机制',
      slug: 'memory-system',
      category: '心理学',
      tags: ['记忆', '学习', '认知'],
      content: '这是一篇关于记忆系统的详细文章...',
      excerpt: '探索人类记忆系统的工作原理和学习机制...',
      author: '张三',
      publishedAt: '2025-01-15T10:00:00Z',
      updatedAt: '2025-01-15T10:00:00Z',
      readTime: 5,
      views: 150,
      likes: 25,
      isPublished: true
    },
    {
      id: '2',
      title: '心理学发展历程',
      slug: 'psychology-history',
      category: '心理学',
      tags: ['心理学', '历史', '发展'],
      content: '这是一篇关于心理学发展历程的文章...',
      excerpt: '从古代哲学到现代心理学的演变过程...',
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
      title: '曼谷旅游攻略',
      slug: 'bangkok-travel',
      category: '旅游',
      tags: ['旅游', '曼谷', '攻略'],
      content: '这是一篇关于曼谷旅游的详细攻略...',
      excerpt: '探索曼谷的美食、文化和景点...',
      author: '王五',
      publishedAt: '2025-01-13T09:15:00Z',
      updatedAt: '2025-01-13T09:15:00Z',
      readTime: 12,
      views: 234,
      likes: 45,
      isPublished: true
    }
  ]
  
  contentStore.setContentItems(mockContent)
  
  // 设置当前页面
  appStore.setCurrentPage('store-example', 'Store 示例页面')
  appStore.setBreadcrumbs(['首页', '示例', 'Store 示例'])
})
</script>

<style scoped>
.store-example {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.section h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.user-info p {
  margin: 8px 0;
}

.login-form {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

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
  transition: background-color 0.2s;
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

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.settings label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.content-filters {
  display: flex;
  gap: 10px;
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
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.page-info {
  font-size: 14px;
  color: #666;
}

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

.error {
  color: #dc3545;
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
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

@media (max-width: 768px) {
  .login-form {
    flex-direction: column;
    align-items: stretch;
  }
  
  .input, .select {
    min-width: auto;
  }
  
  .content-filters {
    flex-direction: column;
  }
  
  .content-meta {
    flex-direction: column;
    gap: 5px;
  }
  
  .content-actions {
    flex-direction: column;
  }
}
</style>
