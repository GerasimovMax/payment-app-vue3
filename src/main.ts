import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { makeServer } from './server'
import './index.css'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
