import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../NavigationBar/NavigationBar.container";
import { navBarButtons } from "../NavigationBarInfo";
import LogoutButton from "../../LogoutButton/LogoutButton.component";
class Sales extends Component {
  render() {
    return (
      <div>
        <NavBar buttons={navBarButtons} />
        <div
          style={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <p
            style={{
              fontSize: "100px",
              margin: "auto",
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Page Under Construction
          </p>
        </div>
        <LogoutButton />
      </div>
    );
  }
}

export default withRouter(Sales);
