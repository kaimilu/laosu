/*  header-comment
/*  file   : token
/*  author : loasu
/*  date   : 2017-6-2 14:11:35
/*  last   : 2017-6-2 14:13:38
*/
/**
 * 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
 * 每个模块拥有自己的 state、mutation、action、getter、
 * 甚至是嵌套子模块——从上至下进行同样方式的分割：
 */
import {
  TOKEN_CREATE,
  TOKEN_DELETE
} from '../mutation_types'

const state = {
  token: sessionStorage.getItem('token')
}

const mutations = {
  [TOKEN_CREATE](state, token) {
    state.token = token;
    sessionStorage.setItem('token', token);
  },
  [TOKEN_DELETE](state) {
    sessionStorage.removeItem('token')
    state.token = null;
  }
}
export default {
  state,
  mutations
}
