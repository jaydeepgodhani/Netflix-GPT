import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryCont = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-8 relative z-10">
        {nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top rated"} movies={topRatedMovies} />
        )}
        {nowPlayingMovies && (
          <MovieList title={"Recommanded"} movies={nowPlayingMovies} />
        )}
        {nowPlayingMovies && (
          <MovieList title={"Foreign"} movies={nowPlayingMovies} />
        )}
      </div>
    </div>
  );
}

export default SecondaryCont;

// driver bata = 400
// tamilnadu tax =  1500
// etios 21500
// 6000 extra
// per day 6000
// 27500

// 300 km
// 500 extra