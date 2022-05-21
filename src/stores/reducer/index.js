import { combineReducers } from "redux";
import product from "./product";
import register from "./register";
import user from "./user";

export default combineReducers({
  product,
  register,
  user,
});
