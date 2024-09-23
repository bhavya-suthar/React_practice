import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMovie = createAsyncThunk("AllMovie/fetch", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  console.log("🚀 ~ fetchAllMovie ~ response:", response)
  console.log("🚀 ~ fetchAllMovie ~ response?.data?.results:", response?.data?.results)
  return response?.data?.results;
});


export const movieDetail = createAsyncThunk("movieDetail/fetch",
    async({id})=>{
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US` );
      console.log("🚀 ~ movieDetail ~ response:", response?.data)
        console.log("🚀 ~ movieDetail ~ id:", id)
      
});
// export const getType = createAsyncThunk();
// export const searchData = createAsyncThunk();
