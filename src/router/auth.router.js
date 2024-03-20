const Router = require("koa-router")

const { login, success } = require("../controller/auth.controller")
const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware")

const authRouter = new Router()

authRouter.post("/login", verifyLogin, login)
// 模拟登录成功后，后续接口判断token有效性才能走下一步操作
authRouter.get("/getGoods", verifyAuth, success)

module.exports = authRouter
