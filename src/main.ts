import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VueDatePicker', Datepicker);

app.mount('#app')


