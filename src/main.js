import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './assets/index.css'
import 'element-plus/dist/index.css'
import { store } from '@/store/index.js'

library.add(fas)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
