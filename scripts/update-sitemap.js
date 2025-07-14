#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 獲取部署 URL
function getDeploymentURL() {
  const { GITHUB_REPOSITORY, GITHUB_REPOSITORY_OWNER, GITHUB_EVENT_NAME } = process.env;
  
  if (GITHUB_EVENT_NAME === 'push' && GITHUB_REPOSITORY) {
    const repoName = GITHUB_REPOSITORY.split('/')[1];
    
    // 如果是 username.github.io 格式的倉庫，直接使用 username.github.io
    if (repoName.endsWith('.github.io')) {
      return `https://${GITHUB_REPOSITORY_OWNER}.github.io`;
    }
    
    // 其他倉庫使用 username.github.io/repository-name 格式
    return `https://${GITHUB_REPOSITORY_OWNER}.github.io/${repoName}`;
  }
  
  // 如果沒有 GitHub 環境變數，使用預設域名
  return 'https://your-domain.com';
}

// 更新文件中的域名
function updateFile(filePath, oldDomain, newDomain) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(new RegExp(oldDomain, 'g'), newDomain);
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ Updated ${filePath} with new domain: ${newDomain}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// 主函數
function main() {
  const deploymentURL = getDeploymentURL();
  const oldDomain = 'https://your-domain.com';
  
  console.log(`🚀 Updating sitemap and robots files...`);
  console.log(`📍 Deployment URL: ${deploymentURL}`);
  
  const publicDir = path.join(__dirname, '..', 'public');
  
  // 更新 sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    updateFile(sitemapPath, oldDomain, deploymentURL);
  } else {
    console.log(`⚠️  sitemap.xml not found at ${sitemapPath}`);
  }
  
  // 更新 robots.txt
  const robotsPath = path.join(publicDir, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    updateFile(robotsPath, oldDomain, deploymentURL);
  } else {
    console.log(`⚠️  robots.txt not found at ${robotsPath}`);
  }
  
  console.log(`✅ Domain update completed!`);
}

// 執行主函數
main();

// 導出函數供其他腳本使用
export { getDeploymentURL, updateFile }; 