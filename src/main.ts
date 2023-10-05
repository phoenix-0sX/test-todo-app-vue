// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const piniaInstance = createPinia()
piniaInstance.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(piniaInstance)
app.use(router)

app.mount('#app')
