import { AUTH_USER_SUCCESSFUL } from "../actionTypes/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
