import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Activation() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <main className="bg-skyblue pb-4 vh-100 d-flex align-items-center">
        <div className="container-lg text-center mb-5">
          <h1 className="display-4 fw-bold text-center mb-4">
            Welcome &#128075;
          </h1>
          <p className="fs-4 fw-semibold mb-0 text-center">
            Your account has been verified
          </p>
          <p className="fs-4 fw-semibold mb-5 text-center">
            Let's go find some stuffs on{" "}
            <span className="text-primary">Electshop</span>
          </p>
          <button
            className="btn btn-primary fw-semibold shadow py-2 px-4"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home
          </button>
        </div>
      </main>
    </div>
  );
}
