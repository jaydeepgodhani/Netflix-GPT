import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainCont = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {title, overview, id} = mainMovie;

  return (
    <div className='pt-[20%] bg-black md:pt-0'>
    <VideoTitle title={title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainCont;