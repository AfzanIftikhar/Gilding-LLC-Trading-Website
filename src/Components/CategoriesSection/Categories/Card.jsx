import React from 'react'
import {
  RiCarLine,
  RiSettings3Line,
  RiBuilding2Line,
  RiToolsLine,
  RiSettingsLine,
  RiBattery2ChargeLine,
  RiBearSmileLine,
  RiCarWashingLine

} from "react-icons/ri";


const Card = () => {
  return (
    <div className='flex w-full h-auto gap-6  flex-wrap  items-center justify-center '>
      <div className='xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '

        ><i class="ri-car-line"></i></div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' ></div>
        <div className='mr-10 '>
            <h1 className='font-semibold grouped-hover:scale-120 text-2xl capitalize text-[#5e5a5a]'>Vehicles</h1>
        </div>
      </div>
           
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '

        ><i className="ri-settings-3-line"></i></div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className='mr-10  '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Auto Parts</h1>
        </div>
      </div>
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '

        ><i className="ri-building-2-line"></i></div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className='  '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Construction Materials</h1>
        </div>
      </div>
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '

        ><i className="ri-tools-line"></i></div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className=' mr-15 '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Tools</h1>
        </div>
      </div>
           
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '

        ><RiSettingsLine/></div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className=' mr-3 '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Machinery</h1>
        </div>
      </div>
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '>
          <RiBattery2ChargeLine/>
        </div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className='  '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Batteries & Tires</h1>
        </div>
      </div>
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '>
          <RiBearSmileLine/>
        </div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className='mr-10  '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Toys</h1>
        </div>
      </div>
      <div className=' xl:w-1/4 max-sm:w-full hover:border-amber-400 hover:border-2 active:border-2 active:border-amber-400 h-40 border cursor-pointer hover:shadow-2xl  border-[#969191] rounded p-3 flex items-center gap-5 justify-between' >
    
        <div
        className='text-amber-400   ml-10 text-3xl font-bold '>
          <RiCarWashingLine/>
        </div>
        <div className='w-px h-30 shadow-2xl rounded bg-[#dadada]' >

        </div>
        <div className='mr-6  '>
            <h1 className='font-semibold  text-2xl  capitalize text-[#5e5a5a]'>Automative</h1>
        </div>
      </div>
           
    </div>
  )
}

export default Card
