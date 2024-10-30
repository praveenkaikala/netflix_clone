const express=require("express")
const app=express()
const dotenv=require('dotenv')
const {connectDatabase} =require("./utils/Database")
const userRoutes=require("./routes/userRouter")
const movieRoutes=require("./routes/movieRoutes")
const cors=require("cors")
const cookieParser = require('cookie-parser');
const axios=require('axios')
dotenv.config({
    path:".env"
})
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors())
app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/movies',movieRoutes)
app.get('/',(req,res)=>{
    res.send("hello user")
})

app.listen(process.env.PORT,()=>{
console.log(`server running on port ${process.env.PORT}`)
})
connectDatabase()

const getTrendingMovie = async (req, res) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, 20000); // 10 seconds

    try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
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
       console.log(data)
    } catch (error) {
        console.error("Fetch error:", error);
       
    }
};
getTrendingMovie()