
//token校验中间件
module.exports = ()=>{
    const assert = require('http-assert')
    const User = require('../models/User')
    const jwt = require('jsonwebtoken')
    return async (req,res,next)=>{
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,"登录已过期！请重新登录")
        const {id} = jwt.verify(token,req.app.get('secret'))
        assert(id,401,"登录已过期！请重新登录")
        req.user = await User.findById(id)
        assert(req.user,401,"登录已过期！请重新登录")
        await next()
    }
}