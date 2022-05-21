import axios from "../../utils/axios";

export const getDataProduct = (page, limit, searchType, searchName, sort) => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(
      `/product?page=${page}&limit=${limit}&searchType=${searchType}&searchName=${searchName}&sort=${sort}`
    ),
  };
};

export const postProduct = (form) => {
  return {
    type: "POST_PRODUCT",
    payload: axios.post("product/", form),
  };
};
