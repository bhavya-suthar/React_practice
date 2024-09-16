import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchData } from "../../Redux/slices/MovieSlice";

const Header = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [search , setSearch] = useState()
  console.log("🚀 ~ Header ~ search:", search)

  const handleSearch = async()=>{
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=3f65d6932f9ebaa0c639a286b34f6531`)
      console.log("🚀 ~ handleSearch ~ response:", response)
      const movies = response.data.results;

      if (movies.length > 0) {
        const firstMovieId = movies[0].id;

        dispatch(searchData(response.data));
        // navigate("/movies");  // Ensure you're navigating to a correct route
        navigate(`/movie/${firstMovieId}`);  // Redirect to the movie details page

      } else {
        console.log("No movies found");
      }
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error)
      
    }
  }
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            className="header__icon"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/movies/now_playing" style={{ textDecoration: "none" }}>
          <span>Now Playing</span>
        </Link>
        <div className="searchclass"><input onChange={(e)=>setSearch(e.target.value)} type="text" className="search"/>
        <button className="searchBtn" onClick={handleSearch}>Search</button></div>
      </div>
    </div>
  );
};

export default Header;
