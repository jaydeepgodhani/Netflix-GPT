import { useEffect } from "react";
import { TMDB_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchedTopRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !fetchedTopRatedMovies && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
