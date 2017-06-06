import Vue from 'vue'
import Router from 'vue-router'

/**
 * 载入组件。 @：项目根路径
 */
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
