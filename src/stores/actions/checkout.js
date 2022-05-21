import axios from "../../utils/axios";

export const createCheckout = (data) => {
  return {
    type: "CREATE_CHECKOUT",
    payload: axios.post(`/checkout`, data),
  };
};
