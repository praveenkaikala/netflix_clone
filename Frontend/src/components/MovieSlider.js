import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MINI_URL_MOVIES, OPTIONS, POPULAR_MOVIES } from "../utils/Constant";
import { useSelector } from "react-redux";
import store from "../redux/store";

const MovieSlider = ({ type }) => {
	const [content, setContent] = useState([]);
	const [showArrows, setShowArrows] = useState(false);
    const {category}=useSelector((store)=>store.app)
   
	const sliderRef = useRef(null);

	const formattedCategoryName =
		type.replaceAll("_", " ")[0].toUpperCase() + type.replaceAll("_", " ").slice(1);

	const fetchData=async()=>{
        try{
          const data = await axios.get(`${MINI_URL_MOVIES}/${category}/${type}`, OPTIONS);
          console.log(data.data.results);
          setContent(data.data.results)
        }
        catch(err)
        {
          console.log(err)
        }
      }
     useEffect(()=>{
     fetchData()
     },[category])
	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
		}
	};
	const scrollRight = () => {
		sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

	return (
		<div
			className=' text-white relative '
			onMouseEnter={() => setShowArrows(true)}
			onMouseLeave={() => setShowArrows(false)}
		>
			<h2 className='mb-4 text-2xl font-bold'>
				{formattedCategoryName}
			</h2>

			<div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef}>
				{content?.map((item) => (
					<Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
						<div className='rounded-lg overflow-hidden'>
							<img
								src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
								alt='Movie image'
								className='transition-transform duration-300 ease-in-out group-hover:scale-125'
							/>
						</div>
						<p className='mt-2 text-center'>{item.title || item.name}</p>
					</Link>
				))}
			</div>

			{showArrows && (
				<>
					<button
						className='absolute top-1/2 -translate-y-1/2  flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            '
						onClick={scrollLeft}
					>
						<FaChevronLeft size={24} />
					</button>

					<button
						className='absolute top-1/2 -translate-y-1/2 right-5 md:right-0 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            '
						onClick={scrollRight}
					>
						<FaChevronRight size={24} />
					</button>
				</>
			)}
		</div>
	);
};
export default MovieSlider;