import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import axios from "axios";
import { NOW_PLAYING, OPTIONS } from "../utils/Constant";
import { getNowPlatingMoives } from "../redux/movieSlice";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovie from "./hooks/usePopularMovie";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpComingMovies from "./hooks/useUpComingMovies";
import SearchMovie from "./SearchMovie";

export const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const toggle=useSelector((store)=>store.movie.toggle)
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpComingMovies();
  
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div className='overflow-y-auto overflow-x-hiddens no-scrollbar'>
      <Header />
      {toggle ? (
        <SearchMovie />
      ) : (
        <>
          <MainContainer />
          {/* <MovieContainer /> */}
        </>
      )}
    </div>
  );
};
