import { useUserStore } from '~/stores/user'
import { useAppStore } from '~/stores/app'

export const useAuth = () => {
  const userStore = useUserStore()
  const appStore = useAppStore()
  
  /**
   * 用戶登入
   * @param email 電子郵件
   * @param password 密碼
   * @returns 登入是否成功
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const success = await userStore.login(email, password)
      if (success) {
        appStore.showSuccess('登入成功！歡迎回來')
        // 可以在這裡新增登入後的其他邏輯，比如重定向
        return true
      }
      return false
    } catch (error) {
      appStore.showError('登入過程中發生錯誤')
      return false
    }
  }
  
  /**
   * 用戶登出
   * @returns 登出是否成功
   */
  const logout = async (): Promise<boolean> => {
    try {
      const success = await userStore.logout()
      if (success) {
        appStore.showSuccess('已安全登出')
        // 可以在這裡新增登出後的其他邏輯，比如重定向到登入頁
        return true
      }
      return false
    } catch (error) {
      appStore.showError('登出過程中發生錯誤')
      return false
    }
  }
  
  /**
   * 檢查用戶是否有特定權限
   * @param permission 權限名稱
   * @returns 是否有權限
   */
  const hasPermission = (permission: string): boolean => {
    if (!userStore.currentUser) return false
    // 這裡可以根據實際需求實作權限檢查邏輯
    // 例如：檢查用戶角色、權限清單等
    return true // 臨時回傳 true，實際應該根據用戶權限判斷
  }
  
  /**
   * 檢查用戶是否已登入
   * @returns 是否已登入
   */
  const isAuthenticated = (): boolean => {
    return userStore.isLoggedIn
  }
  
  /**
   * 取得當前用戶資訊
   * @returns 用戶資訊或 null
   */
  const getCurrentUser = () => {
    return userStore.currentUser
  }
  
  /**
   * 更新用戶偏好設定
   * @param preferences 偏好設定
   */
  const updateUserPreferences = (preferences: any) => {
    userStore.updatePreferences(preferences)
    appStore.showSuccess('偏好設定已更新')
  }
  
  /**
   * 切換用戶主題
   */
  const toggleUserTheme = () => {
    userStore.toggleTheme()
    const newTheme = userStore.currentTheme
    appStore.showInfo(`主題已切換到${newTheme === 'light' ? '明亮' : '暗黑'}模式`)
  }
  
  /**
   * 設定用戶語言
   * @param language 語言代碼
   */
  const setUserLanguage = (language: 'zh-TW' | 'en') => {
    userStore.setLanguage(language)
    const langText = language === 'zh-TW' ? '繁體中文' : 'English'
    appStore.showSuccess(`語言已切換到${langText}`)
  }
  
  return {
    // 狀態
    user: userStore.currentUser,
    isLoggedIn: userStore.isLoggedIn,
    isLoading: userStore.isLoading,
    error: userStore.error,
    currentTheme: userStore.currentTheme,
    currentLanguage: userStore.currentLanguage,
    
    // 方法
    login,
    logout,
    hasPermission,
    isAuthenticated,
    getCurrentUser,
    updateUserPreferences,
    toggleUserTheme,
    setUserLanguage
  }
}
