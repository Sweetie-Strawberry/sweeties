<template>
  <div class="note-homepage">
    <!-- 头部区域 -->
    <header class="header">
      <h1 class="blog-title">我的笔记</h1>
    </header>
    <!-- 笔记列表区域 -->
    <section class="note-list-section">
      <div class="note-list-container">
        <!-- 使用 v-for 遍历 notes 数组 -->
        <div v-for="note in notes" :key="note.mdUrl" class="note-item">
          <!-- 显示每个笔记的 description 信息 -->
          <button @click="toShowNote(note.mdUrl)" class="custom-button">{{ note.description }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '../router/router';

// 存储从 JSON 文件中解析出的笔记列表
const notes = ref([]);

onMounted(async () => {
  try {
    // 获取 JSON 文件内容
    const jsonResponse = await axios.get('/note/noteListData.json');
    // 将 JSON 数据赋值给 notes
    notes.value = jsonResponse.data;
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

function toShowNote(mdUrl) {
  router.push({
    path: "/showNote",
    query: {
      "mdUrl": mdUrl
    }
  })
}
</script>

<style scoped>
/* 全局样式 */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #222, #111);
  color: #fff;
}

/* 头部样式 */
.header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  border-bottom: 3px solid #444;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.blog-title {
  font-size: 32px;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 笔记列表区域样式 */
.note-list-section {
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.note-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.note-item {
  width: 100%;
}

/* 自定义按钮样式 */
.custom-button {
  width: 100%;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(to bottom, #444, #333);
  border: none;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* 按钮悬停效果 */
.custom-button:hover {
  background: linear-gradient(to bottom, #555, #444);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

/* 按钮点击效果 */
.custom-button:active {
  transform: translateY(1px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

/* 按钮内的光影效果 */
.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: all 0.6s ease;
}

.custom-button:hover::before {
  left: 100%;
}
</style>