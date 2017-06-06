/*  header-comment
/*  file   : index
/*  author : loasu
/*  date   : 2017-6-2 9:57:22
/*  last   : 2017-6-2 9:58:34
*/

import api from '../index.js'
export default {
  createToken(username, password) {
    return api.post('tokens', {
      username,
      password
    })
  }
}
