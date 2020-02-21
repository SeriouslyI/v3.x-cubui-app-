module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        let userpoor = [
          {username:'admin',password:'123456'},
          {username:'liang',password:'123456'}
        ]

        app.get('/api/register',(req,res)=>{
          const {username,password} = req.query
          const userlength = userpoor.filter(v=>v.username == username).length
          if(userlength>0){
            res.json({
              success:false,
              message:'用户名已存在'
            })
          }else{
            res.json({
              success:true,
              message:'注册成功'
            })
          }
        })

        let tokenKey = 'lcy'
        app.get('/api/login',(req,res)=>{
          const {username,password} = req.query
          if(username == 'admin' && password == '123456'){
            res.json({
              code:0,
              message: '登录成功',
              token:tokenKey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code:1,
              message: '账号或密码错误'
            })
          }
        })
        
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            data: [
              [{
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
              ],
              [{
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
                {
                  url: '#',
                  image: '//wwc.alicdn.com/avatar/getAvatar.do?userId=2894960108&width=70&height=70&type=sns',
                  label: '分类一'
                },
              ]
            ]
          })
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}