/* eslint-disable no-undef */
const db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from testTable'
    db.query(sql, (err, data) => {
        if (err) return res.send('错误：' + err.message)
        res.send(data)
    })
}
