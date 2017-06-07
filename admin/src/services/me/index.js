/*  header-comment
/*  file   : index
/*  author : loasu
/*  date   : 2017-6-3 9:22:57
/*  last   : 2017-6-3 9:24:27
*/
import api from '../index'
export default {
  getAboutMe() {
    return api.get('me')
  },
  modifyAboutMe(content) {
    return api.patch('me', {
      content
    })
  }
}
