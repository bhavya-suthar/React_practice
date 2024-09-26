import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setFlag }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const handleLogout = () => {
    localStorage.setItem("flag", JSON.stringify(false));
    navigate("/");
    setFlag(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {t("Navbar")}
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dashboard"
                >
                  {t('Home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {t('About Us')}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {t('Contact Us')}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/faqs">
                  {t('FAQs')}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/privacypolicy">
                 {t('Privacy Policy')}
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </Link> */}
                <select
                  className="form-select"
                  onChange={(e) => {
                    handleClick(e);
                  }}
                >
                  <option value={"en"}>English</option>
                  <option value={"guj"}>Gujarati</option>
                  <option value={"hin"}>Hindi</option>
                </select>
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
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleLogout}
                >
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
