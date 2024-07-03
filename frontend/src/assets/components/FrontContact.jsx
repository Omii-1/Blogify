export function FrontContact(){
  return (
    <div className="w-full flex flex-col items-center p-10 gap-5 sm:p-20 md:p-12 md:gap-10 lg:gap-12 lg:py-28 md:py-16">
      <h1 className="text-[#9290C3] text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-center">Discover More Inspiring Stories</h1>
      <p className="text-xl sm:3xl md:text-3xl mx-auto px-7  text-[#535C91]  text-center">Explore our growing collection of thought-provoking blog posts across a wide range of topics.</p>
      <div className="w-full flex gap-4 md:gap-8 justify-center">
        <input className="text-[#535C91]  w-2/4 lg:w-1/4 border-2 outline-none border-gray-300 focus:border-gray-600 px-4 py-1 rounded-md md:px-3 md:py-2 md:text-2xl font-medium shadow-sm " type="email" placeholder="Enter your email"/>
        <button type="submit" className=" text-white inline-flex h-9 items-center justify-center rounded-md border border-none bg-[#535C91] hover:bg-[#9290C3] px-4 py-2 texr-2xl md:px-6 md:py-6 md:text-2xl font-medium shadow-sm transition-colors  hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 ">Subscribe</button>
      </div>
      <div className="flex gap-1">
        <p className="text-[#535C91] text-center font-thin md:text-xl">Stay up-to-date with our latest posts. </p>
        <p className="hover:underline underline-offset-4 text-[#535C91] text-center md:text-xl">Terms & Conditions</p>
      </div>
    </div>
  )

}