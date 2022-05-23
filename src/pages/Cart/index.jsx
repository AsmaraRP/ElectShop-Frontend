import React, { useEffect, useState } from "react";
import Pagination from "react-paginate";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShopCard from "../../components/card";
import { getCheckoutById, createTransaction } from "../../stores/actions/cart";
import { updateDataCheckout } from "../../stores/actions/checkout";

function Cart() {
  document.title = "Cart Page|| electshop";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [data, setData] = useState({
    addresDelivery: "",
    review: null,
    rating: null,
    statusCart: "notActive",
  });
  // const totalPayment = selectedCard.map((item) => item.price * item.productTotal).reduce((partialSum, a) => partialSum + a, 0);
  const checkoutId = selectedCard.map((item) => item.id).join(",");
  console.log(checkoutId);

  const getTotalPayment = () => {
    setTotalPayment(selectedCard.map((item) => item.price * item.productTotal).reduce((partialSum, a) => partialSum + a, 0));
    console.log(totalPayment);
  };
  // useEffect(() => {
  //   handleNaviegateCheckout();
  // }, []);

  useEffect(() => {
    getTotalPayment();
  }, [selectedCard]);
  useEffect(() => {
    getTotalPayment();
  }, [selectedCard.productTotal]);

  const handleNaviegateCheckout = async () => {
    try {
      const dataTransaction = {
        checkoutId,
        totalPrice: totalPayment,
      };
      console.log(dataTransaction);
      setData({ ...data, statusCart: "notActive" });
      await dispatch(updateDataCheckout(dataTransaction.checkoutId, data));
      const result = await dispatch(createTransaction(dataTransaction));
      window.open(result.action.payload.data.data.redirectUrl);
      // const transaction = await dispatch(createTransaction(dataTransaction))
      // console.log(transaction)
      // navigate("/payment");
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSelectAll = (event) => {
    console.log(event.target.checked);
  };
  const handleSelectCheckout = async (card) => {
    try {
      await selectedCard.map((item) => {
        if (item.id === card.id) {
          const selectData = selectedCard.filter((item) => item.id !== card.id);
          setSelectedCard(selectData);
          console.log(selectedCard);
          throw TypeError("deleting data");
        }
      });
      setSelectedCard([...selectedCard, card]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedCard);

  const limit = 5;
  const cart = useSelector((state) => state.cart);
  console.log(cart.data);

  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

  useEffect(() => {
    getcheckoutById();
  }, [page]);

  const getcheckoutById = async () => {
    try {
      // PanggilAction
      const resultcheckout = await dispatch(getCheckoutById(page, limit, userId));
      console.log(resultcheckout);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container pagePreview">
      <div className="cart__searchSortBar">
        <div className="cart__search">
          <input type="search" placeholder="Tap To Search For Something" className="cart__searchbar" />
          <button className="cart__searchButton">
            <img src={require("../../assets/images/Search.png")} alt="searchBar" className="cart__searchButton--image" />
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
            <input className="form-check-input cart__boxSelectAll" type="checkbox" value="check" id="flexCheckChecked" onClick={handleSelectAll} />
            <label className="form-check-label cart__selectAll" htmlFor="flexCheckChecked">
              <h2>Select All</h2>
            </label>
          </div>
          <div className="cart__product">
            <div className="cart__productCard">
              <div className="cart__productCard--shopCard" onClick={() => getcheckoutById()}>
                {cart ? cart.data.map((item) => <ShopCard data={item} key={item.id} selectedCard={(card) => handleSelectCheckout(card)} selected={selectedCard} />) : ""}
              </div>
              <div className="cart__product--totalProduct1">
                <h5>Total</h5>
                <h1 className="cart__product--totalPrice1">$6000</h1>
                <button className="cart__productPaymentBox--checkout" onClick={(item) => handleNaviegateCheckout(item)}>
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
              <h4 className="cart__ProductPaymentBox--nominal">Rp. {totalPayment}</h4>
            </div>
            <div className="cart__ProductPaymentBox--price">
              <h4 className="cart__ProductPaymentBox--item">Discount</h4>
              <h4 className="cart__ProductPaymentBox--nominal">Rp. 0</h4>
            </div>
            <hr />
            <div className="cart__ProductPaymentBox--price">
              <h4 className="cart__ProductPaymentBox--item" style={{ fontSize: "20px" }}>
                Bill
              </h4>
              <h4 className="cart__ProductPaymentBox--nominal" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Rp. {totalPayment}
              </h4>
            </div>
            <button className="cart__productPaymentBox--checkout" onClick={(item) => handleNaviegateCheckout(item)} selected={selectedCard}>
              {" "}
              CheckOut
            </button>
          </div>
        </div>
      </div>
      <Pagination
        className="pagination justify-content-center mt-4 page-item"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={cart.pageInfo.totalPage}
        onPageChange={handlePagination}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
export default Cart;
