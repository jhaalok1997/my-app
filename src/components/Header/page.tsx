import React from 'react'
import Link from 'next/link'




const page = () => {
  return (
    <header className="mt-12 " >
      
        <div className="flex justify-center w-[80%]  ">
          <div className="w-72  ">
          <img src="./header/Ellipse 23.webp"
           alt="logo"
           className="h-16"
           />
          </div>
       
           <div className=' flex justify-center border-2 border-white p-4 rounded-full px-16  '>
           
            <ul className="space-x-12 text-xl">
            <Link href='/'>Home </Link>
            <Link href='/about'>About Us</Link>
            <Link href='/contact'>Contact Us</Link>
            <Link href='/blog'>Blogs</Link>
            <Link href='/career'>Career</Link>
            </ul>

            </div>
        
        </div>
       
       
    </header>
  )
}

export default page