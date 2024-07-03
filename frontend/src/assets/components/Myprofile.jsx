import { Avatar } from "./Avatar"
import { useRecoilValue } from "recoil"
import { nameAtom, emailAtom } from "../../atoms"

export function Myprofile() {
  const name = useRecoilValue(nameAtom)
  const email = useRecoilValue(emailAtom)

  return (
    <div>
      <div className="w-full flex flex-col gap-5 py-6">
        <h1 className="text-[#9290C3] text-5xl font-bold">Profile</h1>
        <div className="text-[#535C91] flex gap-3 items-center text-2xl">
          <Avatar name={name} size={"big"}/>
          {name}
        </div>
        <div className="text-[#535C91]  text-2xl">
          Email - {email}
        </div>
      </div>
    </div>
  )
}
