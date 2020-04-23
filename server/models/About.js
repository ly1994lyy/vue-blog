const mongoose = require('mongoose')

const schema = mongoose.Schema({
    body:{type:String}
})


module.exports = mongoose.model('About',schema)