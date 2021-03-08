import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import banana from './components/banana.vue'


const app = createApp(App);
app.use(store).use(router).mount('#app')
app.component('banana',banana)