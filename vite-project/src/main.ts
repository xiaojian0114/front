import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//需要使用Vue.js 3 提供的 create App（）方法创建一个 Vue.js 实例 并挂载在应用根元素上

const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
