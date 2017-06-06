/*  header-comment
/*  file   : post
/*  author : loasu
/*  date   : 2017-6-2 9:45:9
/*  last   : 2017-6-2 17:9:33
*/
/**
 * Actions ==> https://vuex.vuejs.org/zh-cn/actions.html
 *  Action 类似于 mutation，不同在于：
 *  Action 提交的是 mutation，而不是直接变更状态。
 *  Action 可以包含任意异步操作。
 */
import * as types from '../mutation_types'
import service from '../../services/posts/index'
