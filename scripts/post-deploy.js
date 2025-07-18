#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 檢查部署輸出
function checkDeploymentOutput() {
  const outputDir = path.join(__dirname, '..', '.output', 'public');
  
  console.log('🔍 Checking deployment output...');
  
  if (!fs.existsSync(outputDir)) {
    console.log('❌ .output/public directory not found');
    return false;
  }
  
  const requiredFiles = [
    'index.html',
    'robots.txt'
  ];
  
  const missingFiles = [];
  
  requiredFiles.forEach(file => {
    const filePath = path.join(outputDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} exists in output`);
    } else {
      console.log(`❌ ${file} missing from output`);
      missingFiles.push(file);
    }
  });
  
  // 檢查 API 路由是否生成
  const apiDir = path.join(__dirname, '..', '.output', 'server', 'chunks', 'routes', 'api');
  if (fs.existsSync(apiDir)) {
    console.log('✅ API routes directory exists');
  } else {
    console.log('⚠️  API routes directory not found (may be normal for static generation)');
  }
  
  if (missingFiles.length > 0) {
    console.log(`⚠️  Missing files in output: ${missingFiles.join(', ')}`);
    return false;
  }
  
  return true;
}

// 驗證 robots.txt 中的域名
function validateRobotsDomain() {
  const robotsPath = path.join(__dirname, '..', '.output', 'public', 'robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ robots.txt not found in output');
    return false;
  }
  
  try {
    const content = fs.readFileSync(robotsPath, 'utf8');
    
    // 檢查是否包含 GitHub Pages 格式的 URL
    if (!content.includes('github.io')) {
      console.log('⚠️  robots.txt may not contain GitHub Pages URL format');
    }
    
    // 檢查 sitemap URL 是否正確
    if (!content.includes('/api/sitemap.xml')) {
      console.log('⚠️  robots.txt sitemap URL may not be correct');
    }
    
    console.log('✅ robots.txt domain validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading robots.txt: ${error.message}`);
    return false;
  }
}

// 檢查 Nuxt 配置
function validateNuxtConfig() {
  const configPath = path.join(__dirname, '..', 'nuxt.config.ts');
  
  if (!fs.existsSync(configPath)) {
    console.log('❌ nuxt.config.ts not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    
    // 檢查是否包含正確的 siteUrl
    if (!content.includes('minsdreamknowledge.github.io')) {
      console.log('⚠️  nuxt.config.ts may not contain correct GitHub Pages URL');
    }
    
    // 檢查是否包含 sitemap 模組
    if (!content.includes('@nuxtjs/sitemap')) {
      console.log('❌ @nuxtjs/sitemap module not found in nuxt.config.ts');
      return false;
    }
    
    console.log('✅ nuxt.config.ts validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading nuxt.config.ts: ${error.message}`);
    return false;
  }
}

// 檢查文件大小
function checkFileSizes() {
  const outputDir = path.join(__dirname, '..', '.output', 'public');
  
  console.log('📊 Checking file sizes...');
  
  const files = [
    { name: 'index.html', maxSize: 100 * 1024 }, // 100KB
    { name: 'robots.txt', maxSize: 1 * 1024 }    // 1KB
  ];
  
  let allValid = true;
  
  files.forEach(file => {
    const filePath = path.join(outputDir, file.name);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (stats.size > file.maxSize) {
        console.log(`⚠️  ${file.name} is ${sizeKB}KB (max: ${file.maxSize / 1024}KB)`);
        allValid = false;
      } else {
        console.log(`✅ ${file.name} size: ${sizeKB}KB`);
      }
    }
  });
  
  return allValid;
}

// 檢查 sitemap API 文件
function validateSitemapAPI() {
  const sitemapApiPath = path.join(__dirname, '..', 'server', 'api', 'sitemap.xml.ts');
  
  if (!fs.existsSync(sitemapApiPath)) {
    console.log('❌ sitemap.xml.ts API not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(sitemapApiPath, 'utf8');
    
    // 檢查是否包含正確的 hostname
    if (!content.includes('minsdreamknowledge.github.io')) {
      console.log('⚠️  sitemap API may not contain correct GitHub Pages URL');
    }
    
    // 檢查是否包含必要的導入
    if (!content.includes('SitemapStream')) {
      console.log('❌ sitemap API missing SitemapStream import');
      return false;
    }
    
    console.log('✅ sitemap API validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading sitemap API: ${error.message}`);
    return false;
  }
}

// 主函數
function main() {
  console.log('🚀 Post-deployment validation...\n');
  
  const checks = [
    checkDeploymentOutput(),
    validateRobotsDomain(),
    validateNuxtConfig(),
    validateSitemapAPI(),
    checkFileSizes()
  ];
  
  const allPassed = checks.every(check => check);
  
  console.log('\n📊 Validation Summary:');
  if (allPassed) {
    console.log('✅ All validations passed! Deployment successful.');
    console.log('📝 Note: Sitemap is now generated via API route at /api/sitemap.xml');
    process.exit(0);
  } else {
    console.log('❌ Some validations failed. Please check deployment.');
    process.exit(1);
  }
}

// 執行主函數
main(); 