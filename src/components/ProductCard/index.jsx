import React from "react";
import "./index.css";

function ProductCard() {
  return (
    <div className="card product-card text-start border-0 shadow position-relative">
      <div className="card-header border-0 p-4 bg-skyblue">
        <p className="text-darkgray mb-0 d-none d-md-block">Sennheiser HD-25</p>
        <p className="fs-4 fw-bold text-primary d-none d-md-block">$3000</p>
        <img
          src={require("../../assets/images/headset-1.png")}
          alt="headset-1"
          className="product-card__product-image position-absolute start-50 translate-middle-x"
        />
        <button
          className="add-to-cart btn btn-secondary rounded-circle position-absolute d-none d-md-flex justify-content-center align-items-center translate-middle"
          style={{ width: "70px", height: "70px", top: 0, right: "2%" }}
        >
          <i className="bi bi-cart text-light fs-4 d-block"></i>
        </button>
      </div>
      <div className="card-body d-flex d-md-none align-items-end p-3">
        <button className="btn btn-primary fw-semibold p-2 flex-grow-1 me-2">
          Details
        </button>
        <button className="btn btn-outline-primary px-sm-3 py-2">
          <i className="bi bi-cart d-block"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
