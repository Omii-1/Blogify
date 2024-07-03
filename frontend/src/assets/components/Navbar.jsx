import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AlignJustify, X, Feather } from 'lucide-react';
import { DarkButton } from "./DarkButton";

const Nav = () => {
  const token = localStorage.getItem("token")

  return(
    <>
      <NavLink to="/blogs" className="hover:underline underline-offset-4 text-white text-xl font-semibold">Explore</NavLink>
      <NavLink to="/create" className="hover:underline underline-offset-4 text-white text-xl font-semibold">Write</NavLink>
      {
        token ? <NavLink to="/profile" className="hover:underline underline-offset-4 text-white text-xl font-semibold">Profile</NavLink>:<NavLink to="/signin" onClick={()=>{
          alert("Please Sign in")
        }} className="hover:underline underline-offset-4 text-white text-xl font-semibold">Profile</NavLink>
      }
      {token ? <NavLink onClick={()=>{
        localStorage.removeItem("token")
        window.location.reload()
      }}
      to="/" className="hover:underline underline-offset-4 text-white text-xl font-semibold">Sign Out</NavLink> : <NavLink
      to="/signin" className="hover:underline underline-offset-4 text-white text-xl font-semibold">Login</NavLink>}
      
    </>
  )
}

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return(
    <div className="sticky backdrop-blur-md top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between p-4 px-8">
      <div className="flex gap-5 items-center">
        <div className="text-[#9290C3]">
          <Feather className="w-10 h-10"/>
        </div>
        <NavLink to="/" className="font-extrabold text-xl sm:text-2xl text-white">Blogify</NavLink>
      </div>
      <div className="w-1/2 lg:w-1/3 flex justify-end gap-7 items-center">
        <DarkButton />
        <div className="w-full hidden justify-between md:flex">
          <Nav />
        </div>
        <button className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? <div className="text-[#9290C3] font-bold"><X className="h-9 w-9"/></div> : <div className="text-[#9290C3] font-bold"><AlignJustify className="h-9 w-9"/></div> }
        </button>
      </div>
      {
        isOpen && (
          <div className="flex basis-full flex-col items-center gap-2">
            <Nav />
          </div>
        )
      }
    </div>
  )
}