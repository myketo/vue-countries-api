import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from 'vue3-click-away'
import router from './router'

const app = createApp(App)

app.use(VueClickAway)
app.use(router)
app.config.globalProperties.$restCountriesUrl = 'https://restcountries.com/v3.1'

app.mount('#app')