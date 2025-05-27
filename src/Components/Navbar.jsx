import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
    const [bar,setbar]=useState('fa-bars')
    const [toggle,setToggle]=useState('true')
    console.log(toggle)
     function Switch(){
        setbar((e)=>bar=='fa-bars'?'fa-xmark':'fa-bars')
        setToggle((e)=>!e)
     }
     console.log(toggle)
  return (
    <>
    <div className={`bg-cyan-950 border-2 shadow-lg border-cyan-600 sm:flex-row  sm:justify-between p-2 w-full flex flex-col sm:h-14 sm:transition-none overflow-hidden  transition-all duration-500  ${toggle?'h-14':'h-72 '} sticky top-0 z-50`}>     <span className='font-bold text-white text-4xl'>Portfolio</span>
    
      <ul className={`flex flex-col text-2xl font-semibold font-serif items-center sm:flex-row gap-6  sm:h-full  pr-4 max-sm:mt-4`}>
          
        <li><NavLink to='/' className={({isActive})=>isActive?'text-red-500 underline decoration-red-600':'text-white'}>Home</NavLink></li>
         <li><NavLink to='/About' className={({isActive})=>isActive?'text-red-500 underline decoration-red-600':'text-white'}>About</NavLink></li>
         <li><NavLink to='/Project' className={({isActive})=>isActive?'text-red-500 underline decoration-red-600':'text-white'}>Project</NavLink></li>
         <li><NavLink to='/Contact' className={({isActive})=>isActive?'text-red-500 underline decoration-red-600':'text-white'}>Contact</NavLink></li>
         
      </ul>

        <div className='sm:hidden absolute top-2 right-0 mr-2'>
            <i className={`fa-solid ${bar} text-2xl text-white sm:hidden block `} onClick={Switch}></i>

        </div>
         
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
