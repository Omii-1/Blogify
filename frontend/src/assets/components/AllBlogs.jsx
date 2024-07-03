import { Search } from 'lucide-react'; 
import { useAllBlogs } from '../hooks';
import { Card } from './Card';
import { Loader } from './Loader';

export function AllBlogs() {
  const {loading, allBlogs} = useAllBlogs()

  if(loading){
    return(
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <div className='flex p-5 w-full justify-center'>
        <input className='w-[63%] lg:w-[40%] border rounded-l-full p-2 px-4 border-r-0  shadow-md' type="text" />
        <div className='border border-slate-400 rounded-r-full sm:w-[7%] lg:w-[4%] bg-[#1B1A55] hover:bg-[#9290C3] cursor-pointer p-2 text-white shadow-md flex justify-center'> <Search /></div>
      </div>
      <div className='py-8'>
        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-6 md:gap-24 md:px-20 lg:gap-14 sm:px-7 lg:px-7 px-20 gap-5'>
          {allBlogs.map(blog => <Card
            key={blog._id}
            id={blog._id}
            authorName={blog.authorId.username || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishDate={new Date(blog.updatedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
          />)} 
        </div>
      </div>
    </div>
  )
}
