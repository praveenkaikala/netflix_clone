import React from 'react'
import VideoTitle from './VideoTitle'
import BackgrondVideo from './BackgrondVideo'
import { useSelector } from 'react-redux'

const MainContainer = () => {

const movie=useSelector(store=>store.movie.nowPlayingMovies)
 console.log("main  container")
 if(!movie) return;
  const {overview,id,title}=movie[0]
  console.log(id)
  return (
    <div className='w-[100vw] flex cursor-pointer overflow-x-hidden no-scrollbar scroll-smooth'>
        <VideoTitle overview={overview} title={title}/>
        <BackgrondVideo videoId={id}/>
    </div>
  )
}

export default MainContainer