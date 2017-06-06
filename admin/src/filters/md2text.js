/*  header-comment
/*  file   : md2text
/*  author : loasu
/*  date   : 2017-6-2 17:6:27
/*  last   : 2017-6-2 17:7:35
*/
import marked from 'marked'
import {
  trim
} from '../lib/utils'
export default function (markdown) {
  let div = document.createElement('div')
  div.innerHTML = marked.parse(markdown)
  return trim(div.innerText)
}
