import axios from "../../utils/axios";

export const getDataProduct = (page, limit, searchType, searchName, sort) => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(
      `/product?page=${page}&limit=${limit}&searchType=${searchType}&searchName=${searchName}&sort=${sort}`
    ),
  };
};
