import React from 'react'
import netflixLogo from "../../assets/netflix-logo.png"
import { Link } from 'react-router-dom'
const HomeScreen = () => {
  return (
    <div className='hero-bg  relative'
    
    >
        <header className='max-w-6xl mx-auto flex items-center justify-center p-4 pb-10 w-full'>
        <img src={netflixLogo} alt='logo' className='w-52' />
        <Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded'>
        Sign In
        </Link>
        </header>
        <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>

        </div>
    </div>
  )
}

export default HomeScreen