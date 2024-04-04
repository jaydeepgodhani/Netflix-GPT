import { useEffect } from "react";
import { TMDB_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // fetch if data is present or not first, if data is already there then dont make API call
  const fetchedNowPopularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !fetchedNowPopularMovies && popularMovies();
  }, []);
};

export default usePopularMovies;
