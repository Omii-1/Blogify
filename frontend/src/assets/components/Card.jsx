import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import { Heart } from 'lucide-react';

export function Card({id, authorName, title, content, publishDate }){
  return(
    <div className="w-80 bg-[#9290C3] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden">
      <div className="h-80 p-4 flex flex-col gap-2">
        <div className="h-16 flex items-center">
          <h2 className="text-lg  font-bold">{title && title.slice(0, 65)}</h2>
        </div>
          <div className="flex gap-2">
            <Avatar name={authorName} size={"small"}/>
            <div className="font-normal text-base text-slate-900 flex justify-center flex-col">{authorName}
            </div>
          </div>
          <div className="font-thin text-slate-700 flex justify-center flex-col">
            {publishDate}
          </div>
          <p className="text-slate-900 h-[40%]">{content && content.slice(0, 120) + " ..."}</p>
          <div className="w-full flex items-center pb-0 h-[20%]">
            <div className="w-1/2">
              <Link to={`/blog/${id}`} className=" text-white inline-flex h-9 items-center justify-center rounded-md border-none bg-[#1B1A55] hover:bg-[#535C91] px-4 py-2 texr-2xl  font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">Read More</Link>
            </div>
            <div className="w-1/2 flex justify-end pr-2 cursor-pointer">
              <Heart />
            </div>
          </div>
      </div>
    </div>
  )
}