import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allMovies: {
    data: {},
    loading: false,
    error: null,
  },
  getSingleMovie: {
    data: {},
    loading: false,
    error: null,
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchAllMovieStart:(state,action)=> { 
        state.allMovies.loading=true
    },
    fetchAllMovieSuccess:(state,action)=> {
        state.allMovies.loading = false,
        state.allMovies.data = action.payload,
        state.allMovies.error = null
    },
    fetchAllMovieFailure:(state,action)=> {
        state.allMovies.loading = false,
        state.allMovies.error = action.payload
    },
  },
});

export const {fetchAllMovieStart,fetchAllMovieSuccess,fetchAllMovieFailure} = movieSlice.actions;
export default movieSlice.reducer;
