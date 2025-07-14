# 🚀 部署指南

## 📋 概述

這個 Nuxt 應用使用 GitHub Actions 進行自動化部署，包含智能域名更新和部署驗證功能。

## 🔧 部署流程

### 1. 預部署檢查
- 檢查必要文件是否存在 (`sitemap.xml`, `robots.txt`, `favicon.ico`)
- 驗證 sitemap.xml 格式
- 驗證 robots.txt 格式

### 2. 構建應用
- 安裝依賴
- 生成靜態文件
- 更新 sitemap.xml 和 robots.txt 中的域名

### 3. 部署到 GitHub Pages
- 上傳構建產物
- 部署到 GitHub Pages

### 4. 部署後驗證
- 檢查部署輸出文件
- 驗證域名更新
- 檢查文件大小

## 🌐 域名更新機制

### 自動域名檢測
部署腳本會自動檢測 GitHub 環境變數來確定正確的部署 URL：

```javascript
// 從環境變數獲取部署 URL
const { GITHUB_REPOSITORY, GITHUB_REPOSITORY_OWNER, GITHUB_EVENT_NAME } = process.env;

if (GITHUB_EVENT_NAME === 'push' && GITHUB_REPOSITORY) {
  const repoName = GITHUB_REPOSITORY.split('/')[1];
  return `https://${GITHUB_REPOSITORY_OWNER}.github.io/${repoName}`;
}
```

### 更新的文件
- `public/sitemap.xml` - 網站地圖
- `public/robots.txt` - 搜尋引擎指引

## 📁 腳本文件

### `scripts/update-sitemap.js`
動態更新 sitemap.xml 和 robots.txt 中的域名。

**功能：**
- 自動檢測部署環境
- 更新所有 URL 引用
- 提供詳細的更新日誌

### `scripts/pre-deploy.js`
部署前的檢查腳本。

**檢查項目：**
- 必要文件存在性
- sitemap.xml 格式驗證
- robots.txt 格式驗證

### `scripts/post-deploy.js`
部署後的驗證腳本。

**驗證項目：**
- 部署輸出文件檢查
- 域名更新驗證
- 文件大小檢查

## 🛠️ 手動執行

### 本地測試
```bash
# 更新 sitemap
npm run update-sitemap

# 預部署檢查
npm run pre-deploy

# 構建應用
npm run build:static

# 部署後驗證
npm run post-deploy
```

### 環境變數
腳本會自動檢測以下環境變數：
- `GITHUB_REPOSITORY` - GitHub 倉庫名稱
- `GITHUB_REPOSITORY_OWNER` - 倉庫擁有者
- `GITHUB_EVENT_NAME` - GitHub 事件類型

## 📊 部署狀態

### 成功部署
✅ 所有檢查通過
✅ 域名正確更新
✅ 文件大小合理
✅ 部署輸出完整

### 常見問題
❌ 缺少必要文件
❌ sitemap.xml 格式錯誤
❌ 域名更新失敗
❌ 文件大小超限

## 🔍 故障排除

### 1. 域名未更新
檢查 GitHub Actions 日誌中的 "Update sitemap and robots files" 步驟。

### 2. 部署失敗
檢查預部署檢查的輸出，確保所有必要文件存在且格式正確。

### 3. 驗證失敗
檢查部署後驗證的輸出，確認所有檢查項目都通過。

## 📝 自定義配置

### 修改預設域名
在 `scripts/update-sitemap.js` 中修改：
```javascript
const oldDomain = 'https://your-domain.com';
```

### 添加新的檢查項目
在 `scripts/pre-deploy.js` 中添加新的檢查函數。

### 修改文件大小限制
在 `scripts/post-deploy.js` 中調整 `maxSize` 值。

## 🎯 最佳實踐

1. **定期檢查** - 定期運行預部署檢查
2. **監控部署** - 關注 GitHub Actions 部署狀態
3. **備份配置** - 保存重要的配置文件
4. **測試更新** - 在本地測試域名更新腳本

## 📞 支援

如果遇到部署問題，請檢查：
1. GitHub Actions 日誌
2. 預部署檢查輸出
3. 部署後驗證結果
4. 文件格式和內容 