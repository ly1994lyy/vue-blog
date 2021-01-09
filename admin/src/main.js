import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store'
import './plugins/antd'
import './assets/style.less'
import './assets/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
