import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store'
import './plugins/antd'
import './assets/style.less'
import './assets/reset.less'
import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

Vue.config.productionTip = false

Vue.filter('formatTime',(value)=>{
  dayjs.extend(utc);
  dayjs.extend(tz);
  return dayjs(value).tz('Asia/Shanghai').format('YYYY/MM/DD HH:mm:ss');
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
