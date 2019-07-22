module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    const Post = require('../../models/Post')
    const Category = require('../../models/Category')

    //分类接口
    router.get('/categories',async (req,res)=>{
        const model = await Category.find()
        res.send(model)
    })

    router.post('/categories',async (req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.put('/categories/edit/:id',async (req,res)=>{
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
        const model = await Post.find()
        res.send(model)
    })

    router.post('/posts',async (req,res)=>{
        const model = await Post.create(req.body)
        res.send(model)
    })

    app.use('/admin/api',router)
}