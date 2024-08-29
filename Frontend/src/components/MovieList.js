import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='px-4 relative'>
      <h1 className='text-3xl text-white pl-2'>{title}</h1>
      <div className="flex items-center">
        <button
          className="absolute left-6 z-10 p-2 bg-gray-700 rounded-full text-white"
          onClick={scrollLeft}
        >
        <FaAngleLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex items-center">
            {movies?.map((movie, index) => (
              <MovieCard movie={movie} key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          className="absolute right-4 z-10 p-2 bg-gray-700 rounded-full text-white"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default MovieList;
