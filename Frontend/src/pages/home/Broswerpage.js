import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import extraction from "../../assets/extraction.jpg";
import { Link } from "react-router-dom";
import { FaInfo, FaPlay } from "react-icons/fa";
import ReactPlayer from 'react-player'
import useNowPlayingMovies from "../../components/hooks/useNowPlayingMovies";
import axios from "axios"
import { useDispatch } from "react-redux";
import { getNowPlatingMoives } from "../../redux/movieSlice";
import { NOW_PLAYING, OPTIONS } from "../../utils/Constant";
const Broswerpage = () => {
    


const NowPlayingMovies=async()=>{
    
    try{
      const res=await axios.get(NOW_PLAYING,OPTIONS)
      console.log(res)
    
    }
    catch(err)
    {
      console.log(err)
    }
  }
 useEffect(()=>{
    NowPlayingMovies()
 },[])
//    useNowPlayingMovies()
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Navbar />
      {/* <ReactPlayer
        url="https://youtu.be/HyIyd9joTTc?si=VNRFk7lajuHOHMcP"
        playing={true}
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1.5)',
          transformOrigin: 'center center',
          objectFit:"fill"
        }}
        className="scale-responsive"
      /> */}

      {/* <img
        src={extraction}
        className="w-screen h-screen absolute top-0 left-0 object-cover"
        alt="main image"
      /> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div
          className="bg-gradient-to-b from-black via-transparent to-transparent 
					absolute w-full h-full top-0 left-0 -z-10"
        />

        <div className="max-w-2xl">
          <h1 className="mt-4 text-6xl font-extrabold text-balance">
            sfdgdsgss
          </h1>
          <p className="mt-2 text-lg">fdsgdgdsg</p>

          <p className="mt-4 text-lg">ggfgfdgddffhdhdddddddddddddddddddddhdffvdfg</p>
        </div>

        <div className="flex mt-8">
          <Link
            to={`/watch/`}
            className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex
							 items-center"
          >
            <FaPlay className="size-6 mr-2 fill-black" />
            Play
          </Link>

          <Link
            to={`/watch/`}
            className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
          >
            <FaInfo className="size-6 mr-2" />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Broswerpage;
