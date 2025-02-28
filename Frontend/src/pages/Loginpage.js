import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import netflixLogo from "../assets/netflix-logo.png"
import AxiosPrivate from '../auth/AxiosPrivate';
import toast from 'react-hot-toast';
import axios from 'axios';
const Loginpage = () => {
    const { searchParams } = new URL(document.location);
	const emailValue = searchParams.get("email");

	const [email, setEmail] = useState(emailValue || "");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    //   axios.defaults.withCredentials=true
	const handleSignUp = async(e) => {
		e.preventDefault();
		try {
            const payload={
                email,username,password
            }
          const res= await  AxiosPrivate.post('api/user/login',payload)
          toast.success(res.data.message)
          console.log(res.data)
        } catch (error) {
            console.log(error)
            toast.error("SignIn Failed")
        }
	};

    return (
		<div className='h-screen w-full hero-bg'>
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
				<Link to={"/"}>
					<img src={netflixLogo} alt='logo' className='w-52' />
				</Link>
			</header>

			<div className='flex justify-center items-center mt-10 mx-3'>
				<div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
					<h1 className='text-center text-white text-2xl font-bold mb-4'>Sign In</h1>

					<form className='space-y-4' onSubmit={handleSignUp}>
						<div>
							<label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
								Email
							</label>
							<input
								type='email'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='you@example.com'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

				

						<div>
							<label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
								Password
							</label>
							<input
								type='password'
								className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='••••••••'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							className='w-full py-2 bg-red-600 text-white font-semibold rounded-md
							hover:bg-red-700
						'

						>
						Sign In
						</button>
					</form>
					<div className='text-center text-gray-400'>
						Dont't have an account ?{" "}
						<Link to={"/signup"} className='text-red-500 hover:underline'>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loginpage