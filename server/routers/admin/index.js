module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    const Post = require('../../models/Post')
    const Category = require('../../models/Category')


    router.get('/categories',async (req,res)=>{
        const model = await Category.find()
        res.send(model)
    })

    router.post('/categories', (req,res)=>{
        const model = {}
        model.type = req.body.type
        new Category(model).save().then(profile=>{
            res.json(model)
        })
        
    })

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