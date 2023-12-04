import React from "react";
import { Link } from "react-router-dom";
import "../style/sharedCss/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">
        <Link to="/">e-commerce</Link>
      </h1>
      <div className="navbar__div--button">
        <button className="navbar__button">
          <Link to="/login">
            <i className="bx bx-user"></i>
          </Link>
        </button>
        <button className="navbar__button">
          <Link to="/register">
            <i className="bx bxs-user-detail"></i>
          </Link>
        </button>
        <button className="navbar__button">
          <Link to="/purchases">
            <i className="bx bx-list-ul"></i>
          </Link>
        </button>
        <button className="navbar__button">
          <Link to="/cart">
            <i className="bx bx-cart"></i>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
