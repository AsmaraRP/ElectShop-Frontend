import React, { useState, useEffect } from "react";
import Pagination from "react-paginate";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTransaction,
  deliveryTransaction,
} from "../../stores/actions/transaction";

export default function Checking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [limit] = useState(6);
  const [page, setPage] = useState(params.page ? params.page : 1);
  const transaction = useSelector((state) => state.transaction);
  const getallTransaction = async () => {
    try {
      // PANGGIL ACTION
      const resultProduct = await dispatch(getAllTransaction(page, limit));
      console.log(resultProduct);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handlePagination = (data) => {
    // console.log(data.selected + 1);
    setPage(data.selected + 1);
  };
  useEffect(() => {
    getallTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getallTransaction();
    const params = {};
    if (page !== 1) {
      params.page = page;
    }
    navigate({
      pathname: "/cheking",
      search: `?${createSearchParams(params)}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleDelivery = async (id) => {
    const data = { statusDelivery: "true" };
    await dispatch(deliveryTransaction(id, data));
    getallTransaction();
  };

  return (
    <>
      <div className="container checkingContainer">
        <h1 className="text-center">Checking Order</h1>
        <div class="card col-md-11 shadow p-3 bg-body rounded">
          <div class="card-body">
            <div className="container">
              <div className="row">
                <div className="col-10 text-start">
                  <h6>Success Transaction</h6>
                </div>
                <div className="col-2 text-end">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Week</option>
                    <option value="2">Month</option>
                  </select>
                </div>
              </div>
              <hr />
              <table class="table text-start">
                <tbody>
                  {transaction.isLoading ? (
                    <div className="col-12 text-center">
                      <div
                        className="spinner-border text-primary text-center"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    transaction.data.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">NV/20220420/MPL/2247841295</th>
                        <td>{item.address}</td>
                        <td>{item.created_at.split("T")[0]}</td>
                        <td>{item.totalProduct}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{item.totalPrice}</td>
                        <td>
                          <h4
                            type="button"
                            className="badge bg-primary text-wrap"
                            onClick={() => handleDelivery(item.id)}
                          >
                            Action
                          </h4>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <br />
              {/* <Pagination
                previousLabel={<ion-icon name="arrow-dropleft"></ion-icon>}
                nextLabel={<ion-icon name="arrow-dropright"></ion-icon>}
                breakLabel={"..."}
                pageCount={"8"}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              /> */}
            </div>
          </div>
        </div>
        <div class="card col-md-11 shadow p-3 bg-body rounded">
          <div class="card-body">
            <div className="container">
              <div className="row">
                <div className="col-10 text-start">
                  <h6>Need to be delivered</h6>
                </div>
                <div className="col-2 text-end">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Week</option>
                    <option value="2">Month</option>
                  </select>
                </div>
              </div>
              <hr />
              <table class="table text-start">
                <tbody>
                  {transaction.isLoading ? (
                    <div className="col-12 text-center">
                      <div
                        className="spinner-border text-primary text-center"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    transaction.data.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">NV/20220420/MPL/2247841295</th>
                        <td>{item.address}</td>
                        <td>{item.created_at.split("T")[0]}</td>
                        <td>{item.totalProduct}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{item.totalPrice}</td>
                        <td>
                          <h4
                            type="button"
                            className="badge bg-primary text-wrap"
                            onClick={() => handleDelivery(item.id)}
                          >
                            Action
                          </h4>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <br />
              <Pagination
                previousLabel={<ion-icon name="arrow-dropleft"></ion-icon>}
                nextLabel={<ion-icon name="arrow-dropright"></ion-icon>}
                breakLabel={"..."}
                pageCount={transaction.pageInfo.totalPage}
                onPageChange={handlePagination}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
