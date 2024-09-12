import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTypeFailure, getTypeStart, getTypeSuccess } from "../../Redux/slices/MovieSlice";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  console.log("🚀 ~ MovieList ~ type:", type);
  
  
    const {data} =useSelector(state=>state.movie.getType)
    console.log("🚀 ~ MovieList ~ data:", data)
  const dispatch = useDispatch();
  const getData = async () => {
    dispatch(getTypeStart())
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      console.log("🚀 ~ getData ~ response:", response);
      dispatch(getTypeSuccess(response.data.results))
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
      dispatch(getTypeFailure())
    }
    // fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    // .then(res => res.json())
    // .then(data => setMovieList(data.results))
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [ type]);
  
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {data.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
