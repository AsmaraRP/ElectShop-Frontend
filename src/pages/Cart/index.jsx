import React, { useEffect } from "react";
// import Pagination from "react-paginate";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
// import Pagination from "react-paginate";
import ShopCard from "../../components/card";
import {getCheckoutById} from "../../stores/actions/cart"

function Cart() {
  document.title = "Cart Page|| electshop";
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const [page, setPage] = useState(1);
  const handleNaviegateCheckout = () => {
    navigate("/payment");
  };
  const handleSelectAll = (event) => {
    console.log(event.target.checked);
  };

  const limit = 5;
  const cart = useSelector((state) => state.cart)
  console.log(cart.data)
  const searchUserId = "ab3c46b4-7ccd-4610-884b-77a5643f8717"

  // const handlePagination = (data) => {
  //   setPage(data.selected + 1);
  // };

  useEffect(() => {
    getcheckoutById();
  });

  const getcheckoutById = async () => {
    try {
      // PanggilAction
      const resultcheckout =await dispatch(getCheckoutById(1, limit, searchUserId))
      console.log(resultcheckout)
    } catch (error) {
      console.log(error.response);
    }
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
        {/* <Pagination
        className="pagination justify-content-center mt-4 page-item"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={cart.pageInfo.totalPage}
        onPageChange={handlePagination}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      /> */}
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
