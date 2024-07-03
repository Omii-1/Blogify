const mongoose = require("mongoose")

const blog = new mongoose.Schema({
  authorId:{
    type: mongoose.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }
},{
  timestamps: true
})

blog.virtual('authorName', {
  ref: 'user',
  localField: 'authorId',
  foreignField: '_id',
  justOne: true,
  options: { select: 'username' }
});


const Blog = mongoose.model("blog", blog)

module.exports = {
  Blog
}