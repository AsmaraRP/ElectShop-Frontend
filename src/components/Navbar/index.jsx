import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const dataUser = "";

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-lightblue fixed-top text-center shadow-sm px-3 px-lg-0">
      <div className="container-lg">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            height="44"
          />
          <span className="fw-bold text-primary ms-2 d-none d-sm-inline">
            Electshop
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className={`navbar-nav mx-auto my-2 ${
              pathname === "/" ? "d-flex" : "d-none"
            }`}
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link me-lg-5 me-md-4 me-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <hr className="my-1" />
            <li className="nav-item">
              <Link to="/product" className="nav-link me-lg-5 me-md-4 me-0">
                Product
              </Link>
            </li>
            <hr className="my-1" />
            <li className="nav-item">
              <Link to="#" className="nav-link me-lg-5 me-md-4 me-0">
                Community
              </Link>
            </li>
            <hr className="my-1" />
            <li className="nav-item">
              <Link to="#" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          {!dataUser ? (
            <Link
              to="/login"
              className="btn btn-primary py-2 shadow"
              role="button"
            >
              Sign in
            </Link>
          ) : (
            <div className="align-items-center">
              <div className="dropdown ms-5">
                <button
                  className="bg-transparent border-0 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="  0,20"
                >
                  <img
                    src={dataUser ? dataUser.imagePath : ""}
                    alt="profile"
                    className="rounded-circle"
                    style={{ width: "44px" }}
                  />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end rounded-3"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
