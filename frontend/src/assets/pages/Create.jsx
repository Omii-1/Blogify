import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import {BACKEND_URL} from "../../config"

export function Create() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const {id} = useParams()

  useEffect(()=>{
    const searchParams = new URLSearchParams(location.search)
    setTitle(searchParams.get("title") || "")
    setContent(searchParams.get("content") || "")
  },[location.search])

  return (
    <div>
      <Navbar/>
      <div className=" p-8 md:p-9 lg:px-72 md:px-32 flex flex-col gap-5 justify-center ">
        <h1 className="text-[#9290C3] text-5xl font-semibold ">{id == null || id ===""?"Create New Blog Post": "Update Blog"}</h1>

        <div className=" flex flex-col gap-5">
          <div className="text-[#535C91] flex flex-col  gap-2">
            <label className="text-2xl" htmlFor="">Title</label>
            <input 
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              type="text" 
              placeholder="Enter blog post title" 
              value={title}
              className="p-3 rounded"/>
          </div>

          <div className="text-[#535C91] flex flex-col gap-2">
            <label className="text-2xl" htmlFor="">Content</label>
            <textarea
              onChange={(e)=>{
                setContent(e.target.value)
              }}
              cols={30} rows={10}
              placeholder="Enter blog post content"
              value={content}
              className="p-3 rounded"></textarea>
          </div>
        </div>

        <button onClick={ async () => {
          if(id == null || id ===""){
            const res = await axios.post(`${BACKEND_URL}/create-blog`,
            {
                title,
                content
              },
            {
              headers:{
                Authorization:localStorage.getItem("token")
              }
            })
            if(res.data.blog && res.data.blog._id){
              navigate(`/blog/${res.data.blog._id}`)
            }
          } else {
            const res = await axios.put(`${BACKEND_URL}/update-blog/${id}`,{
              title, 
              content
            },{
              headers: {
                Authorization: localStorage.getItem("token")
              }
            })

            if(res.data.blog && res.data.blog._id){
              navigate(`/blog/${res.data.blog._id}`)
            }
          }

        }}
          className="text-white inline-flex h-9 items-center justify-center rounded-md border border-none bg-[#535C91] hover:bg-[#9290C3] px-4 py-2 texr-2xl md:px-6 md:py-6 md:text-2xl font-medium shadow-sm transition-colors  hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 w-[20%]">{id == null || id ===""?"Publish": "Update"}</button>

      </div>
      <Footer/>
    </div>
  )
}

