<template>
  <div class="markdown-container">
    <!-- 显示 Markdown 文件解析后的内容 -->
    <div v-html="parsedMarkdown" class="markdown-content card"></div>
    <!-- 加载状态提示 -->
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error card">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

// 创建 markdown-it 实例
const md = new MarkdownIt();
// 获取路由信息
const route = useRoute();
// 从路由查询参数中获取 mdUrl
const mdUrl = ref(route.query.mdUrl);
// 存储解析后的 Markdown 内容
const parsedMarkdown = ref('');
// 加载状态
const isLoading = ref(true);
// 错误信息
const errorMessage = ref('');

onMounted(async () => {
  if (mdUrl.value) {
    try {
      // 发送请求获取 Markdown 文件内容
      const response = await axios.get(mdUrl.value);
      const markdownContent = response.data;
      // 使用 markdown-it 解析 Markdown 内容为 HTML
      parsedMarkdown.value = md.render(markdownContent);

      nextTick(() => {
        // 代码高亮
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      });
    } catch (error) {
      // 处理请求错误
      errorMessage.value = 'Failed to load Markdown file: ' + error.message;
    } finally {
      // 无论请求成功还是失败，都结束加载状态
      isLoading.value = false;
    }
  } else {
    // 如果没有提供 mdUrl，显示错误信息
    errorMessage.value = 'No mdUrl provided in the query parameters.';
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* 全局样式 */
body {
  background-color: #f5f5f5;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}

.markdown-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

/* 卡片样式 */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-3px);
}

.markdown-content {
  line-height: 1.7;
  color: #333333;
  word-wrap: break-word; /* 允许长单词换行 */
  overflow-wrap: break-word; /* 同 word-wrap，为了兼容性 */
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  color: #222222;
  margin-top: 1.8em;
  margin-bottom: 0.7em;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.3em;
}

.markdown-content p {
  margin-bottom: 1.2em;
}

.markdown-content pre {
  background-color: #282c34;
  padding: 1.2em;
  border-radius: 6px;
  overflow-x: auto; /* 水平滚动 */
  font-size: 0.9em;
  line-height: 1.5;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 2em;
  font-family: 'Consolas', monospace; /* 优化代码字体 */
}

.markdown-content pre::before {
  content: 'Code';
  position: absolute;
  top: -1.5em;
  left: 0;
  background-color: #282c34;
  color: #abb2bf;
  padding: 0.2em 0.5em;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.markdown-content code {
  font-family: 'Consolas', monospace; /* 优化代码字体 */
  color: #abb2bf;
  white-space: pre-wrap; /* 保留换行符，同时允许换行 */
  word-wrap: break-word; /* 允许长单词换行 */
  overflow-wrap: break-word; /* 同 word-wrap，为了兼容性 */
}

/* 滚动条样式 */
.markdown-content pre::-webkit-scrollbar {
  height: 8px;
}

.markdown-content pre::-webkit-scrollbar-track {
  background: #282c34;
}

.markdown-content pre::-webkit-scrollbar-thumb {
  background: #61afef;
  border-radius: 4px;
}

.markdown-content pre::-webkit-scrollbar-thumb:hover {
  background: #56b6c2;
}

/* 加载状态样式 */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007BFF;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 错误提示样式 */
.error {
  color: #dc3545;
  text-align: center;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 600px) {
 .markdown-container {
    padding: 20px 10px;
  }

 .card {
    padding: 20px;
  }
}
</style>