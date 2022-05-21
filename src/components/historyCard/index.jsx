import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

function HistoryCard(props) {
  const [count, setCount] = useState(0);
  const increaseCounters = () => {
    console.log("Increase Counter");
    setCount(count + 1);
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    setCount(count - 1);
  };
  return (
    <div className="historyCard">
      <div className="historyCard__image">
        <img
          src={require("../../assets/images/image 15.png")}
          alt="headphone"
          className="historyCard__image--picture"
        />
      </div>
      <div className="historyCard__desc">
        <p className="historyCard__desc--type">Headphone</p>
        <h3 className="historyCard__desc--title">Sony MDR-5706</h3>
        <h3 className="historyCard__desc--item">1 Item</h3>
        <h3 className="historyCard__desc--price">$3000</h3>
      </div>
      <div className="historyCard__counter">
        <div className="historyCard__counter--boxCount">
          <h3 className="historyCard__counter--total">Total</h3>
          <h1 className="historyCard__counter--total">$3000</h1>
          <button className="historyCard__counter--details">Details</button>
          <button className="historyCard__counter--details">Review</button>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
