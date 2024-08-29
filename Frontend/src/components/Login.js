import React, { useState } from 'react'
import Header from './Header'
import { API_KEY } from '../utils/Constant'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { setLoading, setUser } from '../redux/userSlice'

const Login = () => {
  const [isLogin,setIsLogin]=useState(true)
 const [fullName,setFullName]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const isLoading=useSelector((store)=>store.app.isLoading)

const getFornData=async(e)=>{
  e.preventDefault()
  dispatch(setLoading(true))
  const headers={
    headers:{
      'Content-type':"application/json"
    },
    withCredentials:true
  }
  //login
    if(isLogin)
      {
        try{
        let userData={
          email:email,
          password:password
        }
        const res=await axios.post(`${API_KEY}/login`,userData,headers)
        console.log(res)
        if(res.data.success)
          {
            toast.success(res.data.message)
          }
          dispatch(setUser(res.data.user))
          navigate('/browse')
        console.log(res.data.user)
      }
    
      catch(error)
      {
        console.log(error)
        toast.error(error.response.data.message)
      }
      finally{
        dispatch(setLoading(false))
      }
    }
    //register
      else{
        try{
        let userData={
          fullName:fullName,
          email:email,
          password:password
        }
        const res=await axios.post(`${API_KEY}/register`,userData)
        if(res.data.success)
          {
            toast.success(res.data.message)
          }
        setIsLogin(true)
      }
    catch (error) {
      toast.error(error.response.data.message)
    console.log(error);
  }
  finally{
    dispatch(setLoading(false))
  }
  
      }
     
}
  return (
    <div className=''>
      <Header/>
      <div className='absolute  '>
        <img className='w-[100vw] h-[100vh]' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="backgroung-image" />

      </div>
      <form onSubmit={getFornData} className='absolute right-0 left-0 mx-auto my-40 w-3/12 py-7 bg-black flex flex-col justify-center items-center opacity-90 rounded-md'>
        <h1 className='text-white text-2xl font-bold mb-1'>{isLogin?"Login":"Signup"}</h1>
        <div className='flex flex-col justify-center w-3/5'>
          {
            !isLogin && (
              <input  className='my-2 outline-none rounded-sm bg-gray-800 p-2 text-white' name='fullName' value={fullName} type="text" placeholder='fullname' onChange={(e)=>setFullName(e.target.value)}/>

            )
          }
          <input className='my-2 outline-none rounded-sm bg-gray-800 p-2 text-white' name='email' value={email} type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
          <input className='my-2 outline-none rounded-sm bg-gray-800 p-2 text-white' name='password' value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
          <button type='submit' className='bg-[#D91921] font-medium text-white my-1 p-1 rounded-sm'>{isLoading?("Loading..."):(isLogin?"Login":"SignUp")}</button>
                    <p className='text-white'>{isLogin?"New to netflix?":"Already have an account?"}<span className='font-medium  text-blue-500 cursor-pointer'
          onClick={()=>{
            setIsLogin(!isLogin)
          }}
          >{isLogin?"SignUp":"Login"}</span></p>
                 </div>
      </form>
    </div>
  )
}

export default Login