/*  header-comment
/*  file   : index
/*  author : loasu
/*  date   : 2017-6-2 9:50:59
/*  last   : 2017-6-2 13:57:12
*/
/**
 *  封装fetch
 */
import store from '../vuex/store'
import {
  deleteToken
} from '../vuex/actions/token'

/**
 * Promise.all 是在所有的Promise对象都执行完成之后resolve。参数是一个数组，数组的每一项都是一个Promise对象就可以
 * 参考：http://es6.ruanyifeng.com/#docs/promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch
 */
function parseResponse(response) {
  return Promise.all([response.status, response.statusText, response.json()])
}

function checkStatus([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    return data;
  } else {
    if (401 === status) {
      if ('token expired' === data.error) {
        alert('token已过期，注意内容保存，并重新登录')
      } else if ('invalid token' === data.error) {
        deleteToken(store);
      }
    }
    let error = new Error(statusText);
    error.status = status;
    error.error_message = data;
    return Promise.reject(error)
  }
}

export default {
  /**
   * Get 请求
   *
   * @param {any} url
   * @param {any} [param={}]
   * @param {any} [headers={}]
   * @param {any} [host=process.env.api]
   * @returns
   */
  get(url, param = {}, headers = {}, host = process.env.api) {
    let reqHeaders = new Headers(headers)
    reqHeaders.append('Accept', 'applications/json')
    if (null !== store.state.token.token) {
      reqHeaders.append('Authorization', 'Bearer ' + store.state.token.token)
    }
    var query = []
    Object.keys(param).forEach((item) => {
      query.push(`${item}=${encodeURIComponent(param[item])}`)
    })
    var params = query.length ? '?' + query.join('&') : ''
    url = host + url + param
    console.log(url, params)
    // 一个配置项对象，包括所有对请求的设置
    var init = {
      method: 'GET',
      headers: reqHeaders,
      credentials: "include",
      cache: 'default',
      mode: 'cors'
    }
    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  post(url, param = {}, headers = {}, host = process.env.api) {
    let reqHeaders = new Headers(headers)
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accpet', 'application/json')
    if (null !== store.state.token.token) {
      reqHeaders.append('Authorization', 'Bearea ' + store.state.token.token)
    }
    url = host + url
    var init = {
      method: 'POST',
      headers: reqHeaders,
      credentials: "include",
      mode: 'cors',
      body: JSON.stringify(param)
    }
    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  patch(url, param = {}, headers = {}, host = process.env.api) {
    let reqHeaders = new Headers(headers)
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')
    if (null !== store.state.token.token) {
      reqHeaders.append('Authorization', 'Bearer ' + store.state.token.token)
    }
    url = host + url
    var init = {
      method: 'PATCH',
      headers: reqHeaders,
      credentials: "include",
      mode: 'cors',
      body: JSON.stringify(param)
    }

    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  put(url, param = {}, headers = {}, host = process.env.api) {
    let reqHeaders = new Headers(headers)
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')
    if (null !== store.state.token.token) {
      reqHeaders.append('Authorization', 'Bearer ' + store.state.token.token)
    }
    url = host + url

    var init = {
      method: 'PUT',
      headers: reqHeaders,
      credentials: "include",
      mode: 'cors',
      body: JSON.stringify(param)
    }

    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  },
  delete(url, param = {}, headers = {}, host = process.env.api) {
    let reqHeaders = new Headers(headers)
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')
    if (null !== store.state.token.token) {
      reqHeaders.append('Authorization', 'Bearer ' + store.state.token.token)
    }
    url = host + url

    var init = {
      method: 'DELETE',
      credentials: "include",
      headers: reqHeaders,
      mode: 'cors'
    }

    return fetch(url, init)
      .then(parseResponse)
      .then(checkStatus)
  }
}
