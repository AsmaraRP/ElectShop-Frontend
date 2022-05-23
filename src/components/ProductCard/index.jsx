import React from "react";
import "./index.css";

function ProductCard(props) {
  const { id, type, image, price } = props.data;
  const stopPropagationDetail = (e) => {
    e.stopPropagation();
    props.handleClickDetail(id);
  };
  const stopPropagationCheckout = (e) => {
    e.stopPropagation();
    props.handleClickCheckout(id);
  };
  return (
    <div className="card product-card text-start bg-white border-0 shadow position-relative">
      <div
        className="card-header border-0 p-2 bg-white"
        style={{ overflow: "hidden" }}
      >
        <img
          src={`${process.env.REACT_APP_CLOUDINARY}/${image.split(",")[0]}`}
          alt="headset-1"
          className="product-card__product-image w-100 h-100"
          style={{ objectFit: "cover", borderRadius: "16px 16px 0 0" }}
        />
      </div>

      <div className="card-body align-items-end px-3 pt-1">
        <p className="text-darkgray mb-1 text-truncate">{type}</p>
        <p className="product-price h4 fw-bold text-primary mb-4">
          {price} IDR
        </p>
        <div className="d-flex">
          <button
            className="btn btn-outline-primary fw-semibold py-2 flex-grow-1"
            onClick={(e) => stopPropagationDetail(e)}
          >
            Details
          </button>
          <button
            className="btn btn-primary px-sm-3 py-2 ms-2 d-lg-none"
            onClick={(e) => stopPropagationCheckout(e)}
          >
            <i class="bi bi-cart d-block"></i>
          </button>
        </div>
      </div>
      <button
        className="add-to-cart btn btn-secondary rounded-circle shadow-sm position-absolute d-none d-lg-flex justify-content-center align-items-center translate-middle"
        style={{ width: "64px", height: "64px", top: 0, right: 0 }}
        onClick={(e) => stopPropagationCheckout(e)}
      >
        <i className="bi bi-cart text-light fs-4 d-block"></i>
      </button>
    </div>
  );
}

export default ProductCard;
