import { SET_HTTP_MESSAGE } from "../actionTypes/actionTypes";

const initialState = {
  message: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_HTTP_MESSAGE:
      return {
        ...state,
        message: payload
      };
    default:
      return state;
  }
}
