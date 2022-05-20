import React from "react";
import "./index.css";

function ProductCard() {
  return (
    <div className="card product-card text-start border-0 shadow position-relative">
      <div className="card-header border-0 p-4 bg-skyblue">
        <p className="text-darkgray mb-0">Sennheiser HD-25</p>
        <p className="fs-4 fw-bold text-primary">$3000</p>
        <img
          src={require("../../assets/images/headset-1.png")}
          alt="headset-1"
          className="w-75 position-absolute start-50 translate-middle-x"
          style={{ bottom: "40px" }}
        />
        <button
          className="add-to-cart btn btn-secondary rounded-circle position-absolute d-flex justify-content-center align-items-center translate-middle"
          style={{ width: "70px", height: "70px", top: 0, right: "2%" }}
        >
          <i class="bi bi-cart text-light fs-4 d-block"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
