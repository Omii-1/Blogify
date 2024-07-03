const mongoose = require("mongoose")

const user = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  blogs: [
    {
    type: mongoose.Types.ObjectId,
    ref: "blog"
    }
  ],
  favourites: [
    {
      type: mongoose.Types.ObjectId,
      ref: "blog"
    }
  ]
},{
  timestamps: true
})

const User = mongoose.model("user", user)

module.exports = {
  User
}