import React from "react";
import Pagination from "react-paginate";

export default function Checking() {
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
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
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
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NV/20220420/MPL/2247841295</th>
                    <td>Central Java</td>
                    <td>07/09/2020</td>
                    <td>1 item</td>
                    <td>Paypal</td>
                    <td>$ 3000</td>
                    <td>
                      <h4 type="button" className="badge bg-primary text-wrap">
                        Action
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
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
        </div>
      </div>
    </>
  );
}
