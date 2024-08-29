import axios from "axios"
import { getNowPlatingMoives, getPopularMoives } from "../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { NOW_PLAYING, OPTIONS, POPULAR_MOVIES } from "../../utils/Constant"

const usePopularMovie=async()=>{
    const dispatch=useDispatch()
    try {
        const res=await axios.get(POPULAR_MOVIES,OPTIONS)
        console.log(res.data.results)
        dispatch(getPopularMoives(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default usePopularMovie;