import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import netflixLogo from '../assets/netflix-logo.png'
import avatar from '../assets/avatar1.png'
import { FaSearch } from 'react-icons/fa'
import { MdLogout, MdMenu } from 'react-icons/md'

const Navbar = () => {
    const [mobileToggle,setMobileToggle]=useState(false)
    const toggleMobileMenu = () => setMobileToggle(!mobileToggle);
  return (
    <div className='max-w-6xl mx-auto flex flex-wrap justify-between p-4 h-20 w-full'>
        <div className='flex items-center gap-10 z-50'>
            <Link to={'/browse'}>
            <img src={netflixLogo} alt="logo" className='w-52 sm:w-40'/>
            </Link>
            <div className='hidden sm:flex gap-3 items-center'>
            <Link to={'/browse'} className='hover:underline'>
            Movies 
            </Link>
            <Link to={'/browse'} className='hover:underline'>
            Tv Shows 
            </Link>
            <Link to={'/history'} className='hover:underline'>
            Search History 
            </Link>
            </div>
        </div>
        <div className='flex gap-2 items-center z-50'>
				<Link to={"/search"}>
					<FaSearch className='size-6 cursor-pointer' />
				</Link>
				<img src={avatar} alt='Avatar' className='h-8 rounded cursor-pointer' />
				<MdLogout className='size-6 cursor-pointer' />
				<div className='sm:hidden'>
					<MdMenu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
				</div>
			</div>
        {/* //mobile */}
        {mobileToggle && (
    <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800 '>
            
            <Link to={'/browse'} className='hover:underline p-2 block'>
            Movies 
            </Link>
            <Link to={'/browse'} className='hover:underline p-2 block'>
            Tv Shows 
            </Link>
            <Link to={'/history'} className='hover:underline p-2 block'>
            Search History 
            </Link>
            </div>
        )}
    </div>
  )
}

export default Navbar