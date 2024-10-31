import { Link } from "react-router-dom";
import netflixlogo from "../assets/netflix-logo.png"
import notfound from '../assets/404.png'
const NotFoundPage = () => {
	return (
		<div
			className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center  text-white relative'
		>
			
			<header className='absolute top-0 left-0 p-4 w-full z-50'>
				<Link to={"/"}>
					<img src={netflixlogo} alt='Netflix' className='h-8' />
				</Link>
			</header>
			<img src={notfound} alt=" not found" className="w-full h-full absolute"/>
			<main className='text-center error-page--content z-10'>
				<h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
				<p className='mb-6 text-xl'>
					Sorry, we can't find that page. You'll find lots to explore on the home page.
				</p>
				<Link to={"/browse"} className='bg-white text-black py-2 px-4 rounded'>
					Netflix Home
				</Link>
			</main>
		</div>
	);
};
export default NotFoundPage;