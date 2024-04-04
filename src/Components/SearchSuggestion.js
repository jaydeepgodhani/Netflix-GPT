import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchSuggestion = () => {
  const { names, results } = useSelector((store) => store.gpt);
  if (!names) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-75">
      {names.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={results[index]} />
      ))}
    </div>
  );
};

export default SearchSuggestion;
