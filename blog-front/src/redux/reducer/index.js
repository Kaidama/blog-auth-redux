import { combineReducers } from "redux";
import authReducer from "./authReducer";
import httpReducer from "./httpReducer";
export default combineReducers({
  authUser: authReducer,
  authMsg: httpReducer
});
