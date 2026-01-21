import React from 'react'
import { useState } from 'react'
const Search = () => {
    const[searchOpen, setSearchOpen] = useState(false)


     const searchController = () => {
    setSearchOpen(!searchOpen)
  }
  return (
    <div>
      <div className='relative flex'>
        <input
        className={`${searchOpen ? 'block' : 'hidden'} mt-1 md:block  p-2 border outline-none h-10 md:h-auto rounded md:w-100 border-gray-600 md:px-3 md:py-1`}
        type="search" 
        placeholder='Search vehicles, parts, tools…'
        />
        <div className={`absolute top-2 md:right-2 md:top-1 ${searchOpen? 'max-sm:left-44' : 'max-sm:left-2'}    `}>
          <i

        onClick={searchController}
        className='ri-search-line md:block font-3xl font-semibold cursor-pointer text-lg'></i>
        </div>
      </div>

    </div>
  )
}

export default Search
