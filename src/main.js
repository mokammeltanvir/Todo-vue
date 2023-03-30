import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* Custom CSS Link */
import './assets/sass/style.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
