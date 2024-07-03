
export function Avatar({ name , size = "small"}){
  return <div className={`flex justify-center items-center pb-1  bg-gray-300 rounded-full cursor-pointer  overflow-hidden border border-3 border-[#1B1A55]  ${size == "small"? "w-7 h-7" : "w-10 h-10"}`}>
    <span className={`${size == "small" ? "text-lg" : "text-2xl"} font-semibold text-center text-gray-600`}>{name[0]}</span>
  </div>
}