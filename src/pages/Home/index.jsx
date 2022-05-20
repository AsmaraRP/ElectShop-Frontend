import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./index.css";
import ProductCard from "../../components/ProductCard";
import FilterCategory from "../../components/FilterCategory";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white" style={{ paddingTop: "74px" }}>
        <div className="container-fluid bg-lightblue py-5">
          <div className="container-lg py-4 px-3">
            <div className="row">
              <div className="col-5 col-md-4">
                <h1 className="fw-extrabold text-darkgray lh-base mb-3">
                  Take Your Time And <span className="text-primary">Shop </span>
                  Anywhere
                </h1>
                <p className="text-lightgray fw-semibold mb-4">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit..
                </p>
                <div>
                  <Link to="#" className="btn btn-primary py-2 me-3 shadow">
                    <i class="bi bi-bag me-2"></i>Shop Now
                  </Link>
                  <Link to="#" className="btn btn-outline-primary py-2">
                    <i class="bi bi-briefcase me-2"></i>Be a Seller
                  </Link>
                </div>
              </div>
              <div className="col-7 col-md-8 text-center position-relative">
                <img
                  src={require("../../assets/images/hero.png")}
                  alt="hero"
                  height="332px"
                />
                <div
                  className="card px-3 py-2 text-start border-0 shadow position-absolute d-none d-md-block"
                  style={{ top: 0, left: "20%", width: "160px" }}
                >
                  <span className="fs-7 fw-bold text-darkgray">
                    Trusted by more than{" "}
                    <span className="text-primary">6000+</span> people.
                  </span>
                </div>
                <div
                  className="card px-3 py-2 text-start border-0 shadow position-absolute"
                  style={{ top: "20%", right: "10%", width: "160px" }}
                >
                  <span className="fs-7 fw-bold text-darkgray">
                    There are <span className="text-primary">6 million</span>{" "}
                    electronic products.
                  </span>
                </div>
                <div
                  className="card px-3 py-2 text-start border-0 shadow position-absolute"
                  style={{ bottom: "10%", right: "10%", width: "150px" }}
                >
                  <span className="fs-7 fw-bold text-darkgray">
                    There are <span className="text-primary">5000+</span>{" "}
                    trusted sellers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-lg py-5 text-center px-3">
          <div className="d-inline-block bg-lightblue rounded-pill px-3 py-2 mb-4">
            <span className="text-primary fw-semibold">How it Works</span>
          </div>
          <h2 className="fs-1 fw-extrabold lh-base mb-5">
            Make An
            <br />
            Order Easily
          </h2>
          <div className="row gx-5">
            <div className="col">
              <div
                className="card text-start p-4"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="rounded-circle px-4 py-3 align-self-start text-center mb-4"
                  style={{
                    backgroundColor: "#7777771a",
                  }}
                >
                  <i class="bi bi-basket3 text-darkgray fs-3 lh-base"></i>
                </div>
                <h3 className="fs-4 fw-extrabold text-darkgray mb-3">
                  Select Product
                </h3>
                <p className="text-darkgray mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-start p-4"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="rounded-circle px-4 py-3 align-self-start text-center mb-4"
                  style={{
                    backgroundColor: "#7777771a",
                  }}
                >
                  <i class="bi bi-cash-coin text-darkgray fs-3 lh-base"></i>
                </div>
                <h3 className="fs-4 fw-extrabold text-darkgray mb-3">
                  Make Payment
                </h3>
                <p className="text-darkgray mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-start p-4"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="rounded-circle px-4 py-3 align-self-start text-center mb-4"
                  style={{
                    backgroundColor: "#7777771a",
                  }}
                >
                  <i class="bi bi-box text-darkgray fs-3 lh-base"></i>
                </div>
                <h3 className="fs-4 fw-extrabold text-darkgray mb-3">
                  Receive Product
                </h3>
                <p className="text-darkgray mb-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-lg py-5 text-center px-3">
          <div className="d-inline-block bg-lightblue rounded-pill px-3 py-2 mb-4">
            <span className="text-primary fw-semibold">Our Products</span>
          </div>
          <h2 className="fs-1 fw-extrabold lh-base text-darkgray mb-5">
            The Best Product
            <br />
            By Electshop
          </h2>
          <div className="d-flex justify-content-between align-items-center pt-3 pb-5">
            <FilterCategory />
            <div className="position-relative w-25">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search"
              />
              <button className="btn me-1 bg-white position-absolute end-0 top-50 translate-middle-y">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="row row-cols-3 gx-5 my-5">
            <div className="col">
              <ProductCard />
            </div>
            <div className="col">
              <ProductCard />
            </div>
            <div className="col">
              <ProductCard />
            </div>
          </div>
          <Link to="#" className="btn btn-primary fw-semibold px-4 py-2 shadow">
            View All
          </Link>
        </div>

        <div className="container-lg py-5 my-5 px-3">
          <div className="card bg-skyblue border-0 p-5">
            <div className="row">
              <div className="col-6 postition-relative">
                <img
                  src={require("../../assets/images/subscribe.png")}
                  alt="illustration"
                  className="position-absolute bottom-0"
                  width={400}
                />
              </div>
              <div className="col-6">
                <h2 className="fs-1 fw-extrabold text-darkgray lh-base">
                  Get 30% Off <br />
                  of Your First
                  <br /> Purchases
                </h2>
                <p className="text-lightgray mb-4">
                  Get 30% Off of Your First Purchases{" "}
                </p>
                <div className="position-relative w-75">
                  <input
                    type="email"
                    className="form-control border-primary bg-transparent text-primary py-3"
                    placeholder="Enter your email"
                  />
                  <button
                    className="btn btn-primary px-4 py-2 position-absolute top-50 translate-middle-y"
                    style={{ right: "2%" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default Home;
