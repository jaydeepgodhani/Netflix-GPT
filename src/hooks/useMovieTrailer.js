import { useEffect } from "react";
import { TMDB_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../Utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((item) => item.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
