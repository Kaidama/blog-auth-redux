import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_FAILURE,
  AUTH_USER_LOGOUT
} from "../actionTypes/actionTypes";
import Axios from "../../lib/Axios";

export const signup = userInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/sign-up", userInfo);
    dispatch(authUserSuccessful(success.data.message));
    // console.log(success.data.message);
    return Promise.resolve(success.data.message);
  } catch (err) {
    let errors = err.response.data.message;
    dispatch(authUserFailure(errors.message));
    // console.log(errors.message);
  }
};

export const logout = userInfo => async dispatch => {
  try {
  } catch (e) {
    console.log(e);
  }
};

export const authUserSuccessful = message => dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESSFUL,
    payload: message
  });
};

export const authUserFailure = message => dispatch => {
  dispatch({
    type: AUTH_USER_FAILURE,
    payload: message
  });
};

export const authUserLogout = message => dispatch => {
  dispatch({
    type: AUTH_USER_LOGOUT,
    payload: message
  });
};
