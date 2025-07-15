# Sitemap 自動生成系統

本專案已實現 sitemap.xml 自動生成功能，專為 Google Search Console 和 GitHub Pages 部署而設計。

## 功能特色

✅ **自動掃描頁面** - 自動掃描 `pages/` 目錄中的所有 `.vue` 文件  
✅ **實時更新時間** - 使用文件的實際修改時間作為 `lastmod`  
✅ **智能優先級** - 根據頁面類型自動設置優先級  
✅ **部署前自動執行** - 在 GitHub Pages 部署前自動生成  
✅ **覆蓋舊文件** - 每次生成都會覆蓋舊的 sitemap.xml  

## 使用方法

### 手動生成 sitemap

```bash
# 生成 sitemap.xml
npm run generate-sitemap

# 或直接運行腳本
node scripts/generate-sitemap.js
```

### 自動生成（推薦）

```bash
# 部署前檢查（包含 sitemap 生成）
npm run pre-deploy

# 完整部署流程
npm run deploy
```

## 生成的 sitemap.xml 格式

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://minsDreamKnowledge.github.io</loc>
    <lastmod>2025-07-15T08:13:51.276Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- 其他頁面... -->
</urlset>
```

## 頁面優先級設定

| 頁面類型 | 優先級 | 更新頻率 | 說明 |
|---------|--------|----------|------|
| 首頁 (`/`) | 1.0 | weekly | 最高優先級 |
| 圖書館 (`/library`) | 0.9 | monthly | 重要頁面 |
| 內容頁面 (`/bangkok`, `/psychology`, `/history`) | 0.8 | monthly | 主要內容 |
| 搜尋頁 (`/search`) | 0.5 | monthly | 功能頁面 |
| 站點地圖 (`/sitemap`) | 0.3 | monthly | 輔助頁面 |
| 其他頁面 | 0.7 | monthly | 預設設定 |

## 部署流程

在 GitHub Actions 中，sitemap 生成會在以下時機自動執行：

1. **Pre-deployment checks** - 生成最新的 sitemap.xml
2. **Update domain** - 更新 sitemap 中的域名
3. **Build application** - 構建應用程式
4. **Deploy** - 部署到 GitHub Pages

## 文件結構

```
nuxt-app/
├── scripts/
│   ├── generate-sitemap.js    # 新的 sitemap 生成腳本
│   ├── update-sitemap.js      # 域名更新腳本
│   └── pre-deploy.js          # 部署前檢查腳本
├── pages/                     # 頁面目錄（自動掃描）
│   ├── index.vue
│   ├── library.vue
│   ├── bangkok.vue
│   └── ...
└── public/
    └── sitemap.xml           # 生成的 sitemap 文件
```

## 自定義設定

如需修改頁面優先級或更新頻率，請編輯 `scripts/generate-sitemap.js` 中的以下函數：

```javascript
// 修改優先級
function getPagePriority(url) {
  // 在這裡添加您的自定義邏輯
}

// 修改更新頻率
function getChangeFreq(url) {
  // 在這裡添加您的自定義邏輯
}
```

## 故障排除

### 常見問題

1. **sitemap.xml 沒有更新**
   ```bash
   # 確保腳本有執行權限
   chmod +x scripts/generate-sitemap.js
   
   # 手動生成測試
   npm run generate-sitemap
   ```

2. **頁面沒有被包含**
   - 確認頁面文件在 `pages/` 目錄中
   - 確認文件是 `.vue` 格式
   - 檢查文件權限

3. **部署後 sitemap 無法訪問**
   - 確認 `public/sitemap.xml` 存在
   - 檢查 GitHub Pages 設定

### 驗證 sitemap

```bash
# 檢查 sitemap 格式
npm run pre-deploy

# 在線驗證工具
# https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

## 提交到 Google Search Console

1. 登入 [Google Search Console](https://search.google.com/search-console)
2. 選擇您的網站
3. 前往 "索引" > "Sitemap"
4. 添加 sitemap URL：`https://your-domain.com/sitemap.xml`
5. 提交並等待 Google 處理

## 更新日誌

- **2025-07-15**: 初始版本，實現自動 sitemap 生成
- 自動掃描頁面功能
- 實時更新時間
- 智能優先級設定
- GitHub Actions 整合 