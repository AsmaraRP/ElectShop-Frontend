import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Register() {
  return (
    <div className="container-lg">
      <div className="row vh-100">
        <div className="col-12 col-md-5 p-3 d-flex justify-content-center align-items-center position-relative">
          <button
            className="btn bg-primary bg-opacity-10 px-2 py-1 position-absolute top-0 start-0 ms-3 mt-3"
            style={{ bordeRadius: "10px" }}
          >
            <i className="bi bi-chevron-left text-primary fw-bold fs-5"></i>
          </button>
          <div className="container px-lg-5 px-md-4 px-3">
            <form>
              <h1 className="fw-bold">Welcome, Please Create an Account!</h1>
              <p className="opacity-75 fw-semibold mb-4">
                Please fill in your name, email and password
              </p>
              <div className="input-group mb-3">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-person opacity-50"></i>
                </span>
                <input
                  type="fullName"
                  id="fullName"
                  className="form-control py-2 border-start-0"
                  placeholder="Your fullName address"
                  name="fullName"
                  aria-label="fullName"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-person opacity-50"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control py-2 border-start-0"
                  placeholder="Your email address"
                  name="email"
                  aria-label="email"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-key opacity-50"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control py-2 border-start-0"
                  placeholder="Your password"
                  name="password"
                  aria-label="password"
                />
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <button className="btn btn-primary py-2 px-4 shadow">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-7 p-3 d-none d-md-block">
          <div className="login-img card bg-secondary h-100 d-flex justify-content-end align-items-center position-relative">
            <img
              src={require("../../assets/images/register.png")}
              className="w-100"
              alt="login page illustration"
            />
            <div className="card welcome-card p-4 border-0 mb-5 position-absolute bottom-0 start-50 translate-middle-x">
              <img
                src={require("../../assets/images/logo.png")}
                className="align-self-start mb-3"
                alt="logo"
              />
              <h2 className="text-light fw-bold">Welcome to Electshop!</h2>
              <p className="text-light fw-semibold">
                We are an e-commerce that is engaged in buying and selling
                electronic goods, get our special offer now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
