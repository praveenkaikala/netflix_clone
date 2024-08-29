import React from 'react'

const SearchMovie = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
        <form className='w-[50%]'>
            <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
                <input type='text' placeholder='Enter Movie Name' className='w-full outline-none rounded-md text-lg'/>
                <button className='bg-[#D91921] text-white rounded-md px-4 py-2'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default SearchMovie