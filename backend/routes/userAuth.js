const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  const tokenHeader = req.headers.authorization
  if(!tokenHeader || !tokenHeader.startsWith("Bearer ")){
    res.status(403).json({
      msg: "Token absent"
    })
  }

  const token = tokenHeader.split(" ")[1]
  if(!token){
    return res.status(403).json({
      msg: "Token missing or malformed"
    });
  }
  try{
    const decodeToken = jwt.verify(token, process.env.JWT_TOKEN)
    if(decodeToken.userId){
      req.userId = decodeToken.userId
      next()
    }else{
      return res.status(403).json({
        msg: "error occured"
      })
    }
  }catch(err){
    return res.status(403).json({
      msg: "Error occured."
    })
  }
}

module.exports = {
  authMiddleware
}