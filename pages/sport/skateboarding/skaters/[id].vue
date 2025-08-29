<template>
  <main>
    <!-- 滑板手個人資料區域 -->
    <header class="skater-profile" role="banner">
      <div class="profile-background">
        <img :src="skater.coverImage" :alt="skater.name" />
        <div class="profile-overlay"></div>
      </div>
      <div class="profile-content">
        <div class="container">
          <div class="profile-header">
            <div class="profile-avatar">
              <img :src="skater.image" :alt="skater.name" />
              <div class="level-badge">{{ skater.level }}</div>
            </div>
            <div class="profile-info">
              <h1 class="skater-name">{{ skater.name }}</h1>
              <p class="skater-title">{{ skater.title }}</p>
              <div class="skater-meta">
                <span class="meta-item">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ skater.country }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-skating"></i>
                  {{ skater.style }}
                </span>
                <span class="meta-item">
                  <i class="fas fa-calendar-alt"></i>
                  滑板經驗 {{ skater.experience }} 年
                </span>
              </div>
              <div class="skater-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ skater.rating }}</span>
                  <span class="stat-label">評分</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ skater.achievements }}</span>
                  <span class="stat-label">成就</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ skater.followers }}</span>
                  <span class="stat-label">追蹤者</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ skater.videos }}</span>
                  <span class="stat-label">影片</span>
                </div>
              </div>
            </div>
            <div class="profile-actions">
              <button class="btn btn-primary">
                <i class="fas fa-heart"></i>
                追蹤
              </button>
              <button class="btn btn-outline">
                <i class="fas fa-share"></i>
                分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 導航標籤 -->
    <nav class="profile-nav">
      <div class="container">
        <div class="nav-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['nav-tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <i :class="tab.icon"></i>
            {{ tab.name }}
          </button>
        </div>
      </div>
    </nav>

    <!-- 標籤內容 -->
    <div class="tab-content">
      <div class="container">
        <!-- 關於我 -->
        <div v-if="activeTab === 'about'" class="tab-panel">
          <section class="about-section">
            <h2 class="section-title">
              <i class="fas fa-user"></i>
              關於 {{ skater.name }}
            </h2>
            <div class="about-content">
              <div class="about-text">
                <p>{{ skater.bio }}</p>
                <div class="personal-info">
                  <h3>個人資訊</h3>
                  <div class="info-grid">
                    <div class="info-item">
                      <span class="info-label">出生日期:</span>
                      <span class="info-value">{{ skater.birthDate }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">身高:</span>
                      <span class="info-value">{{ skater.height }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">體重:</span>
                      <span class="info-value">{{ skater.weight }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">贊助商:</span>
                      <span class="info-value">{{ skater.sponsors.join(', ') }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">教練:</span>
                      <span class="info-value">{{ skater.coach }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">訓練基地:</span>
                      <span class="info-value">{{ skater.trainingBase }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-sidebar">
                <div class="achievement-highlights">
                  <h3>成就亮點</h3>
                  <ul>
                    <li v-for="highlight in skater.achievementHighlights" :key="highlight">
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
                <div class="social-links">
                  <h3>社群媒體</h3>
                  <div class="social-buttons">
                    <a :href="skater.social.instagram" class="social-btn instagram">
                      <i class="fab fa-instagram"></i>
                      Instagram
                    </a>
                    <a :href="skater.social.youtube" class="social-btn youtube">
                      <i class="fab fa-youtube"></i>
                      YouTube
                    </a>
                    <a :href="skater.social.twitter" class="social-btn twitter">
                      <i class="fab fa-twitter"></i>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 成就與獎項 -->
        <div v-if="activeTab === 'achievements'" class="tab-panel">
          <section class="achievements-section">
            <h2 class="section-title">
              <i class="fas fa-trophy"></i>
              成就與獎項
            </h2>
            <div class="achievements-content">
              <div class="achievements-timeline">
                <div 
                  v-for="achievement in skater.achievementsList" 
                  :key="achievement.id"
                  class="achievement-item"
                >
                  <div class="achievement-year">{{ achievement.year }}</div>
                  <div class="achievement-content">
                    <h3>{{ achievement.title }}</h3>
                    <p>{{ achievement.description }}</p>
                    <div class="achievement-meta">
                      <span class="achievement-category">{{ achievement.category }}</span>
                      <span class="achievement-location">{{ achievement.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 技巧展示 -->
        <div v-if="activeTab === 'tricks'" class="tab-panel">
          <section class="tricks-section">
            <h2 class="section-title">
              <i class="fas fa-star"></i>
              技巧展示
            </h2>
            <div class="tricks-content">
              <div class="tricks-categories">
                <div 
                  v-for="category in skater.tricksCategories" 
                  :key="category.name"
                  class="tricks-category"
                >
                  <h3>{{ category.name }}</h3>
                  <div class="tricks-grid">
                    <div 
                      v-for="trick in category.tricks" 
                      :key="trick.name"
                      class="trick-item"
                    >
                      <div class="trick-header">
                        <h4>{{ trick.name }}</h4>
                        <span class="difficulty">{{ trick.difficulty }}</span>
                      </div>
                      <p>{{ trick.description }}</p>
                      <div class="trick-stats">
                        <span class="success-rate">成功率: {{ trick.successRate }}%</span>
                        <span class="best-score">最佳分數: {{ trick.bestScore }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 影片集 -->
        <div v-if="activeTab === 'videos'" class="tab-panel">
          <section class="videos-section">
            <h2 class="section-title">
              <i class="fas fa-video"></i>
              影片集
            </h2>
            <div class="videos-content">
              <div class="videos-grid">
                <div 
                  v-for="video in skater.videosList" 
                  :key="video.id"
                  class="video-item"
                >
                  <div class="video-thumbnail">
                    <img :src="video.thumbnail" :alt="video.title" />
                    <div class="video-duration">{{ video.duration }}</div>
                    <div class="play-button">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                  <div class="video-info">
                    <h3>{{ video.title }}</h3>
                    <p>{{ video.description }}</p>
                    <div class="video-meta">
                      <span class="video-date">{{ video.date }}</span>
                      <span class="video-views">{{ video.views }} 次觀看</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 比賽記錄 -->
        <div v-if="activeTab === 'competitions'" class="tab-panel">
          <section class="competitions-section">
            <h2 class="section-title">
              <i class="fas fa-medal"></i>
              比賽記錄
            </h2>
            <div class="competitions-content">
              <div class="competitions-table">
                <table>
                  <thead>
                    <tr>
                      <th>年份</th>
                      <th>比賽名稱</th>
                      <th>地點</th>
                      <th>項目</th>
                      <th>成績</th>
                      <th>排名</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="competition in skater.competitions" :key="competition.id">
                      <td>{{ competition.year }}</td>
                      <td>{{ competition.name }}</td>
                      <td>{{ competition.location }}</td>
                      <td>{{ competition.event }}</td>
                      <td>{{ competition.score }}</td>
                      <td>
                        <span :class="['rank', `rank-${competition.rank}`]">
                          {{ competition.rank }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- 相關滑板手 -->
    <section class="related-skaters">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-users"></i>
          相關滑板手
        </h2>
        <div class="related-grid">
          <div 
            v-for="related in relatedSkaters" 
            :key="related.id"
            class="related-skater"
            @click="navigateToSkater(related.id)"
          >
            <div class="related-avatar">
              <img :src="related.image" :alt="related.name" />
            </div>
            <div class="related-info">
              <h3>{{ related.name }}</h3>
              <p>{{ related.country }} • {{ related.style }}</p>
              <span class="related-rating">⭐ {{ related.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref('about')

// 滑板手詳細數據
const skater = ref({
  id: 'tony-hawk',
  name: 'Tony Hawk',
  title: '滑板傳奇人物',
  country: '美國',
  style: '垂直滑板',
  level: '專業級',
  experience: 45,
  rating: 5.0,
  achievements: 15,
  followers: 2500000,
  videos: 156,
  bio: 'Tony Hawk 是滑板運動史上最具影響力的人物之一。他於1975年開始滑板，在1980年代成為職業滑板手，並在1999年成為首個完成900度轉體的滑板手，這一壯舉被譽為滑板運動的里程碑。除了在競技場上的成就，Tony Hawk 還創立了自己的滑板公司，並積極推廣滑板運動，讓滑板文化在全球範圍內得到認可。',
  birthDate: '1968年5月12日',
  height: '191 cm',
  weight: '79 kg',
  sponsors: ['Birdhouse', 'Vans', 'Oakley', 'Quiksilver'],
  coach: 'Stacy Peralta',
  trainingBase: '加州聖地牙哥',
  coverImage: '/images/skaters/tony-hawk-cover.jpg',
  image: '/images/skaters/tony-hawk.jpg',
  achievementHighlights: [
    '首個完成900度轉體的滑板手',
    '12次X Games金牌得主',
    '滑板名人堂成員',
    'Birdhouse滑板公司創始人',
    'Tony Hawk Pro Skater遊戲系列主角'
  ],
  social: {
    instagram: 'https://instagram.com/tonyhawk',
    youtube: 'https://youtube.com/tonyhawk',
    twitter: 'https://twitter.com/tonyhawk'
  },
  achievementsList: [
    {
      id: 1,
      year: 1999,
      title: '首個完成900度轉體',
      description: '在X Games中完成滑板史上首個900度轉體動作',
      category: '技術突破',
      location: '舊金山'
    },
    {
      id: 2,
      year: 2003,
      title: '滑板名人堂',
      description: '入選滑板名人堂，表彰對滑板運動的貢獻',
      category: '榮譽獎項',
      location: '加州'
    },
    {
      id: 3,
      year: 2009,
      title: 'X Games終身成就獎',
      description: '獲得X Games終身成就獎',
      category: '榮譽獎項',
      location: '洛杉磯'
    }
  ],
  tricksCategories: [
    {
      name: '基礎動作',
      tricks: [
        {
          name: 'Ollie',
          difficulty: '⭐☆☆☆☆',
          description: '滑板最基礎的跳躍動作',
          successRate: 98,
          bestScore: 9.5
        },
        {
          name: 'Kickflip',
          difficulty: '⭐⭐⭐☆☆',
          description: '讓板子翻轉360度的經典動作',
          successRate: 95,
          bestScore: 9.8
        }
      ]
    },
    {
      name: '高級動作',
      tricks: [
        {
          name: '900度轉體',
          difficulty: '⭐⭐⭐⭐⭐',
          description: '滑板史上最具挑戰性的動作之一',
          successRate: 85,
          bestScore: 10.0
        },
        {
          name: '720度轉體',
          difficulty: '⭐⭐⭐⭐☆',
          description: '高難度的空中轉體動作',
          successRate: 90,
          bestScore: 9.7
        }
      ]
    }
  ],
  videosList: [
    {
      id: 1,
      title: '900度轉體歷史性時刻',
      description: '1999年X Games中完成900度轉體的完整影片',
      thumbnail: '/images/videos/900-ollie.jpg',
      duration: '2:45',
      date: '1999-06-27',
      views: 2500000
    },
    {
      id: 2,
      title: 'Tony Hawk 技巧教學',
      description: '基礎滑板動作的詳細教學',
      thumbnail: '/images/videos/tricks-tutorial.jpg',
      duration: '15:30',
      date: '2023-08-15',
      views: 850000
    }
  ],
  competitions: [
    {
      id: 1,
      year: 1999,
      name: 'X Games',
      location: '舊金山',
      event: '垂直滑板',
      score: 98.5,
      rank: 1
    },
    {
      id: 2,
      year: 2000,
      name: 'X Games',
      location: '聖地牙哥',
      event: '垂直滑板',
      score: 97.8,
      rank: 1
    }
  ]
})

// 相關滑板手
const relatedSkaters = ref([
  {
    id: 'rodney-mullen',
    name: 'Rodney Mullen',
    country: '美國',
    style: '平地花式',
    rating: 5.0,
    image: '/images/skaters/rodney-mullen.jpg'
  },
  {
    id: 'bob-burnquist',
    name: 'Bob Burnquist',
    country: '巴西',
    style: '垂直滑板',
    rating: 4.8,
    image: '/images/skaters/bob-burnquist.jpg'
  },
  {
    id: 'nyjah-huston',
    name: 'Nyjah Huston',
    country: '美國',
    style: '街頭滑板',
    rating: 4.9,
    image: '/images/skaters/nyjah-huston.jpg'
  }
])

// 標籤配置
const tabs = [
  { id: 'about', name: '關於我', icon: 'fas fa-user' },
  { id: 'achievements', name: '成就獎項', icon: 'fas fa-trophy' },
  { id: 'tricks', name: '技巧展示', icon: 'fas fa-star' },
  { id: 'videos', name: '影片集', icon: 'fas fa-video' },
  { id: 'competitions', name: '比賽記錄', icon: 'fas fa-medal' }
]

// 方法
const navigateToSkater = (skaterId) => {
  navigateTo(`/sport/skateboarding/skaters/${skaterId}`)
}

// 組件掛載後執行
onMounted(() => {
  console.log('滑板手詳細頁面已載入')
})
</script>

<style scoped>
/* 滑板手個人資料區域樣式 */
.skater-profile {
  position: relative;
  min-height: 60vh;
  color: white;
}

.profile-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.profile-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
}

.profile-content {
  position: relative;
  z-index: 2;
  padding: 4rem 0;
}

.profile-header {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
}

.profile-avatar {
  position: relative;
  flex-shrink: 0;
}

.profile-avatar img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.level-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ffd700;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
}

.profile-info {
  flex: 1;
  min-width: 300px;
}

.skater-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.skater-title {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.skater-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.skater-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
}

/* 導航標籤樣式 */
.profile-nav {
  background: white;
  border-bottom: 1px solid #e1e5e9;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-tabs {
  display: flex;
  gap: 0;
}

.nav-tab {
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  color: #666;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.nav-tab:hover {
  color: #667eea;
}

.nav-tab.active {
  color: #667eea;
  border-bottom-color: #667eea;
}

.nav-tab i {
  margin-right: 0.5rem;
}

/* 標籤內容樣式 */
.tab-content {
  padding: 3rem 0;
}

.tab-panel {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 關於我區塊樣式 */
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
}

.personal-info h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-label {
  font-weight: 600;
  color: #333;
}

.info-value {
  color: #666;
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.achievement-highlights h3,
.social-links h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.achievement-highlights ul {
  list-style: none;
  padding: 0;
}

.achievement-highlights li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e1e5e9;
  color: #666;
}

.achievement-highlights li:last-child {
  border-bottom: none;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
}

.social-btn.instagram {
  background: #e4405f;
}

.social-btn.youtube {
  background: #ff0000;
}

.social-btn.twitter {
  background: #1da1f2;
}

/* 成就區塊樣式 */
.achievements-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.achievement-item {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.achievement-year {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  flex-shrink: 0;
}

.achievement-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.achievement-content p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.achievement-meta {
  display: flex;
  gap: 1rem;
}

.achievement-category,
.achievement-location {
  background: #f8f9fa;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #666;
}

/* 技巧區塊樣式 */
.tricks-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tricks-category h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.tricks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.trick-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.trick-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.trick-header h4 {
  color: #333;
  font-size: 1.1rem;
}

.difficulty {
  color: #ffc107;
  font-weight: 600;
}

.trick-item p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.trick-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.success-rate {
  color: #28a745;
  font-weight: 600;
}

.best-score {
  color: #667eea;
  font-weight: 600;
}

/* 影片區塊樣式 */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.video-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.video-item:hover {
  transform: translateY(-5px);
}

.video-thumbnail {
  position: relative;
  height: 200px;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-duration {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-item:hover .play-button {
  opacity: 1;
}

.video-info {
  padding: 1.5rem;
}

.video-info h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.video-info p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #999;
}

/* 比賽記錄樣式 */
.competitions-table {
  overflow-x: auto;
}

.competitions-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.competitions-table th,
.competitions-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e1e5e9;
}

.competitions-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
}

.competitions-table td {
  color: #666;
}

.rank {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.9rem;
}

.rank-1 {
  background: #ffd700;
  color: #333;
}

.rank-2 {
  background: #c0c0c0;
  color: #333;
}

.rank-3 {
  background: #cd7f32;
  color: white;
}

/* 相關滑板手樣式 */
.related-skaters {
  background: #f8f9fa;
  padding: 3rem 0;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.related-skater {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.related-skater:hover {
  transform: translateY(-3px);
}

.related-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.related-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-info {
  flex: 1;
}

.related-info h3 {
  color: #333;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.related-info p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.related-rating {
  color: #ffc107;
  font-weight: 600;
  font-size: 0.9rem;
}

/* 按鈕樣式 */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #667eea;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .skater-name {
    font-size: 2rem;
  }
  
  .skater-stats {
    justify-content: center;
  }
  
  .nav-tabs {
    overflow-x: auto;
  }
  
  .nav-tab {
    padding: 0.75rem 1rem;
    white-space: nowrap;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .achievement-item {
    flex-direction: column;
    gap: 1rem;
  }
  
  .tricks-grid {
    grid-template-columns: 1fr;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
