import React, { useEffect } from 'react'
import useVideo from './hooks/useVideo';
import { useSelector } from 'react-redux';

const BackgrondVideo = ({videoId}) => {
  useVideo(videoId)
  const NowPlaying=useSelector((store)=>store.movie.movieTrailer)
  if(!NowPlaying)return;
  return (
    <div className='w-[100vw]   '>
      <iframe
       className=' w-full aspect-video overflow-hidden -mt-20'
        src={`https://www.youtube.com/embed/${NowPlaying.key}?si=fCdnN7oaHIfWn8km&autoplay=1&mute=1&loop=0  `}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackgrondVideo