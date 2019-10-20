import { AUTH_USER_SUCCESSFUL } from "../actionTypes/actionTypes";
import Axios from "../../lib/Axios";

export const signup = userInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/sign-up", userInfo);
    dispatch(authUserSuccessful(success.data.message));
    return Promise.resolve(success.data.message);
  } catch (error) {
    console.log(error);
  }
};

export const authUserSuccessful = message => dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESSFUL,
    payload: message
  });
};
