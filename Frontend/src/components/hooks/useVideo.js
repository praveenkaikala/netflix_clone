import axios from "axios"
import { getMovieTrailer} from "../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { OPTIONS } from "../../utils/Constant"
import { useEffect } from "react"

const useVideo=async(id)=>{
    const dispatch=useDispatch()
    useEffect(() => {
        const getMovieById = async () => {
          try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, OPTIONS);
    
            console.log(res.data.results);
            const trailer = res?.data?.results?.filter((item) => {
              return item.type === "Trailer";
            })
            dispatch(getMovieTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));
          } catch (error) {
            console.log(error);
          }
        }
        getMovieById();
      },[])
}

export default useVideo