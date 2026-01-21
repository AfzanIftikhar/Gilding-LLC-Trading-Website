import React from 'react'

const Column1 = () => {
  return (
    <>
    <div className='flex flex-col w-full lg:flex-row   h-full' >

    <div className='xl:w-1/3 w-full  p-4 flex flex-col gap-4 items-center justify-center h-full'>
       <h2 className='font-bold text-3xl italic'>Grading LLC Trading</h2>
       <p className='p-4 text-center'>A global marketplace connecting buyers and sellers worldwide.
Dubai-based international trading platform.</p>
    </div>
    <div className='xl:w-1/3 w-full p-4 flex flex-col gap-4 lg:items-center justify-center h-full'>
    <h2 className='font-bold text-xl'>Navigation Help</h2>
       <ul className='underline '>
        <a href=""> <li>Home</li></a>
        <a href=""> <li>Categories</li></a>
        <a href=""> <li>Featured Products</li></a>
        <a href=""> <li>How it Works</li></a>
        <a href=""> <li>Contact Us</li></a>
       </ul>
    </div>

    <div className='xl:w-1/3 w-full p-4 flex flex-col gap-4 lg:items-center justify-center h-full'>
    <h2 className='font-bold text-xl'>Categories</h2>
       <ul className='underline '>
        <a href=""> <li>Vehicles</li></a>
        <a href=""> <li>Auto Parts</li></a>
        <a href=""> <li>Tools And Machinery</li></a>
        <a href=""> <li>Building Materials</li></a>
        <a href=""> <li>Batteries and Tires</li></a>
       </ul>
    </div>
    <div className='xl:w-1/3 w-full p-4 flex flex-col gap-4 lg:items-center justify-center h-full'>
    <h2 className='font-bold text-xl'>Support</h2>
       <ul className='underline '>
        <a href=""> <li>Help Center</li></a>
        <a href=""> <li>FAQs</li></a>
        <a href=""> <li>Terms And Conditions</li></a>
        <a href=""> <li>Privacy Policy</li></a>
        <a href=""> <li>Seller Policy</li></a>
       </ul>
    </div>
    

    </div>


    </>
  )
}

export default Column1
