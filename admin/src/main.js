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
/**
 * http://blog.csdn.net/sinat_17775997/article/details/68941078
 */


router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.requiresAuth)) {

    // 非登录页面
    if (null === store.state.token.token) {
      console.log('没登录')
      next({
        path: '/passport'
      })
    } else {
      next()
    }
  } else {
    // 登录页面
    if (null === store.state.token.token) {
      // console.log('没登录')
      next()
    } else {
      if (undefined !== from.path) {
        next({
          path: from.path
        })
      } else {
        next({
          path: '/'
        })
      }
    }
  }
})



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
