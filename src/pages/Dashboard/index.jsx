import React from "react";
import "./index.css";
import shopwindow from "./../../assets/imgDashboard/shop-window 1.png";

export default function Dashboard() {
  return (
    <>
      <div className="container">
        <h1 className="fw-1 fw-bold">Dashboard</h1>
        <div className="row information__card">
          <div class="card col-md-7 shadow p-3 bg-body rounded">
            <div class="card-body">
              <div className="container">
                <h4>Store Information</h4>
                <div className="row text-center">
                  <div class="card col-sm-5 dashboard__card">
                    <div class="card-body">
                      <h5 className="fw-1 fw-bold">12</h5>
                      <p>Not yet paid</p>
                    </div>
                  </div>
                  <div class="card col-sm-5 dashboard__card">
                    <div class="card-body ">
                      <h5 className="fw-1 fw-bold">12</h5>
                      <p>New Order</p>
                    </div>
                  </div>
                  <div class="card col-sm-5 dashboard__card">
                    <div class="card-body">
                      <h5 className="fw-1 fw-bold">12</h5>
                      <p>New Review</p>
                    </div>
                  </div>
                  <div class="card col-sm-5 dashboard__card">
                    <div class="card-body ">
                      <h5 className="fw-1 fw-bold">12</h5>
                      <p>Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-4 shadow p-3 bg-body rounded">
            <div class="card-body text-center">
              <div className="container">
                <img
                  src={shopwindow}
                  alt="shopwindow"
                  className="shopIcon border border-2"
                ></img>
                <hr />
                <div className="row button__icon d-grid gap-1 col-12 mx-auto">
                  <button class="btn col-sm-12 btn-primary btn-lg">
                    Menage Product
                  </button>
                  <button class="btn col-sm-12 btn-primary btn-lg">
                    Checking Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row store__data">
          <div class="card store__card col-md-11 shadow p-3 bg-body rounded">
            <div class="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Store Data</h4>
                  </div>
                  <div className="col-sm-5 text-end">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button type="button" class="btn btn-outline-primary">
                        weakly
                      </button>
                      <button type="button" class="btn btn-outline-primary">
                        montly
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div class="col-sm-6">
                    <p>Sale</p>
                    <h5 className="fw-1 fw-bold">15</h5>
                    <small>This week</small>
                  </div>
                  <div class="col-sm-3">
                    <p>Sale</p>
                    <h5 className="fw-1 fw-bold">15</h5>
                    <small>This week</small>
                    <p>Order</p>
                    <h5 className="fw-1 fw-bold">15</h5>
                    <small>This week</small>
                  </div>
                  <div class="col-sm-3">
                    <p>Product View</p>
                    <h5 className="fw-1 fw-bold">15</h5>
                    <small>This week</small>
                    <p>Conversion Rate</p>
                    <h5 className="fw-1 fw-bold">15</h5>
                    <small>This week</small>
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
