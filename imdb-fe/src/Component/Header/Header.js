import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
    <div className='headerLeft'>
        <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className="header__icon" /></Link>
        <Link to='/movie/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
        <Link to='/movie/toprated' style={{textDecoration:"none"}}><span>Top Rated</span></Link>
        <Link to='/movie/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>
    </div>
    </div>
  )
}

export default Header