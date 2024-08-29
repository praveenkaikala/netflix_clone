import axios from "axios"
import { getUpComingMovies} from "../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { OPTIONS,UPCOMING_MOVIES } from "../../utils/Constant"

const useUpComingMovies=async()=>{
    const dispatch=useDispatch()
    try {
        const res=await axios.get(UPCOMING_MOVIES,OPTIONS)
        dispatch(getUpComingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default useUpComingMovies;