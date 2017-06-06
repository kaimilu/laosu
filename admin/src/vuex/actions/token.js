/*  header-comment
/*  file   : token
/*  author : loasu
/*  date   : 2017-6-2 9:52:42
/*  last   : 2017-6-2 9:56:22
*/
import * as types from '../mutation_types'
import service from '../../services/login/index'
import {
  router
} from '../../router/index'

export function createrToken(store, username, password) {
  return service.createrToken(username, password).then(res => {
    if (res.success) {
      store.dispatch(types.TOKEN_CREATE, res.data.token);
      this.$router.replace('posts')
    }
  })
}
