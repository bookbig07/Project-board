import React from 'react'

export default function Headers() {
  return (
    <header className="flex gap-5 justify-between px-8 py-2.5 text-white bg-[#243831] max-md:flex-wrap max-md:px-5">
      <div className="my-auto text-xl italic leading-6">a Board</div>
      <div className="justify-center px-7 py-2 text-sm font-semibold leading-5 bg-[#49A569] rounded-lg borde shadow-sm max-md:px-5 cursor-pointer">
        Sign In
      </div>
    </header>
  )
}
