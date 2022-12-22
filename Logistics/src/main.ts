import { createApp } from 'vue'
import './front/base.sass'

import App from './App.vue'

import router from './himm/router'
import { createPinia } from 'pinia'

const app = createApp(App)

import comm from './comm'
import eos from './eos/eos'
import front from './front/front'

import persist from 'pinia-plugin-persist'
const store = createPinia(); store.use( persist )

app.use(router).use( store ).use(comm).use(eos).use(front).mount('#app')
