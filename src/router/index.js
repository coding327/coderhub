const fs = require('fs')

const useRoutes = function() {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    const router = require(`./${file}`);
    this.use(router.routes());
    // 用于返回服务端不支持的请求方式, 比如未写put请求方式接口，会返回405， Method Not Allowed
    this.use(router.allowedMethods());
  })
}

module.exports = useRoutes;