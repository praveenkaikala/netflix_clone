import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-4'>
      <h1 className='text-3xl text-white pl-2'>{title}</h1>
      <div className="flex cursor-pointer overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center ">
            {
                movies?.map((movie,index)=>{
                    return(
                        <MovieCard movie={movie} key={movie.id} posterPath={movie.poster_path}/>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default MovieList