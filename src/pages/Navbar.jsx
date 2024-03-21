import React, { useState } from 'react'
import { useAuth , UserProfile , UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const {isSignedIn} = useAuth()
  const [open, setOpen]=useState(false)

  const navItem=[
                {value:"Service" , path:"/"},
                {value:"Buy" , path:"/buy"},
                {value:"Rent" , path:"/rent"},
                {value:"Contact" , path:"/contact"},
                {value:"About us" , path:"/about"},
               ( !isSignedIn && {value:"Sign In", path:"/sign-in"})
              ]          
  return (
   <>
    <nav className="w-full  flex justify-center items-center bg-primaryBg shadow-lg">
          <div className="  w-full max-w-[1440px] flex justify-between py-4 px-3 items-center relative z-50">

                {/* brand name */}
                <h1 className=' uppercase font-bold text-2xl text-primaryBtn'>Asthaan</h1>
                {/* mobile nav btn */}
                <div className='sm:hidden cursor-pointer' onClick={()=>{setOpen((prev)=>!prev)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primaryBtn">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>

                </div>
                {/* nav items */}
                <div className='hidden sm:flex gap-5 '>
                  {
                    navItem?.map((btn, index)=>{
                      const{value, path}=btn
                      // return <button className="text-secondaryTxt hover:text-primaryBtn text-xl" key={index}>{value}</button>
                      return <Link to={path} className="text-secondaryTxt hover:text-primaryBtn text-xl" key={index}>{value}</Link>
                    })
                  }
                 {isSignedIn && (<UserButton/>)}
               </div>
               {/* mobile nav items */}
               
                  <div className={`absolute  flex sm:hidden flex-col items-center top-full ${open ? "top-full" : "top-[-1000px] "} bg-black bg-opacity-70   w-full left-0 gap-5 py-3 transition-all ease-in-out duration-300 `}>
                  {
                    navItem?.map((btn , index)=>{
                      const{value, path}=btn
                      return <button className="text-white text-xl " key={index}>{value}</button>
                    })
                  }
                   {isSignedIn && (<UserButton/>)}
               </div>
                
              
               
          </div>

      </nav>
   </>
  )
}


export default Navbar