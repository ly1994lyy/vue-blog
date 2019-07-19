const mongoose = require("mongoose")

const scheme = new mongoose.Schema({
    typename:{type:String}, 
})


module.exports = mongoose.model('Category',scheme)