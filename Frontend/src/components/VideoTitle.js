import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[10%] p-12">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-white w-1/3 mt-4">
        {overview}
        </p>
      <div className="mt-7 flex gap-3">
        <button className=" flex items-center rounded-sm bg-white font-medium text-black px-6 py-2 hover:bg-opacity-80">
          <FaPlay />
          <span className='ml-1'>Play</span>
        </button>
        <button className="flex items-center rounded-sm bg  bg-gray-500 font-medium text-black px-6 py-2 bg-opacity-45">
        <IoIosInformationCircleOutline/>
          <span className='ml-1'>Watch more</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle