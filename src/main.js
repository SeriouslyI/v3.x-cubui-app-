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

//路由守卫
router.beforeEach((to, from, next) => {
  // 无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path: '/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
