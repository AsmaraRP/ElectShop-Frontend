import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

function HistoryCard(props) {
  const [count, setCount] = useState(0);
  const { name, type, productTotal, price, image, productId } = props.data;
  const increaseCounters = () => {
    console.log("Increase Counter");
    setCount(count + 1);
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    setCount(count - 1);
  };

  const stopPropagationDetail = (e) => {
    e.stopPropagation();
    props.handleDetail(productId);
  };
  const stopPropagationReview = (e) => {
    e.stopPropagation();
    props.handleReview(productId);
  };
  return (
    <div className="historyCard" key={props.key}>
      <div className="historyCard__image">
        <img
          src={`${process.env.REACT_APP_CLOUDINARY}/${image.split(",")[0]}`}
          alt="headphone"
          className="historyCard__image--picture"
        />
      </div>
      <div className="historyCard__desc">
        <p className="historyCard__desc--type">{name}</p>
        <h3 className="historyCard__desc--title">{type}</h3>
        <h3 className="historyCard__desc--item">{productTotal} Item</h3>
        <h3 className="historyCard__desc--price">{productTotal * price} IDR</h3>
      </div>
      <div className="historyCard__counter">
        <div className="historyCard__counter--boxCount">
          <h3 className="historyCard__counter--total">Total</h3>
          <h1 className="historyCard__counter--total">$3000</h1>
          <button
            className="historyCard__counter--details"
            onClick={(e) => {
              stopPropagationDetail(e);
            }}
          >
            Details
          </button>
          <button
            className="historyCard__counter--details"
            onClick={(e) => {
              stopPropagationReview(e);
            }}
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
