import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/font-awesome-4.7.0/css/font-awesome.css'

// 引入全局统一的存储库
import store from './store/index.js'
Vue.prototype.$store = store;

Vue.use(VueAxios,axios)

Vue.config.productionTip = false


// 自定义过滤器
Vue.filter("suolv",function (value) {
  return value.slice(0,120) + "..."
})
Vue.filter("suolv2",function (value) {
  return value.slice(0,60) + "..."
})
Vue.filter('suolv3',function (value) {
  return value.slice(0,15) + "..."

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
