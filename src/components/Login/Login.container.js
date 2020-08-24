import React from "react";
import { logIn } from "../../store/Session/actions";
import LoginComponent from "./Login.component";
import { connect } from "react-redux";

function Login(props) {
  return <LoginComponent logIn={logIn} error={props.error} />;
}

const mapStateToProps = (state) => ({
  error: state.session.error,
});

export default connect(mapStateToProps)(Login);
