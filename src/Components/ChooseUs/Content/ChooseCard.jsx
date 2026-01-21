import React from 'react'

const ChooseCard = ({ data, Icon }) => {


  return (

    <div className='w-full border border-gray-300 md:w-1/3 xl:w-1/5   rounded h-70 p-2 hover:shadow-2xl ' >

      <Icon className='text-3xl m-4 text-blue-600 ' />
      <h3 className='mt-2 mb-4 capitalize text-2xl font-bold'>{data.title}</h3>
      <p
        className='p-2 text-md font-semibold mt-2'
      >{data.description}</p>
    </div>

  )
}

export default ChooseCard
