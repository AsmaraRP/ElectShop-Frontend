import axios from "../../utils/axios";

export const getAllTransaction = (page, limit) => {
  return {
    type: "GET_ALL",
    payload: axios.get(`/transaction/success?limit=${limit}&page=${page}`),
  };
};

export const deliveryTransaction = (id, data) => {
  return {
    type: "DELIVERY",
    payload: axios.patch(`/transaction/delivery/${id}`, data),
  };
};
