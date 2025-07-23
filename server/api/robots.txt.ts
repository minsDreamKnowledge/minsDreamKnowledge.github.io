export default defineEventHandler(async (event) => {
  // 設置響應頭
  setHeader(event, 'Content-Type', 'text/plain')
  
  // 獲取配置
  const config = useRuntimeConfig()
  const baseUrl = 'https://minsdreamknowledge.github.io'
  
  // 生成 robots.txt 內容
  const robotsContent = `# robots.txt for Mins Dream Knowledge
# ${baseUrl}

# 允許所有搜索引擎爬蟲
User-Agent: *
Allow: /

# 允許 Google 爬蟲
User-Agent: Googlebot
Allow: /

# 允許 Google AdSense 和 Analytics
User-Agent: Mediapartners-Google
Allow: /

# 允許 Bing 爬蟲
User-Agent: Bingbot
Allow: /

# 允許其他主要搜索引擎
User-Agent: Slurp
Allow: /

User-Agent: DuckDuckBot
Allow: /

# 禁止爬取管理區域（如果有的話）
# Disallow: /admin/
# Disallow: /private/
# Disallow: /api/

# 禁止爬取臨時文件和開發文件
Disallow: /temp/
Disallow: /tmp/
Disallow: /.nuxt/
Disallow: /node_modules/
Disallow: /.git/

# 允許爬取所有主要頁面
Allow: /memory/
Allow: /psychology/
Allow: /travel/
Allow: /sport/
Allow: /experiment/
Allow: /overview/
Allow: /search/

# 允許爬取實驗頁面
Allow: /experiment/ainsworth-strange-situation
Allow: /experiment/piaget-cognitive-development
Allow: /experiment/zimbardo-prison
Allow: /experiment/skinner-box
Allow: /experiment/latane-bystander-effect
Allow: /experiment/asch-conformity

# 允許爬取旅遊頁面
Allow: /travel/bangkok

# Sitemap 位置
Sitemap: ${baseUrl}/sitemap_index.xml
`
  
  return robotsContent
}) 