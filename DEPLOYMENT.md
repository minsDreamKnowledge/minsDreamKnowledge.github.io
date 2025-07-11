# 部署說明

## GitHub Pages 自動部署

### 前置需求

1. **GitHub 儲存庫設定**
   - 確保儲存庫是公開的（或你有 GitHub Pro）
   - 推送程式碼到 `main` 分支

2. **GitHub Pages 設定**
   - 前往儲存庫設定 > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (GitHub Actions 會自動建立)
   - 點擊 Save

### 自動部署流程

1. **推送程式碼**
   ```bash
   git add .
   git commit -m "Update knowledge page"
   git push origin main
   ```

2. **GitHub Actions 自動執行**
   - 安裝依賴
   - 建構靜態檔案
   - 部署到 GitHub Pages

3. **部署完成**
   - 網站會在 `https://[username].github.io/[repository-name]/` 上線
   - 部署時間約 2-5 分鐘

### 手動部署

如果需要手動部署：

```bash
# 建構靜態檔案
npm run build:static

# 檢查生成的檔案
ls .output/public/

# 手動上傳到 GitHub Pages
# 或使用 GitHub CLI
gh repo deploy
```

## 故障排除

### 常見問題

1. **建構失敗**
   - 檢查 Node.js 版本（需要 18+）
   - 清除 node_modules 並重新安裝
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **部署失敗**
   - 檢查 GitHub Actions 日誌
   - 確認 GitHub Pages 設定正確
   - 檢查儲存庫權限

3. **圖片無法顯示**
   - 確認圖片路徑正確
   - 檢查 public 目錄結構
   - 清除瀏覽器快取

### 本地測試

```bash
# 建構並預覽
npm run build:static
npx serve .output/public

# 或使用 Nuxt 預覽
npm run preview
```

## 環境變數

如果需要設定環境變數：

1. 在 GitHub 儲存庫設定 > Secrets and variables > Actions
2. 添加需要的環境變數
3. 在 `.github/workflows/deploy.yml` 中引用

## 自定義域名

如果要使用自定義域名：

1. 在 GitHub Pages 設定中添加自定義域名
2. 在 `.github/workflows/deploy.yml` 中設定 `cname`
3. 在 DNS 中設定 CNAME 記錄

## 監控部署

- 在 GitHub 儲存庫的 Actions 標籤中查看部署狀態
- 設定 GitHub 通知以接收部署狀態
- 使用 GitHub Pages 的狀態頁面檢查服務狀態 