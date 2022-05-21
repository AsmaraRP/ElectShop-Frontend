import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./index.css";
// import image from "./../../assets/imgDashboard/image 22.png";
import Pagination from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getDataProduct } from "../../stores/actions/product";

export default function Manage() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const product = useSelector((state) => state.product);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getdataProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdataProduct = async () => {
    try {
      // PANGGIL ACTION
      const resultProduct = await dispatch(getDataProduct());
      console.log(resultProduct);
    } catch (error) {
      console.log(error.response);
    }
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
                />
                <div type="button" class="btn btn-primary">
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
            onClick={openModal}
            class="col-md-1 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
        <div className="row manageList">
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
              <div
                class="card col-md-11 shadow p-3 bg-body rounded"
                key={item.id}
              >
                <div class="card-body">
                  <div className="container">
                    <div className="row manageList">
                      <div className="row bg-white">
                        <div className="col-sm-2">
                          <img
                            src={
                              item.image
                                ? `https://res.cloudinary.com/djoebcjsc/image/upload/v1650916284/${
                                    item.image.split(",")[0]
                                  }`
                                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                            }
                            alt=""
                            className="imageList"
                          />
                        </div>
                        <div className="col-sm-3">
                          <h6 className="badge bg-primary text-wrap">
                            {/* {item.name} */ item.image.split(",")[0]}
                          </h6>
                          <h5>{item.type}</h5>
                          <h6 className="mobilePrice">{item.price}</h6>
                        </div>
                        <div className="col-sm-3 align-self-end">
                          <h4>{item.price}</h4>
                        </div>
                        <div className="col-sm-4 align-self-end">
                          <button type="button" class="btn btn-outline-primary">
                            edit
                          </button>
                          <button type="button" class="btn btn-outline-primary">
                            montly
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-10">
          <Pagination
            previousLabel={<ion-icon name="arrow-dropleft"></ion-icon>}
            nextLabel={<ion-icon name="arrow-dropright"></ion-icon>}
            breakLabel={"..."}
            pageCount={"8"}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          <div className="container">
            <h1>Add Product</h1>
            <hr />
            <form>
              <div className="row modalForm">
                <div className="col-md-6">
                  <div class="mb-3">
                    <h5>Name</h5>
                    <input
                      type="text"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <h5>Stok</h5>
                    <input
                      type="text"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <h5>Type</h5>
                    <input
                      type="text"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <h5>Price</h5>
                    <input
                      type="text"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <h5>Description</h5>
                    <input
                      type="text"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <h5>image</h5>
                    <input
                      type="file"
                      class="form-control shadow p-3 bg-body rounded"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>

              <br />
              <hr />
              <div className="text-end">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
