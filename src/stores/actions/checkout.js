import axios from "../../utils/axios";

export const getDataCheckout = (productId) => {
  return {
    type: "GET_DATA_CHECKOUT",
    payload: axios.get(`checkout?searchUserId=&searchProductId=${productId}`),
  };
};

export const postDataCheckout = (data) => {
  console.log(data);
  return {
    type: "POST_CHECKOUT",
    payload: axios.post("checkout", data),
  };
};
export const updateDataCheckout = (idCheckout, data) => {
  return {
    type: "UPDATE_CHECKOUT",
    payload: axios.patch(`checkout/${idCheckout}`, data),
  };
};
