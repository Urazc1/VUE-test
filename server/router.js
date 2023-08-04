/* eslint-disable no-undef */
let express = require('express')
let router = express.Router()
let user = require('./api/user')
let userLogin = require('./api/userinfo')

router.get('/user', user.get)
router.post('/login', userLogin.post)

module.exports = router
