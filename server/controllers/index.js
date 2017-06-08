"use strict"

const token = require('./token')
module.exports.init = function* (router) {
  yield token.init(router);
}
