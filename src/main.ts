import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'
import VueToastify from 'vue-toastify'
import 'vue-toastify/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueToastify)
app.use(VueLazyload)

app.mount('#app')
