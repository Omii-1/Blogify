import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import axios  from "axios"
import { useRecoilState } from "recoil"
import { nameAtom, emailAtom } from "../../atoms"
import { BACKEND_URL } from "../../config"

export function Auth({type}) {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const[name, setName] = useRecoilState(nameAtom)
  const[email, setEmail] = useRecoilState(emailAtom)

  async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}/${type === "signup" ? "signup" : "signin"}`, postInputs)
      const jwt = response.data.token
      localStorage.setItem("token", `Bearer ${jwt}`)
      navigate("/")
    }catch(err){
      console.log(err);
      alert("Signup failed")
    }
  }


  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%]  flex flex-col items-center  rounded-lg p-5 sm:p-10 gap-2 shadow-2xl shadow-slate-800 bg-[#1B1A55]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl md:text-3xl font-extrabold text-center text-[#9290C3]">{type==="signup"? "Create an account": "Login"}</div>
          <div className="text-[#535C91] flex gap-2 text-lg">
            {type === "signup" ? "Already have an account?":"Don't have an account?"}
            <Link className="text-[#9290C3] hover:underline underline-offset-4" to={type==="signup"?"/signin":"/signup"}>
              {type==="signup"?"Login":"Sign Up"}
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-4">
          {type==="signup"? <LabelledInput type="" label="Username" placeholder="Enter your Username"
          onChange={(e)=>{
            setPostInputs({
              ...postInputs,
              username: e.target.value
            })
            setName(e.target.value)
          }}/>:""}

          <LabelledInput type="email" label="Email" placeholder="Enter your Email" onChange={(e)=>{
            setPostInputs({
              ...postInputs,
              email: e.target.value
            })
            setEmail(e.target.value)
          }}/>

          <LabelledInput type="password" label="Password" placeholder="Enter your password" onChange={(e)=>{
            setPostInputs({
              ...postInputs,
              password: e.target.value
            })
          }} />

          <button className="p-5 text-lg font-bold rounded-lg flex items-center justify-center bg-black text-white hover:bg-slate-900" onClick={sendRequest}>
            {type==="signup"? "Sign UP": "Sign In"}
          </button>
        </div>
      </div>
    </div>
  )
}

const LabelledInput = ({label, placeHolder, onChange, type}) => {
  return(
    <div className="flex flex-col gap-2">
      <label className="text-lg font-semibold text-[#9290C3]" htmlFor="">{label}</label>
      <input className="font-serif p-3 border border-slate-400 rounded-lg text-lg" type={type || "text"} onChange={onChange} id={label} placeholder={placeHolder} required/>
    </div>
  )
}

