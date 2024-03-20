const app = require("./app");
require("./app/database");

const config = require("./app/config");

// 端口号不要硬编码【使用dotenv根据环境变量(开发，生产，测试)，读取配置信息】
// app.listen(8000, () => {
//   console.log('Server running at http://127.0.0.1:8000/');
// })

app.listen(config.APP_PORT, () => {
  console.log(`服务运行在${config.APP_PORT}端口`);
});
