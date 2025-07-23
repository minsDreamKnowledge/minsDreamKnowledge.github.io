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
    'index.html'
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
    { name: 'index.html', maxSize: 100 * 1024 } // 100KB
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
    validateNuxtConfig(),
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