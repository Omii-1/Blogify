import { Avatar } from "./Avatar"

export function FullBlog({blog}) {
  return (
    <div className=" p-10 box-border flex-grow overflow-y-auto">

      <div>
        <div className="text-[#9290C3] text-center text-2xl sm:text-3xl font-bold p-4 underline underline-offset-4">
          {blog.title}
        </div>

        <div className="text-[#535C91] flex-col ">
          <div className="flex  gap-3 h-full items-center py-2 sm:text-lg">
            <Avatar name={blog.authorId.username} size="big"/>
            {blog.authorId.username}
          </div>

          <div className="py-2 text-[#535C91]">
            Created at : {new Date(blog.date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

      <div className="text-[#9290C3] text-xl py-2">
        {blog.content}
      </div>
    </div>
  )
}
