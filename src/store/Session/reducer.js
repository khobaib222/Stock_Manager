import * as actionTypes from "./actionTypes";

const initialState = {
  user: "",
  type: "",
  error: false,
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return { user: action.value.user, type: action.value.type, error: false };
    case actionTypes.LOG_OUT:
      return { ...initialState };
    case actionTypes.SHOW_ERROR:
      return { user: "", type: "", error: true };
    default:
      return state;
  }
}

export default sessionReducer;
