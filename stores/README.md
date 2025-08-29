# Pinia Store 使用指南

本專案使用 Pinia 作為狀態管理解決方案。Pinia 是 Vue 3 的官方推薦狀態管理庫，提供了類型安全、開發工具支援和模組化的狀態管理。

## 安裝和設定

### 1. 依賴安裝

```bash
pnpm add pinia @pinia/nuxt
```

### 2. Nuxt 設定

在 `nuxt.config.ts` 中新增 `@pinia/nuxt` 模組：

```typescript
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  // ... 其他設定
})
```

## Store 結構

專案包含三個主要的 store：

### 1. 用戶狀態管理 (`stores/user.ts`)

管理用戶認證、個人資訊和偏好設定。

**主要功能：**
- 用戶登入/登出
- 用戶資訊管理
- 主題切換（明/暗模式）
- 語言設定
- 用戶偏好持久化

**使用範例：**

```typescript
import { useUserStore } from '~/stores'

const userStore = useUserStore()

// 登入
await userStore.login('user@example.com', 'password')

// 檢查登入狀態
if (userStore.isLoggedIn) {
  console.log('用戶已登入:', userStore.currentUser?.name)
}

// 切換主題
userStore.toggleTheme()

// 設定語言
userStore.setLanguage('en')
```

### 2. 應用設定管理 (`stores/app.ts`)

管理應用層級的設定和狀態。

**主要功能：**
- 應用設定（側邊欄、通知、自動儲存等）
- 頁面導航和麵包屑
- 通知系統
- 模態框狀態管理
- 搜尋歷史和最近造訪頁面

**使用範例：**

```typescript
import { useAppStore } from '~/stores'

const appStore = useAppStore()

// 切換側邊欄
appStore.toggleSidebar()

// 顯示通知
appStore.showSuccess('操作成功！')
appStore.showError('發生錯誤')
appStore.showWarning('警告資訊')
appStore.showInfo('提示資訊')

// 設定當前頁面
appStore.setCurrentPage('/about', '關於我們')
appStore.setBreadcrumbs(['首頁', '關於'])

// 管理模態框
appStore.setModalState('settings', true)
```

### 3. 內容管理 (`stores/content.ts`)

管理文章、頁面等內容的狀態。

**主要功能：**
- 內容清單管理
- 過濾和搜尋
- 分頁
- 收藏和閱讀歷史
- 草稿管理
- 內容統計（瀏覽量、點讚數等）

**使用範例：**

```typescript
import { useContentStore } from '~/stores'

const contentStore = useContentStore()

// 設定內容清單
contentStore.setContentItems(articles)

// 應用過濾器
contentStore.setFilters({
  category: '心理學',
  search: '記憶',
  sortBy: 'publishedAt',
  sortOrder: 'desc'
})

// 取得過濾後的內容
const filteredContent = contentStore.filteredContent

// 取得分頁內容
const paginatedContent = contentStore.paginatedContent

// 收藏內容
contentStore.toggleFavorite('article-1')

// 新增到閱讀歷史
contentStore.addToReadingHistory('article-1')

// 分頁導航
contentStore.nextPage()
contentStore.previousPage()
contentStore.goToPage(3)
```

## 組合式函數 (Composables)

為了更好的程式碼重複使用，可以建立組合式函數來封裝常用的 store 操作：

```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const userStore = useUserStore()
  const appStore = useAppStore()
  
  const login = async (email: string, password: string) => {
    const success = await userStore.login(email, password)
    if (success) {
      appStore.showSuccess('登入成功！')
    }
    return success
  }
  
  const logout = async () => {
    const success = await userStore.logout()
    if (success) {
      appStore.showSuccess('已安全登出')
    }
    return success
  }
  
  return {
    user: userStore.currentUser,
    isLoggedIn: userStore.isLoggedIn,
    isLoading: userStore.isLoading,
    error: userStore.error,
    login,
    logout
  }
}
```

## 持久化設定

所有 store 都設定了持久化，使用 `persistedState.localStorage` 來儲存資料到本地儲存：

```typescript
persist: {
  storage: persistedState.localStorage,
  paths: ['user', 'isAuthenticated'] // 只持久化指定欄位
}
```

## 開發工具

Pinia 提供了優秀的開發工具支援：

1. **Vue DevTools**: 在瀏覽器中檢視和除錯 store 狀態
2. **TypeScript 支援**: 完整的類型推斷和類型檢查
3. **熱重載**: 開發時 store 的修改會自動熱重載

## 最佳實踐

### 1. 狀態設計原則

- **單一職責**: 每個 store 只管理一個特定的業務領域
- **扁平化**: 避免深層巢狀的狀態結構
- **不可變性**: 使用 getter 和 action 來管理狀態變更

### 2. 效能最佳化

- 使用 `storeToRefs` 來解構 store，保持響應性
- 合理使用 getter 的快取機制
- 避免在 getter 中進行複雜計算

### 3. 錯誤處理

- 在 action 中使用 try-catch 處理非同步操作
- 提供清晰的錯誤資訊和狀態
- 實作錯誤恢復機制

### 4. 測試

- 為每個 store 編寫單元測試
- 測試 state、getter 和 action 的行為
- 模擬外部依賴（API 呼叫等）

## 範例頁面

檢視 `components/StoreExample.vue` 元件來了解如何在實際元件中使用這些 store。

## 故障排除

### 常見問題

1. **Store 未定義**: 確保在 `nuxt.config.ts` 中正確設定了 `@pinia/nuxt` 模組
2. **類型錯誤**: 檢查 TypeScript 設定和類型定義
3. **持久化失敗**: 確保瀏覽器支援 localStorage

### 除錯技巧

1. 使用 Vue DevTools 檢視 store 狀態
2. 在控制台中使用 `$pinia` 存取 store 執行個體
3. 啟用 Pinia 的除錯日誌

## 更多資源

- [Pinia 官方文件](https://pinia.vuejs.org/)
- [Nuxt Pinia 模組](https://pinia.nuxtjs.org/)
- [Vue 3 組合式 API](https://vuejs.org/guide/extras/composition-api-faq.html)
