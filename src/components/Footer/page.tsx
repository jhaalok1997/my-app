import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <footer>
        {/* <h1 className="text-5xl text-pink-500">Footer Page</h1> */}
        <div className="bg-gradient-to-r from-slate-300 to-slate-700 w-full h-64 flex gap-x-32">
            <div className="w-1/4 ml-24 mt-24 ">
              <img src="./header/Ellipse 23.webp"
               alt="logo"
               className="h-24 mt-1" />
            </div>

            <div className="mt-8 ">
              <h5 className="text-black font-bold">Main Links</h5>
              <ul className="text-black flex flex-col space-y-1">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/career">Career</Link>
              </ul>
            </div>

            <div className="mt-8 ">
              <h5 className="text-black font-bold">Main Links</h5>
              <ul className="text-black flex flex-col space-y-1">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/career">Career</Link>
              </ul>
            </div>
              
              <div>
              <div className="flex gap-7 mt-12  hover:bg-black">
              <img className="h-7" src='./footer/Group 21.webp' alt="Instagram " />
              <img className="h-7" src='./footer/Group 22.webp' alt="Facebok " />
              <img className="h-7" src='./footer/Group 24.webp' alt="Linkdin" />
              <img className="h-7" src='./footer/icons8-whatsapp-48.webp' alt="Watsapp " />

            </div>

              <div className="mt-12">
              <h6 className="font-semibold text-2xl text-black">Newsletter</h6>
              <input placeholder='Email...' className="rounded-full h-8 px-4" />
                </div>
              </div>
           

           

        </div>
        <div className="bg-gradient-to-l from-slate-100 to-slate-400 w-full">
            <h5 className="font-bold text-xl text-center text-black justify-items-center">Copyright 2025. All Rights Reserved</h5>
        </div>
    </footer>
  )
}

export default page