<template>
  <div class="login">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler">
    </cube-form>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit('settoken',localStorage.getItem('token'))
    // console.log(this.$store.state.token)
    if(this.$store.state.token){
      this.$router.push({path:'/botnav/index'});
    }else{
      // this.$router.push({path:'/login'});
    }
  },
  data(){
    return{
      model:{
        username:'',
        password:'',
      },
      schema:{
        fields:[
          /**
           * 用户名配置
           */
          {
            type:'input',
            modelKey:'username',
            label:'用户名',
            props:{
              placeholder:'请输入用户名',
            },
            rules:{
              required:true,
              type:'string',
              min:3,
              max:15,
            },
            trigger:'blur',
            messages: {
              required:'用户名不能为空',
              min:'用户名不能少于3个字符',
              max:'用户名不能大于15个字符'
            }
          },
          /**
           * 密码配置
           */
          {
              type:'input',
              modelKey:'password',
              label:'密码',
              props:{
                  placeholder:'请输入密码',
                  type:'password',
                  eye:{
                      open:false,
                  }
              },
              rules:{
                  required:true,
              },
              trigger:'blur',
          },
          {
              type:'submit',
              label:'登录',
          }
        ]
      }
    }
  },
  methods: {
      async submitHandler(e){
          e.preventDefault();
          try {
            const result = await this.$http.get('/api/login',{params:this.model})
            if(result.code == '0'){
              this.$store.commit('settoken',result.token)
              window.localStorage.setItem('token',result.token)
              // this.$router.push({path:'/botnav/index'});
              if(this.$route.query.redirect){
                this.$router.push({path:this.$route.query.redirect});
              }else{
                this.$router.push({path:'/botnav/index'});
              }
            }else{
              alert(result.message)
            }
            // console.log(result.token)
          } catch (err) {
            console.log(err)
          }
          // this.$http.get('/api/login',{
          //   params:this.model
          // }).then(res=>{
          //   console.log(res.message)
          // }).catch(err=>{
          //   console.log(err)
          // })
          // console.log('我注册了')
      }
  },
}
</script>
