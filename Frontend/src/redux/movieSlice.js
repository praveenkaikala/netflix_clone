import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        toggle:false,
        movieTrailer:null,
    },
    reducers:{
        getNowPlatingMoives:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        getPopularMoives:(state,actions)=>{
            state.popularMovies=actions.payload
        },
        getTopRatedMovies:(state,actions)=>{
            state.topRatedMovies=actions.payload
        },
        getUpComingMovies:(state,actions)=>{
            state.upComingMovies=actions.payload
        },
        getToggle:(state)=>{
            state.toggle=!state.toggle;
        }
        ,getMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
})

export const {getNowPlatingMoives,getPopularMoives,getTopRatedMovies,getUpComingMovies,getToggle,getMovieTrailer}=movieSlice.actions
export default movieSlice.reducer