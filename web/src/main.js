import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'


import '../src/reset.scss'
import '../src/sty.scss'
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
