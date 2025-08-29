import { defineStore } from 'pinia'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  preferences: {
    theme: 'light' | 'dark'
    language: 'zh-TW' | 'en'
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    // 取得用戶資訊
    currentUser: (state) => state.user,
    
    // 檢查是否已登入
    isLoggedIn: (state) => state.isAuthenticated,
    
    // 取得用戶偏好設定
    userPreferences: (state) => state.user?.preferences,
    
    // 取得主題設定
    currentTheme: (state) => state.user?.preferences.theme || 'light',
    
    // 取得語言設定
    currentLanguage: (state) => state.user?.preferences.language || 'zh-TW',
  },

  actions: {
    // 設定用戶資訊
    setUser(user: User) {
      this.user = user
      this.isAuthenticated = true
      this.error = null
    },

    // 清除用戶資訊
    clearUser() {
      this.user = null
      this.isAuthenticated = false
      this.error = null
    },

    // 更新用戶偏好設定
    updatePreferences(preferences: Partial<User['preferences']>) {
      if (this.user) {
        this.user.preferences = { ...this.user.preferences, ...preferences }
      }
    },

    // 切換主題
    toggleTheme() {
      if (this.user) {
        const newTheme = this.user.preferences.theme === 'light' ? 'dark' : 'light'
        this.updatePreferences({ theme: newTheme })
      }
    },

    // 設定語言
    setLanguage(language: 'zh-TW' | 'en') {
      this.updatePreferences({ language })
    },

    // 設定載入狀態
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    // 設定錯誤訊息
    setError(error: string | null) {
      this.error = error
    },

    // 模擬登入
    async login(email: string, password: string) {
      this.setLoading(true)
      this.setError(null)
      
      try {
        // 模擬 API 呼叫
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 模擬用戶資料
        const user: User = {
          id: '1',
          name: '測試用戶',
          email,
          avatar: '/avatar.jpg',
          preferences: {
            theme: 'light',
            language: 'zh-TW'
          }
        }
        
        this.setUser(user)
        return true
      } catch (error) {
        this.setError('登入失敗，請檢查您的帳號密碼')
        return false
      } finally {
        this.setLoading(false)
      }
    },

    // 模擬登出
    async logout() {
      this.setLoading(true)
      
      try {
        // 模擬 API 呼叫
        await new Promise(resolve => setTimeout(resolve, 500))
        this.clearUser()
        return true
      } catch (error) {
        this.setError('登出失敗')
        return false
      } finally {
        this.setLoading(false)
      }
    }
  }
})
