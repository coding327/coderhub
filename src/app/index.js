const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const errorHandler = require("./error-handle");
const useRoutes = require('../router');

// 创建一个Koa实例
const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyParser());
app.useRoutes(); // 注册所有路由
app.on('error', errorHandler); // 统一错误处理

// 导出Koa实例
module.exports = app;
