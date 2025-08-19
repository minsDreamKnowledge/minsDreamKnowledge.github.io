<template>
  <main>
    <!-- 英雄區域 -->
    <header class="hero skateboarding-hero" role="banner">
      <div class="hero-visual">
        <div class="skateboarding-animation">
          <div class="skateboard-icon">
            <i class="fas fa-skating"></i>
          </div>
          <div class="trick-animation">
            <div class="board-flip"></div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">🛹 滑板運動</h1>
        <p class="hero-subtitle">自由、創意、挑戰極限的極限運動</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('introduction')">
            <i class="fas fa-info-circle"></i>
            了解滑板
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('tricks')">
            <i class="fas fa-star"></i>
            動作大全
          </button>
        </div>
      </div>
    </header>

    <!-- 滑板運動介紹 -->
    <section id="introduction" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-info-circle"></i>
          滑板運動介紹
        </h2>
        <div class="intro-content">
          <div class="intro-text">
            <h3>🏂 滑板運動的起源</h3>
            <p>滑板運動起源於1950年代的美國加州，最初是衝浪愛好者在陸地上練習衝浪動作的工具。隨著時間發展，滑板逐漸發展成為一項獨立的極限運動。</p>
            
            <h3>🎯 滑板運動的精神</h3>
            <ul>
              <li><strong>自由表達</strong>：滑板是個人創意的展現</li>
              <li><strong>挑戰自我</strong>：不斷突破技術極限</li>
              <li><strong>社群文化</strong>：滑板社群的支持與分享</li>
              <li><strong>藝術表現</strong>：結合技巧與美學</li>
            </ul>

            <h3>🛹 滑板種類</h3>
            <div class="skateboard-types">
              <div class="type-card">
                <h4>街頭滑板</h4>
                <p>最常見的滑板類型，適合街頭技巧與花式動作</p>
              </div>
              <div class="type-card">
                <h4>長板</h4>
                <p>板面較長，穩定性高，適合長距離滑行與下坡</p>
              </div>
              <div class="type-card">
                <h4>魚板</h4>
                <p>小型滑板，攜帶方便，適合短距離代步</p>
              </div>
              <div class="type-card">
                <h4>雙翹板</h4>
                <p>介於街頭滑板與長板之間，適合城市巡航</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 滑板動作大全 -->
    <section id="tricks" class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-star"></i>
          滑板動作大全
        </h2>
        <div class="tricks-grid">
          <div class="trick-category">
            <h3>🟢 基礎動作 (初學者)</h3>
            <div class="tricks-list">
              <div class="trick-item">
                <h4>Ollie (豚跳)</h4>
                <p>滑板最基礎的跳躍動作，是所有花式動作的基礎</p>
                <span class="difficulty">難度: ⭐☆☆☆☆</span>
              </div>
              <div class="trick-item">
                <h4>Manual (手動平衡)</h4>
                <p>保持板頭在空中，後輪著地的平衡動作</p>
                <span class="difficulty">難度: ⭐☆☆☆☆</span>
              </div>
              <div class="trick-item">
                <h4>Shove-it (轉板)</h4>
                <p>讓板子旋轉180度的基礎動作</p>
                <span class="difficulty">難度: ⭐⭐☆☆☆</span>
              </div>
            </div>
          </div>

          <div class="trick-category">
            <h3>🟡 進階動作 (中級者)</h3>
            <div class="tricks-list">
              <div class="trick-item">
                <h4>Kickflip (踢翻)</h4>
                <p>讓板子翻轉360度的經典動作</p>
                <span class="difficulty">難度: ⭐⭐⭐☆☆</span>
              </div>
              <div class="trick-item">
                <h4>Heelflip (跟翻)</h4>
                <p>用腳跟讓板子翻轉的動作</p>
                <span class="difficulty">難度: ⭐⭐⭐☆☆</span>
              </div>
              <div class="trick-item">
                <h4>360 Flip (360度翻轉)</h4>
                <p>同時旋轉和翻轉的高難度動作</p>
                <span class="difficulty">難度: ⭐⭐⭐☆☆</span>
              </div>
            </div>
          </div>

          <div class="trick-category">
            <h3>🟠 高級動作 (進階者)</h3>
            <div class="tricks-list">
              <div class="trick-item">
                <h4>Grind技巧</h4>
                <p>在欄杆、台階邊緣滑行的技巧</p>
                <span class="difficulty">難度: ⭐⭐⭐⭐☆</span>
              </div>
              <div class="trick-item">
                <h4>Slide技巧</h4>
                <p>在各種表面滑行的技巧</p>
                <span class="difficulty">難度: ⭐⭐⭐⭐☆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tricks-cta">
          <button class="btn btn-primary" @click="navigateToTricks">
            <i class="fas fa-list"></i>
            查看完整動作大全
          </button>
        </div>
      </div>
    </section>

    <!-- 滑板場地 -->
    <section id="venues" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-map-marker-alt"></i>
          滑板場地
        </h2>
        <div class="venues-grid">
          <div class="venue-category">
            <h3>🏙️ 北部地區</h3>
            <div class="venue-list">
              <div class="venue-item">
                <h4>大安森林公園滑板場</h4>
                <p>台北市大安區新生南路二段1號</p>
                <span class="venue-rating">設施: ⭐⭐⭐⭐☆</span>
                <span class="venue-difficulty">難度: 🟢 初學者友善</span>
              </div>
              <div class="venue-item">
                <h4>南港滑板公園</h4>
                <p>台北市南港區南港路一段</p>
                <span class="venue-rating">設施: ⭐⭐⭐⭐⭐</span>
                <span class="venue-difficulty">難度: 🟡 中級者適合</span>
              </div>
              <div class="venue-item">
                <h4>板橋滑板公園</h4>
                <p>新北市板橋區文化路一段</p>
                <span class="venue-rating">設施: ⭐⭐⭐⭐⭐</span>
                <span class="venue-difficulty">難度: 🟡🟠 中級到進階者</span>
              </div>
            </div>
          </div>

          <div class="venue-category">
            <h3>🏔️ 中部地區</h3>
            <div class="venue-list">
              <div class="venue-item">
                <h4>台中滑板公園</h4>
                <p>台中市西區向上路一段</p>
                <span class="venue-rating">設施: ⭐⭐⭐⭐☆</span>
                <span class="venue-difficulty">難度: 🟢🟡 初學者到中級者</span>
              </div>
            </div>
          </div>

          <div class="venue-category">
            <h3>🌅 南部地區</h3>
            <div class="venue-list">
              <div class="venue-item">
                <h4>高雄滑板公園</h4>
                <p>高雄市前金區中正路</p>
                <span class="venue-rating">設施: ⭐⭐⭐⭐☆</span>
                <span class="venue-difficulty">難度: 🟢🟡 初學者到中級者</span>
              </div>
            </div>
          </div>
        </div>
        <div class="venues-cta">
          <button class="btn btn-secondary" @click="navigateToVenues">
            <i class="fas fa-map"></i>
            查看完整場地指南
          </button>
        </div>
      </div>
    </section>

    <!-- 著名滑板手 -->
    <section id="skaters" class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-user"></i>
          著名滑板手
        </h2>
        <div class="skaters-grid">
          <div class="skater-category">
            <h3>🏆 傳奇滑板手</h3>
            <div class="skaters-list">
              <div class="skater-item">
                <h4>Tony Hawk (托尼·霍克)</h4>
                <p>垂直滑板傳奇人物，首個完成900度轉體的滑板手</p>
                <span class="skater-style">風格: 垂直滑板、空中技巧</span>
              </div>
              <div class="skater-item">
                <h4>Rodney Mullen (羅德尼·穆倫)</h4>
                <p>被譽為"滑板之父"，發明了許多基礎滑板技巧</p>
                <span class="skater-style">風格: 平地花式、技術流</span>
              </div>
            </div>
          </div>

          <div class="skater-category">
            <h3>⭐ 現代滑板手</h3>
            <div class="skaters-list">
              <div class="skater-item">
                <h4>Nyjah Huston (尼亞·休斯頓)</h4>
                <p>當代競技滑板之王，技術精準，動作乾淨</p>
                <span class="skater-style">風格: 街頭滑板、公園滑板</span>
              </div>
              <div class="skater-item">
                <h4>Paul Rodriguez (保羅·羅德里格斯)</h4>
                <p>街頭滑板大師，動作流暢，風格獨特</p>
                <span class="skater-style">風格: 街頭滑板、技術流</span>
              </div>
            </div>
          </div>
        </div>
        <div class="skaters-cta">
          <button class="btn btn-outline" @click="navigateToSkaters">
            <i class="fas fa-users"></i>
            查看完整滑板手介紹
          </button>
        </div>
      </div>
    </section>

    <!-- 滑板新聞 -->
    <section id="news" class="section">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-newspaper"></i>
          滑板新聞
        </h2>
        <div class="news-grid">
          <div class="news-item">
            <div class="news-image">
              <i class="fas fa-trophy"></i>
            </div>
            <div class="news-content">
              <h3>2024年滑板奧運會預選賽</h3>
              <p>各國頂尖滑板手齊聚一堂，爭奪奧運參賽資格</p>
              <span class="news-date">2024-01-15</span>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <i class="fas fa-medal"></i>
            </div>
            <div class="news-content">
              <h3>台灣滑板選手國際賽事表現優異</h3>
              <p>年輕滑板手在亞洲錦標賽中獲得佳績</p>
              <span class="news-date">2024-01-10</span>
            </div>
          </div>
          <div class="news-item">
            <div class="news-image">
              <i class="fas fa-park"></i>
            </div>
            <div class="news-content">
              <h3>新北市新建專業滑板場地</h3>
              <p>為滑板愛好者提供更好的練習環境</p>
              <span class="news-date">2024-01-05</span>
            </div>
          </div>
        </div>
        <div class="news-cta">
          <button class="btn btn-primary" @click="navigateToNews">
            <i class="fas fa-rss"></i>
            查看更多新聞
          </button>
        </div>
      </div>
    </section>

    <!-- 學習資源 -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">
          <i class="fas fa-graduation-cap"></i>
          學習資源
        </h2>
        <div class="resources-grid">
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-book"></i>
            </div>
            <h3>基礎教學</h3>
            <p>從零開始學習滑板基礎知識與安全</p>
            <button class="btn btn-outline" @click="navigateToBasic">
              開始學習
            </button>
          </div>
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-star"></i>
            </div>
            <h3>動作大全</h3>
            <p>完整的滑板動作教學與技巧分解</p>
            <button class="btn btn-outline" @click="navigateToTricks">
              查看動作
            </button>
          </div>
          <div class="resource-card">
            <div class="resource-icon">
              <i class="fas fa-map"></i>
            </div>
            <h3>場地指南</h3>
            <p>台灣各地滑板場地詳細介紹</p>
            <button class="btn btn-outline" @click="navigateToVenues">
              查看場地
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 響應式數據
const currentSection = ref('introduction')

// 滾動到指定區塊
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 導航函數
const navigateToTricks = () => {
  // 導航到動作大全頁面
  console.log('導航到動作大全頁面')
}

const navigateToVenues = () => {
  // 導航到場地指南頁面
  console.log('導航到場地指南頁面')
}

const navigateToSkaters = () => {
  // 導航到滑板手介紹頁面
  console.log('導航到滑板手介紹頁面')
}

const navigateToNews = () => {
  // 導航到新聞頁面
  console.log('導航到新聞頁面')
}

const navigateToBasic = () => {
  // 導航到基礎教學頁面
  console.log('導航到基礎教學頁面')
}

// 組件掛載後執行
onMounted(() => {
  // 初始化動畫效果
  console.log('滑板頁面已載入')
})
</script>

<style scoped>
/* 英雄區域樣式 */
.skateboarding-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.skateboarding-animation {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
}

.skateboard-icon {
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.8);
  animation: float 3s ease-in-out infinite;
}

.trick-animation {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 20px auto;
}

.board-flip {
  width: 60px;
  height: 20px;
  background: #333;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: flip 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes flip {
  0% { transform: translate(-50%, -50%) rotateY(0deg); }
  50% { transform: translate(-50%, -50%) rotateY(180deg); }
  100% { transform: translate(-50%, -50%) rotateY(360deg); }
}

/* 區塊樣式 */
.section {
  padding: 4rem 0;
}

.bg-light {
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

/* 介紹區塊樣式 */
.intro-content {
  display: grid;
  gap: 2rem;
}

.intro-text h3 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.intro-text p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #666;
}

.intro-text ul {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

.intro-text li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.skateboard-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.type-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.type-card h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 動作區塊樣式 */
.tricks-grid {
  display: grid;
  gap: 2rem;
}

.trick-category h3 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.tricks-list {
  display: grid;
  gap: 1rem;
}

.trick-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #28a745;
}

.trick-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.trick-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

.difficulty {
  color: #ffc107;
  font-weight: bold;
}

.tricks-cta {
  text-align: center;
  margin-top: 2rem;
}

/* 場地區塊樣式 */
.venues-grid {
  display: grid;
  gap: 2rem;
}

.venue-category h3 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.venue-list {
  display: grid;
  gap: 1rem;
}

.venue-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #17a2b8;
}

.venue-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.venue-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

.venue-rating, .venue-difficulty {
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.9rem;
}

.venues-cta {
  text-align: center;
  margin-top: 2rem;
}

/* 滑板手區塊樣式 */
.skaters-grid {
  display: grid;
  gap: 2rem;
}

.skater-category h3 {
  color: #667eea;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.skaters-list {
  display: grid;
  gap: 1rem;
}

.skater-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ffc107;
}

.skater-item h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.skater-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

.skater-style {
  color: #6f42c1;
  font-size: 0.9rem;
  font-weight: bold;
}

.skaters-cta {
  text-align: center;
  margin-top: 2rem;
}

/* 新聞區塊樣式 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.news-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
}

.news-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.news-content {
  padding: 1.5rem;
}

.news-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.news-content p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.news-date {
  color: #999;
  font-size: 0.9rem;
}

.news-cta {
  text-align: center;
  margin-top: 2rem;
}

/* 學習資源區塊樣式 */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.resource-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.resource-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.resource-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* 按鈕樣式 */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
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

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-content {
    text-align: center;
  }
  
  .skateboarding-animation {
    display: none;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style> 