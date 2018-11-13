// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import qs from 'qs'

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(axios)
Vue.use(qs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
