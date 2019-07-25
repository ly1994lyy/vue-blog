const mongoose = require("mongoose")

const scheme = new mongoose.Schema({
    title:{type:String},
    body:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
},{
    timestamps:{
        createdAt:'created',
        updatedAt:'updated'
    }
})

module.exports = mongoose.model('Post',scheme)