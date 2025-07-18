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
    'robots.txt',
    'favicon.ico'
  ];
  
  console.log('🔍 Checking required files...');
  
  const missingFiles = [];
  
  // 檢查 public 目錄中的文件
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

// 檢查 Nuxt 配置
function validateNuxtConfig() {
  const configPath = path.join(__dirname, '..', 'nuxt.config.ts');
  
  if (!fs.existsSync(configPath)) {
    console.log('❌ nuxt.config.ts not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    
    // 檢查是否包含 sitemap 模組
    if (!content.includes('@nuxtjs/sitemap')) {
      console.log('❌ @nuxtjs/sitemap module not found in nuxt.config.ts');
      return false;
    }
    
    // 檢查是否包含 site 配置
    if (!content.includes('site:')) {
      console.log('❌ site configuration not found in nuxt.config.ts');
      return false;
    }
    
    // 檢查是否包含正確的 URL
    if (!content.includes('minsdreamknowledge.github.io')) {
      console.log('❌ GitHub Pages URL not configured in nuxt.config.ts');
      return false;
    }
    
    console.log('✅ nuxt.config.ts is properly configured');
    return true;
  } catch (error) {
    console.log(`❌ Error reading nuxt.config.ts: ${error.message}`);
    return false;
  }
}

// 檢查 package.json 依賴
function validateDependencies() {
  const packagePath = path.join(__dirname, '..', 'package.json');
  
  if (!fs.existsSync(packagePath)) {
    console.log('❌ package.json not found');
    return false;
  }
  
  try {
    const content = fs.readFileSync(packagePath, 'utf8');
    const packageJson = JSON.parse(content);
    
    // 檢查必要的依賴
    const requiredDeps = ['@nuxtjs/sitemap'];
    const missingDeps = [];
    
    requiredDeps.forEach(dep => {
      if (!packageJson.dependencies[dep]) {
        missingDeps.push(dep);
      }
    });
    
    if (missingDeps.length > 0) {
      console.log(`❌ Missing dependencies: ${missingDeps.join(', ')}`);
      return false;
    }
    
    console.log('✅ All required dependencies are installed');
    return true;
  } catch (error) {
    console.log(`❌ Error reading package.json: ${error.message}`);
    return false;
  }
}

// 主函數
function main() {
  console.log('🚀 Pre-deployment checks...\n');
  
  const checks = [
    checkRequiredFiles(),
    validateNuxtConfig(),
    validateDependencies()
  ];
  
  const allPassed = checks.every(check => check);
  
  console.log('\n📊 Check Summary:');
  if (allPassed) {
    console.log('✅ All checks passed! Ready for deployment.');
    console.log('📝 Note: Sitemap will be generated automatically by @nuxtjs/sitemap module.');
    process.exit(0);
  } else {
    console.log('❌ Some checks failed. Please fix issues before deployment.');
    process.exit(1);
  }
}

// 執行主函數
main(); 