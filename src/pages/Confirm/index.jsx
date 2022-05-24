import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

function Confirm() {
  return (
    <div className="container pagePreview">
      <div className="transactionStatus__border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          fill="#0300AD"
          className="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <h1 className="transactionStatus__status">Transaction Status</h1>
        <h5 className="transactionStatus__statement">
          Transaction was successful, do you want to shop again?
        </h5>
        <Link to="/" className="transactionStatus__button">
          Shop Again
        </Link>
      </div>
      <h1>Recomendation For You</h1>
    </div>
  );
}

export default Confirm;
