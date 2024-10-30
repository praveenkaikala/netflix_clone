import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import extraction from "../../assets/extraction.jpg";
import { Link } from "react-router-dom";
import { FaInfo, FaPlay } from "react-icons/fa";
import ReactPlayer from 'react-player'
import useNowPlayingMovies from "../../components/hooks/useNowPlayingMovies";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getNowPlatingMoives } from "../../redux/movieSlice";
import { MOVIE_CATEGORIES, NOW_PLAYING, OPTIONS, TV_CATEGORIES } from "../../utils/Constant";
import MovieSlider from "../../components/MovieSlider";
const Broswerpage = () => {
    const [nowPlaying,setNowPlaying]=useState(null)
const dispatch=useDispatch()
const {category}=useSelector((store)=>store.app)
const NowPlayingMovies=async()=>{
    try{
      const res=await axios.get(NOW_PLAYING,OPTIONS)
      console.log(res)
     const data=res.data.results
      dispatch(getNowPlatingMoives(data))
      const random = data[Math.floor(Math.random() * data.length)];
     
      
      const movie = await axios.get(`https://api.themoviedb.org/3/movie/${random.id}/videos`, OPTIONS);
      const filterdata=movie.data.results.filter((data)=>{
        return data.type=="Trailer"
      })
      const newData={...random,key:filterdata[0].key}
      setNowPlaying(newData)
      console.log(movie.data.results);
    }
    catch(err)
    {
      console.log(err)
    }
  }
 useEffect(()=>{
    NowPlayingMovies()
 },[])
 useEffect(()=>{
    console.log(nowPlaying)
 },[nowPlaying])
//    useNowPlayingMovies()
  return (
    <div className="relative h-screen w-screen overflow-auto bg-black text-white">
      <Navbar />
      {nowPlaying?(
        <div>
         <ReactPlayer
         url={`https://www.youtube.com/watch?v=${nowPlaying.key}`}
         playing={true}
         loop
         muted
         width="100%"
         height="80%"
         style={{
           position: 'absolute',
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%) scale(1.7)',
           transformOrigin: 'center center',
           objectFit:"fill"
         }}
         className="scale-responsive"
       />
       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div
          className="bg-gradient-to-b from-black via-transparent to-transparent 
					absolute w-full h-full top-0 left-0 -z-10"
        />

        <div className="max-w-2xl">
          <h1 className="mt-4 text-6xl font-extrabold text-balance">
          {nowPlaying.original_title}
          </h1>

          <p className="mt-4 text-lg">{nowPlaying.overview}</p>
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
      ):(
        <div className="w-screen h-screen text-center">
            loading
            </div>

      )}
    <div className="relative top-[79%] h-full w-full flex flex-col gap-10 p-10 ">
        {category=="movie"?(
<>
{MOVIE_CATEGORIES.map((cat,ind)=> <div key={ind}>
      <MovieSlider type={cat} />
        </div>
    )}
</>
    
        ):(
            <>
            {TV_CATEGORIES.map((cat,ind)=> <div key={ind}>
                  <MovieSlider type={cat} />
                    </div>
                )}
            </>
     
        )}
      </div> 
    </div>
  );
};

export default Broswerpage;
