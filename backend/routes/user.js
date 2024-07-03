const router = require("express").Router()
const { User } = require("../model/user")
const bcrypt = require("bcrypt")
const z = require("zod")
const jwt = require("jsonwebtoken")

const userBody = z.object({
  username: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6)
})

router.post("/signup", async(req, res)=>{
  try{
    const {username, email, password} = req.body

    const { success } = userBody.safeParse(req.body)
    if(!success){
      res.status(400).json({
        msg: "inputs are incorrect"
      })
    }

    const existingUser = await User.findOne({
      username: username,
      email: email
    })
    if(existingUser){
      return res.status(400).json({
        msg: "user already exist",
        email: email,
        username: username
      })
    }

    const hashpass = await bcrypt.hash(password, 10)
    const user = await User.create({
      username: username,
      email: email,
      password: hashpass
    })

    const userId = user._id

    const token = jwt.sign({userId},process.env.JWT_TOKEN)

    res.status(200).json({
      msg: "User created successfully.",
      token: token,
      usernmae: user.username,
      email: user.email
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      msg: "Internal server error"
    })
  }
})

router.post("/signin", async(req, res)=>{
  try{
    const { email, password } = req.body

    const existingUser = await User.findOne({email: email})
    if(!existingUser){
      return res.status(500).json({
        msg: "Incorrect Email"
      })
    }

    const userId = existingUser._id

    await bcrypt.compare(password, existingUser.password, (err, data)=>{
      if(data){
        const token = jwt.sign({
          userId
        }, process.env.JWT_TOKEN,
        {
          expiresIn: "30d"
        })

        return res.status(200).json({
          msg: "Login successfully",
          token: token,
          username: existingUser.username,
          email: existingUser.email
        })
      }else{
        console.log(err);
        return res.status(411).json({
          msg: "Incorrect password"
        })
      }
    })

  }catch(err){
    res.status(500).json({
      msg: "Internal server error"
    })
  }
})

module.exports = router