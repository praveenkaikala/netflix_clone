import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY } from '../utils/Constant'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { setUser } from '../redux/userSlice'
import { getToggle } from '../redux/movieSlice'
const Header = () => {
  const user=useSelector((store)=>store.app.user)
  const toggle=useSelector((store)=>store.movie.toggle)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(user)
  const logOutHanderler=async()=>{
    try{
      const headers={
        headers:{
          'Content-Type':"application/json"
        },
        withCredentials:true
      }
     const res= await axios.get(`${API_KEY}/logout`, {headers:{
      'Content-Type':"application/json"
    },
    withCredentials:true
  })
      dispatch(setUser(null))
      toast.success(res.data.message)
      navigate('/')

    }
    catch(err)
    {
      console.log(err)
    }
  }
  const searchHandler=()=>{
    dispatch(getToggle())
  }
  return (
    <div className='absolute z-10 bg-gradient-to-b from-black flex items-center justify-between w-[100%] top-0'>
     
      <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
     {
      user &&(
        <div className='mr-5 flex gap-3 items-center'>
      <h1 className='font-bold text-white'>{user.fullName}</h1>
      <button className='bg-[#D91921] px-4 py-2  text-white' onClick={logOutHanderler}>logout</button>
      <button  className='bg-[#D91921] px-4 py-2 text-white' onClick={searchHandler}>{toggle?"Home":"Search Movie"}</button>
     </div>
      )
     }
    </div>
  )
}

export default Header