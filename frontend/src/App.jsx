import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./assets/pages/Layout"
import { RecoilRoot } from "recoil" 
import { FrontPage } from "./assets/pages/FrontPage"
import { Signup } from "./assets/pages/Signup"
import { Signin } from "./assets/pages/Signin"
import { Blogs } from "./assets/pages/Blogs"
import { Profile } from "./assets/pages/Profile"
import { Create } from "./assets/pages/Create"
import { Blog } from "./assets/pages/Blog"

function App() {

  return (
    <Layout>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/create/:id" element={<Create />}/>
            <Route path="/blog/:id" element={<Blog />}/>       
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Layout>
  )
}

export default App
