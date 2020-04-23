const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{type:String},
    color:{type:String},
    isHot:{type:Boolean,default:false},
})

schema.virtual('articlelist',{
    localField:"_id",
    foreignField:"categories",
    justOne:false,
    ref:"Article"
})

schema.virtual("likes",{
    localField:'_id',
    foreignField:'article',
    justOne:false,
    ref:"Like"
})

schema.virtual("categories",{
    localField:"_id",
    foreignField:"categories",
    justOne:false,
    ref:"Category"
})


module.exports = mongoose.model('Category',schema)