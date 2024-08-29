import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import movieSlice from './movieSlice';

const store=configureStore({
    reducer:{
      app:userSlice,
      movie:movieSlice,
    },
    devTools: process.env.NODE_ENV !== 'production', 
})

export default store;