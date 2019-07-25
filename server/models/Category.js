const mongoose = require("mongoose")
const Post = require('./Post')

const scheme = new mongoose.Schema({
    typename:{type:String}, 
})

scheme.virtual('posts',{
    localField:'_id',
    ref:'Post',
    foreignField:'categories',
    justOne:false
})

module.exports = mongoose.model('Category',scheme)