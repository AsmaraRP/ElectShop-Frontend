import { combineReducers } from "redux";
import product from "./product";
import register from "./register";
import user from "./user";
import checkout from "./checkout";

export default combineReducers({
  product,
  register,
  user,
  checkout,
});
