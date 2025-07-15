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
  return 'https://minsDreamKnowledge.github.io';
}

// 掃描 pages 目錄獲取所有頁面
function scanPages() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const pages = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // 遞歸掃描子目錄
        scanDirectory(itemPath, basePath + '/' + item);
      } else if (item.endsWith('.vue')) {
        // 處理 Vue 頁面文件
        const pageName = item.replace('.vue', '');
        let url = basePath;
        
        if (pageName !== 'index') {
          url += '/' + pageName;
        }
        
        // 移除開頭的斜杠（如果有）
        if (url.startsWith('/')) {
          url = url.substring(1);
        }
        
        pages.push({
          url: url || '',
          file: itemPath,
          lastmod: stat.mtime.toISOString()
        });
      }
    });
  }
  
  if (fs.existsSync(pagesDir)) {
    scanDirectory(pagesDir);
  }
  
  return pages;
}

// 頁面優先級設定
function getPagePriority(url) {
  if (url === '' || url === '/') return '1.0';
  if (url === 'library') return '0.9';
  if (url.includes('bangkok') || url.includes('psychology') || url.includes('history')) return '0.8';
  if (url === 'search') return '0.5';
  if (url === 'sitemap') return '0.3';
  return '0.7';
}

// 頁面更新頻率設定
function getChangeFreq(url) {
  if (url === '' || url === '/') return 'weekly';
  if (url === 'library') return 'monthly';
  if (url.includes('bangkok') || url.includes('psychology') || url.includes('history')) return 'monthly';
  if (url === 'search') return 'monthly';
  if (url === 'sitemap') return 'monthly';
  return 'monthly';
}

// 生成 sitemap.xml
function generateSitemap() {
  const baseUrl = getDeploymentURL();
  const pages = scanPages();
  
  console.log(`🚀 Generating sitemap for ${pages.length} pages...`);
  console.log(`📍 Base URL: ${baseUrl}`);
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // 排序頁面：首頁最先，然後按 URL 字母順序
  pages.sort((a, b) => {
    if (a.url === '') return -1;
    if (b.url === '') return 1;
    return a.url.localeCompare(b.url);
  });
  
  pages.forEach(page => {
    const fullUrl = page.url ? `${baseUrl}/${page.url}` : baseUrl;
    const priority = getPagePriority(page.url);
    const changefreq = getChangeFreq(page.url);
    
    xml += '  <url>\n';
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
    
    console.log(`✅ Added: ${fullUrl} (priority: ${priority}, changefreq: ${changefreq})`);
  });
  
  xml += '</urlset>\n';
  
  return xml;
}

// 寫入 sitemap.xml 文件
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // 確保 public 目錄存在
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // 寫入 sitemap.xml（直接覆蓋）
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  
  console.log(`✅ Sitemap generated successfully at: ${sitemapPath}`);
  console.log(`📊 Total pages: ${scanPages().length}`);
  
  return sitemapPath;
}

// 主函數
function main() {
  console.log('🗺️  Generating sitemap.xml...\n');
  
  try {
    const sitemapPath = writeSitemap();
    console.log('\n🎉 Sitemap generation completed successfully!');
    console.log(`📄 File location: ${sitemapPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// 如果直接執行此腳本
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('generate-sitemap.js')) {
  main();
}

// 導出函數供其他腳本使用
export { generateSitemap, writeSitemap, getDeploymentURL }; 