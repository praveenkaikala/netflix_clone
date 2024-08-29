import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie=useSelector(store=>store.movie)
  console.log(movie)
  return (
    <div className='bg-black'>
      <div className='-mt-48 relative z-10'>
        <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"NowPlaying Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"UpComing Movies"} movies={movie.upComingMovies}/>
      </div>
      
    </div>
  )
}

export default MovieContainer