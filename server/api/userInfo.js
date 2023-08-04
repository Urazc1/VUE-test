/* eslint-disable no-undef */
const db = require('../db/index')

exports.post = (req, res) => {
    if(req.body.user == undefined || req.body.pwd == undefined) return res.send("?????")
    var sql = 'select * from userInfo where username="'+req.body.user+'"'
    db.query(sql, (err, data) => {
        //错误
        if (err) return res.send('错误：' + err.message)
        //密码比对成功
        else if (data[0].password == req.body.pwd) res.send({
            code: "1",
            nickname: data[0].nickname
        })
        //密码比对失败
        else res.send({code: "0"})
        console.log({
            post: req.body, 
            data: data[0]
        })
    })
}