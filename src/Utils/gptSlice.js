import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addSearchedMovies: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});

export const { toggleGPTSearchView, addSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
