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
    'sitemap.xml',
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
  
  if (missingFiles.length > 0) {
    console.log(`⚠️  Missing files in output: ${missingFiles.join(', ')}`);
    return false;
  }
  
  return true;
}

// 驗證 sitemap.xml 中的域名
function validateSitemapDomain() {
  const sitemapPath = path.join(__dirname, '..', '.output', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ sitemap.xml not found in output');
    return false;
  }
  
  try {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    
    // 檢查是否還有預設域名
    if (content.includes('https://your-domain.com')) {
      console.log('❌ sitemap.xml still contains default domain');
      return false;
    }
    
    // 檢查是否有有效的 URL
    if (!content.includes('https://')) {
      console.log('❌ sitemap.xml missing valid URLs');
      return false;
    }
    
    console.log('✅ sitemap.xml domain validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading sitemap.xml: ${error.message}`);
    return false;
  }
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
    
    // 檢查是否還有預設域名
    if (content.includes('https://your-domain.com')) {
      console.log('❌ robots.txt still contains default domain');
      return false;
    }
    
    console.log('✅ robots.txt domain validation passed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading robots.txt: ${error.message}`);
    return false;
  }
}

// 檢查文件大小
function checkFileSizes() {
  const outputDir = path.join(__dirname, '..', '.output', 'public');
  
  console.log('📊 Checking file sizes...');
  
  const files = [
    { name: 'index.html', maxSize: 100 * 1024 }, // 100KB
    { name: 'sitemap.xml', maxSize: 10 * 1024 }, // 10KB
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

// 主函數
function main() {
  console.log('🚀 Post-deployment validation...\n');
  
  const checks = [
    checkDeploymentOutput(),
    validateSitemapDomain(),
    validateRobotsDomain(),
    checkFileSizes()
  ];
  
  const allPassed = checks.every(check => check);
  
  console.log('\n📊 Validation Summary:');
  if (allPassed) {
    console.log('✅ All validations passed! Deployment successful.');
    process.exit(0);
  } else {
    console.log('❌ Some validations failed. Please check deployment.');
    process.exit(1);
  }
}

// 執行主函數
main(); 