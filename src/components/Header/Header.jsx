import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./header.css"



const Header = () => {
  return (
    <>
      <nav className="navbar headrerNav  navbar-expand-lg ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="logo" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="courses">
                  Courses
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/register">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
