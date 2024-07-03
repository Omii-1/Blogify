const mongoose = require("mongoose")
require("dotenv").config()

const conn = async () => {
  try{
    await mongoose.connect(`${process.env.DATABASE}`)
    console.log("connected to database");
  }catch(err){
    console.log(err);
  }
}

conn()