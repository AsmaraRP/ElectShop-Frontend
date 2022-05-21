import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/actions/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.user.msg);
  const isError = useSelector((state) => state.user.isError);
  const isLoading = useSelector((state) => state.user.isLoading);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resultLogin = await axios.post("auth/login", form);
      dispatch(getUserById(resultLogin.data.data.id));
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container-lg">
      <div className="row vh-100">
        <div className="col-12 col-md-5 p-3 d-flex justify-content-center align-items-center position-relative">
          <button
            className="btn bg-primary bg-opacity-10 px-2 py-1 position-absolute top-0 start-0 ms-3 mt-3"
            style={{ bordeRadius: "10px" }}
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-chevron-left text-primary fw-bold fs-5"></i>
          </button>
          <div className="container-lg px-md-4 px-3">
            {!msg ? null : isError ? (
              <div className="alert alert-danger py-2" role="alert">
                {msg}
              </div>
            ) : (
              <div className="alert alert-success py-2" role="alert">
                {msg}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <h1 className="fw-bold">Welcome Back!</h1>
              <p className="opacity-75 fw-semibold mb-4">
                Steps to get started, find the best stuff.
              </p>
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
                  onChange={handleChangeForm}
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
                  onChange={handleChangeForm}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link
                  to="#"
                  className="opacity-50 text-decoration-none text-dark"
                >
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary py-2 px-4 shadow"
                >
                  {isLoading ? (
                    <div
                      class="spinner-border text-light spinner-border-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <p className="text-center w-100 position-absolute bottom-0 start-50 translate-middle-x">
              Not registered yet?{" "}
              <Link
                to="/register"
                className="text-primary text-decoration-none"
              >
                Create an account!
              </Link>
            </p>
          </div>
        </div>
        <div className="col-7 p-3 d-none d-md-block">
          <div className="login-img card bg-secondary h-100 d-flex justify-content-end align-items-center position-relative">
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

export default Login;
