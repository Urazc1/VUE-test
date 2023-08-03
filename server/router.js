/* eslint-disable no-undef */
let express = require('express')
let router = express.Router()
let user = require('./api/user')

router.get('/user', user.get)

module.exports = router
