import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../Component/movieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMovieFailure,
  fetchAllMovieStart,
  fetchAllMovieSuccess,
} from "../../Redux/slices/MovieSlice";
import axios from "axios";

const Home = () => {
  // const [popularMovies, setPopularMovies] = useState([]);
  // console.log("🚀 ~ Home ~ popularMovies:", popularMovies);
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.movie.allMovies)
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAllMovieStart());
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        dispatch(fetchAllMovieSuccess(response.data));
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
        dispatch(fetchAllMovieFailure(error?.response?.data?.message));
      }

      // fetch(
      //   "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      // )
      //   .then((res) => res.json())
      //   .then((data) => setPopularMovies(data.results));
    };
    fetchData();
  }, []);
  const movies = Array.isArray(data) ? data : data?.results || [];

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link
                key={movie.id} // Add a key to avoid React warnings
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt={movie.original_title}
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p> // Fallback in case data is empty or not an array
          )}</Carousel>
      </div>
      <MovieList />
    </>
  );
};

export default Home;
