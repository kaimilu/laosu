// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './vuex/store'



Vue.config.productionTip = false

/**
 * vue1.x -> vue2.x router.start
 * https://cn.vuejs.org/v2/guide/migration-vue-router.html#router-start-替换
 *
 * 可安装 npm install -g vue-migration-helper 来查看vue1.x 迁移vue2.x文档
 * 执行：vue-migration-helper查看
 *
 * vuex https://vuex.vuejs.org/zh-cn/
 *
 */
// router.start(adminComponent, '#app')


// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (true !== to.authPage) {
//     if (null === store.state.token.token) {
//       redirect('login')
//     } else {
//       next()
//     }
//   } else {
//     // login
//     if (null === store.state.token.token) {
//       next()
//     } else {
//       if (undefined !== from.path) {
//         redirect(from.path)
//       } else {
//         redirect('index')
//       }
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
