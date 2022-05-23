import React, { useState, useEffect } from "react";
import "./index.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataProductId } from "../../stores/actions/product";
import {
  getDataCheckout,
  postDataCheckout,
  updateDataCheckout,
} from "../../stores/actions/checkout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Detail() {
  const { state } = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [isNotes, setIsNotes] = useState(false);
  const [item, setItem] = useState(1);
  const [rating, setRating] = useState("");
  const [isReview, setIsReview] = useState(false);
  const [idCheckout, setIdCheckout] = useState(243);
  const [dataId, setDataId] = useState([]);
  const [dataIdCheckout, setDataIdCheckout] = useState([]);
  const [image, setImage] = useState("");
  const productId = params.id;
  const [totalPrice, setTotalPrice] = useState(0);
  const [openPageFromHistory, setOpenPageFromHistory] = useState(true);
  const [count, setCount] = useState(0);

  const [data, setData] = useState({
    productId: params.id,
    addresDelivery: "",
    checkoutNote: isNotes,
    productTotal: "",
    review: null,
    rating: null,
  });
  const checkout = useSelector((state) => state.checkout);
  const product = useSelector((state) => state.product);
  useEffect(() => {
    getdataCheckout();
  }, []);

  useEffect(() => {
    getdataProductId();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(postDataCheckout(data));
      console.log(data);
      navigate("/payment", {
        state: [product, data, result.action.payload.data.data.id, totalPrice],
      });
      getDataCheckout();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmitCart = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(postDataCheckout(data));

      navigate("/cart", {
        state: [product, data, result.action.payload.data.data.id],
      });
      getDataCheckout();
    } catch (error) {
      console.log(error.response);
    }
  };

  const getdataCheckout = async () => {
    try {
      const dataCheckout = await dispatch(getDataCheckout(productId));
      setDataIdCheckout(dataCheckout.action.payload.data.data);
      setRating(checkout);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataProductId = async () => {
    try {
      const dataProduct = await dispatch(getDataProductId(state.idProduct));
      setDataId(dataProduct.action.payload.data.data[0]);
      setImage(dataProduct.action.payload.data.data[0].image);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChooseProduct = () => {
    console.log(
      product.data[0].image.split(",").map((item) => console.log(item))
    );
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateDataCheckout(idCheckout, data));
    getDataCheckout();
  };
  {
    /*------------------------------------Handle Counters for product------------------------------------------*/
  }

  const increaseCounters = () => {
    console.log("Increase Counter");
    if (dataId.stock == count) {
      setCount((count = dataId.stock));
    } else {
      setCount(count + 1);
    }
    setData({ ...data, productTotal: item + 1 });
    setTotalPrice((item + 1) * dataId.price);
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    if (count === 0) {
      setCount(count == 0);
    } else {
      setCount(count - 1);
    }
    setData({ ...data, productTotal: item - 1 });
    setTotalPrice((item - 1) * dataId.price);
  };
  {
    /*------------------------------------Handle create Notes------------------------------------------*/
  }
  const handleIsNotes = (event) => {
    if (event.key === "Enter") {
      setIsNotes(false);
      setNotes(event.target.value);
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };
  {
    /*------------------------------------Handle create Review------------------------------------------*/
  }
  const handleTypeReview = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleRateStar = (event) => {
    setData({ ...data, [event.target.name]: event.target.id });
  };
  const handleProductTotal = (event) => {
    console.log(event.target.name);
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmitReview = (event) => {};
  const handleReview = (event) => {
    console.log(event.target.type);
    if (event.target.type === "submit") {
      setIsReview(false);
    }
  };
  const handleRating = () => {
    checkout.data.map((item) => setRating(item.rating));
  };
  {
    /*------------------------------------- Handle Button-------------------------------------------*/
  }
  const handleButton = (event) => {
    console.log(event.target.name);
  };
  const handleCart = () => {
    navigate("/cart");
  };
  if (state.review && openPageFromHistory) {
    setOpenPageFromHistory(false);
    setIsReview(true);
  }
  return (
    <div>
      <Navbar />
      <div className="container pagePreview">
        {/*------------------------------------- Product Preview-------------------------------------------*/}
        <div className="detail">
          <div className="detail__Preview">
            <div className="detail__Preview--Box1">
              <h5 className="detail__Preview--type">{dataId.name}</h5>
              {product.isLoading ? (
                <div className="col-12 text-center">
                  <div
                    className="spinner-border text-primary text-center"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src={`https://res.cloudinary.com/elecshop/image/upload/v1652968777/${
                      image.split(",")[0]
                    }`}
                    alt="headphone"
                    className="detail__Preview--selection--image--1"
                  />
                  <div className="detail__Preview--overflow">
                    {image.split(",").map((itemImage) => (
                      <div
                        className="detail__Preview--selection"
                        value={itemImage}
                        onClick={handleChooseProduct}
                      >
                        <img
                          src={`https://res.cloudinary.com/elecshop/image/upload/v1652968777/${itemImage}`}
                          alt="headphone"
                          className="detail__Preview--selection--image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/*------------------------------------- Product Checkout Counter-------------------------------------------*/}
            <div className="detail__Preview--Box2">
              <h5 className="detail__Prewiew--Box2_header">Details</h5>
              <div className="detail__Prewiew--Box2_total">
                <div className="detail__Preview_BoxTotal--1">
                  <button
                    onClick={increaseCounters}
                    className="detail__Preview--counter"
                  >
                    +
                  </button>
                  <p
                    className="detail__Preview--counterText"
                    onChange={handleProductTotal}
                  >
                    {count}
                  </p>
                  <button
                    onClick={decreaseCounters}
                    className="detail__Preview--counter"
                  >
                    -
                  </button>
                </div>
                <div className="detail__Preview_BoxTotal--2">
                  <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
                  <p className="detail__Preview_BoxTotal--2--total">
                    {dataId.stock}
                  </p>
                </div>
              </div>
              {isNotes ? (
                <input
                  type="text"
                  name="checkoutNote"
                  onKeyPress={handleIsNotes}
                  className="detail__Preview--addNotes--text"
                  placeholder="choose color and press enter"
                />
              ) : (
                <>
                  <button
                    onClick={() => setIsNotes(true)}
                    className="detail__Preview--addNotes"
                  >
                    Add notes
                  </button>
                  <div>
                    <p className="detail__Preview--addNotes--message">
                      {data.checkoutNote}
                    </p>
                  </div>
                </>
              )}
              <p className="detail__Preview--subTotal">Sub Total</p>
              {/* <h3
              className="detail__Preview--price"
              name="productTotal"
              onSubmit={handleProductTotal}
            >
              Rp {item * product.data[0].price}
            </h3> */}
              <input
                className="detail__Preview--price"
                type="number"
                name="productTotal"
                onChange={handleProductTotal}
                value={item * dataId.price}
                disabled
              />
              <div className="detail__Preview--checkout">
                <button
                  type="submit"
                  className="detail__Preview--checkout--checkout"
                  onClick={handleSubmit}
                >
                  Checkout
                </button>
                <button
                  className="detail__Preview--checkout--cart"
                  onClick={handleSubmitCart}
                >
                  <img
                    src={require("../../assets/images/Cart.png")}
                    alt="cart"
                  />
                </button>
              </div>
            </div>
          </div>
          {/*------------------------------------- Review Section-------------------------------------------------------*/}
          <div className="detail__Desc">
            <h1 className="detail__Desc--header">{dataId.type}</h1>

            <h3 className="detail__Desc--status">Sold</h3>
            <h3 className="detail__Desc--statusNumber">{dataId.stock}</h3>
            <img
              src={require("../../assets/images/Vector.png")}
              alt="rateImage"
              className="detail__Desc--image"
            />
            {dataIdCheckout.map((item) => (
              <h3 className="detail__Desc--rate">{item.rating}</h3>
            ))}
            <hr />

            <button
              className="detail__Desc--Button"
              onClick={handleReview}
              value="Details"
            >
              Details
            </button>
            <button
              className="detail__Desc--Button"
              value="Review"
              onClick={() => setIsReview(true)}
            >
              Reviews
            </button>
            <hr />

            {isReview ? (
              <>
                {idCheckout ? (
                  <div className="detail__reviewProduct__Submit">
                    <div className="detail__reviewProductHeader">
                      <div className="detail__reviewProductHeader__flex">
                        <div className="detail__reviewProductHeader__flex1">
                          <h3
                            className="detail__reviewProductHeader__flex1--name"
                            name="nameProduct"
                          >
                            {dataId.type}
                          </h3>
                          <p
                            className="detail__reviewProductHeader__flex1--item"
                            name="item"
                          >
                            {item} Item
                          </p>
                          <p className="detail__reviewProductHeader__flex1--item">
                            |Rp {item * dataId.price}
                          </p>
                        </div>
                        <div className="detail__reviewProductHeader__flex2">
                          <div className="rating">
                            <input
                              name="rating"
                              id="5"
                              type="radio"
                              onClick={handleRateStar}
                            />
                            <label htmlFor="5">☆</label>
                            <input
                              name="rating"
                              id="4"
                              type="radio"
                              onClick={handleRateStar}
                            />
                            <label htmlFor="4">☆</label>
                            <input
                              name="rating"
                              id="3"
                              type="radio"
                              onClick={handleRateStar}
                            />
                            <label htmlFor="3">☆</label>
                            <input
                              name="rating"
                              id="2"
                              type="radio"
                              onClick={handleRateStar}
                            />
                            <label htmlFor="2">☆</label>
                            <input
                              name="rating"
                              id="1"
                              type="radio"
                              onClick={handleRateStar}
                            />
                            <label htmlFor="1">☆</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Input Review"
                        onChange={handleTypeReview}
                        name="review"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="detail__reviewProduct__button"
                      onClick={handleUpdate}
                    >
                      Submit
                    </button>
                  </div>
                ) : null}

                <div className="detail__reviewProduct">
                  <div className="cardComment__scroll">
                    {dataIdCheckout.map((item) => (
                      <div className="cardComment">
                        <div className="cardComment__flex1">
                          <h5 className="cardComment__account">user</h5>
                          <h3 className="cardComment__type">{item.type}</h3>
                          <h4 className="cardComment__item">1 item</h4>
                          <h5 className="cardComment__price">
                            |{item.productTotal}
                          </h5>
                          <p className=" cardComment__comment">{item.review}</p>
                        </div>
                        <div className="cardComment__flex2">
                          <img
                            src={require("../../assets/images/Vector.png")}
                            alt="star"
                            className="cardComment__star"
                          />
                          <h4 className="cardComment__rating">{item.rating}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p>{dataId.description}</p>
            )}
          </div>
        </div>
        {/*------------------------------------- Review Product Media Queries-------------------------------------------------------*/}
        <div className="detail__Preview--Box2--query">
          <h5 className="detail__Prewiew--Box2_header">Details</h5>
          <div className="detail__Prewiew--Box2_total">
            <div className="detail__Preview_BoxTotal--1">
              <button
                onClick={increaseCounters}
                className="detail__Preview--counter"
              >
                +
              </button>
              <p className="detail__Preview--counterText">{count}</p>
              <button
                onClick={decreaseCounters}
                className="detail__Preview--counter"
              >
                -
              </button>
            </div>
            <div className="detail__Preview_BoxTotal--2">
              <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
              <p className="detail__Preview_BoxTotal--2--total">
                {product.data[0].stock}
              </p>
            </div>
          </div>
          <button className="detail__Preview--addNotes"> Add notes</button>
          <p className="detail__Preview--subTotal">Sub Total</p>
          <h3 className="detail__Preview--price">
            <input
              className="detail__Preview--price"
              type="number"
              name="productTotal"
              onChange={handleProductTotal}
              placeholder={item * dataId.price}
            />
          </h3>
          <div className="detail__Preview--checkout">
            <button
              className="detail__Preview--checkout--checkout"
              onClick={handleSubmit}
            >
              Checkout
            </button>
            <button
              className="detail__Preview--checkout--cart"
              onClick={handleSubmitCart}
            >
              <img src={require("../../assets/images/Cart.png")} alt="cart" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
