module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Post = require('../../models/Post')
    const Category = require('../../models/Category')

    router.get('/posts',async (req,res)=>{
        const model = await Post.find().populate('categories').lean()
        res.send(model)
    })

    router.get('/posts/:id',async (req,res)=>{
        const model = await Post.findById(req.params.id).populate('categories')
        res.send(model)
    })

    router.get('/categories',async (req,res)=>{
        const model = await Category.find().lean()
        res.send(model)
    })

    router.get('/categories/:id',async (req,res)=>{
        const model = await Category.findById(req.params.id).populate('posts').lean()
        res.send(model)
    })
    app.use('/web/api',router)
}