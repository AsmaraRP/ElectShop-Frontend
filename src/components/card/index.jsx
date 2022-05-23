import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { updateCheckout, deleteCheckout } from "../../stores/actions/cart";

function ShopCard(props) {
  const { id, image, name, price, productId, productTotal, type } = props.data;
  const {selectedCard, selected} = props


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    updateProductTotalCheckout();
  }, []);

  const updateProductTotalCheckout = async () => {
    try {
      // PanggilAction
      const productTotalUpdate = productTotal + count;
      const updatecheckout = await dispatch(
        updateCheckout(id, { productTotal: productTotalUpdate })
      );
      console.log(updatecheckout);
    } catch (error) {
      console.log(error.response);
    }
  };

  let count;
  const increaseCounters = () => {
    console.log("Increase Counter");
    count = 1;
    updateProductTotalCheckout();
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    count = -1;
    updateProductTotalCheckout();
  };

  const handleNaviegateDetail = () => {
    navigate(`/detail/${productId}`);
  };

  const deletecheckout = async () => {
    try {
      // PanggilAction
      const deletecheckout = await dispatch(deleteCheckout(id));
      console.log(deletecheckout);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDelete = () => {
    deletecheckout();
  };

  return (
    <div className="shopCard">
      <div className="shopCard__checkBox">
        <div className="form-check">
          <input
            className="form-check-input shopCard__check"
            type="checkbox"
            value="check"
            id={`${selected.includes(id)? "flexCheckChecked" : "flexCheckDefault"}`}
            onClick={() => {selectedCard({id, price, productTotal})}}
          />
        </div>
      </div>
      <div className="shopCard__image">
        <img
          src={
            image
              ? `${process.env.REACT_APP_CLOUDINARY}${image.split(",")[0]}`
              : null
          }
          alt="headphone"
          className="shopCard__image--picture"
        />
      </div>
      <div className="shopCard__desc">
        <h3
          className="shopCard__desc--title"
          onClick={() => handleNaviegateDetail()}
        >
          {type}
        </h3>
        <p className="shopCard__desc--type">{name}</p>
        <h3 className="shopCard__desc--price">{price * productTotal}</h3>
      </div>
      <div className="shopCard__counter">
        <button onClick={handleDelete} className="shopCard__counter--delete">
          <img src={require("../../assets/images/delete.png")} alt="delete" />
        </button>
        <div className="shopCard__counter--boxCount">
          <button
            onClick={increaseCounters}
            className="shopCard__counter--boxCount--count"
          >
            +
          </button>
          <p className="shopCard__counter--counterText">{productTotal}</p>
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
