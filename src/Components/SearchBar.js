import React, { useRef } from 'react'
import lang from '../Utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../Utils/openai"
import { TMDB_OPTIONS } from '../Utils/constants';
import { addSearchedMovies } from '../Utils/gptSlice';

const SearchBar = () => {

  const choosenLang = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovie = async(movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }

  const handleClick = async () => {
    const query = "Act as a movie recommendation system and suggest some movies for the query :"+searchText.current.value +". only give me names of 5 movies, comma separated. For example don,heraferi,godfather,sunflower"
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    if(!completion.choices){
      // TODO: handle error
    }

    const gptMovies = completion.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map(movie => searchMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addSearchedMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="bg-black md:w-1/2 w-full grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-8"
          placeholder={lang[choosenLang].placeholder}
        />
        <button className="col-span-4 py-2 px-4 m-4 bg-red-600 text-white font-bold" onClick={handleClick}>
          {lang[choosenLang].search}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;