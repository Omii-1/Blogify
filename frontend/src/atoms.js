import { atom } from "recoil"

export const nameAtom = atom({
  key: "usernameAtom",
  default: "Anonymous"
})

export const emailAtom = atom({
  key: "emailAtom",
  default: "anonymous@gmail.com"
})

