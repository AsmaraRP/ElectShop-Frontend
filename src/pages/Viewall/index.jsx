import { Link } from "react-router-dom";
import "./index.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataProduct } from "../../stores/actions/product";
import FilterCategory from "../../components/FilterCategory";

export default function ViewAll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page] = useState(1);
  const [limit] = useState(6);
  const [searchType, setSearchType] = useState("");
  const [searchName, setSearchName] = useState("Headphone");
  const [sort] = useState("");
  const [search, setSearch] = useState("");

  const handleClickToCart = () => {
    navigate("/cart");
  };

  const handleClickDetail = (id) => {
    navigate("/detail", { state: { idProduct: id } });
  };

  const product = useSelector((state) => state.product);
  useEffect(() => {
    handleGetDataProduct();
  }, []);

  useEffect(() => {
    handleGetDataProduct();
  }, [searchType, searchName]);

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
  return (
    <>
      <div className="container">
        <div className="row search__group">
          <form class="col-md-9 align-items-center">
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
          <div type="button" class="col-md-1 btn btn-primary">
            <ion-icon name="funnel"></ion-icon>
          </div>
          <button
            type="button"
            class="col-md-1 btn btn-primary"
            onClick={handleClickToCart}
          >
            <i class="bi bi-cart d-block"></i>
          </button>
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
      </div>
    </>
  );
}
