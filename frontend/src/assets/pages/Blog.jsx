import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { FullBlog } from "../components/FullBlog"
import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Loader } from "../components/Loader"

export function Blog() {
  const { id } = useParams()

  const {loading, blog} = useBlog({
    id: id || ""
  })

  if (loading || !blog){
    return(
      <div>
        <Navbar/>
          <div className="h-[100%] flex items-center justify-center">
            <Loader />
          </div>
        <Footer/>
      </div>
    )
  }
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <FullBlog blog={blog}/>
      <Footer/>
    </div>
  )
}
