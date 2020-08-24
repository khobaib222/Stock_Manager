import { combineReducers } from "redux";
import manager from "./Manager/reducer";
import session from "./Session/reducer";

export const reducer = combineReducers({
  manager,
  session,
});
