module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    const Post = require('../../models/Post')
    const User = require('../../models/User')
    const Category = require('../../models/Category')
    const authMiddleWare = require('../../middleware/auth')

    //分类接口
    router.get('/categories',authMiddleWare(),async (req,res)=>{
        const model = await Category.find()
        res.send(model)
    })

    router.post('/categories',authMiddleWare(),async (req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.put('/categories/edit/:id',authMiddleWare(),async (req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/categories/:id',authMiddleWare(),async (req,res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    router.delete('/categories/delete/:id',authMiddleWare(),async (req,res)=>{
        const model = await Category.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //博客接口
    router.get('/posts',authMiddleWare(),async (req,res)=>{
        const model = await Post.find().populate('categories').lean()
        res.send(model)
    })

    router.post('/posts',authMiddleWare(),async (req,res)=>{
        const model = await Post.create(req.body)
        res.send(model)
    })

    router.put('/posts/edit/:id',authMiddleWare(),async (req,res)=>{
        const model = await Post.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/posts/:id',authMiddleWare(),async (req,res)=>{
        const model = await Post.findById(req.params.id)
        res.send(model)
    })

    router.delete('/posts/delete/:id',authMiddleWare(),async (req,res)=>{
        const model = await Post.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //用户接口
    router.get('/users',authMiddleWare(),async (req,res)=>{
        const model = await User.find()
        res.send(model)
    })

    router.post('/users',authMiddleWare(),async (req,res)=>{
        const model = await User.create(req.body)
        res.send(model)
    })

    router.put('/users/edit/:id',authMiddleWare(),async (req,res)=>{
        const model = await User.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/users/:id',authMiddleWare(),async (req,res)=>{
        const model = await User.findById(req.params.id)
        res.send(model)
    })

    router.delete('/users/delete/:id',authMiddleWare(),async (req,res)=>{
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