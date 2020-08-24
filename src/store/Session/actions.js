import * as actionTypes from "./actionTypes";
import { store } from "../store";

export const logIn = (userid, password, history) => {
  let flag = false;
  let admin = JSON.parse(localStorage.getItem("admin"));
  if (userid === admin.user && password === admin.password) {
    console.log("foin");
    store.dispatch({
      type: actionTypes.LOG_IN,
      value: { user: userid, type: "admin" },
    });
    history.push({ pathname: "/Admin", state: userid });
    flag = true;
  } else {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      users.map((user) => {
        if (userid === user.user && password === user.password) {
          store.dispatch({
            type: actionTypes.LOG_IN,
            value: user,
          });
          flag = true;
          if (user.type === "manager") {
            history.push("/Manager/Products");
          }
        }
      });
    }
  }
  if (flag === false) {
    store.dispatch({
      type: actionTypes.SHOW_ERROR,
    });
  }
};

export const logOut = () => {
  store.dispatch({
    type: actionTypes.LOG_OUT,
  });
};
