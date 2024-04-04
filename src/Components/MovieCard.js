import React from 'react'
import { IMG_URL } from '../Utils/constants';

const MovieCard = ({imagePath}) => {
  return (
    <div className='w-28 pr-2 md:w-48 md:pr-3'>
      <img src={IMG_URL + imagePath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;