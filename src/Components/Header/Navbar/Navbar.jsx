import React from 'react'
import { NavLink } from "react-router";
import { useState } from 'react';
import Search from './Search';
import Logo from './Logo'

const Navbar = () => {
      const [open, setIsOpen] = useState(false)

     const[Categoriesopen, setCategoriesOpen] = useState(false)
  
  const categoryController = () => {
    
    
    setCategoriesOpen(!Categoriesopen)
  }
 


     const toggleController = () => {
    setIsOpen(!open)
  }

     
  
  return (
    <div>
      <nav className={`'  flex  lg:flex-row  border-b-2 border-[#dadada] justify-between gap-10  px-3 lg:px-10 md:${open? 'items-start' : 'items-center'} ${open? 'py-2' : 'py-0'}`}>
        

        <Logo/>
        <Search/>

        <div className='flex p-2'>
         <div className={`${open? 'flex'  : 'hidden'} flex-col  lg:flex lg:flex-row justify-start gap-6 font-medium text-lg`}>
          <div>
            <div className=' relative group  gap-4'>
             <h4 
             onClick={categoryController}
             className='cursor-pointer hover:text-gray-400'>Categories</h4>

            <div className={`${Categoriesopen ? 'block' : 'hidden'} z-50 md:group-hover:block md:absolute md:top-7 -md:left-4 px-2 py-1 w-50  border-2 border-gray-200 bg-[#fdf8f8] text-black  rounded-md`}>
              <div className='flex flex-col items-start  gap-2'>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Vehicles</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Spare Parts</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Auto Parts</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Tires</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Batteries</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Automative</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Toys</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Building Materials</NavLink></h4>
                <h4 className=' hover:bg-[#dadada] p-2 w-full  rounded hover:text-black'><NavLink to="">Tools & Machinery</NavLink></h4>
              </div>
            </div>
            </div>
          </div>

          <NavLink className='hover:text-gray-400' to="">Sell</NavLink>
          <NavLink className='hover:text-gray-400' to="">Login/Register</NavLink>
          <NavLink className='hover:text-gray-400' to="">Cart</NavLink>
        </div>
       <i 
        onClick={toggleController}
        className="ri-menu-line  cursor-pointer font-3xl font-semibold text-lg lg:hidden"></i>


        </div>


        

    </nav> 
    </div>
  )
}

export default Navbar
