import { combineReducers } from "redux";
import product from "./product";
import checkout from "./checkout";
export default combineReducers({
  product,
  checkout,
});
