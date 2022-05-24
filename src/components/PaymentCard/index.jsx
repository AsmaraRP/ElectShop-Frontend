import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { updateCheckout, deleteCheckout } from "../../stores/actions/cart";

function PaymentCard(props) {
  const { id, image, name, price, stock, type } = props.productData;
  const { productTotal } = props.checkoutData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(productTotal);
  const increaseCounters = () => {
    console.log("Increase Counter");
    setCount(count + 1);
    props.setTotalPrice(price * (count + 1));
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    setCount(count - 1);
    props.setTotalPrice(price * (count - 1));
  };
  const handleNaviegateDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handleDelete = () => {
    deletecheckout();
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

export default PaymentCard;
