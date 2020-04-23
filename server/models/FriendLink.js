const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:{type:String},
    ref:{type:String}
})


module.exports = mongoose.model('FriendLink',schema)