import * as actionTypes from "./actionTypes";

const initialState = {
  productList: [],
  supplierList: [],
  purchaseList: [],
};

function ManagerReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

export default ManagerReducer;
