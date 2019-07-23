module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const Post = require('../../models/Post')
    const User = require('../../models/User')
    const Category = require('../../models/Category')

    //分类接口
    router.get('/categories',async (req,res,next)=>{
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,"登录已过期！请重新登录")
        const {id} = jwt.verify(token,app.get('secret'))
        assert(id,401,"登录已过期！请重新登录")
        req.user = await User.findById(id)
        assert(user,401,"登录已过期！请重新登录")
        await next()
    },async (req,res)=>{
        const model = await Category.find()
        res.send(model)
    })

    router.post('/categories',async (req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.put('/categories/edit/:id',async (req,res,next)=>{
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,"登录已过期！请重新登录")
        const {id} = jwt.verify(token,app.get('secret'))
        assert(id,401,"登录已过期！请重新登录")
        req.user = await User.findById(id)
        assert(user,401,"登录已过期！请重新登录")
        await next()
    },async (req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/categories/:id',async (req,res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    router.delete('/categories/delete/:id',async (req,res)=>{
        const model = await Category.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //博客接口
    router.get('/posts',async (req,res)=>{
        const model = await Post.find().populate('categories').lean()
        res.send(model)
    })

    router.post('/posts',async (req,res)=>{
        const model = await Post.create(req.body)
        res.send(model)
    })

    router.put('/posts/edit/:id',async (req,res)=>{
        const model = await Post.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/posts/:id',async (req,res)=>{
        const model = await Post.findById(req.params.id)
        res.send(model)
    })

    router.delete('/posts/delete/:id',async (req,res)=>{
        const model = await Post.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //用户接口
    router.get('/users',async (req,res)=>{
        const model = await User.find()
        res.send(model)
    })

    router.post('/users',async (req,res)=>{
        const model = await User.create(req.body)
        res.send(model)
    })

    router.put('/users/edit/:id',async (req,res)=>{
        const model = await User.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/users/:id',async (req,res)=>{
        const model = await User.findById(req.params.id)
        res.send(model)
    })

    router.delete('/users/delete/:id',async (req,res)=>{
        const model = await User.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    
    app.use('/admin/api',router)

     //错误处理函数
     app.use(async(err,req,res,next)=>{
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}