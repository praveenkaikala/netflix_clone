import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoading:false,
        category:"movie"
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        },
        setCatagory:(state,action)=>{
            state.category=action.payload
        }
    }
})

export const {setUser,setLoading,setCatagory}=userSlice.actions;
export default userSlice.reducer;