const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    username:{type:String,unique:true},
    password:{
        type:String,
        set(val){
            return require('bcrypt').hashSync(val,10)
        }
    },
    status:{type:String},
})

module.exports = mongoose.model('User',scheme)