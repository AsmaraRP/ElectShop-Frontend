import React from "react";
import image from "./../../assets/imgDashboard/image 22.png";
import "./index.css";

export default function ViewAll() {
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
            class="col-md-1 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <ion-icon name="add"></ion-icon>
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    Headphone
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    Air Conditioner
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    Router
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row viewall__list">
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card viewall_card shadow bg-body rounded">
              <div className="card-body">
                <div className="row b">
                  <h6>Sennheiser HD-25</h6>
                  <div className="d-grid col-6 mx-auto text-start">
                    <h4>$3000</h4>
                  </div>
                  <div className="d-grid col-6 text-end mx-auto">
                    <p>rate</p>
                  </div>
                  <img src={image} alt="" className="viewall__image" />
                </div>
                <div className="row a">
                  <div className="d-grid col-9 mx-auto">
                    <button className="btn btn-primary viewall__button">
                      Detail
                    </button>
                  </div>
                  <div className="d-grid col-3 mx-auto">
                    <button
                      className="btn btn-outline-primary viewall__button"
                      type="button"
                    >
                      ty
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
