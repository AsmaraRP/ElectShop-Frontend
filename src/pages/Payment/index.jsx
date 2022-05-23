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
import { createTransaction } from "../../stores/actions/transaction";
import { getDataProductId } from "../../stores/actions/product";

function Payment() {
  const { state } = useLocation();
  const dataUser = useSelector((state) => state.user);
  const [adress, setAdress] = useState(dataUser.data.address);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    addresDelivery: "",
    review: null,
    rating: null,
    statusCart: "active",
  });
  const [idCheckout] = useState(state[2]);
  const [productData, setProductData] = useState({});
  const [totalPrice, setTotalPrice] = useState(state[3]);
  const [transactionData, setTransactionData] = useState({
    checkoutId: idCheckout,
    totalPrice: totalPrice,
  });

  const checkOut = useSelector((state) => state.checkOut);
  const handleAdress = (event) => {
    setAdress(event.target.value);
  };

  console.log(adress);
  const navigate = useNavigate();

  useEffect(() => {
    getDataProductById();
  }, []);

  useEffect(() => {
    setTransactionData({ ...transactionData, totalPrice });
  }, [totalPrice]);

  const handlePayment = async (e) => {
    e.preventDefault();

    setData({ ...data, statusCart: "notActive" });
    await dispatch(updateDataCheckout(idCheckout, data));
    const result = await dispatch(createTransaction(transactionData));
    window.open(result.action.payload.data.data.redirectUrl);
  };

  const getDataProductById = async () => {
    const result = await dispatch(getDataProductId(state[1].productId));
    setProductData(result.action.payload.data.data[0]);
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
            {
              <ShopCard
                checkoutData={state[1]}
                productData={productData}
                setTotalPrice={setTotalPrice}
              />
            }
          </div>
          <div className="payment__priceBoxs">
            <div className="payment__priceBox__total">
              <h1 className="payment__priceBox__total__total">Total</h1>
              <div className="payment__priceBox__flex">
                <h3 className="payment__priceBox__flex--item"> Item Price</h3>
                <h3 className="payment__priceBox__flex--price">
                  Rp {totalPrice}
                </h3>
              </div>
              <div className="payment__priceBox__flex">
                <h3 className="payment__priceBox__flex--item"> Discount</h3>
                <h3 className="payment__priceBox__flex--price">Rp {0}</h3>
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
                  Rp {totalPrice}
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
              <h3 className="payment__priceBox__flex--price">
                Rp {totalPrice}
              </h3>
            </div>
            <div className="payment__priceBox__flex">
              <h3 className="payment__priceBox__flex--item"> Discount</h3>
              <h3 className="payment__priceBox__flex--price">Rp {0}</h3>
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
                Rp {totalPrice}
              </h3>
            </div>
            <button className="payment__payBillsButton" onClick={handlePayment}>
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
