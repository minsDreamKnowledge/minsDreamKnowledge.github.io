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
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/web/images/Sensory Memory.png', '感覺記憶圖解')">
              <img src="/knowledge/web/images/Sensory Memory.png" alt="感覺記憶圖解" width="100%" height="100%" loading="lazy">
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
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/web/images/Short-Term Memory.png', '短期記憶容量圖')">
              <img src="/knowledge/web/images/Short-Term Memory.png" alt="短期記憶容量圖" width="100%" height="100%" loading="lazy">
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
            <div class="card-image-placeholder" @click="showImagePopup('/knowledge/web/images/Long-Term Memory.png', '長期記憶網絡圖')">
              <img src="/knowledge/web/images/Long-Term Memory.png" alt="長期記憶網絡圖" width="100%" height="100%" loading="lazy">
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
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/web/images/Encoding Process.png', '編碼過程圖解')">
              <img src="/knowledge/web/images/Encoding Process.png" alt="編碼過程圖解" width="100%" height="100%" loading="lazy">
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
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/web/images/Memory Storage.png', '記憶儲存網絡圖')">
              <img src="/knowledge/web/images/Memory Storage.png" alt="記憶儲存網絡圖" width="100%" height="100%" loading="lazy">
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
            <div class="step-image-placeholder" @click="showImagePopup('/knowledge/web/images/Memory Retrieval.png', '記憶提取模式圖')">
              <img src="/knowledge/web/images/Memory Retrieval.png" alt="記憶提取模式圖" width="100%" height="100%" loading="lazy">
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
              <img src="/knowledge/web/images/Hippocampus.png" alt="海馬體" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/web/images/Hippocampus.png', '海馬體')">
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
              <img src="/knowledge/web/images/Memory Manager.png" alt="大腦皮質" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/web/images/Memory Manager.png', '大腦皮質')">
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
              <img src="/knowledge/web/images/Emotional Amygdala.png" alt="杏仁核" class="neural-img" width="100%" height="100%" loading="lazy" @click="showImagePopup('/knowledge/web/images/Emotional Amygdala.png', '杏仁核')">
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
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/web/images/pavlov.png', '巴甫洛夫實驗圖解')">
                <img src="/knowledge/web/images/pavlov.png" alt="巴甫洛夫實驗圖解" width="100%" height="100%" loading="lazy">
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
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/web/images/skinner.png', '斯金納箱實驗圖解')">
                <img src="/knowledge/web/images/skinner.png" alt="斯金納箱實驗圖解" width="100%" height="100%" loading="lazy">
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
              <div class="mechanism-image-placeholder" @click="showImagePopup('/knowledge/web/images/bandura.png', '班杜拉實驗圖解')">
                <img src="/knowledge/web/images/bandura.png" alt="班杜拉實驗圖解" width="100%" height="100%" loading="lazy">
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
@import "~/assets/styles.css";
</style> 