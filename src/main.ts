import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import setupPlugins  from '@/plugins';
const app= createApp(App)

app.use(setupPlugins);
app.mount('#app')
