module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Post = require('../../models/Post')
    const Category = require('../../models/Category')

    router.get('/posts',async (req,res)=>{
        const model = await Post.find().populate('categories').lean()
        res.send(model)
    })
    router.get('/categories',async (req,res)=>{
        const model = await Category.find().lean()
        res.send(model)
    })
    app.use('/web/api',router)
}