import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const [item, setItem] = useState(0);
  const [star, setStar] = useState(0);
  const [button, setButton] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const [comment, setComment] = useState({
    nameProduct: "Sony",
    review: "",
    user: "andi",
    item: "1",
    price: "3000",
  });
  console.log(button);
  const increaseCounters = () => {
    console.log("Increase Counter");
    setItem(item + 1);
  };
  const decreaseCounters = () => {
    console.log("Decrease Counter");
    setItem(item - 1);
  };
  const handleReviewButton = (event) => {
    console.log(event.target.value);
  };
  const handleRateStar = (event) => {
    setStar(event.target.id);
  };
  const handleSubmitReview = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };
  const handleButton = (event) => {
    console.log(event.target.name);
  };
  const handleSubmit = (event) => {};
  const handleCheckout = () => {
    navigate("/payment");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <div className="container pagePreview">
      <div className="detail">
        <div className="detail__Preview">
          <div className="detail__Preview--Box1">
            <h5 className="detail__Preview--type">Headphone</h5>
            <img
              src={require("../../assets/images/image 15.png")}
              alt="headphone"
              className="detail__Preview--selection--image--1"
            />
            <div className="detail__Preview--overflow">
              <div className="detail__Preview--selection">
                <img
                  src={require("../../assets/images/image 15.png")}
                  alt="headphone"
                  className="detail__Preview--selection--image"
                />
              </div>
              <div className="detail__Preview--selection">
                <img
                  src={require("../../assets/images/image 15.png")}
                  alt="headphone"
                  className="detail__Preview--selection--image"
                />
              </div>
              <div className="detail__Preview--selection">
                <img
                  src={require("../../assets/images/image 15.png")}
                  alt="headphone"
                  className="detail__Preview--selection--image"
                />
              </div>
              <div className="detail__Preview--selection">
                <img
                  src={require("../../assets/images/image 15.png")}
                  alt="headphone"
                  className="detail__Preview--selection--image"
                />
              </div>
              <div className="detail__Preview--selection">
                <img
                  src={require("../../assets/images/image 15.png")}
                  alt="headphone"
                  className="detail__Preview--selection--image"
                />
              </div>
            </div>
          </div>
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
                <p className="detail__Preview--counterText">{item}</p>
                <button
                  onClick={decreaseCounters}
                  className="detail__Preview--counter"
                >
                  -
                </button>
              </div>
              <div className="detail__Preview_BoxTotal--2">
                <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
                <p className="detail__Preview_BoxTotal--2--total">6</p>
              </div>
            </div>
            <button className="detail__Preview--addNotes"> Add notes</button>
            <p className="detail__Preview--subTotal">Sub Total</p>
            <h3 className="detail__Preview--price">${item * 3000}</h3>
            <div className="detail__Preview--checkout">
              <button
                className="detail__Preview--checkout--checkout"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button className="detail__Preview--checkout--cart">
                <img
                  src={require("../../assets/images/Cart.png")}
                  alt="cart"
                  onClick={handleCart}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="detail__Desc">
          <h1 className="detail__Desc--header"> Sony MDR-5607</h1>

          <h3 className="detail__Desc--status">Sold</h3>
          <h3 className="detail__Desc--statusNumber">6</h3>
          <img
            src={require("../../assets/images/Vector.png")}
            alt="rateImage"
            className="detail__Desc--image"
          />
          <h3 className="detail__Desc--rate">{star}</h3>
          <hr />

          <button
            className="detail__Desc--Button"
            onClick={handleReviewButton}
            value="Details"
          >
            Details
          </button>
          <button
            className="detail__Desc--Button"
            onClick={setIsReview}
            value="Review"
            name={isReview}
          >
            Reviews
          </button>
          <hr />
          <p>
            THIS IS DETAIL PAGE Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem fuga vero, veniam et quam eius
            ratione voluptatem nobis quasi ullam alias eos perspiciatis
            consequuntur corporis praesentium, consectetur ducimus minima!
            Accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Iste, vel consectetur. Reiciendis, tempora porro? Explicabo quaerat
            aut sapiente. Sint, a? Ducimus, iusto quibusdam. Asperiores quidem
            ullam, accusamus culpa repellendus laboriosam.
          </p>

          <div className="detail__reviewProduct">
            <div className="detail__reviewProductHeader">
              <h3
                name="nameProduct"
                value={comment.nameProduct}
                onChange={handleSubmitReview}
              >
                {comment.nameProduct}
              </h3>
              <p name="item" value={comment.item}>
                {item} Item
              </p>
              <p value={comment.price}>|${item * 3000}</p>
              <div
                className="detail__reviewProduct__rating"
                value="star"
                name="star"
              >
                <input
                  type="radio"
                  name="star"
                  id="1"
                  value="star"
                  onClick={handleRateStar}
                  onChange={handleReviewButton}
                />
                <label htmlFor="star1"></label>
                <input
                  type="radio"
                  name="star"
                  id="2"
                  value="star"
                  onChange={handleRateStar}
                />
                <label htmlFor="star2"></label>
                <input
                  type="radio"
                  name="star"
                  id="3"
                  value="star"
                  onClick={handleRateStar}
                />
                <label htmlFor="star3"></label>
                <input
                  type="radio"
                  name="star"
                  id="4"
                  value="star"
                  onClick={handleRateStar}
                />
                <label htmlFor="star4"></label>
                <input
                  type="radio"
                  name="star"
                  id="5"
                  value="star"
                  onClick={handleRateStar}
                />
                <label htmlFor="star5"></label>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Input Review"
                value={comment.review}
                onChange={handleSubmitReview}
                name="review"
              ></textarea>
            </div>
            <button
              onClick={handleButton}
              type="submit"
              className="detail__reviewProduct__button"
            >
              Submit
            </button>
          </div>
          <div className="detail__reviewSubmit">
            <h2>{comment.nameProduct}</h2>
            <p>{comment.item}</p>
            <p>{star}</p>
            <p>{comment.price}</p>
            <p>{comment.review}</p>
            <p>{comment.user}</p>
          </div>
        </div>
      </div>
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
            <p className="detail__Preview--counterText">{item}</p>
            <button
              onClick={decreaseCounters}
              className="detail__Preview--counter"
            >
              -
            </button>
          </div>
          <div className="detail__Preview_BoxTotal--2">
            <p className="detail__Preview_BoxTotal--2--stock">Stock</p>
            <p className="detail__Preview_BoxTotal--2--total">6</p>
          </div>
        </div>
        <button className="detail__Preview--addNotes"> Add notes</button>
        <p className="detail__Preview--subTotal">Sub Total</p>
        <h3 className="detail__Preview--price">${item * 3000}</h3>
        <div className="detail__Preview--checkout">
          <button
            className="detail__Preview--checkout--checkout"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button className="detail__Preview--checkout--cart">
            <img
              src={require("../../assets/images/Cart.png")}
              alt="cart"
              onClick={handleCart}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
