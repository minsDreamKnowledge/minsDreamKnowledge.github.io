<template>
  <!-- 導航欄 -->
  <nav class="navbar" role="navigation" aria-label="主要導航">
    <div class="nav-container">
      <div class="nav-logo">
        <i class="fas fa-brain" aria-hidden="true"></i>
        <span>記憶系統與學習機制</span>
      </div>
      <ul class="nav-menu" :class="{ active: navActive }" role="menubar">
        <li role="none"><a href="#memory-types" role="menuitem" aria-label="記憶類型區塊" @click.prevent="scrollToSection('memory-types')"><i class="fas fa-layer-group" aria-hidden="true"></i>記憶類型</a></li>
        <li role="none"><a href="#memory-process" role="menuitem" aria-label="記憶過程區塊" @click.prevent="scrollToSection('memory-process')"><i class="fas fa-cogs" aria-hidden="true"></i>記憶過程</a></li>
        <li role="none"><a href="#brain-basis" role="menuitem" aria-label="生理基礎區塊" @click.prevent="scrollToSection('brain-basis')"><i class="fas fa-brain" aria-hidden="true"></i>生理基礎</a></li>
        <li role="none"><a href="#learning-mechanisms" role="menuitem" aria-label="學習機制區塊" @click.prevent="scrollToSection('learning-mechanisms')"><i class="fas fa-graduation-cap" aria-hidden="true"></i>學習機制</a></li>
        <li role="none"><a href="#enhancement" role="menuitem" aria-label="增強技巧區塊" @click.prevent="scrollToSection('enhancement')"><i class="fas fa-rocket" aria-hidden="true"></i>增強技巧</a></li>
      </ul>
      <button class="hamburger" :class="{ active: navActive }" aria-label="開啟導航選單" :aria-expanded="navActive ? 'true' : 'false'" aria-controls="nav-menu" @click="toggleNav">
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
      </button>
    </div>
  </nav>

  <!-- 主要內容 -->
  <main role="main">
    <!-- 英雄區域 -->
    <header class="hero" role="banner">
      <div class="hero-visual" aria-hidden="true">
        <div class="brain-animation">
          <div class="brain-lobe lobe-frontal" aria-label="額葉"></div>
          <div class="brain-lobe lobe-temporal" aria-label="顳葉"></div>
          <div class="brain-lobe lobe-parietal" aria-label="頂葉"></div>
          <div class="brain-lobe lobe-occipital" aria-label="枕葉"></div>
          <div class="synapse-container">
            <div class="synapse" aria-hidden="true"></div>
            <div class="synapse" aria-hidden="true"></div>
            <div class="synapse" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">💭 記憶系統</span>
          <span class="title-line">與學習機制</span>
        </h1>
        <p class="hero-subtitle">探索人類記憶的奧秘，掌握高效學習的方法</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToSection('memory-types')" aria-label="開始探索記憶類型">
            <i class="fas fa-play" aria-hidden="true"></i>
            開始探索
          </button>
          <button class="btn btn-secondary" @click="scrollToSection('brain-basis')" aria-label="探索大腦奧秘">
            <i class="fas fa-brain" aria-hidden="true"></i>
            大腦奧秘
          </button>
        </div>
      </div>
    </header>
    <!-- 記憶類型區塊 -->
    <section id="memory-types" class="section" aria-labelledby="memory-types-title">
      <div class="container">
        <header class="section-header">
          <h2 id="memory-types-title" class="section-title">
            <i class="fas fa-layer-group" aria-hidden="true"></i>
            記憶的類型
          </h2>
          <p class="section-subtitle">了解不同時間長度和內容的記憶分類</p>
        </header>
        
        <div class="memory-types-grid" role="list">
          <!-- 感覺記憶 -->
          <article class="memory-card" data-aos="fade-up" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-eye" aria-hidden="true"></i>
              </div>
              <h3>感覺記憶</h3>
              <span class="card-subtitle">Sensory Memory</span>
            </header>
            <div class="card-content">
              <div class="memory-stats">
                <div class="stat">
                  <span class="stat-label">持續時間</span>
                  <span class="stat-value">0.5-3秒</span>
                </div>
                <div class="stat">
                  <span class="stat-label">容量</span>
                  <span class="stat-value">無限</span>
                </div>
              </div>
              <p>初步處理感官信息，包括視覺、聽覺、觸覺等感官刺激的短暫儲存。</p>
            </div>
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/images/Sensory Memory.png', '感覺記憶圖解')">
              <img src="/knowledge/images/Sensory Memory.png" alt="感覺記憶圖解" width="100%" height="100%" loading="lazy">
            </div>
          </article>

          <!-- 短期記憶 -->
          <article class="memory-card" data-aos="fade-up" data-aos-delay="100" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-clock" aria-hidden="true"></i>
              </div>
              <h3>短期記憶</h3>
              <span class="card-subtitle">Short-term Memory</span>
            </header>
            <div class="card-content">
              <div class="memory-stats">
                <div class="stat">
                  <span class="stat-label">持續時間</span>
                  <span class="stat-value">15-30秒</span>
                </div>
                <div class="stat">
                  <span class="stat-label">容量</span>
                  <span class="stat-value">7±2項目</span>
                </div>
              </div>
              <p>暫時儲存和處理信息，遵循米勒定律的容量限制。</p>
            </div>
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/images/Short-Term Memory.png', '短期記憶容量圖')">
              <img src="/knowledge/images/Short-Term Memory.png" alt="短期記憶容量圖" width="100%" height="100%" loading="lazy">
            </div>
          </article>

          <!-- 長期記憶 -->
          <article class="memory-card" data-aos="fade-up" data-aos-delay="200" role="listitem">
            <header class="card-header">
              <div class="card-icon">
                <i class="fas fa-database" aria-hidden="true"></i>
              </div>
              <h3>長期記憶</h3>
              <span class="card-subtitle">Long-term Memory</span>
            </header>
            <div class="card-content">
              <div class="memory-stats">
                <div class="stat">
                  <span class="stat-label">持續時間</span>
                  <span class="stat-value">終身</span>
                </div>
                <div class="stat">
                  <span class="stat-label">容量</span>
                  <span class="stat-value">幾乎無限</span>
                </div>
              </div>
              <p>永久儲存信息，包括語義記憶和情節記憶兩大類。</p>
            </div>
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/images/Long-Term Memory.png', '長期記憶網絡圖')">
              <img src="/knowledge/images/Long-Term Memory.png" alt="長期記憶網絡圖" width="100%" height="100%" loading="lazy">
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 記憶過程區塊 -->
    <section id="memory-process" class="section bg-light" aria-labelledby="memory-process-title">
      <div class="container">
        <header class="section-header">
          <h2 id="memory-process-title" class="section-title">
            <i class="fas fa-cogs" aria-hidden="true"></i>
            記憶的形成過程
          </h2>
          <p class="section-subtitle">編碼、儲存、提取三個關鍵階段</p>
        </header>

        <div class="process-timeline" role="list">
          <article class="process-step" data-aos="fade-right" role="listitem">
            <div class="step-number" aria-label="步驟一">01</div>
            <div class="step-content">
              <h3>編碼 (Encoding)</h3>
              <div class="encoding-types">
                <div class="encoding-type">
                  <i class="fas fa-eye" aria-hidden="true"></i>
                  <span>視覺編碼</span>
                </div>
                <div class="encoding-type">
                  <i class="fas fa-volume-up" aria-hidden="true"></i>
                  <span>聽覺編碼</span>
                </div>
                <div class="encoding-type">
                  <i class="fas fa-lightbulb" aria-hidden="true"></i>
                  <span>語義編碼</span>
                </div>
              </div>
              <p>將外部信息轉換為大腦可以處理和儲存的形式。</p>
            </div>
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/images/Encoding Process.png', '編碼過程圖解')">
              <img src="/knowledge/images/Encoding Process.png" alt="編碼過程圖解" width="100%" height="100%" loading="lazy">
            </div>
          </article>

          <article class="process-step" data-aos="fade-left" role="listitem">
            <div class="step-number" aria-label="步驟二">02</div>
            <div class="step-content">
              <h3>儲存 (Storage)</h3>
              <div class="storage-features">
                <div class="feature">
                  <i class="fas fa-link" aria-hidden="true"></i>
                  <span>鞏固</span>
                </div>
                <div class="feature">
                  <i class="fas fa-network-wired" aria-hidden="true"></i>
                  <span>整合</span>
                </div>
                <div class="feature">
                  <i class="fas fa-sitemap" aria-hidden="true"></i>
                  <span>組織</span>
                </div>
              </div>
              <p>將信息從短期記憶轉換為長期記憶，建立記憶網絡。</p>
            </div>
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/images/Memory Storage.png', '記憶儲存網絡圖')">
              <img src="/knowledge/images/Memory Storage.png" alt="記憶儲存網絡圖" width="100%" height="100%" loading="lazy">
            </div>
          </article>

          <article class="process-step" data-aos="fade-right" role="listitem">
            <div class="step-number" aria-label="步驟三">03</div>
            <div class="step-content">
              <h3>提取 (Retrieval)</h3>
              <div class="retrieval-methods">
                <div class="method">
                  <i class="fas fa-search" aria-hidden="true"></i>
                  <span>回憶</span>
                </div>
                <div class="method">
                  <i class="fas fa-check-circle" aria-hidden="true"></i>
                  <span>再認</span>
                </div>
                <div class="method">
                  <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
                  <span>重構</span>
                </div>
              </div>
              <p>從記憶中檢索和重建信息的不同方式。</p>
            </div>
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/images/Memory Retrieval.png', '記憶提取模式圖')">
              <img src="/knowledge/images/Memory Retrieval.png" alt="記憶提取模式圖" width="100%" height="100%" loading="lazy">
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- 大腦生理基礎區塊 -->
    <section id="brain-basis" class="section" aria-labelledby="brain-basis-title">
      <div class="container">
        <header class="section-header">
          <h2 id="brain-basis-title" class="section-title">
            <i class="fas fa-brain" aria-hidden="true"></i>
            記憶的生理基礎
          </h2>
          <p class="section-subtitle">探索大腦中記憶形成的神經機制</p>
        </header>

        <div class="brain-anatomy" role="list">
          <article class="brain-row" data-aos="fade-up" role="listitem">
            <div class="brain-model">
              <img src="/knowledge/images/Hippocampus.png" alt="海馬體" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/images/Hippocampus.png', '海馬體')">
            </div>
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-hippo" aria-hidden="true"></i>
              </div>
              <h3>海馬體 (Hippocampus)</h3>
              <ul>
                <li>記憶形成和鞏固的關鍵區域</li>
                <li>空間記憶和導航</li>
                <li>新記憶的初始處理</li>
              </ul>
            </div>
          </article>
          <article class="brain-row" data-aos="fade-up" data-aos-delay="100" role="listitem">
            <div class="brain-model">
              <img src="/knowledge/images/Memory Manager.png" alt="大腦皮質" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/images/Memory Manager.png', '大腦皮質')">
            </div>
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-layer-group" aria-hidden="true"></i>
              </div>
              <h3>大腦皮質</h3>
              <ul>
                <li>長期記憶的儲存位置</li>
                <li>不同區域儲存不同類型記憶</li>
                <li>記憶的分散儲存</li>
              </ul>
            </div>
          </article>
          <article class="brain-row" data-aos="fade-up" data-aos-delay="200" role="listitem">
            <div class="brain-model">
              <img src="/knowledge/images/Emotional Amygdala.png" alt="杏仁核" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/images/Emotional Amygdala.png', '杏仁核')">
            </div>
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </div>
              <h3>杏仁核 (Amygdala)</h3>
              <ul>
                <li>情緒記憶的處理</li>
                <li>恐懼和獎勵記憶</li>
                <li>記憶的情感調節</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 學習機制區塊 -->
    <section id="learning-mechanisms" class="section bg-light" aria-labelledby="learning-mechanisms-title">
      <div class="container">
        <header class="section-header">
          <h2 id="learning-mechanisms-title" class="section-title">
            <i class="fas fa-graduation-cap" aria-hidden="true"></i>
            學習機制
          </h2>
          <p class="section-subtitle">三種主要的學習理論和機制</p>
        </header>

        <div class="learning-mechanisms-grid" role="list">
          <article class="mechanism-card" data-aos="zoom-in" role="listitem">
            <header class="mechanism-header">
              <div class="mechanism-icon">
                <i class="fas fa-bell" aria-hidden="true"></i>
              </div>
              <h3>古典制約</h3>
              <span class="mechanism-subtitle">Classical Conditioning</span>
            </header>
            <div class="mechanism-content">
              <div class="experiment">
                <h4>巴甫洛夫實驗</h4>
                <p>狗和鈴聲的條件反射實驗，展示中性刺激與無條件刺激的配對學習。</p>
              </div>
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/images/pavlov.png', '巴甫洛夫實驗圖解')">
                <img src="/knowledge/images/pavlov.png" alt="巴甫洛夫實驗圖解" width="100%" height="100%" loading="lazy">
              </div>
            </div>
          </article>

          <article class="mechanism-card" data-aos="zoom-in" data-aos-delay="100" role="listitem">
            <header class="mechanism-header">
              <div class="mechanism-icon">
                <i class="fas fa-mouse" aria-hidden="true"></i>
              </div>
              <h3>操作制約</h3>
              <span class="mechanism-subtitle">Operant Conditioning</span>
            </header>
            <div class="mechanism-content">
              <div class="experiment">
                <h4>斯金納箱實驗</h4>
                <p>老鼠和槓桿的實驗，展示行為與後果的關聯學習機制。</p>
              </div>
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/images/skinner.png', '斯金納箱實驗圖解')">
                <img src="/knowledge/images/skinner.png" alt="斯金納箱實驗圖解" width="100%" height="100%" loading="lazy">
              </div>
            </div>
          </article>

          <article class="mechanism-card" data-aos="zoom-in" data-aos-delay="200" role="listitem">
            <header class="mechanism-header">
              <div class="mechanism-icon">
                <i class="fas fa-eye" aria-hidden="true"></i>
              </div>
              <h3>觀察學習</h3>
              <span class="mechanism-subtitle">Observational Learning</span>
            </header>
            <div class="mechanism-content">
              <div class="experiment">
                <h4>班杜拉實驗</h4>
                <p>波波娃娃實驗，展示通過觀察他人行為進行學習的機制。</p>
              </div>
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/images/bandura.png', '班杜拉實驗圖解')">
                <img src="/knowledge/images/bandura.png" alt="班杜拉實驗圖解" width="100%" height="100%" loading="lazy">
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- 記憶增強技巧區塊 -->
    <section id="enhancement" class="section" aria-labelledby="enhancement-title">
      <div class="container">
        <header class="section-header">
          <h2 id="enhancement-title" class="section-title">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            記憶增強技巧
          </h2>
          <p class="section-subtitle">實用的記憶提升策略和方法</p>
        </header>

        <div class="enhancement-tabs">
          <div class="tab-buttons" role="tablist" aria-label="記憶增強技巧選項">
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'encoding' }"
              data-tab="encoding" 
              role="tab" 
              :aria-selected="activeTab === 'encoding' ? 'true' : 'false'" 
              aria-controls="encoding-panel"
              @click="switchTab('encoding')"
            >
              <i class="fas fa-code" aria-hidden="true"></i>
              編碼策略
            </button>
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'mnemonics' }"
              data-tab="mnemonics" 
              role="tab" 
              :aria-selected="activeTab === 'mnemonics' ? 'true' : 'false'" 
              aria-controls="mnemonics-panel"
              @click="switchTab('mnemonics')"
            >
              <i class="fas fa-magic" aria-hidden="true"></i>
              記憶術
            </button>
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'forgetting' }"
              data-tab="forgetting" 
              role="tab" 
              :aria-selected="activeTab === 'forgetting' ? 'true' : 'false'" 
              aria-controls="forgetting-panel"
              @click="switchTab('forgetting')"
            >
              <i class="fas fa-clock" aria-hidden="true"></i>
              對抗遺忘
            </button>
          </div>

          <div class="tab-content">
            <div class="tab-pane" :class="{ active: activeTab === 'encoding' }" id="encoding-panel" role="tabpanel" aria-labelledby="encoding-tab">
              <div class="strategy-grid" role="list">
                <article class="strategy-card" role="listitem">
                  <div class="strategy-icon">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </div>
                  <h3>深度處理</h3>
                  <ul>
                    <li>理解意義而非表面特徵</li>
                    <li>與個人經驗連接</li>
                    <li>創造個人意義</li>
                  </ul>
                </article>
                <article class="strategy-card" role="listitem">
                  <div class="strategy-icon">
                    <i class="fas fa-sitemap" aria-hidden="true"></i>
                  </div>
                  <h3>組織化</h3>
                  <ul>
                    <li>分類和歸類</li>
                    <li>建立層次結構</li>
                    <li>使用記憶術</li>
                  </ul>
                </article>
                <article class="strategy-card" role="listitem">
                  <div class="strategy-icon">
                    <i class="fas fa-palette" aria-hidden="true"></i>
                  </div>
                  <h3>多重編碼</h3>
                  <ul>
                    <li>視覺、聽覺、語義並用</li>
                    <li>多感官學習</li>
                    <li>情境化學習</li>
                  </ul>
                </article>
              </div>
            </div>

            <div class="tab-pane" :class="{ active: activeTab === 'mnemonics' }" id="mnemonics-panel" role="tabpanel" aria-labelledby="mnemonics-tab">
              <div class="mnemonics-showcase" role="list">
                <article class="mnemonic-example" role="listitem">
                  <h3>首字母縮寫</h3>
                  <div class="example-content">
                    <div class="example-text">ROYGBIV</div>
                    <div class="example-explanation">彩虹色：紅橙黃綠藍靛紫</div>
                  </div>
                </article>
                <article class="mnemonic-example" role="listitem">
                  <h3>押韻法</h3>
                  <div class="example-content">
                    <div class="example-text">三十而立，四十不惑</div>
                    <div class="example-explanation">年齡階段的記憶口訣</div>
                  </div>
                </article>
                <article class="mnemonic-example" role="listitem">
                  <h3>故事法</h3>
                  <div class="example-content">
                    <div class="example-text">將信息編成故事</div>
                    <div class="example-explanation">利用情節記憶增強記憶效果</div>
                  </div>
                </article>
              </div>
            </div>

            <div class="tab-pane" :class="{ active: activeTab === 'forgetting' }" id="forgetting-panel" role="tabpanel" aria-labelledby="forgetting-tab">
              <div class="forgetting-curve">
                <div class="curve-chart" aria-label="艾賓浩斯遺忘曲線圖表">
                  <div class="curve-line" aria-hidden="true"></div>
                  <div class="curve-points">
                    <div class="point" data-time="20分鐘" data-retention="58%" aria-label="20分鐘後記憶保留58%"></div>
                    <div class="point" data-time="1小時" data-retention="44%" aria-label="1小時後記憶保留44%"></div>
                    <div class="point" data-time="1天" data-retention="26%" aria-label="1天後記憶保留26%"></div>
                    <div class="point" data-time="1週" data-retention="23%" aria-label="1週後記憶保留23%"></div>
                    <div class="point" data-time="1月" data-retention="21%" aria-label="1月後記憶保留21%"></div>
                  </div>
                </div>
                <div class="curve-info">
                  <h3>艾賓浩斯遺忘曲線</h3>
                  <p>學習後立即開始遺忘，初期遺忘速度快，後期遺忘速度減慢。</p>
                  <div class="counter-strategies" role="list">
                    <div class="strategy" role="listitem">
                      <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                      <span>間隔重複</span>
                    </div>
                    <div class="strategy" role="listitem">
                      <i class="fas fa-question-circle" aria-hidden="true"></i>
                      <span>主動回憶</span>
                    </div>
                    <div class="strategy" role="listitem">
                      <i class="fas fa-random" aria-hidden="true"></i>
                      <span>多樣化練習</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 頁腳 -->
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>記憶系統與學習機制</h3>
          <p>探索人類記憶的奧秘，掌握高效學習的方法</p>
        </div>
        <nav class="footer-section" aria-label="頁腳導航">
          <h4>快速連結</h4>
          <ul>
            <li><a href="#memory-types">記憶類型</a></li>
            <li><a href="#memory-process">記憶過程</a></li>
            <li><a href="#brain-basis">生理基礎</a></li>
            <li><a href="#learning-mechanisms">學習機制</a></li>
          </ul>
        </nav>
        <div class="footer-section">
          <h4>參考資料</h4>
          <ul>
            <li>認知心理學</li>
            <li>記憶研究</li>
            <li>學習理論</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 記憶系統與學習機制. 保留所有權利.</p>
      </div>
    </div>
  </footer>

  <!-- 圖片彈出視窗 -->
  <div v-if="imagePopup.show" class="image-popup-overlay" @click="closeImagePopup" style="opacity: 1;">
    <div class="image-popup-container" @click.stop>
      <img :src="imagePopup.src" :alt="imagePopup.alt" />
      <button class="close-btn" @click="closeImagePopup" aria-label="關閉圖片">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const navActive = ref(false)
const activeTab = ref('encoding')
const imagePopup = ref({
  show: false,
  src: '',
  alt: ''
})

function toggleNav() {
  navActive.value = !navActive.value
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: y, behavior: 'smooth' })
    navActive.value = false
  }
}

function switchTab(tabName) {
  activeTab.value = tabName
}

function showImagePopup(src, alt) {
  imagePopup.value = {
    show: true,
    src,
    alt
  }
  // 防止背景滾動
  document.body.style.overflow = 'hidden'
}

function closeImagePopup() {
  imagePopup.value.show = false
  // 恢復背景滾動
  document.body.style.overflow = ''
}

onMounted(() => {
  // 初始化動畫效果
  initializeAnimations()
  
  // 初始化滾動效果
  initializeScrollEffects()
  
  // 監聽 ESC 鍵關閉圖片彈出
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imagePopup.value.show) {
      closeImagePopup()
    }
  })
})

function initializeAnimations() {
  // 檢查用戶是否偏好減少動畫
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  // 觀察器用於觸發動畫
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  // 為所有需要動畫的元素添加觀察器
  const animatedElements = document.querySelectorAll('[data-aos]')
  animatedElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'all 0.6s ease'
    observer.observe(el)
  })
}

function initializeScrollEffects() {
  // 進度條效果
  const progressBar = document.createElement('div')
  progressBar.className = 'progress-bar'
  progressBar.setAttribute('role', 'progressbar')
  progressBar.setAttribute('aria-label', '頁面閱讀進度')
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #9b59b6);
    z-index: 1001;
    transition: width 0.3s ease;
  `
  document.body.appendChild(progressBar)

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + '%'
    progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent))
  })
}
</script>

<style>
/* CSS 變數定義 */
:root {
    /* 顏色變數 */
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-secondary: #9b59b6;
    --color-text: #2c3e50;
    --color-text-light: #7f8c8d;
    --color-background: #ffffff;
    --color-background-light: #f8f9fa;
    --color-border: #e9ecef;
    --color-success: #27ae60;
    --color-warning: #f39c12;
    --color-error: #e74c3c;
    
    /* 字體變數 */
    --font-family: "Noto Sans TC", sans-serif;
    --font-size-base: 1rem;
    --font-size-small: 0.875rem;
    --font-size-large: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;
    --font-size-5xl: 3rem;
    
    /* 間距變數 */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* 邊框半徑 */
    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.5rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.5rem;
    
    /* 陰影 */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
    
    /* 過渡 */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* 斷點 */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}

/* 基礎樣式重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--color-text);
    overflow-x: hidden;
}

/* 容器 */
.container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* 導航欄 */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all var(--transition-normal);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-large);
    font-weight: 700;
    color: var(--color-text);
}

.nav-logo i {
    color: var(--color-primary);
    font-size: var(--font-size-2xl);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-2xl);
}

.nav-menu a {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;
    transition: color var(--transition-fast);
    position: relative;
    padding: var(--spacing-sm) 0;
}

.nav-menu a:hover,
.nav-menu a:focus {
    color: var(--color-primary);
    outline: none;
}

.nav-menu a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
}

.nav-menu a:hover::after,
.nav-menu a:focus::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: none;
    border: none;
    padding: var(--spacing-sm);
    transition: all var(--transition-fast);
}

.hamburger:hover,
.hamburger:focus {
    outline: none;
    transform: scale(1.1);
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--color-text);
    margin: 3px 0;
    transition: var(--transition-normal);
}

/* 英雄區域 */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    margin: 0 auto;
    flex: 1;
    max-width: 600px;
    z-index: 2;
    position: relative;
    justify-content: right;
}

.hero-title {
    font-size: var(--font-size-5xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    line-height: 1.2;
}

.title-line {
    display: block;
    animation: slideInLeft 1s ease-out;
}

.title-line:nth-child(2) {
    animation-delay: 0.2s;
}

.hero-subtitle {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-3xl);
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.5s both;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-lg);
    animation: fadeInUp 1s ease-out 0.8s both;
    text-align: right;
}

.btn {
    padding: var(--spacing-lg) var(--spacing-2xl);
    border: none;
    border-radius: 50px;
    font-size: var(--font-size-base);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-normal);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    text-decoration: none;
    min-height: 44px;
}

.btn-primary {
    background: var(--color-primary);
    color: white;
}

.btn-primary:hover,
.btn-primary:focus {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    outline: none;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover,
.btn-secondary:focus {
    background: white;
    color: var(--color-text);
    transform: translateY(-2px);
    outline: none;
}

/* 區塊樣式 */
.section {
    padding: var(--spacing-3xl) 0;
}

.section.bg-light {
    background: var(--color-background-light);
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
}

.section-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
}

.section-title i {
    color: var(--color-primary);
}

.section-subtitle {
    font-size: var(--font-size-large);
    color: var(--color-text-light);
    max-width: 600px;
    margin: 0 auto;
}

/* 記憶類型網格 */
.memory-types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-2xl);
    margin-top: var(--spacing-3xl);
}

.memory-card {
    background: var(--color-background);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.memory-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    transform: scaleX(0);
    transition: transform var(--transition-normal);
}

.memory-card:hover::before {
    transform: scaleX(1);
}

.memory-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.card-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--font-size-xl);
}

.card-header h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
}

.card-subtitle {
    font-size: var(--font-size-small);
    color: var(--color-text-light);
    font-style: italic;
}

.memory-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.stat {
    text-align: center;
    padding: var(--spacing-md);
    background: var(--color-background-light);
    border-radius: var(--border-radius-md);
}

.stat-label {
    display: block;
    font-size: var(--font-size-small);
    color: var(--color-text-light);
    margin-bottom: var(--spacing-xs);
}

.stat-value {
    display: block;
    font-size: var(--font-size-large);
    font-weight: 600;
    color: var(--color-primary);
}

.card-content p {
    color: var(--color-text-light);
    line-height: 1.6;
}

.card-image-placeholder {
    margin-top: var(--spacing-lg);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform var(--transition-normal);
}

.card-image-placeholder:hover {
    transform: scale(1.05);
}

.card-image-placeholder i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: var(--font-size-2xl);
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.card-image-placeholder img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: filter var(--transition-normal);
}

.card-image-placeholder:hover img {
    filter: brightness(0.7);
}

.card-image-placeholder:hover i {
    opacity: 1;
}

/* 記憶過程時間線 */
.process-timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

.process-timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
    transform: translateX(-50%);
}

.process-step {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-3xl);
    position: relative;
}

.process-step:nth-child(even) {
    flex-direction: row-reverse;
}

.step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    z-index: 2;
    position: relative;
}

.step-content {
    flex: 1;
    background: var(--color-background);
    padding: var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    margin: 0 var(--spacing-lg);
    position: relative;
}

.step-content h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
}

.encoding-types,
.storage-features,
.retrieval-methods {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.encoding-type,
.feature,
.method {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--color-background-light);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-small);
    color: var(--color-text);
}

.encoding-type i,
.feature i,
.method i {
    color: var(--color-primary);
}

.step-content p {
    color: var(--color-text-light);
    line-height: 1.6;
}

.step-image-placeholder {
    width: 400px;
    background: linear-gradient(135deg, #ecf0f1, #bdc3c7);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
    font-size: 0.8rem;
    text-align: center;
    overflow: hidden;
}

.step-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.step-image-placeholder:hover img {
    transform: scale(1.05);
}

/* 大腦解剖圖 */
.brain-anatomy {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
}

.brain-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    justify-content: center;
}

.brain-model {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brain-model img.neural-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: static;
    margin: 0;
    animation: slideInLeft 0.5s ease-in-out;
}

.brain-info {
    flex: 1 1 0;
    display: grid;
    gap: var(--spacing-md);
    width: 400px;
    margin: 0 auto;
}

.info-card {
    width: 600px;
    background: var(--color-background);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.info-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
}

.info-card h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
}

.info-card ul {
    list-style: none;
    padding: 0;
}

.info-card li {
    padding: 5px 0;
    color: var(--color-text-light);
    position: relative;
    padding-left: 20px;
}

.info-card li::before {
    content: "•";
    color: var(--color-primary);
    font-weight: bold;
    position: absolute;
    margin-left: -20px;
}

/* 學習機制 */
.learning-mechanisms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-2xl);
}

.mechanism-card {
    background: var(--color-background);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.mechanism-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.mechanism-header {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    padding: var(--spacing-lg);
    text-align: center;
    margin: -20px -20px 0px;
}

.mechanism-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: var(--font-size-2xl);
}

.mechanism-header h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    margin-bottom: 5px;
}

.mechanism-subtitle {
    font-size: var(--font-size-small);
    opacity: 0.9;
}

.mechanism-content {
    padding: var(--spacing-lg);
}

.experiment h4 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 10px;
}

.experiment p {
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: 20px;
}

.mechanism-image-placeholder {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
    font-size: 0.9rem;
    overflow: hidden;
}

.mechanism-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.mechanism-image-placeholder:hover img {
    transform: scale(1.05);
}

/* 增強技巧標籤 */
.enhancement-tabs {
    max-width: 1600px;
    margin: 10px auto;
}

.tab-buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-3xl);
}

.tab-btn {
    padding: var(--spacing-lg) var(--spacing-2xl);
    border: none;
    background: var(--color-background-light);
    color: var(--color-text);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-weight: 500;
}

.tab-btn.active {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
}

.tab-btn:hover {
    background: #e9ecef;
}

.tab-btn.active:hover {
    background: linear-gradient(135deg, var(--color-primary-dark), var(--color-secondary));
}

.tab-content {
    position: relative;
}

.tab-pane {
    display: none;
    animation: fadeIn 0.5s ease;
}

.tab-pane.active {
    display: block;
}

/* 編碼策略 */
.strategy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xl);
}

.strategy-card {
    background: var(--color-background);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: all 0.3s ease;
}

.strategy-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.strategy-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: var(--font-size-2xl);
}

.strategy-card h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 15px;
}

.strategy-card ul {
    list-style: none;
    padding: 0;
    text-align: left;
}

.strategy-card li {
    padding: 8px 0;
    color: var(--color-text-light);
    position: relative;
    padding-left: 25px;
}

.strategy-card li::before {
    content: "✓";
    color: var(--color-success);
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* 記憶術展示 */
.mnemonics-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xl);
}

.mnemonic-example {
    background: var(--color-background);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    text-align: center;
}

.mnemonic-example h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 20px;
}

.example-content {
    background: var(--color-background-light);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.example-text {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 10px;
}

.example-explanation {
    color: var(--color-text-light);
    font-size: 0.9rem;
}

/* 遺忘曲線 */
.forgetting-curve {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    align-items: center;
}

.curve-chart {
    position: relative;
    height: 300px;
    background: var(--color-background);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-md);
}

.curve-line {
    position: absolute;
    top: 50px;
    left: 50px;
    right: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--color-error), var(--color-warning), #f1c40f, var(--color-success));
    border-radius: 1px;
}

.curve-points {
    position: relative;
    height: 100%;
}

.point {
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.point:hover {
    transform: scale(1.2);
    background: var(--color-error);
}

.point::after {
    content: attr(data-time);
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: var(--color-text-light);
    white-space: nowrap;
}

.point::before {
    content: attr(data-retention);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: var(--color-text);
    font-weight: 600;
}

.point:nth-child(1) {
    top: 20%;
    left: 10%;
}

.point:nth-child(2) {
    top: 60%;
    left: 30%;
}

.point:nth-child(3) {
    top: 80%;
    left: 50%;
}

.point:nth-child(4) {
    top: 85%;
    left: 70%;
}

.point:nth-child(5) {
    top: 87%;
    left: 90%;
}

.curve-info h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 15px;
}

.curve-info p {
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: 30px;
}

.counter-strategies {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.strategy {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-md);
    background: var(--color-background-light);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-small);
    color: var(--color-text);
}

.strategy i {
    color: var(--color-primary);
}

/* 頁腳 */
.footer {
    background: var(--color-text);
    color: white;
    padding: var(--spacing-3xl) 0 var(--spacing-lg);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
}

.footer-section h3,
.footer-section h4 {
    color: white;
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-xl);
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: var(--spacing-sm);
}

.footer-section a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
}

/* 大腦動畫樣式 */
.hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.brain-animation {
    position: relative;
    width: 300px;
    height: 300px;
}

.brain-lobe {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: pulse 2s infinite;
}

.lobe-frontal {
    width: 120px;
    height: 80px;
    top: 50px;
    left: 90px;
    animation-delay: 0s;
}

.lobe-temporal {
    width: 100px;
    height: 60px;
    top: 120px;
    left: 50px;
    animation-delay: 0.5s;
}

.lobe-parietal {
    width: 110px;
    height: 70px;
    top: 80px;
    right: 80px;
    animation-delay: 1s;
}

.lobe-occipital {
    width: 90px;
    height: 50px;
    bottom: 100px;
    left: 105px;
    animation-delay: 1.5s;
}

.synapse-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

.synapse {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 50%;
    animation: synapsePulse 3s infinite;
}

.synapse:nth-child(1) {
    top: 30%;
    left: 20%;
    animation-delay: 0s;
}

.synapse:nth-child(2) {
    top: 60%;
    right: 30%;
    animation-delay: 1s;
}

.synapse:nth-child(3) {
    bottom: 40%;
    left: 60%;
    animation-delay: 2s;
}

/* 圖片彈出層樣式 */
.image-popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.image-popup-container {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.image-popup-container img {
    width: 100%;
    height: 100%;
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-xl);
    display: block;
}

.image-popup-container button {
    position: fixed;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: var(--font-size-2xl);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background var(--transition-normal);
    z-index: 10001;
}

.image-popup-container button:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* 動畫 */
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

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes synapsePulse {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* 響應式設計 */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--color-background);
        width: 100%;
        text-align: center;
        transition: var(--transition-normal);
        box-shadow: var(--shadow-lg);
        padding: var(--spacing-2xl) 0;
        gap: 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-menu li {
        margin: 0;
        padding: var(--spacing-md) 0;
    }

    .nav-menu a {
        font-size: var(--font-size-large);
        padding: var(--spacing-md);
        display: block;
        width: 100%;
    }

    .hamburger {
        display: flex;
        z-index: 1001;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding: var(--spacing-3xl) var(--spacing-lg);
        justify-content: center;
    }

    .hero-title {
        font-size: var(--font-size-4xl);
        text-align: center;
    }

    .hero-subtitle {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-3xl);
        opacity: 0.9;
        animation: fadeInUp 1s ease-out 0.5s both;
        text-align: center;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md);
        text-align: center;
    }

    .brain-animation {
        display: none;
    }

    .memory-types-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
        padding: 0 var(--spacing-md);
    }

    .process-timeline::before {
        left: 50%;
        transform: translateX(-50%);
        display: none;
    }

    .process-step {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-lg);
    }

    .process-step:nth-child(even) {
        flex-direction: column;
    }

    .step-content {
        margin: 0 0 var(--spacing-lg) 0;
    }

    .brain-anatomy {
        gap: var(--spacing-2xl);
        padding: 0 var(--spacing-md);
    }

    .brain-row {
        flex-direction: column;
        gap: var(--spacing-xl);
    }

    .brain-model {
        order: -1;
        max-width: 300px;
        margin: 0 auto;
        width: 100%;
    }

    .learning-mechanisms-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
        padding: 0 var(--spacing-md);
    }

    .forgetting-curve {
        grid-template-columns: 1fr;
    }

    .tab-buttons {
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .strategy-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }

    .mnemonics-showcase {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--spacing-md);
    }

    .section {
        padding: var(--spacing-2xl) 0;
    }

    .section-title {
        font-size: var(--font-size-3xl);
    }

    .memory-card,
    .mechanism-card,
    .strategy-card {
        padding: var(--spacing-lg);
    }

    .hero-title {
        font-size: var(--font-size-3xl);
    }

    .hero-subtitle {
        font-size: var(--font-size-large);
    }

    .btn {
        padding: var(--spacing-md) var(--spacing-lg);
        font-size: var(--font-size-small);
    }
}

@media (max-width: 900px) {
    .brain-row {
        flex-direction: column;
        gap: var(--spacing-xl);
        padding: 0 var(--spacing-md);
    }

    .brain-model {
        order: -1;
        max-width: 300px;
        margin: 0 auto;
    }

    .brain-model img.neural-img {
        max-width: 100%;
        height: auto;
    }

    .info-card {
        text-align: center;
        width: 100%;
        max-width: 500px;
    }

    .info-icon {
      margin: 0 auto;
    }
}

@media (max-width: 600px) {
    .brain-row {
        gap: var(--spacing-lg);
        padding: 0 var(--spacing-md);
    }

    .brain-model {
        max-width: 320px;
        width: 100%;
    }

    .info-card {
        padding: var(--spacing-lg);
        width: 100%;
        max-width: 400px;
    }
}

/* 焦點樣式 */
.btn:focus,
.nav-menu a:focus,
.hamburger:focus,
.tab-btn:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* 高對比度模式支援 */
@media (prefers-contrast: high) {
    :root {
        --color-text: #000000;
        --color-text-light: #333333;
        --color-background: #ffffff;
        --color-background-light: #f0f0f0;
    }
}

/* 減少動畫偏好 */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* 列印樣式 */
@media print {
    .navbar,
    .hero-visual,
    .hamburger,
    .btn {
        display: none !important;
    }
    
    .hero {
        min-height: auto;
        padding: var(--spacing-lg) 0;
    }
    
    .section {
        page-break-inside: avoid;
    }
}
</style> 