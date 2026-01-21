import React from 'react'

const ChooseCard = ({data}) => {
    console.log(data)


  return (

    <div className='w-full relative border group border-none md:w-1/3 xl:w-1/5  transition-all duration-300 ease-in-out  cursor- rounded h-70 ml-2 hover:shadow-2xl ' >
        <div className='w-full h-full '>
            <img
            className='w-full h-full object-cover rounded' 
            src={data.image} alt="" />
        </div>

        <div className='w-full h-full lg:invisible lg:group-hover:visible  absolute top-0 bg-[rgba(0,0,0,0.6)] flex flex-col justify-center items-center '>
            <h2 className='text-white text-4xl font-bold tracking-widest uppercase'>{data.region}</h2>
            <p className='text-white text-sm  capitalize  font-semibold  text-center p-2 mt-2'>{data.description}</p>
        </div>

    </div>

  )
}

export default ChooseCard
