import React from 'react'
import { IMG_URL } from '../Utils/constants';

const MovieCard = ({imagePath}) => {
  return (
    <div className='w-48 pr-3'>
      <img src={IMG_URL + imagePath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard;