import { Card } from "./Card"
import { useRecentBlogs } from "../hooks"

export function RecentPost(){
  const { recentBlogs } = useRecentBlogs()

  return (
    <div className="w-full h-full bg-[#1B1A55] p-12 lg:py-6 lg:flex">

      <div className="w-full px-5 pb-10 flex gap-1 flex-col md:justify-center">
        <p className="text-[#9290C3] font-thin text-2xl">Featured Posts</p>
        <h1 className="text-5xl font-bold text-[#9290C3]">Explore Our Top Stories</h1>
        <p className="text-[#535C91] text-xl">Dive into a curated selection of our most engaging and thought-provoking blog posts.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 md:justify-evenly flex-wrap sm:grid sm:grid-cols-2 sm:gap-8 md:flex lg:gap-5">

        {recentBlogs && recentBlogs.map(blog => <Card
          key={blog._id}
          id={blog._id}
          authorName={blog.authorId.username || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishDate={new Date(blog.date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
        />)}

      </div>

    </div>
  )
}