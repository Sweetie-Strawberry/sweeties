import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//导入Element-plus相关内容
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app=createApp(App);
app.use(router);
app.use(ElementPlus);

app.mount("#app");

