  import Vue from 'vue'
  import Router from 'vue-router'




  /**
   * 载入组件。 @：项目根路径
   */
  // 首页
  import Index from '@/components/Index/index'

  // passport登录
  import Login from '@/components/Login/index'


  Vue.use(Router)
  Vue.config.debug = true

  // const routes = [{
  //   path: '/',
  //   component: Login,
  //   children: [{
  //     path: '/',
  //     component: Login
  //   }, {
  //     path: 'login',
  //     name: 'login',
  //     component: Login
  //   }]
  // }]

  const routes = [{
      path: '/',
      name: 'homePage',
      component: Index
    }, {
      path: '/passport',
      name: 'passort',
      component: Login,
      authPage: true
    }, // catch all redirect
    {
      path: '*',
      redirect: '/'
    }
  ]



  export default new Router({
    routes
  })
