<template>
  <div class="bangkok-page">
    <!-- 英雄區塊 -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="flag">🇹🇭</span>
            泰國曼谷旅遊規劃
          </h1>
          <p class="hero-subtitle">探索天使之城的美食、文化與購物天堂</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">30</span>
              <span class="stat-label">天免簽</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">25-35</span>
              <span class="stat-label">°C 氣溫</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">11-2</span>
              <span class="stat-label">月最佳</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 導航選單 -->
    <nav class="page-nav">
      <div class="container">
        <ul class="nav-list">
          <li><a href="#preparation" class="nav-link">前置準備</a></li>
          <li><a href="#attractions" class="nav-link">必訪景點</a></li>
          <li><a href="#food" class="nav-link">美食文化</a></li>
          <li><a href="#tips" class="nav-link">注意事項</a></li>
          <li><a href="#budget" class="nav-link">預算規劃</a></li>
        </ul>
      </div>
    </nav>

    <!-- 前置準備區塊 -->
    <section id="preparation" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="icon">📋</span>
            前置工作
          </h2>
          <p class="section-subtitle">出發前的必要準備事項</p>
        </div>

        <div class="grid grid-3">
          <div class="prep-card card" data-aos="fade-up">
            <div class="card-icon">🛂</div>
            <h3>簽證申請</h3>
            <ul>
              <li><strong>台灣護照</strong>：免簽證，可停留30天</li>
              <li><strong>護照有效期</strong>：需超過6個月</li>
              <li><strong>其他國家</strong>：請查詢泰國駐當地大使館</li>
            </ul>
          </div>

          <div class="prep-card card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">✈️</div>
            <h3>機票購買</h3>
            <ul>
              <li><strong>最佳訂票時間</strong>：出發前2-4個月</li>
              <li><strong>主要機場</strong>：素萬那普機場（BKK）</li>
              <li><strong>廉航機場</strong>：廊曼機場（DMK）</li>
            </ul>
          </div>

          <div class="prep-card card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">🏨</div>
            <h3>住宿預訂</h3>
            <ul>
              <li><strong>暹羅</strong>：購物中心集中地</li>
              <li><strong>考山路</strong>：背包客聚集地</li>
              <li><strong>素坤逸</strong>：商務、夜生活</li>
            </ul>
          </div>
        </div>

        <!-- 交通票券區塊 -->
        <div class="transport-section">
          <h3 class="subsection-title">交通票券</h3>
          <div class="transport-grid">
            <div class="transport-item" data-aos="slide-in-left">
              <div class="transport-icon">🚇</div>
              <h4>BTS空鐵</h4>
              <p>曼谷主要大眾運輸</p>
            </div>
            <div class="transport-item" data-aos="slide-in-left" data-aos-delay="100">
              <div class="transport-icon">🚊</div>
              <h4>MRT地鐵</h4>
              <p>地下鐵系統</p>
            </div>
            <div class="transport-item" data-aos="slide-in-left" data-aos-delay="200">
              <div class="transport-icon">🚄</div>
              <h4>機場快線</h4>
              <p>連接機場與市區</p>
            </div>
            <div class="transport-item" data-aos="slide-in-left" data-aos-delay="300">
              <div class="transport-icon">🚕</div>
              <h4>計程車</h4>
              <p>建議使用Grab叫車APP</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 必訪景點區塊 -->
    <section id="attractions" class="section bg-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="icon">🗺️</span>
            必訪景點
          </h2>
          <p class="section-subtitle">曼谷最值得造訪的經典景點</p>
        </div>

        <div class="attractions-grid">
          <div class="attraction-card" data-aos="fade-up">
            <div class="attraction-image">
              <div class="image-placeholder">
                <span class="placeholder-text">大皇宮照片</span>
              </div>
            </div>
            <div class="attraction-content">
              <h3>🏛️ 大皇宮</h3>
              <p>泰國王室宮殿，包含玉佛寺，建議遊覽時間2-3小時</p>
              <div class="attraction-details">
                <span class="detail-item">⏰ 2-3小時</span>
                <span class="detail-item">💰 可現場購票</span>
              </div>
            </div>
          </div>

          <div class="attraction-card" data-aos="fade-up" data-aos-delay="100">
            <div class="attraction-image">
              <div class="image-placeholder">
                <span class="placeholder-text">臥佛寺照片</span>
              </div>
            </div>
            <div class="attraction-content">
              <h3>🙏 臥佛寺</h3>
              <p>泰國最大臥佛，傳統按摩學校，建議遊覽時間1-2小時</p>
              <div class="attraction-details">
                <span class="detail-item">⏰ 1-2小時</span>
                <span class="detail-item">💰 可現場購票</span>
              </div>
            </div>
          </div>

          <div class="attraction-card" data-aos="fade-up" data-aos-delay="200">
            <div class="attraction-image">
              <div class="image-placeholder">
                <span class="placeholder-text">鄭王廟照片</span>
              </div>
            </div>
            <div class="attraction-content">
              <h3>🏯 鄭王廟</h3>
              <p>曼谷地標，湄南河景觀，建議遊覽時間1-2小時</p>
              <div class="attraction-details">
                <span class="detail-item">⏰ 1-2小時</span>
                <span class="detail-item">💰 可現場購票</span>
              </div>
            </div>
          </div>

          <div class="attraction-card" data-aos="fade-up" data-aos-delay="300">
            <div class="attraction-image">
              <div class="image-placeholder">
                <span class="placeholder-text">考山路照片</span>
              </div>
            </div>
            <div class="attraction-content">
              <h3>🎉 考山路</h3>
              <p>背包客天堂，夜市、酒吧，建議遊覽時間2-3小時</p>
              <div class="attraction-details">
                <span class="detail-item">⏰ 2-3小時</span>
                <span class="detail-item">💰 免費</span>
              </div>
            </div>
          </div>

          <div class="attraction-card" data-aos="fade-up" data-aos-delay="400">
            <div class="attraction-image">
              <div class="image-placeholder">
                <span class="placeholder-text">暹羅廣場照片</span>
              </div>
            </div>
            <div class="attraction-content">
              <h3>🛍️ 暹羅廣場</h3>
              <p>購物中心集中地，美食廣場，建議遊覽時間3-4小時</p>
              <div class="attraction-details">
                <span class="detail-item">⏰ 3-4小時</span>
                <span class="detail-item">💰 免費</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食文化區塊 -->
    <section id="food" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="icon">🍜</span>
            餐飲與文化特色
          </h2>
          <p class="section-subtitle">品嚐泰國經典美食，體驗當地文化</p>
        </div>

        <div class="food-grid">
          <div class="food-card" data-aos="fade-up">
            <div class="food-image">
              <div class="image-placeholder">
                <span class="placeholder-text">泰式炒河粉</span>
              </div>
            </div>
            <div class="food-content">
              <h3>🍝 泰式炒河粉</h3>
              <p class="food-desc">Pad Thai - 泰國最經典的街頭美食</p>
              <div class="food-price">฿50-฿150/份</div>
            </div>
          </div>

          <div class="food-card" data-aos="fade-up" data-aos-delay="100">
            <div class="food-image">
              <div class="image-placeholder">
                <span class="placeholder-text">冬陰功湯</span>
              </div>
            </div>
            <div class="food-content">
              <h3>🥘 冬陰功湯</h3>
              <p class="food-desc">Tom Yum Goong - 酸辣開胃的泰式湯品</p>
              <div class="food-price">฿80-฿200/碗</div>
            </div>
          </div>

          <div class="food-card" data-aos="fade-up" data-aos-delay="200">
            <div class="food-image">
              <div class="image-placeholder">
                <span class="placeholder-text">青咖哩</span>
              </div>
            </div>
            <div class="food-content">
              <h3>🍛 青咖哩</h3>
              <p class="food-desc">Green Curry - 香濃的泰式咖哩</p>
              <div class="food-price">฿80-฿180/份</div>
            </div>
          </div>

          <div class="food-card" data-aos="fade-up" data-aos-delay="300">
            <div class="food-image">
              <div class="image-placeholder">
                <span class="placeholder-text">芒果糯米飯</span>
              </div>
            </div>
            <div class="food-content">
              <h3>🥭 芒果糯米飯</h3>
              <p class="food-desc">Mango Sticky Rice - 泰式經典甜點</p>
              <div class="food-price">฿60-฿120/份</div>
            </div>
          </div>

          <div class="food-card" data-aos="fade-up" data-aos-delay="400">
            <div class="food-image">
              <div class="image-placeholder">
                <span class="placeholder-text">泰式奶茶</span>
              </div>
            </div>
            <div class="food-content">
              <h3>🧋 泰式奶茶</h3>
              <p class="food-desc">Thai Milk Tea - 香甜濃郁的泰式飲品</p>
              <div class="food-price">฿30-฿80/杯</div>
            </div>
          </div>
        </div>

        <!-- 文化特色區塊 -->
        <div class="culture-section">
          <h3 class="subsection-title">文化特色體驗</h3>
          <div class="culture-grid">
            <div class="culture-item" data-aos="slide-in-left">
              <div class="culture-icon">💆‍♀️</div>
              <h4>泰式按摩</h4>
              <p>體驗傳統按摩，放鬆身心</p>
            </div>
            <div class="culture-item" data-aos="slide-in-left" data-aos-delay="100">
              <div class="culture-icon">🛶</div>
              <h4>水上市場</h4>
              <p>體驗泰國傳統市場文化</p>
            </div>
            <div class="culture-item" data-aos="slide-in-left" data-aos-delay="200">
              <div class="culture-icon">🏛️</div>
              <h4>寺廟文化</h4>
              <p>參觀佛教寺廟，感受宗教氛圍</p>
            </div>
            <div class="culture-item" data-aos="slide-in-left" data-aos-delay="300">
              <div class="culture-icon">🌃</div>
              <h4>夜市文化</h4>
              <p>體驗泰國豐富的夜生活</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 注意事項區塊 -->
    <section id="tips" class="section bg-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="icon">⚠️</span>
            禁忌與注意事項
          </h2>
          <p class="section-subtitle">了解泰國文化禮儀，確保愉快旅程</p>
        </div>

        <div class="tips-grid">
          <div class="tips-column">
            <h3 class="tips-title">🚫 文化禁忌</h3>
            <div class="tip-item" data-aos="fade-up">
              <div class="tip-icon">🙅‍♂️</div>
              <div class="tip-content">
                <h4>不要摸頭</h4>
                <p>泰國人認為頭部神聖，不應觸摸</p>
              </div>
            </div>
            <div class="tip-item" data-aos="fade-up" data-aos-delay="100">
              <div class="tip-icon">👣</div>
              <div class="tip-content">
                <h4>不要用腳指東西</h4>
                <p>被視為不禮貌的行為</p>
              </div>
            </div>
            <div class="tip-item" data-aos="fade-up" data-aos-delay="200">
              <div class="tip-icon">👔</div>
              <div class="tip-content">
                <h4>不要穿短褲進入寺廟</h4>
                <p>需要穿著得體，尊重宗教場所</p>
              </div>
            </div>
          </div>

          <div class="tips-column">
            <h3 class="tips-title">📱 安全注意</h3>
            <div class="tip-item" data-aos="fade-up">
              <div class="tip-icon">👛</div>
              <div class="tip-content">
                <h4>隨身物品</h4>
                <p>注意扒手，保管好貴重物品</p>
              </div>
            </div>
            <div class="tip-item" data-aos="fade-up" data-aos-delay="100">
              <div class="tip-icon">🚕</div>
              <div class="tip-content">
                <h4>計程車</h4>
                <p>建議使用Grab叫車APP</p>
              </div>
            </div>
            <div class="tip-item" data-aos="fade-up" data-aos-delay="200">
              <div class="tip-icon">📞</div>
              <div class="tip-content">
                <h4>緊急聯絡</h4>
                <p>警察191、救護車1669</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 預算規劃區塊 -->
    <section id="budget" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="icon">💰</span>
            預算規劃
          </h2>
          <p class="section-subtitle">合理的預算分配，讓旅程更輕鬆</p>
        </div>

        <div class="budget-cards">
          <div class="budget-card economy" data-aos="fade-up">
            <div class="budget-header">
              <h3>💸 經濟型</h3>
              <div class="budget-amount">1,500-2,500元/天</div>
            </div>
            <div class="budget-breakdown">
              <div class="budget-item">
                <span>住宿</span>
                <span>800-1,200元/晚</span>
              </div>
              <div class="budget-item">
                <span>餐飲</span>
                <span>400-600元/天</span>
              </div>
              <div class="budget-item">
                <span>交通</span>
                <span>150-300元/天</span>
              </div>
              <div class="budget-item">
                <span>門票</span>
                <span>200-400元/天</span>
              </div>
            </div>
          </div>

          <div class="budget-card standard" data-aos="fade-up" data-aos-delay="100">
            <div class="budget-header">
              <h3>💳 標準型</h3>
              <div class="budget-amount">2,500-4,000元/天</div>
            </div>
            <div class="budget-breakdown">
              <div class="budget-item">
                <span>住宿</span>
                <span>1,200-2,000元/晚</span>
              </div>
              <div class="budget-item">
                <span>餐飲</span>
                <span>600-800元/天</span>
              </div>
              <div class="budget-item">
                <span>交通</span>
                <span>300-400元/天</span>
              </div>
              <div class="budget-item">
                <span>門票</span>
                <span>400-600元/天</span>
              </div>
            </div>
          </div>

          <div class="budget-card luxury" data-aos="fade-up" data-aos-delay="200">
            <div class="budget-header">
              <h3>👑 豪華型</h3>
              <div class="budget-amount">4,000元以上/天</div>
            </div>
            <div class="budget-breakdown">
              <div class="budget-item">
                <span>住宿</span>
                <span>2,000元以上/晚</span>
              </div>
              <div class="budget-item">
                <span>餐飲</span>
                <span>800元以上/天</span>
              </div>
              <div class="budget-item">
                <span>交通</span>
                <span>400元以上/天</span>
              </div>
              <div class="budget-item">
                <span>門票</span>
                <span>600元以上/天</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 實用資訊區塊 -->
        <div class="useful-info">
          <h3 class="subsection-title">📱 實用資訊</h3>
          <div class="info-grid">
            <div class="info-card" data-aos="fade-up">
              <h4>必備APP</h4>
              <ul>
                <li>Google Maps - 導航</li>
                <li>Google Translate - 翻譯</li>
                <li>Grab - 叫車服務</li>
                <li>BTS Skytrain - 地鐵查詢</li>
              </ul>
            </div>
            <div class="info-card" data-aos="fade-up" data-aos-delay="100">
              <h4>緊急聯絡</h4>
              <ul>
                <li>台灣駐泰代表處：02-119-3555</li>
                <li>泰國警察：191</li>
                <li>救護車：1669</li>
                <li>消防車：199</li>
              </ul>
            </div>
            <div class="info-card" data-aos="fade-up" data-aos-delay="200">
              <h4>網路資訊</h4>
              <ul>
                <li>免費WiFi：購物中心、咖啡廳</li>
                <li>SIM卡：機場或便利商店購買</li>
                <li>租用WiFi：機場有租借服務</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 返回首頁按鈕 -->
    <div class="back-to-home">
      <div class="container">
        <NuxtLink to="/" class="btn btn-primary">
          <span>🏠</span>
          返回首頁
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 頁面載入動畫
onMounted(() => {
  // 初始化 AOS 動畫
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }
})

// 平滑滾動到錨點
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* 頁面整體樣式 */
.bangkok-page {
  min-height: 100vh;
}

/* 英雄區塊樣式 */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
}

.hero-title .flag {
  font-size: 5rem;
  margin-right: 1rem;
  animation: bounce 2s infinite;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffd700;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* 導航選單樣式 */
.page-nav {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.nav-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1rem 0;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

/* 前置準備區塊樣式 */
.prep-card {
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.prep-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.prep-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.prep-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.prep-card ul {
  list-style: none;
  text-align: left;
  flex-grow: 1;
  margin: 0;
  padding: 0 1rem 1rem 1rem;
}

.prep-card li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
  color: var(--color-text);
}

.prep-card li::before {
  content: "•";
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* 交通票券樣式 */
.transport-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-border);
}

.subsection-title {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.transport-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.transport-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.transport-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.transport-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.transport-item h4 {
  color: var(--color-primary);
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
}

/* 景點區塊樣式 */
.attractions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.attraction-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.attraction-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.attraction-image {
  height: 200px;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  position: relative;
}

.image-placeholder::before {
  content: "📷";
  font-size: 3rem;
  position: absolute;
  opacity: 0.5;
}

.placeholder-text {
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
}

.attraction-content {
  padding: 1.5rem;
}

.attraction-content h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.attraction-content p {
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.attraction-details {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.detail-item {
  background: var(--color-background-light);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: var(--color-text);
}

/* 美食區塊樣式 */
.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.food-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.food-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.food-image {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.food-content {
  padding: 1.5rem;
}

.food-content h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.food-desc {
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.food-price {
  color: var(--color-success);
  font-weight: 600;
  font-size: 1.1rem;
}

/* 文化特色樣式 */
.culture-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-border);
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.culture-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.culture-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.culture-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.culture-item h4 {
  color: var(--color-primary);
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
}

/* 注意事項樣式 */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.tips-title {
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.tip-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.tip-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.tip-content h4 {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.tip-content p {
  color: var(--color-text-light);
  line-height: 1.5;
}

/* 預算規劃樣式 */
.budget-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.budget-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.budget-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.budget-card.economy::before {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
}

.budget-card.standard::before {
  background: linear-gradient(90deg, #f39c12, #e67e22);
}

.budget-card.luxury::before {
  background: linear-gradient(90deg, #9b59b6, #8e44ad);
}

.budget-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.budget-header {
  text-align: center;
  margin-bottom: 2rem;
}

.budget-header h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.budget-amount {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-success);
}

.budget-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.budget-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.budget-item:last-child {
  border-bottom: none;
}

/* 實用資訊樣式 */
.useful-info {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-border);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.info-card h4 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.info-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
}

.info-card li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  color: var(--color-text);
}

.info-card li::before {
  content: "→";
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* 返回首頁按鈕 */
.back-to-home {
  padding: 3rem 0;
  text-align: center;
  background: var(--color-background-light);
}

/* 動畫定義 */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-title .flag {
    font-size: 3rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-list {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .attractions-grid,
  .food-grid {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
  
  .budget-cards {
    grid-template-columns: 1fr;
  }
  
  .transport-grid,
  .culture-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .prep-card,
  .transport-item,
  .culture-item,
  .info-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .transport-grid,
  .culture-grid {
    grid-template-columns: 1fr;
  }
}
</style> 