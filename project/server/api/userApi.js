/**
 * Created by Administrator on 2018/9/25.
 */

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var $sqlDel = require('../sqlDel');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  console.log(req.param);
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除
router.post('/del', (req, res) => {
  var del = $sqlDel.user.del;
  var params = req.body;

  console.log(params);
  conn.query(del, [params.username], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(2)
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
