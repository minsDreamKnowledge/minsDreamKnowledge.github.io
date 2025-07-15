#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 檢查必要文件
function checkRequiredFiles() {
  const publicDir = path.join(__dirname, '..', 'public');
  const requiredFiles = [
    'sitemap.xml',
    'robots.txt',
    'favicon.ico'
  ];
  
  console.log('🔍 Checking required files...');
  
  const missingFiles = [];
  
  requiredFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.log(`❌ ${file} missing`);
      missingFiles.push(file);
    }
  });
  
  if (missingFiles.length > 0) {
    console.log(`⚠️  Missing files: ${missingFiles.join(', ')}`);
    return false;
  }
  
  return true;
}

// 檢查 sitemap.xml 格式
function validateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ sitemap.xml not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    
    // 檢查是否是有效的 XML 格式
    if (!content.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.log('❌ sitemap.xml missing XML declaration');
      return false;
    }
    
    // 檢查是否包含 urlset 標籤
    if (!content.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.log('❌ sitemap.xml missing urlset declaration');
      return false;
    }
    
    // 檢查是否包含 URL 項目
    if (!content.includes('<url>')) {
      console.log('❌ sitemap.xml contains no URLs');
      return false;
    }
    
    // 計算 URL 數量
    const urlCount = (content.match(/<url>/g) || []).length;
    console.log(`✅ sitemap.xml is valid (${urlCount} URLs found)`);
    return true;
  } catch (error) {
    console.log(`❌ Error reading sitemap.xml: ${error.message}`);
    return false;
  }
}

// 檢查 robots.txt 格式
function validateRobots() {
  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ robots.txt not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(robotsPath, 'utf8');
    
    if (!content.includes('User-Agent:')) {
      console.log('❌ robots.txt missing User-Agent directive');
      return false;
    }
    
    console.log('✅ robots.txt format is valid');
    return true;
  } catch (error) {
    console.log(`❌ Error reading robots.txt: ${error.message}`);
    return false;
  }
}

// 主函數
function main() {
  console.log('🚀 Pre-deployment checks...\n');
  
  const checks = [
    checkRequiredFiles(),
    validateSitemap(),
    validateRobots()
  ];
  
  const allPassed = checks.every(check => check);
  
  console.log('\n📊 Check Summary:');
  if (allPassed) {
    console.log('✅ All checks passed! Ready for deployment.');
    process.exit(0);
  } else {
    console.log('❌ Some checks failed. Please fix issues before deployment.');
    process.exit(1);
  }
}

// 執行主函數
main(); 