import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  // 配置项目的基础路径，根据你的仓库名进行设置
  base: '/sweeties/'
})

