#!/bin/bash

# 部署腳本
echo "開始部署到 GitHub Pages..."

# 建構靜態檔案
echo "建構靜態檔案..."
npm run build:static

# 檢查建構是否成功
if [ $? -eq 0 ]; then
    echo "建構成功！"
    echo "靜態檔案已生成在 dist/ 目錄"
    echo "請推送程式碼到 GitHub 以觸發自動部署"
else
    echo "建構失敗！"
    exit 1
fi 