# 曼谷旅遊頁面圖片目錄

這個目錄用於存放曼谷旅遊頁面的相關圖片。

## 建議的圖片結構

### 景點圖片
- `grand-palace.jpg` - 大皇宮
- `wat-pho.jpg` - 臥佛寺
- `wat-arun.jpg` - 鄭王廟
- `khao-san-road.jpg` - 考山路
- `siam-square.jpg` - 暹羅廣場

### 美食圖片
- `pad-thai.jpg` - 泰式炒河粉
- `tom-yum.jpg` - 冬陰功湯
- `green-curry.jpg` - 青咖哩
- `mango-sticky-rice.jpg` - 芒果糯米飯
- `thai-milk-tea.jpg` - 泰式奶茶

### 文化圖片
- `thai-massage.jpg` - 泰式按摩
- `floating-market.jpg` - 水上市場
- `temple-culture.jpg` - 寺廟文化
- `night-market.jpg` - 夜市文化

### 背景圖片
- `bangkok-skyline.jpg` - 曼谷天際線
- `hero-background.jpg` - 英雄區塊背景

## 圖片規格建議

- **景點圖片**: 800x600px, JPG格式
- **美食圖片**: 600x400px, JPG格式
- **文化圖片**: 600x400px, JPG格式
- **背景圖片**: 1920x1080px, JPG格式

## 使用方式

在 Vue 組件中，可以使用以下方式引用圖片：

```vue
<img src="/bangkok/images/grand-palace.jpg" alt="大皇宮" />
```

或者使用 Nuxt 的圖片優化：

```vue
<NuxtImg src="/bangkok/images/grand-palace.jpg" alt="大皇宮" />
``` 