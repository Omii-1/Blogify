import { useMyBlogs } from "../hooks"
import { MyCard } from "./MyCard"
import { nameAtom } from "../../atoms"
import { useRecoilValue } from "recoil"
import { Loader } from "./Loader"

export function Myblogs() {
  const {loading, myBlogs} = useMyBlogs()
  const name = useRecoilValue(nameAtom)

  if(loading){
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-[#9290C3] text-5xl font-bold py-4">My Blogs</h1>
      <div  className="flex flex-col md:flex-row items-center gap-5 md:justify-evenly flex-wrap sm:grid sm:grid-cols-2 sm:gap-8 md:flex lg:gap-5">
        {
          myBlogs.map(blog => <MyCard
            key={blog._id}
            id={blog._id}
            authorName={name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishDate={new Date(blog.updatedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
          />)
        }
      </div>
    </div>
  )
}
