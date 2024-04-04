import { useEffect } from "react";
import { TMDB_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // fetch if data is present or not first, if data is already there then dont make API call
  const fetchedNowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !fetchedNowPlayingMovies && nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
