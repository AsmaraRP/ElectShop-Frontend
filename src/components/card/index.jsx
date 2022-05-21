import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";

function ShopCard(props) {
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
    <div className="shopCard">
      <div className="shopCard__checkBox">
        <div className="form-check">
          <input
            className="form-check-input shopCard__check"
            type="checkbox"
            value="check"
            id="flexCheckChecked"
          />
        </div>
      </div>
      <div className="shopCard__image">
        <img
          src={require("../../assets/images/image 15.png")}
          alt="headphone"
          className="shopCard__image--picture"
        />
      </div>
      <div className="shopCard__desc">
        <h3 className="shopCard__desc--title">Sony MDR-5706</h3>
        <p className="shopCard__desc--type">Headphone</p>
        <h3 className="shopCard__desc--price">$3000</h3>
      </div>
      <div className="shopCard__counter">
        <button className="shopCard__counter--delete">
          <img src={require("../../assets/images/delete.png")} alt="delete" />
        </button>
        <div className="shopCard__counter--boxCount">
          <button
            onClick={increaseCounters}
            className="shopCard__counter--boxCount--count"
          >
            +
          </button>
          <p className="shopCard__counter--counterText">{count}</p>
          <button
            onClick={decreaseCounters}
            className="shopCard__counter--boxCount--count"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;