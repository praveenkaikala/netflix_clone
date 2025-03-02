import React from 'react'

const Skeleton = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-black flex flex-col gap-5 justify-center items-center'>
        <div className='px-10 bg-gray-900 w-[85%] h-[20rem] rounded-lg animate-pulse'>

        </div>
        <div className='flex gap-5 animate-pulse'>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

            </div>
            <div className=' bg-gray-900 w-[9rem] h-[12rem] rounded-lg'>

</div>
        
        </div>
    </div>
  )
}

export default Skeleton