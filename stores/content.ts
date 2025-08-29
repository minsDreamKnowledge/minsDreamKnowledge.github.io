import { defineStore } from 'pinia'

export interface ContentItem {
  id: string
  title: string
  slug: string
  category: string
  tags: string[]
  content: string
  excerpt: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: number
  views: number
  likes: number
  isPublished: boolean
}

export interface ContentFilter {
  category?: string
  tags?: string[]
  search?: string
  author?: string
  dateRange?: {
    start: string
    end: string
  }
  sortBy?: 'title' | 'publishedAt' | 'views' | 'likes' | 'readTime'
  sortOrder?: 'asc' | 'desc'
}

export const useContentStore = defineStore('content', {
  state: () => ({
    // 內容列表
    contentItems: [] as ContentItem[],
    
    // 過濾和分頁
    filters: {
      category: '',
      tags: [] as string[],
      search: '',
      author: '',
      dateRange: null as { start: string; end: string } | null,
      sortBy: 'publishedAt' as 'title' | 'publishedAt' | 'views' | 'likes' | 'readTime',
      sortOrder: 'desc' as 'asc' | 'desc'
    } as ContentFilter,
    
    // 分頁
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 0
    },
    
    // 載入狀態
    isLoading: false,
    isSaving: false,
    
    // 錯誤狀態
    error: null as string | null,
    
    // 當前編輯的內容
    currentItem: null as ContentItem | null,
    
    // 草稿
    drafts: [] as ContentItem[],
    
    // 收藏
    favorites: [] as string[],
    
    // 阅读历史
    readingHistory: [] as string[]
  }),

  getters: {
    // 取得過濾後的內容
    filteredContent: (state) => {
      let filtered = [...state.contentItems]
      
      // 按分類過濾
      if (state.filters.category) {
        filtered = filtered.filter(item => item.category === state.filters.category)
      }
      
      // 按標籤過濾
      if (state.filters.tags && state.filters.tags.length > 0) {
        filtered = filtered.filter(item => 
          state.filters.tags!.some(tag => item.tags.includes(tag))
        )
      }
      
      // 按搜尋關鍵詞過濾
      if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase()
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchLower) ||
          item.content.toLowerCase().includes(searchLower) ||
          item.excerpt.toLowerCase().includes(searchLower)
        )
      }
      
      // 按作者過濾
      if (state.filters.author) {
        filtered = filtered.filter(item => item.author === state.filters.author)
      }
      
      // 按日期範圍過濾
      if (state.filters.dateRange) {
        const startDate = new Date(state.filters.dateRange.start)
        const endDate = new Date(state.filters.dateRange.end)
        filtered = filtered.filter(item => {
          const itemDate = new Date(item.publishedAt)
          return itemDate >= startDate && itemDate <= endDate
        })
      }
      
      return filtered
    },

    // 取得排序後的內容
    sortedContent: (state) => {
      const filtered = state.filteredContent

      return filtered.sort((a: ContentItem, b: ContentItem) => {
        let aValue: any
        let bValue: any
        
        switch (state.filters.sortBy) {
          case 'title':
            aValue = a.title
            bValue = b.title
            break
          case 'publishedAt':
            aValue = new Date(a.publishedAt)
            bValue = new Date(b.publishedAt)
            break
          case 'views':
            aValue = a.views
            bValue = b.views
            break
          case 'likes':
            aValue = a.likes
            bValue = b.likes
            break
          case 'readTime':
            aValue = a.readTime
            bValue = b.readTime
            break
          default:
            aValue = new Date(a.publishedAt)
            bValue = new Date(b.publishedAt)
        }
        
        if (state.filters.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })
    },

    // 取得分頁後的內容
    paginatedContent: (state: any) => {
      const sorted = state.sortedContent
      const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage
      const endIndex = startIndex + state.pagination.itemsPerPage
      return sorted.slice(startIndex, endIndex)
    },

    // 取得所有分類
    categories: (state) => {
      const categories = new Set(state.contentItems.map(item => item.category))
      return Array.from(categories).sort()
    },

    // 取得所有標籤
    tags: (state) => {
      const tags = new Set(state.contentItems.flatMap(item => item.tags))
      return Array.from(tags).sort()
    },

    // 取得所有作者
    authors: (state) => {
      const authors = new Set(state.contentItems.map(item => item.author))
      return Array.from(authors).sort()
    },

    // 檢查內容是否被收藏
    isFavorite: (state) => (id: string) => state.favorites.includes(id),

    // 檢查內容是否在閱讀歷史中
    isInReadingHistory: (state) => (id: string) => state.readingHistory.includes(id)
  },

  actions: {
    // 設定內容清單
    setContentItems(items: ContentItem[]) {
      this.contentItems = items
      this.updatePagination()
    },

    // 新增內容
    addContent(item: ContentItem) {
      this.contentItems.unshift(item)
      this.updatePagination()
    },

    // 更新內容
    updateContent(id: string, updates: Partial<ContentItem>) {
      const index = this.contentItems.findIndex(item => item.id === id)
      if (index > -1) {
        this.contentItems[index] = { ...this.contentItems[index], ...updates } as ContentItem
      }
    },

    // 刪除內容
    deleteContent(id: string) {
      this.contentItems = this.contentItems.filter(item => item.id !== id)
      this.updatePagination()
    },

    // 設定過濾器
    setFilters(filters: Partial<ContentFilter>) {
      this.filters = { ...this.filters, ...filters }
      this.pagination.currentPage = 1 // 重設到第一頁
      this.updatePagination()
    },

    // 重設過濾器
    resetFilters() {
      this.filters = {
        category: '',
        tags: [],
        search: '',
        author: '',
        dateRange: undefined,
        sortBy: 'publishedAt',
        sortOrder: 'desc'
      }
      this.pagination.currentPage = 1
      this.updatePagination()
    },

    // 設定分頁
    setPagination(pagination: Partial<typeof this.pagination>) {
      this.pagination = { ...this.pagination, ...pagination }
    },

    // 更新分頁資訊
    updatePagination() {
      const totalItems = this.filteredContent.length
      const totalPages = Math.ceil(totalItems / this.pagination.itemsPerPage)
      
      this.pagination.totalItems = totalItems
      this.pagination.totalPages = totalPages
      
      // 確保當前頁不超出範圍
      if (this.pagination.currentPage > totalPages) {
        this.pagination.currentPage = totalPages || 1
      }
    },

    // 下一頁
    nextPage() {
      if (this.pagination.currentPage < this.pagination.totalPages) {
        this.pagination.currentPage++
      }
    },

    // 上一頁
    previousPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--
      }
    },

    // 跳轉到指定頁
    goToPage(page: number) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
      }
    },

    // 設定當前編輯的內容
    setCurrentItem(item: ContentItem | null) {
      this.currentItem = item
    },

    // 儲存草稿
    saveDraft(item: ContentItem) {
      const existingIndex = this.drafts.findIndex(draft => draft.id === item.id)
      if (existingIndex > -1) {
        this.drafts[existingIndex] = item
      } else {
        this.drafts.push(item)
      }
    },

    // 刪除草稿
    deleteDraft(id: string) {
      this.drafts = this.drafts.filter(draft => draft.id !== id)
    },

    // 切換收藏狀態
    toggleFavorite(id: string) {
      const index = this.favorites.indexOf(id)
      if (index > -1) {
        this.favorites.splice(index, 1)
      } else {
        this.favorites.push(id)
      }
    },

    // 新增到閱讀歷史
    addToReadingHistory(id: string) {
      // 移除已存在的記錄
      this.readingHistory = this.readingHistory.filter(itemId => itemId !== id)
      // 新增到開頭
      this.readingHistory.unshift(id)
      // 限制歷史記錄數量
      if (this.readingHistory.length > 50) {
        this.readingHistory = this.readingHistory.slice(0, 50)
      }
    },

    // 增加瀏覽量
    incrementViews(id: string) {
      const item = this.contentItems.find(item => item.id === id)
      if (item) {
        item.views++
      }
    },

    // 增加點讚數
    incrementLikes(id: string) {
      const item = this.contentItems.find(item => item.id === id)
      if (item) {
        item.likes++
      }
    },

    // 設定載入狀態
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    // 設定儲存狀態
    setSaving(saving: boolean) {
      this.isSaving = saving
    },

    // 設定錯誤訊息
    setError(error: string | null) {
      this.error = error
    },

    // 清除錯誤
    clearError() {
      this.error = null
    }
  }
})
