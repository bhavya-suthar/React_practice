import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMovieFailure } from "./MovieSlice";

const initialState = {
  allTv: {
    data: {},
    loading: false,
    error: null,
  },
};

const TVSlice = createSlice({
    name:'tv',
    initialState,
    reducers:{
        fetchAllTvSuccess:(state,action)=>{
            state.allTv.data = action.payload,
            state.allTv.error = null
        },
        fetchAllTvFailure:(state,action)=>{
            state.allTv.error = action.payload
        }
    }
})

export const {fetchAllTvSuccess,fetchAllTvFailure} = TVSlice.actions
export default TVSlice.reducer