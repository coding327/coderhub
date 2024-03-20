const crypto = require('crypto'); // node自带的一个库

const md5password = (password) => {
  const md5 = crypto.createHash('md5'); // 采用md5方式加密，返回一个对象
  const result = md5.update(password).digest('hex'); // 加密，并用十六进制表示
  return result
}

module.exports = md5password