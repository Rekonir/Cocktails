import { createApp } from 'vue'
import './assets/styles/main.scss'
import {createPinia} from 'pinia'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

