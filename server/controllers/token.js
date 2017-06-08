"use strict"
const jwt = require('jsonwebtoken'),
  configs = require("../configs/index"),
  utils = require('../utils/index'),
  mw = require('../middlewares/index'),
  md5 = require('md5');
const cert = configs.jwt.cert;
const User = require('../models/user');
