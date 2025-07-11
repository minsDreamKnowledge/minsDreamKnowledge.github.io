# Nuxt Knowledge App

這是一個關於記憶系統與學習機制的知識網站，使用 Nuxt 3 建構。

## 功能特色

- 📚 記憶類型介紹（感覺記憶、短期記憶、長期記憶）
- 🔄 記憶過程說明（編碼、儲存、提取）
- 🧠 大腦生理基礎（海馬體、大腦皮質、杏仁核）
- 🎓 學習機制（古典制約、操作制約、觀察學習）
- 🚀 記憶增強技巧（編碼策略、記憶術、對抗遺忘）
- 🖼️ 互動式圖片彈出視窗
- 📱 響應式設計，支援各種裝置

## 開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 部署

### 自動部署 (GitHub Pages)

1. 推送程式碼到 `main` 分支
2. GitHub Actions 會自動建構並部署到 GitHub Pages
3. 網站會發布在：`https://[username].github.io/[repository-name]/`

### 手動部署

```bash
# 建構靜態檔案
npm run build:static

# 部署到 GitHub Pages
npm run deploy
```

## 技術棧

- **框架**: Nuxt 3
- **語言**: Vue 3 + TypeScript
- **樣式**: CSS3 + Font Awesome
- **部署**: GitHub Pages + GitHub Actions

## 專案結構

```
nuxt-app/
├── pages/           # 頁面檔案
│   ├── index.vue    # 首頁
│   └── knowledge.vue # 知識頁面
├── assets/          # 靜態資源
│   └── styles.css   # 樣式檔案
├── public/          # 公開檔案
│   └── knowledge/web/images/ # 圖片檔案
└── .github/workflows/ # CI/CD 配置
    └── deploy.yml   # 部署工作流程
```

## 授權

© 2024 記憶系統與學習機制. 保留所有權利.
