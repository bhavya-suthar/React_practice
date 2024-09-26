import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({setFlag}) => {
  const navigate = useNavigate()

  const handleLogout= ()=>{
    localStorage.setItem("flag",JSON.stringify(false))
    navigate("/")
    setFlag(false)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/faqs">
                  FAQ
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/privacypolicy">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">English</Link></li>
            <li><Link className="dropdown-item" to="/">Hindi</Link></li>
            <li><Link className="dropdown-item" to="/">Gujarati</Link></li>
          </ul>
        </li>
              
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registration
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            <div style={{display:"flex",marginLeft:"10px"}}>
              <button className="btn btn-primary" type="submit" onClick={handleLogout}>
                Logout
              </button>
            </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
