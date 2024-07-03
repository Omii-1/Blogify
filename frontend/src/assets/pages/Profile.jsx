import {Navbar} from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Myprofile } from "../components/Myprofile"
import { Myblogs } from "../components/Myblogs"

export function Profile() {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <Myprofile/>
        <Myblogs/>
      </div>
      <Footer/>
    </div>
  )
}

