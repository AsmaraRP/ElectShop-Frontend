import axios from "../../utils/axios";

export const getDataProductId = (id) => {
  return {
    type: "GET_DATA_PRODUCT_ID",
    payload: axios.get(`product/${id}`),
  };
};
