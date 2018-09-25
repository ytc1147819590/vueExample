/**
 * Created by Administrator on 2018/9/25.
 */


// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)'
  }
}

module.exports = sqlMap;
