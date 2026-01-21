import React from 'react'

const CtaButtons = () => {
  return (
    <div>
      <div className='flex pt-5 justify-center gap-3 flex-col lg:flex-row items-center'>
        <button className='text-white bg-gray-900 m-2 border active:scale-95 active:bg-gray-950  active:text-white border-white md:m-2 tracking-widest uppercase p-3 rounded cursor-pointer hover:bg-gray-950 hover:text-white hover:tracking-wider'>Browse MarketPlace</button>
        <button className='text-white bg-gray-900 m-2 border active:scale-95 active:bg-gray-950  active:text-white border-white md:m-2 tracking-widest uppercase p-3 rounded cursor-pointer hover:bg-gray-950 hover:text-white hover:tracking-wider'>Browse a Seller</button>
      </div>
    </div>
  )
}

export default CtaButtons
