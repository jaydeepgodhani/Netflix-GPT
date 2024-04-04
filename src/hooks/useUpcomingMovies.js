import { useEffect } from "react";
import { TMDB_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchedUpcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !fetchedUpcomingMovies && upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
