import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryCont = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-8 relative z-10">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Recommanded"} movies={movies} />
        <MovieList title={"Foreign"} movies={movies} />
      </div>
    </div>
  );
}

export default SecondaryCont;