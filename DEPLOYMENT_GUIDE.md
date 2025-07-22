# 部署指南

## 概述

本項目已成功整合 Nuxt Sitemap 模組，並配置了 GitHub Actions 自動部署到 GitHub Pages。

## 部署配置

### 1. GitHub Actions 工作流程

文件位置：`.github/workflows/deploy.yml`

主要步驟：
- 檢查代碼
- 安裝依賴
- 預部署檢查
- 構建應用
- 部署到 GitHub Pages
- 部署後驗證

### 2. 預部署檢查 (`scripts/pre-deploy.js`)

檢查項目：
- ✅ 必要文件存在 (robots.txt, favicon.ico)
- ✅ sitemap API 文件存在
- ✅ Nuxt 配置正確
- ✅ 必要依賴已安裝

### 3. 部署後驗證 (`scripts/post-deploy.js`)

驗證項目：
- ✅ 部署輸出文件存在
- ✅ robots.txt 域名配置正確
- ✅ Nuxt 配置驗證通過
- ✅ sitemap API 驗證通過
- ✅ 文件大小檢查

## Sitemap 配置

### 新的 Sitemap 系統

- **模組**: `@nuxtjs/sitemap`
- **API 路由**: `/api/sitemap.xml`
- **配置**: `server/api/sitemap.xml.ts`
- **域名**: `https://minsdreamknowledge.github.io`

### 包含的頁面

**靜態頁面**：
- `/` (優先級: 1.0, 更新頻率: daily)
- `/psychology` (優先級: 0.9, 更新頻率: weekly)
- `/history` (優先級: 0.9, 更新頻率: weekly)
- `/memory` (優先級: 0.9, 更新頻率: weekly)
- `/search` (優先級: 0.7, 更新頻率: weekly)
- `/sitemap` (優先級: 0.5, 更新頻率: monthly)
- `/travel/bangkok` (優先級: 0.8, 更新頻率: monthly)

**實驗頁面**：
- 所有 6 個心理學實驗頁面 (優先級: 0.8, 更新頻率: monthly)

## 部署流程

1. **推送代碼到 main 分支**
2. **GitHub Actions 自動觸發**
3. **執行預部署檢查**
4. **構建應用**
5. **部署到 GitHub Pages**
6. **執行部署後驗證**

## 訪問地址

- **網站**: https://minsdreamknowledge.github.io
- **Sitemap**: https://minsdreamknowledge.github.io/api/sitemap.xml
- **Robots.txt**: https://minsdreamknowledge.github.io/robots.txt

## 故障排除

### 常見問題

1. **構建失敗**
   - 檢查 Node.js 版本 (20.11.1)
   - 確認所有依賴已安裝
   - 檢查 Nuxt 配置

2. **Sitemap 無法訪問**
   - 確認 API 路由正確生成
   - 檢查 hostname 配置
   - 驗證 robots.txt 中的 URL

3. **部署驗證失敗**
   - 檢查必要文件是否存在
   - 確認域名配置正確
   - 驗證文件大小是否合理

### 本地測試

```bash
# 安裝依賴
npm install

# 預部署檢查
npm run pre-deploy

# 構建應用
npm run build

# 部署後驗證
npm run post-deploy

# 本地預覽
npm run preview
```

## 更新日誌

- ✅ 整合 Nuxt Sitemap 模組
- ✅ 配置 GitHub Pages 部署
- ✅ 更新 robots.txt
- ✅ 移除舊的 sitemap 腳本
- ✅ 優化部署流程 