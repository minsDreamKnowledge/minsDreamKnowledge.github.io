<template>
  <div class="travel-guide-page">
    <!-- 导航组件 -->
    <!-- <AppNavigation /> -->

    <!-- 英雄區 -->
    <section class="hero" data-aos="fade-down">
      <div class="hero-background">
        <div class="floating-elements">
          <div class="floating-element" v-for="n in 8" :key="n">
            {{ getRandomEmoji() }}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-emoji">🌍</span>
            <span class="title-text">
              <span class="title-line">旅遊指南目錄</span>
              <span class="title-subtitle">探索全球熱門旅遊目的地</span>
            </span>
          </h1>
          <p class="hero-description">
            精心整理的 {{ totalDestinations }} 個熱門旅遊目的地完整指南，
            包含景點推薦、美食攻略、最佳旅遊時間等實用資訊
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ totalDestinations }}</span>
              <span class="stat-label">個目的地</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ continentCount }}</span>
              <span class="stat-label">個大洲</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ filteredDestinations.length }}</span>
              <span class="stat-label">符合條件</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要内容 -->
    <main class="main-content">
      <div class="container">
        <!-- 过滤器 -->
        <TravelGuideFilter
          v-model="filters"
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <!-- 结果统计 -->
        <div class="results-header" data-aos="fade-up" data-aos-delay="300">
          <div class="results-info">
            <h2 class="results-title">
              <i class="fas fa-map-marked-alt"></i>
              旅遊目的地
              <span class="results-count"
                >({{ filteredDestinations.length }})</span
              >
            </h2>
            <p class="results-subtitle" v-if="hasActiveFilters">
              根據您設定的篩選條件顯示結果
            </p>
          </div>
          <div class="view-options">
            <button
              :class="['view-btn', { active: viewMode === 'grid' }]"
              @click="viewMode = 'grid'"
              aria-label="網格視圖"
            >
              <i class="fas fa-th"></i>
            </button>
            <button
              :class="['view-btn', { active: viewMode === 'list' }]"
              @click="viewMode = 'list'"
              aria-label="列表視圖"
            >
              <i class="fas fa-list"></i>
            </button>
          </div>
        </div>

        <!-- 無結果提示 -->
        <div
          v-if="filteredDestinations.length === 0"
          class="no-results"
          data-aos="fade-up"
        >
          <div class="no-results-content">
            <div class="no-results-icon">🔍</div>
            <h3 class="no-results-title">沒有找到符合條件的目的地</h3>
            <p class="no-results-text">請試著調整搜尋條件或清除篩選器</p>
            <button class="clear-filters-btn" @click="clearAllFilters">
              <i class="fas fa-undo"></i>
              清除所有篩選條件
            </button>
          </div>
        </div>

        <!-- 旅游指南卡片网格 -->
        <div
          v-else
          :class="['destinations-grid', { 'list-view': viewMode === 'list' }]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <TravelGuideCard
            v-for="(destination, index) in paginatedDestinations"
            :key="destination.id"
            :destination="destination"
            :delay="index * 100"
            @view-guide="handleViewGuide"
            @favorite="handleFavorite"
            @share="handleShare"
          />
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="pagination" data-aos="fade-up">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="currentPage = Math.max(1, currentPage - 1)"
          >
            <i class="fas fa-chevron-left"></i>
            上一頁
          </button>
          <div class="page-numbers">
            <button
              v-for="page in visiblePages"
              :key="page"
              :class="['page-number', { active: page === currentPage }]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
          >
            下一頁
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- 回到顶部按钮 -->
        <button
          v-show="showBackToTop"
          class="back-to-top"
          @click="scrollToTop"
          aria-label="回到頂部"
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </main>

    <!-- 頁腳 -->
    <AppFooter />
  </div>
</template>

<script setup>
// 导入组件
import TravelGuideFilter from "~/components/TravelGuideFilter.vue";
import TravelGuideCard from "~/components/TravelGuideCard.vue";
// import AppNavigation from "~/components/AppNavigation.vue";
import AppFooter from "~/components/AppFooter.vue";

// 頁面元數據
useHead({
  title: "旅遊指南目錄 | 全球熱門旅遊目的地完整攻略",
  meta: [
    {
      name: "description",
      content:
        "探索全球30個熱門旅遊目的地的完整指南，包含日本、韓國、泰國、法國、義大利等國家的景點推薦、美食攻略、最佳旅遊時間等實用資訊。",
    },
    {
      name: "keywords",
      content:
        "旅遊指南,旅遊攻略,出國旅遊,景點推薦,美食攻略,日本旅遊,歐洲旅遊,亞洲旅遊",
    },
  ],
});

// 響應式數據
const filters = ref({
  search: "",
  continent: "",
  season: "",
  sortBy: "default",
});

const viewMode = ref("grid");
const currentPage = ref(1);
const itemsPerPage = ref(12);
const showBackToTop = ref(false);

// 旅遊目的地數據（簡化版）
const destinations = ref([
  {
    id: 1,
    name: "東京",
    country: "日本",
    flag: "🇯🇵",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "春季櫻花、秋季紅葉",
    climate: "溫帶季風氣候",
    attractions: ["淺草寺", "晴空塔", "澀谷", "新宿", "銀座"],
    foods: ["壽司", "拉麵", "天婦羅", "和牛", "抹茶"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 2,
    name: "首爾",
    country: "韓國",
    flag: "🇰🇷",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "春季櫻花、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: ["景福宮", "N首爾塔", "明洞", "東大門", "弘大"],
    foods: ["韓式烤肉", "炸雞", "拌飯", "泡菜", "韓式火鍋"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 3,
    name: "曼谷",
    country: "泰國",
    flag: "🇹🇭",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "涼季最佳旅遊時機",
    climate: "熱帶季風氣候",
    attractions: ["大皇宮", "臥佛寺", "鄭王廟", "水上市場", "考山路"],
    foods: ["泰式炒河粉", "冬陰功湯", "綠咖哩", "芒果糯米飯", "椰子汁"],
    image: "",
    popular: true,
    season: "winter",
    
  },
  {
    id: 4,
    name: "新加坡",
    country: "新加坡",
    flag: "🇸🇬",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "全年適宜旅遊",
    climate: "熱帶雨林氣候",
    attractions: ["濱海灣金沙", "濱海灣花園", "聖淘沙", "牛車水", "小印度"],
    foods: ["海南雞飯", "辣椒螃蟹", "肉骨茶", "叻沙", "榴槤"],
    image: "",
    popular: true,
    season: "",
  },
  {
    id: 5,
    name: "香港",
    country: "香港",
    flag: "🇭🇰",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "秋季最佳旅遊時機",
    climate: "亞熱帶海洋性氣候",
    attractions: [
      "維多利亞港",
      "太平山頂",
      "星光大道",
      "迪士尼樂園",
      "天壇大佛",
    ],
    foods: ["港式茶餐廳", "點心", "燒鴨", "港式奶茶", "蛋撻"],
    image: "",
    popular: true,
    season: "autumn",
  },
  {
    id: 7,
    name: "羅馬",
    country: "義大利",
    flag: "🇮🇹",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季、秋季最佳",
    climate: "地中海氣候",
    attractions: ["羅馬競技場", "梵蒂岡", "許願池", "西班牙階梯", "萬神殿"],
    foods: ["義大利麵", "披薩", "義式冰淇淋", "提拉米蘇", "義式咖啡"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 8,
    name: "紐約",
    country: "美國",
    flag: "🇺🇸",
    continent: "america",
    continentName: "美洲",
    bestTime: "春季櫻花、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: [
      "自由女神像",
      "時代廣場",
      "中央公園",
      "布魯克林大橋",
      "大都會博物館",
    ],
    foods: ["美式漢堡", "熱狗", "百吉餅", "牛排", "起司蛋糕"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 9,
    name: "雪梨",
    country: "澳洲",
    flag: "🇦🇺",
    continent: "oceania",
    continentName: "大洋洲",
    bestTime: "春季野花、秋季戶外活動",
    climate: "亞熱帶海洋性氣候",
    attractions: ["雪梨歌劇院", "邦迪海灘", "達令港", "雪梨港大橋", "藍山"],
    foods: ["澳洲海鮮", "肉派", "維吉麥醬", "袋鼠肉", "澳洲牛肉"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 10,
    name: "溫哥華",
    country: "加拿大",
    flag: "🇨🇦",
    continent: "america",
    continentName: "美洲",
    bestTime: "夏季戶外活動、秋季楓葉",
    climate: "溫帶海洋性氣候",
    attractions: [
      "史丹利公園",
      "卡皮拉諾吊橋",
      "格蘭維爾島",
      "溫哥華港",
      "伊麗莎白女王公園",
    ],
    foods: ["楓糖漿", "肉汁起司薯條", "海鮮", "鮭魚", "蔓越莓"],
    image: "",
    popular: false,
    season: "summer",
  },
  {
    id: 11,
    name: "巴塞隆納",
    country: "西班牙",
    flag: "🇪🇸",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季、秋季最佳",
    climate: "地中海氣候",
    attractions: ["聖家堂", "米拉之家", "桂爾公園", "哥德區", "蘭布拉大道"],
    foods: [
      "海鮮飯",
      "西班牙小菜",
      "伊比利亞火腿",
      "加泰羅尼亞燉菜",
      "桑格利亞酒",
    ],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 12,
    name: "阿姆斯特丹",
    country: "荷蘭",
    flag: "🇳🇱",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季鬱金香花季、夏季戶外活動",
    climate: "溫帶海洋性氣候",
    attractions: ["梵高博物館", "運河區", "庫肯霍夫花園", "安妮之家", "約旦區"],
    foods: ["荷蘭起司", "荷蘭鬆餅", "荷蘭鯡魚", "豌豆湯", "荷蘭啤酒"],
    image: "",
    popular: false,
    season: "spring",
  },
  {
    id: 13,
    name: "蘇黎世",
    country: "瑞士",
    flag: "🇨🇭",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "夏季戶外活動、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: [
      "蘇黎世湖",
      "班霍夫大街",
      "烏特利山",
      "舊城區",
      "瑞士國家博物館",
    ],
    foods: ["瑞士起司火鍋", "瑞士巧克力", "瑞士香腸", "羅斯蒂", "瑞士白酒"],
    image: "",
    popular: false,
    season: "summer",
  },
  {
    id: 14,
    name: "斯德哥爾摩",
    country: "瑞典",
    flag: "🇸🇪",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "夏季戶外活動、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: [
      "瓦薩博物館",
      "斯德哥爾摩王宮",
      "諾貝爾博物館",
      "舊城區",
      "市政廳",
    ],
    foods: ["瑞典肉丸", "瑞典三明治", "瑞典肉桂捲", "醃鯡魚", "瑞典伏特加"],
    image: "",
    popular: false,
    season: "summer",
  },
  {
    id: 15,
    name: "倫敦",
    country: "英國",
    flag: "🇬🇧",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季櫻花、秋季楓葉",
    climate: "溫帶海洋性氣候",
    attractions: ["大笨鐘", "倫敦塔", "白金漢宮", "大英博物館", "倫敦眼"],
    foods: ["英式早餐", "炸魚薯條", "英式下午茶", "牧羊人派", "英式啤酒"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 16,
    name: "柏林",
    country: "德國",
    flag: "🇩🇪",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季櫻花、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: [
      "布蘭登堡門",
      "柏林圍牆紀念館",
      "博物館島",
      "查理檢查哨",
      "波茨坦廣場",
    ],
    foods: ["德國香腸", "德國豬腳", "德國啤酒", "椒鹽餅", "德國酸菜"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 17,
    name: "維也納",
    country: "奧地利",
    flag: "🇦🇹",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季櫻花、秋季文化活動",
    climate: "溫帶大陸性氣候",
    attractions: [
      "美泉宮",
      "霍夫堡宮",
      "聖史蒂芬大教堂",
      "維也納國家歌劇院",
      "中央咖啡館",
    ],
    foods: ["維也納炸豬排", "薩赫蛋糕", "維也納咖啡", "蘋果捲", "維也納香腸"],
    image: "",
    popular: false,
    season: "spring",
  },
  {
    id: 18,
    name: "布拉格",
    country: "捷克",
    flag: "🇨🇿",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季櫻花、秋季楓葉",
    climate: "溫帶大陸性氣候",
    attractions: ["布拉格城堡", "查理大橋", "舊城廣場", "天文鐘", "黃金小巷"],
    foods: ["捷克烤鴨", "捷克香腸", "捷克啤酒", "烤豬膝", "蜂蜜蛋糕"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 19,
    name: "雅典",
    country: "希臘",
    flag: "🇬🇷",
    continent: "europe",
    continentName: "歐洲",
    bestTime: "春季野花、秋季文化活動",
    climate: "地中海氣候",
    attractions: [
      "衛城",
      "古代市集",
      "宙斯神殿",
      "國家考古博物館",
      "普拉卡老城",
    ],
    foods: ["希臘沙拉", "穆薩卡", "蘇夫拉基", "希臘優格", "費達起司"],
    image: "",
    popular: false,
    season: "spring",
  },
  {
    id: 20,
    name: "伊斯坦堡",
    country: "土耳其",
    flag: "🇹🇷",
    continent: "europe",
    continentName: "歐亞交會",
    bestTime: "春季鬱金香、秋季文化活動",
    climate: "地中海氣候",
    attractions: [
      "聖索菲亞大教堂",
      "藍色清真寺",
      "托普卡帕宮",
      "大巴扎",
      "博斯普魯斯海峽",
    ],
    foods: ["土耳其烤肉", "土耳其披薩", "土耳其軟糖", "土耳其咖啡", "烤肉串"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 21,
    name: "開羅",
    country: "埃及",
    flag: "🇪🇬",
    continent: "africa",
    continentName: "非洲",
    bestTime: "春季、冬季最佳",
    climate: "熱帶沙漠氣候",
    attractions: [
      "吉薩金字塔",
      "埃及博物館",
      "薩拉丁城堡",
      "哈利利市場",
      "尼羅河",
    ],
    foods: ["庫沙裡", "沙威瑪", "富爾", "塔米亞", "埃及茶"],
    image: "",
    popular: true,
    season: "winter",
  },
  {
    id: 22,
    name: "新德里",
    country: "印度",
    flag: "🇮🇳",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "春季、冬季最佳",
    climate: "熱帶季風氣候",
    attractions: ["紅堡", "賈瑪清真寺", "胡馬雍陵", "印度門", "蓮花寺"],
    foods: ["咖哩", "坦都裡烤雞", "印度煎餅", "拉西", "印度奶茶"],
    image: "",
    popular: false,
    season: "winter",
  },
  {
    id: 23,
    name: "吉隆坡",
    country: "馬來西亞",
    flag: "🇲🇾",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "全年適宜，避開雨季",
    climate: "熱帶雨林氣候",
    attractions: ["雙子星大樓", "吉隆坡塔", "國家清真寺", "茨廠街", "獨立廣場"],
    foods: ["叻沙", "沙爹", "椰漿飯", "肉骨茶", "榴槤"],
    image: "",
    popular: false,
    season: "",
  },
  {
    id: 24,
    name: "馬尼拉",
    country: "菲律賓",
    flag: "🇵🇭",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "冬季、春季最佳",
    climate: "熱帶季風氣候",
    attractions: [
      "聖地亞哥堡",
      "聖奧古斯丁教堂",
      "黎剎公園",
      "馬尼拉灣",
      "中國城",
    ],
    foods: ["阿斗波", "烤乳豬", "辛尼岡", "菲律賓炒飯", "芒果"],
    image: "",
    popular: false,
    season: "winter",
  },
  {
    id: 25,
    name: "裡約熱內盧",
    country: "巴西",
    flag: "🇧🇷",
    continent: "america",
    continentName: "南美洲",
    bestTime: "春季、秋季最佳",
    climate: "熱帶海洋性氣候",
    attractions: [
      "基督像",
      "糖麵包山",
      "科帕卡巴納海灘",
      "嘉年華會",
      "聖塔特雷莎",
    ],
    foods: ["巴西烤肉", "費喬達", "莫凱卡", "巴西莓", "卡伊匹林亞酒"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 26,
    name: "大阪",
    country: "日本",
    flag: "🇯🇵",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "春季櫻花、秋季紅葉",
    climate: "溫帶季風氣候",
    attractions: ["大阪城", "道頓堀", "環球影城", "新世界", "住吉大社"],
    foods: ["大阪燒", "章魚燒", "串炸", "拉麵", "和牛"],
    image: "",
    popular: true,
    season: "spring",
  },
  {
    id: 27,
    name: "釜山",
    country: "韓國",
    flag: "🇰🇷",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "春季櫻花、夏季海灘、秋季楓葉",
    climate: "溫帶季風氣候",
    attractions: [
      "海雲台海水浴場",
      "甘川洞文化村",
      "釜山塔",
      "札嘎其市場",
      "太宗台",
    ],
    foods: ["海鮮", "豬肉湯飯", "魚糕", "韓式炸雞", "燒酒"],
    image: "",
    popular: false,
    season: "spring",
  },
  {
    id: 28,
    name: "胡志明市",
    country: "越南",
    flag: "🇻🇳",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "乾季、涼季最佳",
    climate: "熱帶季風氣候",
    attractions: [
      "統一宮",
      "戰爭遺跡博物館",
      "西貢聖母大教堂",
      "濱城市場",
      "湄公河三角洲",
    ],
    foods: ["越南河粉", "春捲", "越南咖啡", "法式麵包", "越式酸湯"],
    image: "",
    popular: false,
    season: "winter",
  },
  {
    id: 29,
    name: "清邁",
    country: "泰國",
    flag: "🇹🇭",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "涼季最佳旅遊時機",
    climate: "熱帶季風氣候",
    attractions: ["雙龍寺", "清邁古城", "週日市場", "素帖山", "大象訓練營"],
    foods: ["清邁咖哩麵", "泰北烤肉", "芒果糯米飯", "冬陰功湯", "泰式奶茶"],
    image: "",
    popular: false,
    season: "winter",
  },
  {
    id: 30,
    name: "巴厘島",
    country: "印尼",
    flag: "🇮🇩",
    continent: "asia",
    continentName: "亞洲",
    bestTime: "乾季最佳旅遊時機",
    climate: "熱帶海洋性氣候",
    attractions: [
      "海廟",
      "烏布皇宮",
      "德格拉朗梯田",
      "庫塔海灘",
      "聖猴森林保護區",
    ],
    foods: ["巴厘島烤豬肉", "印尼炒飯", "巴厘島沙爹", "椰子飯", "巴厘島咖啡"],
    image: "",
    popular: true,
    season: "winter",
  },
]);

// 計算屬性
const totalDestinations = computed(() => destinations.value.length);
const continentCount = computed(() => {
  const continents = new Set(destinations.value.map((d) => d.continent));
  return continents.size;
});

const hasActiveFilters = computed(() => {
  return (
    filters.value.search ||
    filters.value.continent ||
    filters.value.season ||
    filters.value.sortBy !== "default"
  );
});

const filteredDestinations = computed(() => {
  let result = [...destinations.value];

  // 搜尋過濾
  if (filters.value.search) {
    const searchTerm = filters.value.search.toLowerCase();
    result = result.filter(
      (destination) =>
        destination.name.toLowerCase().includes(searchTerm) ||
        destination.country.toLowerCase().includes(searchTerm)
    );
  }

  // 地區過濾
  if (filters.value.continent) {
    result = result.filter(
      (destination) => destination.continent === filters.value.continent
    );
  }

  // 季節過濾
  if (filters.value.season) {
    result = result.filter(
      (destination) => destination.season === filters.value.season
    );
  }

  // 排序
  switch (filters.value.sortBy) {
    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "continent":
      result.sort((a, b) => a.continentName.localeCompare(b.continentName));
      break;
    case "popular":
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      break;
  }

  return result;
});

const totalPages = computed(() =>
  Math.ceil(filteredDestinations.value.length / itemsPerPage.value)
);

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredDestinations.value.slice(start, end);
});

const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  const maxVisible = 5;

  if (total <= maxVisible) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    const start = Math.max(1, current - 2);
    const end = Math.min(total, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }

  return pages;
});

// 方法
const getRandomEmoji = () => {
  const emojis = ["✈️", "🌟", "🗺️", "📍", "🏛️", "🎭", "🍜", "🏖️"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const clearAllFilters = () => {
  filters.value = {
    search: "",
    continent: "",
    season: "",
    sortBy: "default",
  };
  currentPage.value = 1;
};

const handleViewGuide = (destination) => {
  console.log("查看指南:", destination.name);
};

const handleFavorite = (destination) => {
  console.log("收藏:", destination.name);
};

const handleShare = (destination) => {
  console.log("分享:", destination.name);
  if (navigator.share) {
    navigator.share({
      title: `${destination.name}旅遊指南`,
      text: `探索${destination.name}的精彩旅程！`,
      url: window.location.href,
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 監聽滾動
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

// 監聽過濾器變化，重置頁碼
watch(
  filters,
  () => {
    currentPage.value = 1;
  },
  { deep: true }
);

// 監聽頁碼變化，滾動到搜尋結果頂部
watch(currentPage, () => {
  nextTick(() => {
    const resultsSection = document.querySelector('.results-header');
    if (resultsSection) {
      resultsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// 生命週期
onMounted(() => {
  // 初始化AOS動畫
  import("aos").then((AOS) => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  });

  // 監聽滾動
  window.addEventListener("scroll", handleScroll);

  // 設定動畫延遲
  nextTick(() => {
    const cards = document.querySelectorAll(".travel-guide-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate-in");
      }, index * 100);
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* 頁面基礎樣式*/
.travel-guide-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* 英雄區域 */
.hero {
  position: relative;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.floating-element:nth-child(2) {
  top: 20%;
  left: 80%;
  animation-delay: 1s;
}
.floating-element:nth-child(3) {
  top: 30%;
  left: 60%;
  animation-delay: 2s;
}
.floating-element:nth-child(4) {
  top: 40%;
  left: 20%;
  animation-delay: 3s;
}
.floating-element:nth-child(5) {
  top: 50%;
  left: 90%;
  animation-delay: 4s;
}
.floating-element:nth-child(6) {
  top: 60%;
  left: 40%;
  animation-delay: 5s;
}
.floating-element:nth-child(7) {
  top: 70%;
  left: 70%;
  animation-delay: 0.5s;
}
.floating-element:nth-child(8) {
  top: 80%;
  left: 30%;
  animation-delay: 1.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.title-emoji {
  font-size: 4rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.title-text {
  text-align: left;
}

.title-line {
  display: block;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.title-subtitle {
  display: block;
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 主要内容 */
.main-content {
  padding: 4rem 0;
}

/* 结果标题 */
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.results-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.results-title i {
  color: #667eea;
}

.results-count {
  color: #667eea;
  font-size: 1rem;
}

.results-subtitle {
  color: #718096;
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
}

.view-options {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  color: #718096;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-btn.active,
.view-btn:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* 无结果提示 */
.no-results {
  text-align: center;
  padding: 4rem 0;
}

.no-results-content {
  max-width: 400px;
  margin: 0 auto;
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.no-results-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.no-results-text {
  color: #718096;
  margin-bottom: 2rem;
}

.clear-filters-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.clear-filters-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* 目的地网格 */
.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.destinations-grid.list-view {
  grid-template-columns: 1fr;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.page-btn {
  background: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-btn:hover:not(:disabled) {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  background: white;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.page-number.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: #667eea;
}

.page-number:hover:not(.active) {
  background: #f7fafc;
  border-color: #cbd5e0;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .title-line {
    font-size: 2.5rem;
  }

  .title-subtitle {
    font-size: 1rem;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .results-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .pagination {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .page-numbers {
    order: -1;
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .title-emoji {
    font-size: 3rem;
  }

  .title-line {
    font-size: 2rem;
  }

  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}
</style> 