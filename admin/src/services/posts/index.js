/*  header-comment
/*  file   : index
/*  author : loasu
/*  date   : 2017-6-2 17:11:42
/*  last   : 2017-6-2 17:40:36
*/
import api from '../index'
export default {
  getDraftList(tag) {
    let queryObj = undefined
    if (undefined !== tag) {
      queryObj = {
        tag
      }
    }
    return api.get('drafts', queryObj)
  },
  getDraft(id) {
    return api.get('drafts/' + id)
  },
  modifyDraftContent(id, content) {
    return api.patch('drafts/' + id, {
      content
    });
  }
}
