
export function Footer() {
  return (
    <div className="w-full p-5 bottom-0 flex md:flex-row  items-center flex-col gap-4 md:gap-0 bg-[#1B1A55]">
      <div className="flex-grow justify-self-start">
        <p className="font-sans text-sm text-gray-400">&copy; 2024 Blogging Website. All rights reserved.</p>
      </div>
      <div className="md:w-1/3  flex justify-end gap-4">
        <p className="font-sans text-sm text-[#9290C3]  cursor-pointer hover:underline underline-offset-4">Privacy</p>
        <p className="font-sans text-sm text-[#9290C3]  cursor-pointer hover:underline underline-offset-4">Terms of Service</p>
      </div>
    </div>
  );
}
