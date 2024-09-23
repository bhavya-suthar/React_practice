import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMovie, movieDetail } from "../Thunk/Thunk.js";

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
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovie.pending, (state, action) => {
        state.allMovies.loading = true;
      })

      .addCase(fetchAllMovie.fulfilled, (state, action) => {
        // debugger
        state.allMovies.loading = false
          state.allMovies.data = action.payload
          console.log("🚀 ~ .addcase ~ action.payload:", action.payload)
         state.allMovies.error = null
      })
      .addCase(fetchAllMovie.rejected, (state, action) => {
        state.allMovies.loading = false
          state.allMovies.error = action.payload
      })

      .addCase(movieDetail.pending, (state, action) => {
        state.getSingleMovie.loading = true;
      })
      .addCase(movieDetail.fulfilled, (state, action) => {
        // debugger
        state.getSingleMovie.data = action.payload;
        state.getSingleMovie.loading = false;
        state.allMovies.error = null;
      })
      .addCase(movieDetail.rejected, (state, action) => {
        (state.getSingleMovie.loading = false),
          (state.getSingleMovie.error = action.payload);
      })

      // .addcase(getType.pending, (state, action) => {
      //   state.getType.loading = true;
      // })
      // .addcase(getType.fulfilled, (state, action) => {
      //   state.getType.loading = false;
      //   state.getType.data = action.payload;
      //   state.getType.error = null;
      // })
      // .addcase(getType.rejected, (state, action) => {
      //   state.getType.loading = false;
      //   state.getType.error = action.payload;
      // })
      // .addcase(searchData.fulfilled, (state, action) => {
      //   const movieSearch = state.allMovies.data.results.filter(
      //     (ele) => ele.id === action.payload.id
      //   );
      //   console.log("🚀 ~ movieSearch:", movieSearch);
      //   if (movieSearch.length > 0) {
      //     state.allMovies.data = movieSearch; // Update the state with search result
      //   } else {
      //     console.log("No movie found with the provided ID");
      //   }
      // });
  },
});

// export const {
  // fetchAllMovieStart,
  // fetchAllMovieSuccess,
  // fetchAllMovieFailure,
  // movieDetailStart,
  // movieDetailSuccess,
  // movieDetailFailure,
  // getTypeStart,
  // getTypeSuccess,
  // getTypeFailure,
  // searchData,
// } = movieSlice.actions;
export default movieSlice.reducer;
