import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../../store/SidebarSlice";
import { getAllCategories } from "../../store/CategorySlice";
import {
  getAllCarts,
  getCartItemCount,
  getCartTotal,
} from "../../store/CartSlice";
import CartModel from "../CartModel/CartModel";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  console.log("🚀 ~ Navbar ~ categories:", categories);
  const carts = useSelector(getAllCarts);
  console.log("🚀 ~ Navbar ~ carts:", carts);
  const itemsCount = useSelector(getCartItemCount);
  console.log("🚀 ~ Navbar ~ itemsCount:", itemsCount);
  const [searchTerm, setSearchTerm] = useState(" ");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    // stopPropagation()
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            onClick={() => dispatch(setSidebarOn())}
            className="sidebar-show-btn text-white"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">Snap</span>Up.
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search your preferred items here"
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link
                to={`/search/${searchTerm}`}
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            {
              // taking only first 8 categories
              categories.slice(0, 10).map((category, idx) => (
                <li className="nav-item no-wrap" key={idx}>
                  <Link
                    to={`category/${category}`}
                    className="nav-link text-capitalize"
                  >
                    {category.replace("-", " ")}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">{itemsCount}</div>
            <CartModel carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
