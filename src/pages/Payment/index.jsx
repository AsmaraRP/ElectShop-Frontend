import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import ShopCard from "../../components/card";
import { updateDataCheckout } from "../../stores/actions/checkout";
function Payment() {
  const { state } = useLocation();
  const [adress, setAdress] = useState();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    addresDelivery: "",
    review: null,
    rating: null,
    statusCart: "notActive",
  });

  const [idCheckout] = useState(state[2]);

  const checkOut = useSelector((state) => state.checkOut);
  const handleAdress = (event) => {
    setData(event.target.value);
  };

  console.log(state);
  const navigate = useNavigate();
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateDataCheckout(idCheckout, data));
    navigate("/history", {
      state: [idCheckout, data],
    });
  };

  return (
    <div className="container pagePreviews">
      <h1 className="payment__header"> CheckOut</h1>
      <div className="cart__product">
        <div className="cart__productCard">
          <div className="cart__productCard--adress">
            <h2>Delivery Adress</h2>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Input Adress"
                onChange={handleAdress}
              ></textarea>
            </div>
            <button className="cart__productCard--adress__button">
              {" "}
              Change Adress
            </button>
          </div>
          <div className="cart__productCard--shopCard">
            {<ShopCard data={state} key={state.id} />}
          </div>
          <div className="payment__priceBoxs">
            <div className="payment__priceBox__total">
              <h1 className="payment__priceBox__total__total">Total</h1>
              <div className="payment__priceBox__flex">
                <h3 className="payment__priceBox__flex--item"> Item Price</h3>
                <h3 className="payment__priceBox__flex--price"> $3000</h3>
              </div>
              <div className="payment__priceBox__flex">
                <h3 className="payment__priceBox__flex--item"> Discount</h3>
                <h3 className="payment__priceBox__flex--price"> $3000</h3>
              </div>
              <hr />
              <div className="payment__priceBox__flex">
                <h3
                  className="payment__priceBox__flex--item"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Bill
                </h3>
                <h3
                  className="payment__priceBox__flex--price"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  $6000
                </h3>
              </div>
              <button className="payment__payBillsButton">Pay Bills</button>
              <button className="payment__paymentButton">
                {" "}
                Choose Payment Method
              </button>
            </div>
          </div>
        </div>
        <div className="payment__priceBox">
          <div className="payment__priceBox__total">
            <h1 className="payment__priceBox__total__total">Total</h1>
            <div className="payment__priceBox__flex">
              <h3 className="payment__priceBox__flex--item"> Item Price</h3>
              <h3 className="payment__priceBox__flex--price"> $3000</h3>
            </div>
            <div className="payment__priceBox__flex">
              <h3 className="payment__priceBox__flex--item"> Discount</h3>
              <h3 className="payment__priceBox__flex--price"> $3000</h3>
            </div>
            <hr />
            <div className="payment__priceBox__flex">
              <h3
                className="payment__priceBox__flex--item"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Bill
              </h3>
              <h3
                className="payment__priceBox__flex--price"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                $6000
              </h3>
            </div>
            <button className="payment__payBillsButton" onClick={handleUpdate}>
              Pay Bills
            </button>
            <button className="payment__paymentButton">
              {" "}
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
