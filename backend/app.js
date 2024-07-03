const express = require("express")
const app = express()
const cors = require("cors")
require("./conn/conn")
require("dotenv").config()

const blog = require("./routes/blog")
const user = require("./routes/user")

app.use(cors())
app.use(express.json())

app.use("/api/v1", blog)
app.use("/api/v1", user)

app.listen(process.env.PORT, ()=>{
  console.log(`server is running on ${process.env.PORT}`);
})