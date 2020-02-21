import axios from 'axios'
import store from './store'
import router from './router'

export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )
    //每次的请求有返回的，都先经过这个拦截器
    axios.interceptors.response.use(
        response=>{
            if(response.status == 200){
                const data = response.data
                if(data.code == -1){
                    //登录过期,需要重新登录
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到登录页面
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}