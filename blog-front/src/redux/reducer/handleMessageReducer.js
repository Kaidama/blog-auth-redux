import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_FAILURE
} from "../actionTypes/actionTypes";

const initialState = {
  serverMessage: null,
  messageStyle: {
    fontColorStyle: "",
    dynamicClassName: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESSFUL:
      return {
        serverMessage: action.payload,
        messageStyle: {
          fontColorStyle: "#3F51b5",
          dynamicClassName: "App"
        }
      };

    case AUTH_USER_FAILURE:
      return {
        serverMessage: action.payload,
        messageStyle: {
          fontColorStyle: "#f44336",
          dynamicClassName: "App"
        }
      };
    default:
      return state;
  }
}
