import axios from "axios"
import { getNowPlatingMoives } from "../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { NOW_PLAYING, OPTIONS } from "../../utils/Constant"


const useNowPlayingMovies=async()=>{
    const dispatch=useDispatch()
    try{
      const res=await axios.get(NOW_PLAYING,OPTIONS)
      console.log(res)
      dispatch(getNowPlatingMoives(res.data.results))
    }
    catch(err)
    {
      console.log(err)
    }
  }
  export default useNowPlayingMovies;