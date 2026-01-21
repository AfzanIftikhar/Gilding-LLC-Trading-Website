import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[88vh] relative'>
      <img
      className='w-full h-full'
      src="https://cdn.pixabay.com/photo/2016/11/29/04/15/digger-1867268_1280.jpg" alt="" />

    <div className='absolute top-0 w-full h-full bg-[rgba(0,0,0,0.8)]'></div>
    <div className='absolute top-4 md:top-10 lg:top-[30%]  xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%] text-center px-3'>
      
        <h2 className='text-white text-3xl md:text-6xl xl:text-6xl lg:text-8xl lg:leading-20 xl:leading-16 font-bold md:leading-13'>Buy & Sell Vehicles, Auto Parts &  Industrial Products</h2>

        <p className='text-white tracking-wider text-lg md:text-xl lg:text-lg font-semi-bold leading-6 p-4 capitalize'>Trade vehicles, spare parts, tires, batteries, building materials, tools, and machinery with verified sellers worldwide.</p>
      
        <div>
          <button className='text-white m-2 border active:scale-95 active:bg-white active:text-black border-white md:m-2 tracking-widest uppercase p-3 rounded cursor-pointer hover:bg-white hover:text-black'>Browse Categories</button>
          <button className='text-black m-2 border active:scale-95 active:bg-transparent active:text-white border-white md:m-2 tracking-widest uppercase rounded cursor-pointer hover:bg-transparent hover:text-white hover:border-white p-3 bg-white '>Start Selling</button>
        </div>
    </div>


    </div>
  )
}

export default Hero
