"use client"

import Image from "next/image"
import Link from "next/link"
import  Contact  from "../app/contact/page"





export default function Home() {
 
  
  
    return (
   

      <div className=" py-24 sm:py-24 md:py-16 lg:py-10 bg-zinc-800">



      
          <div className="text-center px-4 justify-center sm:px-6 lg:px-8">
          <div className="flex"> 
            <Image width="1500" height="276" src="/portfolio.png" alt="Portfolio" />
          </div>
         
          <p className="text-white text-2xl ">Web Developer</p>
              <div className="mt-12 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
           
                  
                  <a className="sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-fuchsia-300 hover:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-6" href="./contact">
                  Contact Me
                  </a>
            <a className="sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center] bg-violet-300 shadow-sm text-sm font-medium rounded-md text-gray-900 hover:text-white hover:bg-grey-900 hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="/work">
              Previous projects
            </a>
                  </div>
                </div>


          

           
          </div>
    











    
   
  )
}
 




   
{/* <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
             
                  
                  <a className="w-full py-3 sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-fuchsia-300 hover:border-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="/work">
                  Contact Me
                  </a>
                  </div>
                </div> */}
