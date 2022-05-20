import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container-fluid bg-skyblue p-5">
      <div className="container-lg p-5">
        <div className="row">
          <div className="col-6">
            <img
              src={require("../../assets/images/logo.png")}
              alt="logo"
              height={44}
            />
            <hr className="w-25 " />
            <p className="mb-2 text-darkgray">
              91 Spring Dr. Hudsonville,
              <br /> MI 49426
            </p>
            <div className="social-media">
              <Link to="#">
                <i class="bi bi-facebook fs-5 me-3 text-darkgray"></i>
              </Link>
              <Link to="#">
                <i class="bi bi-instagram fs-5 me-3 text-darkgray"></i>
              </Link>
              <Link to="#">
                <i class="bi bi-twitter fs-5 text-darkgray"></i>
              </Link>
            </div>
          </div>
          <div className="col-2">
            <h5 className="fw-bold mb-4 text-darkgray">How it works</h5>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Select Product
            </Link>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Make Payment
            </Link>
            <Link to="" className="d-block text-decoration-none text-darkgray">
              Receive Product
            </Link>
          </div>
          <div className="col-2">
            <h5 className="fw-bold mb-4 text-darkgray">Products</h5>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Headphone
            </Link>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Air Conditioner
            </Link>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Router
            </Link>
            <Link to="" className="d-block text-decoration-none text-darkgray">
              Television
            </Link>
          </div>
          <div className="col-2">
            <h5 className="fw-bold mb-4 text-darkgray">Help</h5>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              About
            </Link>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Contact Us
            </Link>
            <Link
              to=""
              className="d-block text-decoration-none text-darkgray mb-2"
            >
              Download App
            </Link>
            <Link to="" className="d-block text-decoration-none text-darkgray">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
