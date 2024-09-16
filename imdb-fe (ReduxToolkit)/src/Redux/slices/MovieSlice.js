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
  getType: {
    data: {},
    loading: false,
    error: null,
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchAllMovieStart: (state, action) => {
      state.allMovies.loading = true;
    },
    fetchAllMovieSuccess: (state, action) => {
      (state.allMovies.loading = false),
        (state.allMovies.data = action.payload),
        (state.allMovies.error = null);
    },
    fetchAllMovieFailure: (state, action) => {
      (state.allMovies.loading = false),
        (state.allMovies.error = action.payload);
    },

    movieDetailStart: (state, action) => {
      state.getSingleMovie.loading = true;
    },
    movieDetailSuccess: (state, action) => {
      // debugger
      state.getSingleMovie.data = action.payload;
      state.getSingleMovie.loading = false;
      state.allMovies.error = null;
    },
    movieDetailFailure: (state, action) => {
      (state.getSingleMovie.loading = false),
        (state.getSingleMovie.error = action.payload);
    },

    getTypeStart: (state, action) => {
      state.getType.loading = true;
    },
    getTypeSuccess: (state, action) => {
      state.getType.loading = false;
      state.getType.data = action.payload
      state.getType.error= null
    },
    getTypeFailure: (state, action) => {
      state.getType.loading = false;
      state.getType.error = action.payload
    },
    searchData:(state,action)=>{
      const movieSearch = state.allMovies.data.results.filter((ele)=>ele.id === action.payload.id)
      console.log("🚀 ~ movieSearch:", movieSearch)
      if (movieSearch.length > 0) {
        state.allMovies.data = movieSearch;  // Update the state with search result
      } else {
        console.log("No movie found with the provided ID");
      }    }
  },
});

export const {
  fetchAllMovieStart,
  fetchAllMovieSuccess,
  fetchAllMovieFailure,
  movieDetailStart,
  movieDetailSuccess,
  movieDetailFailure,
  getTypeStart,
  getTypeSuccess,
  getTypeFailure,
  searchData
} = movieSlice.actions;
export default movieSlice.reducer;
