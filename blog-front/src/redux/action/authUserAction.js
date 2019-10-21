import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_FAILURE,
  AUTH_USER_LOGOUT,
  SET_HTTP_MESSAGE
} from "../actionTypes/actionTypes";
import Axios from "../../lib/Axios";

export const signup = userInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/sign-up", userInfo);
    dispatch(authUserSuccessful(success.data.message));
    // console.log(success.data.message);
    return Promise.resolve(success.data.message);
  } catch (err) {
<<<<<<< HEAD
    let errors = err.response;
    // dispatch(authUserFailure(errors.message));
    dispatch(setHttpMessage(errors.data.message));
    console.log(errors.message);
=======
    let errors = err.response.data.message;
    dispatch(authUserFailure(errors.message));
    // console.log(errors.message);
>>>>>>> 065320fe3b8d17511178d43869e52525ef772593
  }
};

export const logout = userInfo => async dispatch => {
  try {
  } catch (e) {
    console.log(e);
  }
};

export const authUserSuccessful = () => dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESSFUL
  });
};

export const setHttpMessage = message => dispatch => {
  dispatch({
    type: SET_HTTP_MESSAGE,
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
