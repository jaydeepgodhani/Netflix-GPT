import React, { useRef } from "react";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";
import { USER_AVATAR } from "../Utils/constants";

const SearchGPT = () => {
  return (
    <>
      <div>
        <img
          className="fixed h-screen object-cover md:bg-cover md:min-w-full md:min-h-full md:absolute md:-z-10 absolute -z-10"
          src={USER_AVATAR}
          alt="bg_img"
        />
      </div>
      <div>
        <div className="pt-[10%] md:p-0">
          <SearchBar />
          <SearchSuggestion />
        </div>
      </div>
    </>
  );
};

export default SearchGPT;
