import axios from "axios"
import { getTopRatedMovies} from "../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { OPTIONS,TopRated_movies } from "../../utils/Constant"

const useTopRatedMovies=async()=>{
    const dispatch=useDispatch()
    try {
        const res=await axios.get(TopRated_movies,OPTIONS)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default useTopRatedMovies;