import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./LogoutButton.module.css";
function LogoutButton() {
  return (
    <Link to="/">
      <div className={styles.signout}>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          style={{ margin: "auto", fontSize: "32px" }}
        ></FontAwesomeIcon>
      </div>
    </Link>
  );
}

export default LogoutButton;
