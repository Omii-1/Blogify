import { NavLink } from "react-router-dom"

export function FrontCard(){
  let token = localStorage.getItem("token")
  if(token){
    token = "/blogs"
  }else{
    token="/signin"
  }

  return(
    <>
    <div className="w-full flex flex-col items-center p-10 gap-5 sm:p-20 md:py-28 md:gap-10 lg:gap-12 lg:py-40">   
      <h1 className="text-[#9290C3] text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-center">Discover the World of Blogging</h1>

      <p className="text-xl sm:3xl md:text-3xl mx-auto px-7  text-[#535C91] text-center">Explore a diverse range of topics, connect with like-minded individuals, and unleash your creative potential.</p>
      
      <div className="flex gap-4 md:gap-8">
        <NavLink to={token} onClick={()=>{
          if(token === "/signin"){
            alert("Please Sign in")
          }           
        }} className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2  md:px-6 md:py-6 md:text-2xl font-medium text-[#535C91] shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 ">Start Reading</NavLink>
          
        <NavLink to={token} onClick={()=>{
          if(token === "/signin"){
            alert("Please Sign in")
          }}} className=" text-white inline-flex h-9 items-center justify-center rounded-md border-none bg-[#535C91] hover:bg-[#9290C3] px-4 py-2 texr-2xl md:px-6 md:py-6 md:text-2xl font-medium shadow-sm transition-colors  hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 ">Start Writing</NavLink>
      </div>
    </div>
    </>
  )
}