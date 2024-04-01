import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCont from "./MainCont";
import SecondaryCont from "./SecondaryCont";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainCont />
      <SecondaryCont />
    </div>
  );
};

export default Browse;
