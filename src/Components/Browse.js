import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCont from "./MainCont";
import SecondaryCont from "./SecondaryCont";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchGPT from "./SearchGPT";

const Browse = () => {

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <SearchGPT />
      ) : (
        <>
        <MainCont />
        <SecondaryCont />
        </>
      )}
    </div>
  );
};

export default Browse;
