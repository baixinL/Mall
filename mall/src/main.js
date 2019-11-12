// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueInfiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'
import axios from "axios"
import global_variable from './util/global_variable'


Vue.prototype.GLOBAL = global_variable

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '/static/loading-svg/loading-bubbles.svg',
  attempt: 1
})
Vue.filter("currency", currency);
Vue.use(VueInfiniteScroll)
// Vue.use(checkCookie)
//添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.log("config.url", config.url);
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
