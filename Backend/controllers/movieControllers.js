const  fetchFromTMDB =require( "../service/tmdbService");
const axios=require('axios')
require('dotenv').config(); // Make sure to use dotenv like this at the top

const AxiosPrivate = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1500000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + process.env.TMDB_KEY,
    },
});

const getTrendingMovie = async (req, res) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, 20000); // 10 seconds

    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + process.env.TMDB_KEY,
            },
            signal: controller.signal,
        });
        
        clearTimeout(timeout);
        
        if (!response.ok) {
            throw new Error("Failed to fetch data from TMDB API");
        }
        
        const data = await response.json();
        res.json({ success: true, content: data });
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

 const getMovieTrailers=async(req, res)=> {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
		res.json({ success: true, trailers: data.results });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

 const  getMovieDetails=async(req, res) =>{
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
		res.status(200).json({ success: true, content: data });
	} catch (error) {
		if (error.message.includes("404")) {
			return res.status(404).send(null);
		}

		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

  const  getSimilarMovies=async(req, res)=> {
	const { id } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
		res.status(200).json({ success: true, similar: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

 const  getMoviesByCategory=async(req, res) =>{
	const { category } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

module.exports={getMoviesByCategory,getSimilarMovies,getMovieDetails,getMovieTrailers,getTrendingMovie}