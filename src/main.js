import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import setaxios from './setaxios'
import 'amfe-flexible'
setaxios()

// import { Style,Slide } from 'cube-ui'

// Vue.use(Slide)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // 没登录则跳转到登录界面
//   if (
//     !sessionStorage.getItem('auid') &&
//     (to.path !== '/login' &&
//       to.path !== '/loginSite')
//   ) {
//     next({
//       path: '/login'
//     })
//     // debugger  判断是否登录
//   } else {
//     next({
//       path: '/botnav'
//     })
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
