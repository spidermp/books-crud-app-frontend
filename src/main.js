import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

console.log('API Base URL:', process.env.VUE_APP_API_BASE_URL);


createApp(App).use(router).mount('#app')