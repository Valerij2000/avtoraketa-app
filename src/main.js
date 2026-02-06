import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from "./i18n";

import naive from 'naive-ui'

const app = createApp(App)

const head = createHead();

app.use(createPinia())
app.use(head)
app.use(router)
app.use(naive)
app.use(i18n)

app.mount('#app')
