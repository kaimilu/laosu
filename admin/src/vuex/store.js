/*  header-comment
/*  file   : store
/*  author : loasu
/*  date   : 2017-6-2 9:21:2
/*  last   : 2017-6-2 9:29:19
*/

import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  strict: debug
})
