import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_FAILURE,
  AUTH_USER_LOGOUT,
  AUTH_USER_SIGN_IN_SUCCESSFUL
} from "../actionTypes/actionTypes";

import Axios from "../../lib/Axios";
import axiosConfig from "../../lib/authConfig";
import decodeToken from "../../lib/checkAuthToken";


export const signup = userInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/sign-up", userInfo, axiosConfig);
    dispatch(authUserSuccessful(success.data.message));
    console.log(success);
    return Promise.resolve(success.data.message);
  } catch (err) {
    let errors = err.response.data.message;
    dispatch(authUserFailure(errors.message));
    return Promise.reject(err);
  }
};

export const signin = userInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/sign-in", userInfo, axiosConfig);
    dispatch(authSigninSuccessful(success));
    /**
    let { token } = success.data;
    console.log(success.data);
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    */

    let user = await decodeToken(success);
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const authSigninSuccessful = userInfo => dispatch => {
  dispatch({
    isAuthenticated: true,
    type: AUTH_USER_SIGN_IN_SUCCESSFUL,
    payload: userInfo
  });
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
