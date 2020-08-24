import * as actionTypes from "./actionTypes";
import { store } from "../store";

export const setList = (fieldName, value) => {
  store.dispatch({
    type: actionTypes.SET_LIST,
    field: fieldName,
    value: value,
  });
};
