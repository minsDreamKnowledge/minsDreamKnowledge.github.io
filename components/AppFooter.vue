<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- 網站資訊 -->
        <div class="footer-section">
          <h3 class="footer-title">
            <span class="footer-icon">🧠</span>
            知識系統
          </h3>
          <p class="footer-description">
            提供記憶系統與學習機制的完整知識體系，幫助您更好地理解大腦運作原理。
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" title="Facebook">
              <span class="social-icon">📘</span>
            </a>
            <a href="#" class="social-link" title="Twitter">
              <span class="social-icon">🐦</span>
            </a>
            <a href="#" class="social-link" title="Instagram">
              <span class="social-icon">📷</span>
            </a>
            <a href="#" class="social-link" title="YouTube">
              <span class="social-icon">📺</span>
            </a>
          </div>
        </div>

        <!-- 快速連結 -->
        <div class="footer-section">
          <h4 class="footer-subtitle">快速連結</h4>
          <ul class="footer-links">
            <li>
              <NuxtLink to="/library" class="footer-link">
                <span class="link-icon">🏠</span>
                首頁
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="footer-link">
                <span class="link-icon">📚</span>
                記憶系統
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel" class="footer-link">
                <span class="link-icon">🌍</span>
                旅遊指南
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/psychology" class="footer-link">
                <span class="link-icon">🧠</span>
                心理學
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sitemap" class="footer-link">
                <span class="link-icon">🗺️</span>
                網站地圖
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 內容分類 -->
        <div class="footer-section">
          <h4 class="footer-subtitle">內容分類</h4>
          <ul class="footer-links">
            <li>
              <a href="/#brain-structure" class="footer-link">
                <span class="link-icon">🧠</span>
                大腦科學
              </a>
            </li>
            <li>
              <a href="/#memory-system" class="footer-link">
                <span class="link-icon">💭</span>
                記憶系統
              </a>
            </li>
            <li>
              <a href="/travel/bangkok#attractions" class="footer-link">
                <span class="link-icon">🗺️</span>
                旅遊景點
              </a>
            </li>
            <li>
              <a href="/travel/bangkok#food" class="footer-link">
                <span class="link-icon">🍜</span>
                美食文化
              </a>
            </li>
          </ul>
        </div>

        <!-- 實用工具 -->
        <div class="footer-section">
          <h4 class="footer-subtitle">實用工具</h4>
          <ul class="footer-links">
            <li>
              <a href="#" class="footer-link">
                <span class="link-icon">🔍</span>
                智能搜尋
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <span class="link-icon">📱</span>
                行動版
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <span class="link-icon">📧</span>
                聯絡我們
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <span class="link-icon">❓</span>
                常見問題
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版權資訊 -->
      <div class="footer-bottom">
        <div class="footer-info">
          <p class="copyright">
            © 2024 知識系統. 保留所有權利.
          </p>
          <div class="footer-legal">
            <a href="#" class="legal-link">隱私政策</a>
            <a href="#" class="legal-link">使用條款</a>
            <a href="#" class="legal-link">Cookie 政策</a>
          </div>
        </div>
        <div class="footer-stats">
          <span class="stat-item">
            <span class="stat-number">3</span>
            <span class="stat-label">主要頁面</span>
          </span>
          <span class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">知識內容</span>
          </span>
          <span class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">響應式</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-text);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-icon {
  font-size: 1.5rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: var(--color-primary);
}

.link-icon {
  font-size: 1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.legal-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: var(--color-primary);
}

.footer-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-stats {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-legal {
    justify-content: center;
  }
}
</style> 