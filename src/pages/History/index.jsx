import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import HistoryCard from "../../components/historyCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getDataCheckout } from "../../stores/actions/history";
import Pagination from "react-paginate";

function History() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit] = useState(3);

  const dataUser = useSelector((state) => state.user.data);
  const dataCheckout = useSelector((state) => state.history);

  useEffect(() => {
    getCheckout();
  }, [page]);

  const getCheckout = async () => {
    await dispatch(getDataCheckout(dataUser.id, page, limit));
  };
  const handleDetail = (productId) => {
    navigate(`/detail/${productId}`, { state: { idProduct: productId } });
  };
  const handleReview = (productId) => {
    navigate(`/detail/${productId}`, {
      state: { idProduct: productId, review: true },
    });
  };
  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <>
      <Navbar />
      <div className="container pagePreview">
        <input
          type="search"
          placeholder="Tap To Search For Something"
          className="history__searchbar"
        />
        <button className="history__searchButton">
          <img
            src={require("../../assets/images/Search.png")}
            alt="searchBar"
            style={{ width: "50%" }}
          />
        </button>
        <button className="history__sort">
          <img src={require("../../assets/images/sort.png")} alt="profileBar" />
        </button>
        <h1 className="history__header">Shopping History</h1>
        <div>
          {dataCheckout.data.map((data) => (
            <HistoryCard
              key={data.id}
              data={data}
              handleDetail={handleDetail}
              handleReview={handleReview}
            />
          ))}
        </div>
        <Pagination
          className="pagination justify-content-center mt-4 page-item"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={dataCheckout.pageInfo.totalPage}
          onPageChange={handlePagination}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
      <Footer />
    </>
  );
}

export default History;
