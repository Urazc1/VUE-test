/* eslint-disable no-undef */
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router')
const https = require('https')
const fs = require('fs')

app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())             //配置跨域
app.use(router)             //配置路由

const options = {
    key: fs.readFileSync('../public/dustcolor.key'),
    cert: fs.readFileSync('../public/dustcolor.pem')
}

const httpsServer = https.createServer(options, app)
httpsServer.listen(7998, () => {
    console.log('服务器启动成功');
})
