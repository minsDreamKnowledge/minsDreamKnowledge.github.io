import { defineStore } from 'pinia'

export interface AppSettings {
  sidebarCollapsed: boolean
  notificationsEnabled: boolean
  autoSave: boolean
  searchHistory: string[]
  recentPages: string[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    settings: {
      sidebarCollapsed: false,
      notificationsEnabled: true,
      autoSave: true,
      searchHistory: [] as string[],
      recentPages: [] as string[]
    } as AppSettings,
    
    // APP狀態
    isLoading: false,
    currentPage: '',
    breadcrumbs: [] as string[],
    
    // 通知
    notifications: [] as Array<{
      id: string
      type: 'info' | 'success' | 'warning' | 'error'
      message: string
      duration?: number
    }>,
    
    // 模態框狀態
    modals: {
      settings: false,
      help: false,
      about: false
    }
  }),

  getters: {
    // 取得應用設定
    appSettings: (state) => state.settings,
    
    // 檢查側邊欄是否摺疊
    isSidebarCollapsed: (state) => state.settings.sidebarCollapsed,
    
    // 取得搜尋歷史
    searchHistory: (state) => state.settings.searchHistory,
    
    // 取得最近造訪的頁面
    recentPages: (state) => state.settings.recentPages,
    
    // 取得當前頁面
    currentPageTitle: (state) => state.currentPage,
    
    // 取得麵包屑導航
    breadcrumbItems: (state) => state.breadcrumbs,
    
    // 取得通知清單
    activeNotifications: (state) => state.notifications,
    
    // 檢查是否有未讀通知
    hasUnreadNotifications: (state) => state.notifications.length > 0,
    
    // 取得模態框狀態
    modalStates: (state) => state.modals
  },

  actions: {
    // 切換側邊欄狀態
    toggleSidebar() {
      this.settings.sidebarCollapsed = !this.settings.sidebarCollapsed
    },

    // 設定側邊欄狀態
    setSidebarCollapsed(collapsed: boolean) {
      this.settings.sidebarCollapsed = collapsed
    },

    // 新增搜尋歷史
    addSearchHistory(query: string) {
      if (query.trim() && !this.settings.searchHistory.includes(query)) {
        this.settings.searchHistory.unshift(query)
        // 限制搜尋歷史數量
        if (this.settings.searchHistory.length > 10) {
          this.settings.searchHistory = this.settings.searchHistory.slice(0, 10)
        }
      }
    },

    // 清除搜尋歷史
    clearSearchHistory() {
      this.settings.searchHistory = []
    },

    // 新增最近造訪的頁面
    addRecentPage(page: string) {
      if (page && !this.settings.recentPages.includes(page)) {
        this.settings.recentPages.unshift(page)
        // 限制最近頁面數量
        if (this.settings.recentPages.length > 5) {
          this.settings.recentPages = this.settings.recentPages.slice(0, 5)
        }
      }
    },

    // 設定當前頁面
    setCurrentPage(page: string, title?: string) {
      this.currentPage = title || page
      this.addRecentPage(page)
    },

    // 設定麵包屑導航
    setBreadcrumbs(breadcrumbs: string[]) {
      this.breadcrumbs = breadcrumbs
    },

    // 新增通知
    addNotification(notification: {
      type: 'info' | 'success' | 'warning' | 'error'
      message: string
      duration?: number
    }) {
      const id = Date.now().toString()
      const newNotification = {
        id,
        ...notification,
        duration: notification.duration || 5000
      }
      
      this.notifications.push(newNotification)
      
      // 自動移除通知
      if (newNotification.duration > 0) {
        setTimeout(() => {
          this.removeNotification(id)
        }, newNotification.duration)
      }
    },

    // 移除通知
    removeNotification(id: string) {
      const index = this.notifications.findIndex(n => n.id === id)
      if (index > -1) {
        this.notifications.splice(index, 1)
      }
    },

    // 清除所有通知
    clearNotifications() {
      this.notifications = []
    },

    // 顯示成功通知
    showSuccess(message: string, duration?: number) {
      this.addNotification({ type: 'success', message, duration })
    },

    // 顯示錯誤通知
    showError(message: string, duration?: number) {
      this.addNotification({ type: 'error', message, duration })
    },

    // 顯示警告通知
    showWarning(message: string, duration?: number) {
      this.addNotification({ type: 'warning', message, duration })
    },

    // 顯示資訊通知
    showInfo(message: string, duration?: number) {
      this.addNotification({ type: 'info', message, duration })
    },

    // 切換模態框狀態
    toggleModal(modalName: keyof typeof this.modals) {
      this.modals[modalName] = !this.modals[modalName]
    },

    // 設定模態框狀態
    setModalState(modalName: keyof typeof this.modals, isOpen: boolean) {
      this.modals[modalName] = isOpen
    },

    // 關閉所有模態框
    closeAllModals() {
      Object.keys(this.modals).forEach(key => {
        this.modals[key as keyof typeof this.modals] = false
      })
    },

    // 設定載入狀態
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    // 更新應用設定
    updateSettings(settings: Partial<AppSettings>) {
      this.settings = { ...this.settings, ...settings }
    },

    // 重設應用設定
    resetSettings() {
      this.settings = {
        sidebarCollapsed: false,
        notificationsEnabled: true,
        autoSave: true,
        searchHistory: [],
        recentPages: []
      }
    }
  }
})
