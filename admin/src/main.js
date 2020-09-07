import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/normalize.css'
import VueParticles from "vue-particles";
import http from './utils/http'

Vue.prototype.$http = http
Vue.use(VueParticles);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
