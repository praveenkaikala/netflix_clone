import React from 'react'
import { BANNER_URL } from '../utils/Constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48   overflow-hidden pl-2'>
  <img className='w-full h-full object-cover' src={`${BANNER_URL}${posterPath}`} alt='Banner' />
</div>
  )
}

export default MovieCard