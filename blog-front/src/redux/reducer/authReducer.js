import { AUTH_USER_SIGN_IN_SUCCESSFUL } from "../actionTypes/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SIGN_IN_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
}
