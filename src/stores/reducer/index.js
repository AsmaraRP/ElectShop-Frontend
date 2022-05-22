import { combineReducers } from "redux";
import product from "./product";
import register from "./register";
import cart from "./cart";

export default combineReducers({
  product,
  register,
  cart,
});
