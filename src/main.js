import { createApp } from 'vue'
import App from './App.vue'

import './tailwind.css'
import 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import DataVVue3 from '@kjgl77/datav-vue3'
import router from "@/router";
import {createPinia} from "pinia";
import '@/assets/icon/iconfont.css'
import axios from "axios";
import * as echarts from 'echarts';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.config.globalProperties.$axios = axios
app.config.globalProperties.$echarts = echarts

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(DataVVue3)
app.use(createPinia())
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
