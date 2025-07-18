import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://minsdreamknowledge.github.io'
  })

  // 添加靜態頁面
  sitemap.write({
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/psychology',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/history',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/library',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/search',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/sitemap',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date()
  })

  sitemap.write({
    url: '/bangkok',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date()
  })

  // 添加實驗頁面
  const experiments = [
    'ainsworth-strange-situation',
    'asch-conformity',
    'latane-bystander-effect',
    'piaget-cognitive-development',
    'skinner-box',
    'zimbardo-prison'
  ]

  experiments.forEach(experiment => {
    sitemap.write({
      url: `/experiment/${experiment}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    })
  })

  sitemap.end()

  return streamToPromise(sitemap)
}) 