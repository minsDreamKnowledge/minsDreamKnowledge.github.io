#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 模擬 GitHub Actions 環境變數
function setupTestEnvironment() {
  // 模擬 GitHub 環境變數
  process.env.GITHUB_REPOSITORY = 'your-username/your-repo-name';
  process.env.GITHUB_REPOSITORY_OWNER = 'your-username';
  process.env.GITHUB_EVENT_NAME = 'push';
  
  console.log('🧪 Setting up test environment...');
  console.log(`Repository: ${process.env.GITHUB_REPOSITORY}`);
  console.log(`Owner: ${process.env.GITHUB_REPOSITORY_OWNER}`);
  console.log(`Event: ${process.env.GITHUB_EVENT_NAME}`);
}

// 測試域名更新
async function testDomainUpdate() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // 備份原始文件
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  const sitemapBackup = path.join(publicDir, 'sitemap.xml.backup');
  
  if (fs.existsSync(sitemapPath)) {
    fs.copyFileSync(sitemapPath, sitemapBackup);
    console.log('📋 Backed up sitemap.xml');
  }
  
  // 執行域名更新
  console.log('\n🔄 Testing domain update...');
  
  // 導入並執行更新函數
  const { getDeploymentURL, updateFile } = await import('./update-sitemap.js');
  
  const deploymentURL = getDeploymentURL();
  const oldDomain = 'https://your-domain.com';
  
  console.log(`📍 Expected deployment URL: ${deploymentURL}`);
  
  // 更新文件
  let updatedFiles = 0;
  
  if (fs.existsSync(sitemapPath)) {
    if (updateFile(sitemapPath, oldDomain, deploymentURL)) {
      updatedFiles++;
    }
  }
  
  console.log(`✅ Updated ${updatedFiles} files`);
  
  // 驗證更新結果
  console.log('\n🔍 Validating updates...');
  
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (sitemapContent.includes(deploymentURL)) {
      console.log('✅ sitemap.xml contains updated domain');
    } else {
      console.log('❌ sitemap.xml domain update failed');
    }
  }
  
  // 恢復備份
  console.log('\n🔄 Restoring original files...');
  
  if (fs.existsSync(sitemapBackup)) {
    fs.copyFileSync(sitemapBackup, sitemapPath);
    fs.unlinkSync(sitemapBackup);
    console.log('✅ Restored sitemap.xml');
  }
  
  console.log('\n🎉 Test completed!');
}

// 主函數
async function main() {
  console.log('🚀 Testing deployment scripts...\n');
  
  setupTestEnvironment();
  testDomainUpdate();
}

// 執行主函數
main().catch(console.error); 