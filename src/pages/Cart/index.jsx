import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card";

function Cart() {
  const navigate = useNavigate();
  const handleNaviegateCheckout = () => {
    navigate("/payment");
  };
  const handleSelectAll = (event) => {
    console.log(event.target.checked);
  };
  return (
    <div className="container pagePreview">
      <div className="cart__searchSortBar">
        <div className="cart__search">
          <input
            type="search"
            placeholder="Tap To Search For Something"
            className="cart__searchbar"
          />
          <button className="cart__searchButton">
            <img
              src={require("../../assets/images/Search.png")}
              alt="searchBar"
              className="cart__searchButton--image"
            />
          </button>
        </div>
        <button className="cart__profileButton">
          <img src={require("../../assets/images/Shop.png")} alt="profileBar" />
        </button>
        <button className="cart__cartButton">
          <img src={require("../../assets/images/Profile.png")} alt="shopBar" />
        </button>
      </div>

      <h1 className="cart__header">Cart</h1>
      <div className="cart__flexBox">
        <div className="cart__flexBox--1">
          <div className="form-check">
            <input
              className="form-check-input cart__boxSelectAll"
              type="checkbox"
              value="check"
              id="flexCheckChecked"
              onClick={handleSelectAll}
            />
            <label
              className="form-check-label cart__selectAll"
              htmlFor="flexCheckChecked"
            >
              <h2>Select All</h2>
            </label>
          </div>
          <div className="cart__product">
            <div className="cart__productCard">
              <div className="cart__productCard--shopCard">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>
              <div className="cart__product--totalProduct1">
                <h5>Total</h5>
                <h1 className="cart__product--totalPrice1">$6000</h1>
                <button
                  className="cart__productPaymentBox--checkout"
                  onClick={handleNaviegateCheckout}
                >
                  {" "}
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart__productPayment">
          <div className="cart__productPaymentBox">
            <h2 className="cart__productPaymentBox--total">Total</h2>
            <div className="cart__ProductPaymentBox--price">
              <h4 className="cart__ProductPaymentBox--item">Item Price</h4>
              <h4 className="cart__ProductPaymentBox--nominal">$200</h4>
            </div>
            <div className="cart__ProductPaymentBox--price">
              <h4 className="cart__ProductPaymentBox--item">Discount</h4>
              <h4 className="cart__ProductPaymentBox--nominal">$200</h4>
            </div>
            <hr />
            <div className="cart__ProductPaymentBox--price">
              <h4
                className="cart__ProductPaymentBox--item"
                style={{ fontSize: "20px" }}
              >
                Bill
              </h4>
              <h4
                className="cart__ProductPaymentBox--nominal"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                $200
              </h4>
            </div>
            <button
              className="cart__productPaymentBox--checkout"
              onClick={handleNaviegateCheckout}
            >
              {" "}
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
