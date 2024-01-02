import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topMovieTrailer: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopMovieTrailer: (state, action) => {
      state.topMovieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
