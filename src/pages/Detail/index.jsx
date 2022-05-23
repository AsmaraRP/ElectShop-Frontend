import React, { useState, useEffect } from "react";
import "./index.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataProductId } from "../../stores/actions/product";
import { getDataCheckout, postDataCheckout, updateDataCheckout } from "../../stores/actions/checkout";
import { act } from "react-dom/test-utils";
import { Action } from "history";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [isNotes, setIsNotes] = useState(false);
  const [item, setItem] = useState("");
  const [rating, setRating] = useState("");
  const [isReview, setIsReview] = useState(false);
  const [idCheckout, setIdCheckout] = useState(197);
  const productId = params.id;
  const [data, setData] = useState({
    productId: params.id,
    addresDelivery: "",
    checkoutNote: isNotes,
    productTotal: "",
    review: null,
    rating: null,
  });
  const handleChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(postDataCheckout(data));
      // setIdCheckout(result.action.payload.data.data.id);

      navigate("/payment", {
        state: [product, data, result.action.payload.data.data.id],
      });
      getDataCheckout();
    } catch (error) {
      console.log(error.response);
    }
  };
  const checkout = useSelector((state) => state.checkout);
  useEffect(() => {
    getdataCheckout();
  }, []);
  const product = useSelector((state) => state.product);
  useEffect(() => {
    getdataProductId();
  }, []);
  const getdataCheckout = async () => {
    try {
      await dispatch(getDataCheckout(productId));
      setRating(checkout);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataProductId = async () => {
    try {
      await dispatch(getDataProductId(productId));
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChooseProduct = () => {
    console.log(product.data[0].image.split(",").map((item) => console.log(item)));
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
    if (item === product.data[0].stock) {
      setItem(item == product.data[0].stock);
    } else {
      setItem(item + 1);
    }
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    if (item === 0) {
      setItem(item === 0);
    } else {
      setItem(item - 1);
    }
  };
  {
    /*------------------------------------Handle create Notes------------------------------------------*/
  }
  const handleIsNotes = (event) => {
    if (event.key === "Enter") {
      setIsNotes(false);
      setNotes(event.target.value);
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
    console.log(event.target);
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
  return (
    <div className="container pagePreview">
      {/*------------------------------------- Product Preview-------------------------------------------*/}
      <div className="detail">
        <div className="detail__Preview">
          <div className="detail__Preview--Box1">
            <h5 className="detail__Preview--type">{product.data[0].name}</h5>
            <img src={`https://res.cloudinary.com/elecshop/image/upload/v1652968777/${product.data[0].image.split(",")[0]}`} alt="headphone" className="detail__Preview--selection--image--1" />
            <div className="detail__Preview--overflow">
              {product.data[0].image.split(",").map((itemImage) => (
                <div className="detail__Preview--selection" value={itemImage} onClick={handleChooseProduct}>
                  <img src={`https://res.cloudinary.com/elecshop/image/upload/v1652968777/${itemImage}`} alt="headphone" className="detail__Preview--selection--image" />
                </div>
              ))}
            </div>
          </div>
          {/*------------------------------------- Product Checkout Counter-------------------------------------------*/}
          <div className="detail__Preview--Box2">
            <h5 className="detail__Prewiew--Box2_header">Details</h5>
            <div className="detail__Prewiew--Box2_total">
              <div className="detail__Preview_BoxTotal--1">
                <button onClick={increaseCounters} className="detail__Preview--counter">
                  +
                </button>
                <p className="detail__Preview--counterText">{item}</p>
                <button onClick={decreaseCounters} className="detail__Preview--counter">
                  -
                </button>
              </div>
              <div className="detail__Preview_BoxTotal--2">
                <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
                <p className="detail__Preview_BoxTotal--2--total">{product.data[0].stock}</p>
              </div>
            </div>
            {isNotes ? (
              <input type="text" name="checkoutNote" onKeyPress={(handleIsNotes, handleChangeData)} className="detail__Preview--addNotes--text" placeholder="choose color and press enter" />
            ) : (
              <button onClick={() => setIsNotes(true)} className="detail__Preview--addNotes">
                Add notes
              </button>
            )}
            <p className="detail__Preview--subTotal">Sub Total</p>
            {/* <h3
              className="detail__Preview--price"
              name="productTotal"
              onSubmit={handleProductTotal}
            >
              Rp {item * product.data[0].price}
            </h3> */}
            <input className="detail__Preview--price" type="number" name="productTotal" onChange={handleProductTotal} placeholder={item * product.data[0].price} />
            <div className="detail__Preview--checkout">
              <button type="submit" className="detail__Preview--checkout--checkout" onClick={handleSubmit}>
                Checkout
              </button>
              <button className="detail__Preview--checkout--cart">
                <img src={require("../../assets/images/Cart.png")} alt="cart" onClick={handleCart} />
              </button>
            </div>
          </div>
        </div>
        {/*------------------------------------- Review Section-------------------------------------------------------*/}
        <div className="detail__Desc">
          <h1 className="detail__Desc--header">{product.data[0].type}</h1>

          <h3 className="detail__Desc--status">Sold</h3>
          <h3 className="detail__Desc--statusNumber">{product.data[0].stock}</h3>
          <img src={require("../../assets/images/Vector.png")} alt="rateImage" className="detail__Desc--image" />
          {checkout.data.map((item) => (
            <h3 className="detail__Desc--rate">{item.rating}</h3>
          ))}
          <hr />

          <button className="detail__Desc--Button" onClick={handleReview} value="Details">
            Details
          </button>
          <button className="detail__Desc--Button" value="Review" onClick={() => setIsReview(true)}>
            Reviews
          </button>
          <hr />

          {isReview ? (
            <div className="detail__reviewProduct">
              <div className="detail__reviewProductHeader">
                <div className="detail__reviewProductHeader__flex">
                  <div className="detail__reviewProductHeader__flex1">
                    <h3 className="detail__reviewProductHeader__flex1--name" name="nameProduct">
                      {product.data[0].type}
                    </h3>
                    <p className="detail__reviewProductHeader__flex1--item" name="item">
                      {item} Item
                    </p>
                    <p className="detail__reviewProductHeader__flex1--item">|Rp {item * product.data[0].price}</p>
                  </div>
                  <div className="detail__reviewProductHeader__flex2">
                    <div className="rating">
                      <input name="rating" id="5" type="radio" onClick={handleRateStar} />
                      <label htmlFor="5">☆</label>
                      <input name="rating" id="4" type="radio" onClick={handleRateStar} />
                      <label htmlFor="4">☆</label>
                      <input name="rating" id="3" type="radio" onClick={handleRateStar} />
                      <label htmlFor="3">☆</label>
                      <input name="rating" id="2" type="radio" onClick={handleRateStar} />
                      <label htmlFor="2">☆</label>
                      <input name="rating" id="1" type="radio" onClick={handleRateStar} />
                      <label htmlFor="1">☆</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Input Review" onChange={handleTypeReview} name="review"></textarea>
              </div>
              <button type="submit" className="detail__reviewProduct__button" onClick={handleUpdate}>
                Submit
              </button>
              <div className="cardComment__scroll">
                {checkout.data.map((item) => (
                  <div className="cardComment">
                    <div className="cardComment__flex1">
                      <h5 className="cardComment__account">user</h5>
                      <h3 className="cardComment__type">{item.type}</h3>
                      <h4 className="cardComment__item">1 item</h4>
                      <h5 className="cardComment__price">|{item.productTotal}</h5>
                      <p className=" cardComment__comment">{item.review}</p>
                    </div>
                    <div className="cardComment__flex2">
                      <img src={require("../../assets/images/Vector.png")} alt="star" className="cardComment__star" />
                      <h4 className="cardComment__rating">{item.rating}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>{product.data[0].description}</p>
          )}
        </div>
      </div>
      {/*------------------------------------- Review Product Media Queries-------------------------------------------------------*/}
      <div className="detail__Preview--Box2--query">
        <h5 className="detail__Prewiew--Box2_header">Details</h5>
        <div className="detail__Prewiew--Box2_total">
          <div className="detail__Preview_BoxTotal--1">
            <button onClick={increaseCounters} className="detail__Preview--counter">
              +
            </button>
            <p className="detail__Preview--counterText">{item}</p>
            <button onClick={decreaseCounters} className="detail__Preview--counter">
              -
            </button>
          </div>
          <div className="detail__Preview_BoxTotal--2">
            <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
            <p className="detail__Preview_BoxTotal--2--total">{product.data[0].stock}</p>
          </div>
        </div>
        <button className="detail__Preview--addNotes"> Add notes</button>
        <p className="detail__Preview--subTotal">Sub Total</p>
        <h3 className="detail__Preview--price">
          <input className="detail__Preview--price" type="number" name="productTotal" onChange={handleProductTotal} placeholder={item * product.data[0].price} />
        </h3>
        <div className="detail__Preview--checkout">
          <button className="detail__Preview--checkout--checkout" onClick={handleSubmit}>
            Checkout
          </button>
          <button className="detail__Preview--checkout--cart">
            <img src={require("../../assets/images/Cart.png")} alt="cart" onClick={handleCart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
