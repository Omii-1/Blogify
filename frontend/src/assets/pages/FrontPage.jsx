import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { FrontCard } from "../components/FrontCard"
import { RecentPost } from "../components/RecentPost"
import { FrontContact } from "../components/FrontContact"

export function FrontPage(){
  return <div className="flex flex-col">
    <Navbar />
    <FrontCard/>
    <RecentPost />
    <FrontContact />
    <Footer />
  </div>
}