import React from "react";
import NavigationBarComponent from "./NavigationBar.component";
import { connect } from "react-redux";
function NavigationBar(props) {
  return <NavigationBarComponent user={props.user} buttons={props.buttons} />;
}

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps)(NavigationBar);
