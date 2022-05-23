import "./index.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataProduct } from "../../stores/actions/product";
import FilterCategory from "../../components/FilterCategory";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReactPaginate from "react-paginate";

export default function ViewAll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [searchType, setSearchType] = useState("");
  const [searchName, setSearchName] = useState("Headphone");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const handleClickToCart = () => {
    navigate("/cart");
  };

  const handleClickDetail = (id) => {
    navigate(`/detail/${id}`, { state: { idProduct: id } });
  };

  const product = useSelector((state) => state.product);
  useEffect(() => {
    handleGetDataProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleGetDataProduct();
  }, [searchType, searchName, sort]);

  const handleGetDataProduct = async () => {
    await dispatch(getDataProduct(page, limit, searchType, searchName, sort));
  };

  const handleClickCategory = (category) => {
    setSearchType("");
    setSearchName(category);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      setSearchType(e.target.value);
    }
  };
  const handleClickSearch = () => {
    setSearchType(search);
  };

  const handleProductSort = (e) => {
    setSort(e.target.value);
  };

  const handlePagination = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-skyblue py-5 mt-4"></div>
      <div className="container-lg position-relative pb-5">
        <div className="row search__group">
          <form class="col-md-10 align-items-center">
            <div class="col-auto">
              <label class="visually-hidden" for="autoSizingInputGroup">
                Search
              </label>
              <div class="input-group">
                <input
                  class="form-control"
                  for="autoSizingInputGroup"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onKeyPress={handleChangeSearch}
                />
                <div
                  type="button"
                  class="btn btn-primary"
                  onClick={handleClickSearch}
                >
                  <ion-icon name="search"></ion-icon>
                </div>
              </div>
            </div>
          </form>
          <div className="dropdown col-md-1">
            <button
              type="button"
              class="btn bg-white shadow position-relative"
              id="productFilterButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-funnel"></i>
              {sort ? (
                <div
                  className="bg-primary rounded-circle position-absolute bottom-50 start-50 translate-middle-y"
                  style={{ width: "8px", height: "8px" }}
                ></div>
              ) : null}
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="productFilterButton"
            >
              <li className="dropdown-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="productSort"
                    id="a-z"
                    value="type ASC"
                    onClick={handleProductSort}
                  />
                  <label class="form-check-label w-100" for="a-z">
                    A - Z
                  </label>
                </div>
              </li>
              <li className="dropdown-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="productSort"
                    id="z-a"
                    value="type DESC"
                    onClick={handleProductSort}
                  />
                  <label class="form-check-label w-100" for="z-a">
                    Z - A
                  </label>
                </div>
              </li>
              <li className="dropdown-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="productSort"
                    id="lowestPrice"
                    value="price ASC"
                    onClick={handleProductSort}
                  />
                  <label class="form-check-label" for="lowestPrice">
                    Lowest Price
                  </label>
                </div>
              </li>
              <li className="dropdown-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="productSort"
                    id="highestPrice"
                    value="price DESC"
                    onClick={handleProductSort}
                  />
                  <label class="form-check-label" for="highestPrice">
                    Highest Price
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-1">
            <button
              type="button"
              class="btn shadow"
              onClick={handleClickToCart}
            >
              <i class="bi bi-cart d-block"></i>
            </button>
          </div>
        </div>
        <br />
        <nav class="navbar navbar-expand-lg navbar-light bg-white navbar__viewall">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <FilterCategory handleClickCategory={handleClickCategory} />
            {/* </div> */}
          </div>
        </nav>
        <div className="row viewall__list">
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
            product.data.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card viewall_card shadow bg-body rounded">
                  <div className="card-body">
                    <div className="row b">
                      <h6>{item.type}</h6>
                      <div className="d-grid col-6 mx-auto text-start">
                        <h4>{item.price}</h4>
                      </div>
                      <div className="d-grid col-6 text-end mx-auto">
                        <p>rate</p>
                      </div>
                      <img
                        src={`${process.env.REACT_APP_CLOUDINARY}/${
                          item.image.split(",")[0]
                        }`}
                        alt=""
                        className="viewall__image"
                      />
                    </div>
                    <div className="row a">
                      <div className="d-grid col-9 mx-auto">
                        <button
                          className="btn btn-primary viewall__button"
                          onClick={() => handleClickDetail(item.id)}
                        >
                          Detail
                        </button>
                      </div>
                      <div className="d-grid col-3 mx-auto">
                        <button
                          className="btn btn-outline-primary viewall__button"
                          type="button"
                        >
                          <i class="bi bi-cart d-block"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div
          className="bg-white d-inline-block shadow px-2 py-2 position-absolute top-100 start-50 translate-middle"
          style={{ borderRadius: "20px" }}
        >
          <ReactPaginate
            previousLabel={<i class="bi bi-chevron-left"></i>}
            nextLabel={<i class="bi bi-chevron-right"></i>}
            breakLabel={"..."}
            pageCount={product.pageInfo.totalPage}
            onPageChange={handlePagination}
            containerClassName={"pagination my-0"}
            pageClassName={"page-item px-1"}
            pageLinkClassName={"page-link border-0 px-3 py-2"}
            previousClassName={"page-item me-2"}
            previousLinkClassName={"page-link border-0 border-end px-3 py-2"}
            nextClassName={"page-item ms-2"}
            nextLinkClassName={"page-link border-0 border-start px-3 py-2"}
            activeClassName={"active"}
            activeLinkClassName={"rounded-circle"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
