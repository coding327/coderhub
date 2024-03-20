const Router = require('koa-router')

const { create, list, detail, update, remove } = require('../controller/moment.controller')
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware')

const momentRouter = new Router({
  prefix: '/moment'
})

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
// 我们网站发布动态都可以看，不一定要登录才能看，不需要verifyAuth
momentRouter.get('/:momentId', detail)

// 1. 用户必须登录 2. 用户具备权限
momentRouter.patch('/:momentId', verifyAuth, verifyPermission('moments', 'momentId'), update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission('moments', 'momentId'), remove)

module.exports = momentRouter