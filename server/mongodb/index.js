module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/react-blog',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("mongodb connect success!")
}