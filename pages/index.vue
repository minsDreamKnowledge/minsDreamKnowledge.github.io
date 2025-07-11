<template>
  <div class="container">
    <h1>歡迎來到知識系統</h1>
    <p>這是一個關於記憶系統與學習機制的知識網站。</p>
    <div class="button-group">
      <NuxtLink to="/knowledge" class="btn btn-primary">
        進入知識頁面
      </NuxtLink>
      <NuxtLink to="/bangkok" class="btn btn-secondary">
        🇹🇭 曼谷旅遊規劃
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 根頁面邏輯
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 100px auto;
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #2980b9;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-secondary {
  background: transparent;
  color: #2c3e50;
  border: 2px solid #3498db;
}

.btn-secondary:hover {
  background: #3498db;
  color: white;
}
</style> 