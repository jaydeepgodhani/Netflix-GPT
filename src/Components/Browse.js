import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCont from "./MainCont";
import SecondaryCont from "./SecondaryCont";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainCont />
      <SecondaryCont />
    </div>
  );
};

export default Browse;
