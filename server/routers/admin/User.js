module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const User = require('../../models/User')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    router.post('/login',async (req,res)=>{
        const user = await User.findOne({username:req.body.username})
        assert(user,422,'用户名不存在！')
        const isPasswordValid = require('bcrypt').compareSync(req.body.password,user.password)
        assert(isPasswordValid,422,'密码错误!')
        //返回token
        const rule = {
            id:user.id,
            username:user.username
        }
        const token = jwt.sign(rule,app.get('secret'))
        res.send({token})
    
    })

    app.use('/admin/api/user',router)

    //错误处理函数
    app.use(async(err,req,res,next)=>{
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}