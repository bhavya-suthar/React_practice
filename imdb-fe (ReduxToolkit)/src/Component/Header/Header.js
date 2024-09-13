import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchData } from "../../Redux/slices/MovieSlice";

const Header = () => {
  
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const handleSearch = async()=>{
  //   try {
  //     const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=3f65d6932f9ebaa0c639a286b34f6531')
  //     console.log("🚀 ~ handleSearch ~ response:", response)
  //     dispatch(searchData(response.data))
  //     navigate("/")
      
  //   } catch (error) {
  //     console.log("🚀 ~ handleSearch ~ error:", error)
      
  //   }
  // }
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
        {/* <div className="searchclass"><input onChange={(e)=>e.target.value} type="text" className="search"/><button className="searchBtn" onClick={handleSearch}>Search</button></div> */}
      </div>
    </div>
  );
};

export default Header;
