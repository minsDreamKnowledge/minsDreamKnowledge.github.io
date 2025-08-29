import { useContentStore, useAppStore } from '~/stores'
import type { ContentItem, ContentFilter } from '~/stores'

export const useContent = () => {
  const contentStore = useContentStore()
  const appStore = useAppStore()
  
  /**
   * 搜尋內容
   * @param query 搜尋關鍵詞
   */
  const searchContent = (query: string) => {
    if (!query.trim()) {
      appStore.showWarning('請輸入搜尋關鍵詞')
      return
    }
    
    contentStore.setFilters({ search: query })
    appStore.addSearchHistory(query)
    appStore.showInfo(`正在搜尋：${query}`)
  }
  
  /**
   * 按分類過濾內容
   * @param category 分類名稱
   */
  const filterByCategory = (category: string) => {
    contentStore.setFilters({ category })
    appStore.showInfo(`已篩選分類：${category}`)
  }
  
  /**
   * 按標籤過濾內容
   * @param tags 標籤陣列
   */
  const filterByTags = (tags: string[]) => {
    contentStore.setFilters({ tags })
    appStore.showInfo(`已篩選標籤：${tags.join(', ')}`)
  }
  
  /**
   * 排序內容
   * @param sortBy 排序欄位
   * @param sortOrder 排序順序
   */
  const sortContent = (sortBy: ContentFilter['sortBy'], sortOrder: ContentFilter['sortOrder'] = 'desc') => {
    contentStore.setFilters({ sortBy, sortOrder })
    const sortText = {
      title: '標題',
      publishedAt: '發布時間',
      views: '瀏覽量',
      likes: '點讚數',
      readTime: '閱讀時間'
    }[sortBy] || '發布時間'
    
    appStore.showInfo(`已按${sortText}${sortOrder === 'asc' ? '升序' : '降序'}排列`)
  }
  
  /**
   * 重設所有過濾器
   */
  const resetFilters = () => {
    contentStore.resetFilters()
    appStore.showInfo('已重設所有篩選條件')
  }
  
  /**
   * 收藏/取消收藏內容
   * @param id 內容ID
   */
  const toggleFavorite = (id: string) => {
    const isFavorite = contentStore.isFavorite(id)
    contentStore.toggleFavorite(id)
    
    if (isFavorite) {
      appStore.showInfo('已取消收藏')
    } else {
      appStore.showSuccess('已新增到收藏')
    }
  }
  
  /**
   * 標記內容為已讀
   * @param id 內容ID
   */
  const markAsRead = (id: string) => {
    contentStore.addToReadingHistory(id)
    appStore.showInfo('已標記為已讀')
  }
  
  /**
   * 點讚內容
   * @param id 內容ID
   */
  const likeContent = (id: string) => {
    contentStore.incrementLikes(id)
    appStore.showSuccess('點讚成功！')
  }
  
  /**
   * 增加內容瀏覽量
   * @param id 內容ID
   */
  const incrementViews = (id: string) => {
    contentStore.incrementViews(id)
  }
  
  /**
   * 取得內容詳情
   * @param id 內容ID
   * @returns 內容詳情或 null
   */
  const getContentById = (id: string): ContentItem | null => {
    return contentStore.contentItems.find(item => item.id === id) || null
  }
  
  /**
   * 取得相關推薦內容
   * @param currentId 當前內容ID
   * @param category 分類
   * @param tags 標籤
   * @param limit 推薦數量
   * @returns 推薦內容清單
   */
  const getRelatedContent = (
    currentId: string, 
    category?: string, 
    tags?: string[], 
    limit: number = 3
  ): ContentItem[] => {
    let related = contentStore.contentItems.filter(item => item.id !== currentId)
    
    // 優先按分類篩選
    if (category) {
      const sameCategory = related.filter(item => item.category === category)
      if (sameCategory.length >= limit) {
        return sameCategory.slice(0, limit)
      }
      related = sameCategory
    }
    
    // 按標籤相似度排序
    if (tags && tags.length > 0) {
      related.sort((a, b) => {
        const aSimilarity = a.tags.filter(tag => tags.includes(tag)).length
        const bSimilarity = b.tags.filter(tag => tags.includes(tag)).length
        return bSimilarity - aSimilarity
      })
    }
    
    return related.slice(0, limit)
  }
  
  /**
   * 儲存草稿
   * @param content 內容物件
   */
  const saveDraft = (content: ContentItem) => {
    contentStore.saveDraft(content)
    appStore.showSuccess('草稿已儲存')
  }
  
  /**
   * 刪除草稿
   * @param id 草稿ID
   */
  const deleteDraft = (id: string) => {
    contentStore.deleteDraft(id)
    appStore.showInfo('草稿已刪除')
  }
  
  /**
   * 分頁導航
   */
  const goToNextPage = () => {
    if (contentStore.pagination.currentPage < contentStore.pagination.totalPages) {
      contentStore.nextPage()
      appStore.showInfo(`已跳轉到第 ${contentStore.pagination.currentPage} 頁`)
    } else {
      appStore.showWarning('已經是最後一頁了')
    }
  }
  
  const goToPreviousPage = () => {
    if (contentStore.pagination.currentPage > 1) {
      contentStore.previousPage()
      appStore.showInfo(`已跳轉到第 ${contentStore.pagination.currentPage} 頁`)
    } else {
      appStore.showWarning('已經是第一頁了')
    }
  }
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= contentStore.pagination.totalPages) {
      contentStore.goToPage(page)
      appStore.showInfo(`已跳轉到第 ${page} 頁`)
    } else {
      appStore.showError(`頁碼無效，請輸入 1-${contentStore.pagination.totalPages} 之間的數字`)
    }
  }
  
  /**
   * 匯出內容資料
   * @param format 匯出格式
   */
  const exportContent = (format: 'json' | 'csv' = 'json') => {
    const data = contentStore.filteredContent
    
    if (format === 'json') {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `content-${new Date().toISOString().split('T')[0]}.json`
      a.click()
      URL.revokeObjectURL(url)
    } else if (format === 'csv') {
      // 簡單的 CSV 匯出實作
      const headers = ['標題', '分類', '作者', '發布時間', '瀏覽量', '點讚數']
      const csvContent = [
        headers.join(','),
        ...data.map(item => [
          `"${item.title}"`,
          `"${item.category}"`,
          `"${item.author}"`,
          `"${item.publishedAt}"`,
          item.views,
          item.likes
        ].join(','))
      ].join('\n')
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `content-${new Date().toISOString().split('T')[0]}.csv`
      a.click()
      URL.revokeObjectURL(url)
    }
    
    appStore.showSuccess(`內容已匯出為 ${format.toUpperCase()} 格式`)
  }
  
  return {
    // 狀態
    contentItems: contentStore.contentItems,
    filteredContent: contentStore.filteredContent,
    sortedContent: contentStore.sortedContent,
    paginatedContent: contentStore.paginatedContent,
    categories: contentStore.categories,
    tags: contentStore.tags,
    authors: contentStore.authors,
    pagination: contentStore.pagination,
    isLoading: contentStore.isLoading,
    isSaving: contentStore.isSaving,
    error: contentStore.error,
    currentItem: contentStore.currentItem,
    drafts: contentStore.drafts,
    favorites: contentStore.favorites,
    readingHistory: contentStore.readingHistory,
    
    // 方法
    searchContent,
    filterByCategory,
    filterByTags,
    sortContent,
    resetFilters,
    toggleFavorite,
    markAsRead,
    likeContent,
    incrementViews,
    getContentById,
    getRelatedContent,
    saveDraft,
    deleteDraft,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    exportContent,
    
    // 直接存取 store 方法
    setContentItems: contentStore.setContentItems,
    addContent: contentStore.addContent,
    updateContent: contentStore.updateContent,
    deleteContent: contentStore.deleteContent,
    setFilters: contentStore.setFilters,
    setCurrentItem: contentStore.setCurrentItem
  }
}
