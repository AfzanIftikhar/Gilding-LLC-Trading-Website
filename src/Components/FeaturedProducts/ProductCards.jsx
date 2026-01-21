import React from 'react'

const ProductCards = ({product}) => {

    
    
  return (
    <div>
       <div className='group md:w-50 max-sm:w-45  hover:border p-2   snap-start  shrink-0 m-4 shadow rounded '>
            <div className='w-full h-50 '>

            <img 
            className='w-full object-cover  h-full rounded transition-transform duration-300 group-hover:scale-105'
            src={product.image} alt="" />
            </div>
            <div>
                <div>
                <h2 className='font-semibold  text-sm text-nowrap overflow-hidden py-2'>{product.title}</h2>
                <h3 className='font-bold px-2  text-md'>{product.price}</h3>    
                </div>
                <div className='flex justify-between items-center p-2'>
                    <h3>{product.condition}</h3>
                    <div className='w-1 h-1 rounded-full bg-gray-400'></div>
                    <h3>{product.location}</h3>
                </div>
                <button className=' px-5 py-2 m-2 bg-black text-white rounded hover:bg-gray-950 active:bg-gray-950 active:scale-95 cursor-pointer '>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCards
