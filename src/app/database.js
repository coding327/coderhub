const mysql = require('mysql2')

const config = require('./config')

const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

// 数据库是否连接成功
connection.getConnection((err, connection) => {
  if (err instanceof Error) {
    console.log("数据库连接失败：", err)
    return;
  }

  console.log("数据库连接成功~")

  connection.release();
})

module.exports = connection.promise();