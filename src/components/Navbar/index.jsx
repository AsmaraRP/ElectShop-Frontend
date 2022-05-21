import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios";
import { logout } from "../../stores/actions/user";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const refreshToken = localStorage.getItem("refreshToken");
  const dataUser = useSelector((state) => state.user.data);

  const handleLogout = async () => {
    localStorage.clear();
    dispatch(logout({ refreshToken }));
  };

  console.log(process.env.REACT_APP_CLOUDINARY_BASE_LINK + dataUser.image);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light ${
        pathname === "/" ? "bg-lightblue shadow-sm" : "bg-transparent"
      } fixed-top text-center px-3 px-lg-0`}
    >
      <div className="container-lg">
        {pathname === "/" ? (
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
        ) : (
          <button className="btn bg-lightblue" onClick={() => navigate(-1)}>
            <i className="bi bi-chevron-left text-primary"></i>
          </button>
        )}
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
          {Object.keys(dataUser).length === 0 ? (
            <Link
              to="/login"
              className="btn btn-primary py-2 shadow"
              role="button"
            >
              Sign in
            </Link>
          ) : (
            <div className="dropstart ms-5">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,20"
              >
                <img
                  src={
                    pathname === "/"
                      ? process.env.REACT_APP_CLOUDINARY_BASE_LINK +
                        dataUser.image
                      : require("../../assets/images/logo.png")
                  }
                  alt={pathname === "/" ? "profile picture" : "logo"}
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow border-0"
                aria-labelledby="dropdownMenuButton1"
              >
                {pathname === "/" ? (
                  ""
                ) : (
                  <div>
                    <li>
                      <img
                        src={
                          process.env.REACT_APP_CLOUDINARY_BASE_LINK +
                          dataUser.image
                        }
                        alt="profpic"
                        className="px-2"
                        style={{
                          width: "100%",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </li>
                    <hr className="my-2" />
                  </div>
                )}
                <li>
                  <Link className="dropdown-item" to="/cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/history">
                    History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profil">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
