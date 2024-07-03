const router = require("express").Router()
const { Blog } = require("../model/blog")
const { User } = require("../model/user")
const z = require("zod")
const { authMiddleware } = require("./userAuth")

const blogAuth = z.object({
  title: z.string(),
  content: z.string()
})

// post - create new blog
router.post("/create-blog", authMiddleware, async(req,res)=>{
  try{
    const { title, content } = req.body

    const { success } = blogAuth.safeParse(req.body)
    if(!success){
      return res.status(411).json({
        msg: "invalid data"
      })
    }
  
    const blog = await Blog.create(
      {
        title: title,
        content: content,
        authorId: req.userId
      }
    )

    const user = await User.findById(req.userId)

    if (!user) {
      await Blog.findByIdAndDelete(blog._id);
      return res.status(404).json({
        msg: "User not found"
      });
    }

    user.blogs.push(blog._id);
    await user.save();
    
    return res.status(200).json({
      msg: "Blog uploaded successfully",
      blog: blog
    });

  }catch(err){
    console.log(err);
    res.status(500).json({
      msg: "Internal server error"
    })
  }
})

router.get("/blog/:blogId", authMiddleware, async(req, res)=>{
  try{
    const blogId = req.params.blogId
    const blog = await Blog.findById(blogId).populate('authorId', 'username')

    // console.log(req.params.blogId);
    // console.log(blogId);
    return res.status(200).json({
      msg: "success",
      blog: blog
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      msg: "Internal server error"
    })
  }
})

router.get("/my-blogs", authMiddleware, async(req, res) => {
  try{
    const user = await User.findById(req.userId).populate({
      path: "blogs",
      select: "title content updatedAt"
    })

    return res.status(200).json({
      msg: "success",
      blogs: user.blogs
    })
  }catch(err){
    console.log(err);
    res.status(500).json({
      msg: "Internal server error"
    })
  }
})

// put - update blog
router.put("/update-blog/:blogId", authMiddleware, async(req, res)=> {
  try{

    const { title, content } = req.body
    const { blogId } = req.params

    const { success } = blogAuth.safeParse(req.body)
    if(!success){
      return res.status(411).json({
        msg: "Incorrect inputs"
      })
    }

    const blog = await Blog.findByIdAndUpdate(blogId,{
      title: title,
      content: content
    },{new: true})

    return res.status(200).json({
      msg: "Blog updated successfully",
      blog: blog
    })
  }catch(err){
    return res.status(500).json({
      msg: "internal server error"
    })
  }
})

// delete - delete blog
router.delete("/delete-blog/:blogId", authMiddleware, async(req, res) => {
  try{
    const { blogId } = req.params

    const blog = await Blog.findById(blogId)  
    if(!blog){
      return res.status(411).json({
        msg: "Blog not found."
      })
    }

    await Blog.findByIdAndDelete(blogId)
    return res.status(200).json({
      msg: "Deleted successfully."
    })

  }catch(err){
    return res.status(500).json({
      msg: "Internal server error"
    })
  }
})

// get-all
router.get("/get-all", authMiddleware, async(req,res)=>{
  try{
    const data = await Blog.find().sort({createdAt: -1}).populate('authorId', 'username')
    res.status(200).json({
      data: data
    })
  }catch(err){
    res.status(500).json({
      msg: "internal server error"
    })
  }
})

// get recent 4 blogs
router.get("/recent-blogs", async(req,res)=>{
  try{
    const data = await Blog.find().sort({createdAt: -1}).limit(4).populate('authorId', 'username')
    res.status(200).json({
      data: data,
      username: data.authorName
    })
  }catch(err){
    res.status(500).json({
      msg: "internal server error"
    })
  }
})

module.exports = router