import axios from "../../utils/axios";

export const getDataProduct = () => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(`product`),
  };
};

export const postProduct = (form) => {
  return {
    type: "POST_PRODUCT",
    payload: axios.post("product/", form),
  };
};
