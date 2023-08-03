/* eslint-disable no-undef */
const mysql = require('mysql')

const db = mysql.createPool({
    host: '106.54.223.94',     //数据库IP地址
    user: 'testDB',          //数据库登录账号
    password: 'YXP5yGS4D3xKRynf',      //数据库登录密码
    database: 'testdb'       //要操作的数据库
})

module.exports = db