import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$restCountriesUrl = 'https://restcountries.com/v3.1'

app.mount('#app')