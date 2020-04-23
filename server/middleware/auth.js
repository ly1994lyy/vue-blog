module.exports = (key,user) =>{
    const jwt = require("jsonwebtoken")
    return async(req,res,next)=>{
       const token = String(req.headers.authorization || '').split(' ').pop()
       if(!token) res.status(401).send({message:'请先登录'})
       const {id} =  jwt.verify(token,key)
       if(!id) res.status(401).send({message:'请先登录'})
       req.user = await user.findById(id)
       if(!req.user) res.status(401).send({message:'请先登录'})
       await next()
    }
    
}