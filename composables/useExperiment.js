export const useExperiment = (options = {}) => {
  const {
    title = '',
    description = '',
    accentColor = '#667eea',
    animationSelectors = [
      '.background-card', 
      '.timeline-item', 
      '.result-card', 
      '.experiment-card',
      '.significance-card', 
      '.application-card', 
      '.context-card', 
      '.mechanism-card', 
      '.modern-card', 
      '.limitation-card', 
      '.design-card'
    ]
  } = options

  // 設定SEO頭部資訊
  const setupSEO = () => {
    if (title && description) {
      useHead({
        title,
        meta: [
          {
            name: 'description',
            content: description
          }
        ]
      })
    }
  }

  // 滾動到指定區段
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 設定滾動動畫觀察器
  const setupScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll(animationSelectors.join(', '))
    animatedElements.forEach(el => observer.observe(el))

    return observer
  }

  // 設定實驗特定動畫
  const setupExperimentAnimation = (animationClass) => {
    const animationElement = document.querySelector(`.${animationClass}`)
    if (animationElement) {
      animationElement.classList.add('animate')
    }
  }

  // 頁面掛載時的初始化
  const initializeExperiment = (experimentAnimationClass = null) => {
    setupSEO()
    
    nextTick(() => {
      // 設定實驗特定動畫
      if (experimentAnimationClass) {
        setupExperimentAnimation(experimentAnimationClass)
      }

      // 設定滾動動畫
      setupScrollAnimations()
    })
  }

  // 生成標準按鈕配置
  const createStandardButtons = (customButtons = []) => {
    const defaultButtons = [
      {
        id: 'background',
        text: '實驗背景',
        icon: 'fas fa-history',
        type: 'btn-primary',
        action: 'scroll',
        target: 'background'
      },
      {
        id: 'process',
        text: '實驗過程',
        icon: 'fas fa-play',
        type: 'btn-secondary',
        action: 'scroll',
        target: 'process'
      }
    ]

    return [...defaultButtons, ...customButtons]
  }

  // 創建標準背景配置
  const createBackgroundConfig = (config) => {
    const {
      time,
      location,
      researcher,
      significance,
      customItems = []
    } = config

    return {
      time,
      location,
      researcher,
      significance,
      customItems
    }
  }

  // 創建統計數據配置
  const createStatsConfig = (stats, color = accentColor) => {
    return stats.map(stat => ({
      ...stat,
      color: stat.color || color
    }))
  }

  // 格式化進程步驟
  const formatProcessSteps = (steps) => {
    return steps.map((step, index) => ({
      ...step,
      id: step.id || `step-${index}`,
      index
    }))
  }

  return {
    // 核心功能
    setupSEO,
    scrollToSection,
    setupScrollAnimations,
    setupExperimentAnimation,
    initializeExperiment,
    
    // 配置生成器
    createStandardButtons,
    createBackgroundConfig,
    createStatsConfig,
    formatProcessSteps,
    
    // 常用變數
    accentColor
  }
} 