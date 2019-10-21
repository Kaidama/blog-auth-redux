import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_FAILURE
} from "../actionTypes/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
  // message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        message: action.payload
      };
    default:
      return state;
  }
}
