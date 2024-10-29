const axios=require('axios')
const dotenv=require("dotenv")
dotenv.config()
 const fetchFromTMDB = async (url) => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer " +process.env.TMDB_KEY,
		},
	};
console.log(options)
	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};
module.exports=fetchFromTMDB