import React from "react";
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links align-center">
                <li>
                  {/* dummy links */}
                  <Link to="/seller">Seller Center</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/download">Download</Link>
                </li>
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span className="fs-13">Follow Us</span>
                  <ul className="social-links flex align-center">
                    <li className="mx-2">
                      <a href="www.facebook.com" className="fs-13">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="www.instagram.com" className="fs-13">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                <li>
                  <Link to="/" className="top-link-itm">
                    <span className="top-link-itm-ico mx-2">
                      <i className="fa-solid fa-circle-question"></i>
                    </span>
                    <span className="top-link-itm-txt">Support</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/">
                    <span className="top-link-itm-txt">Register</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/">
                    <span className="top-link-itm-txt">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-cnt-bottom">
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
