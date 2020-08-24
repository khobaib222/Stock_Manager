import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      <section>
        <h3>Stock</h3>
        <h3>Manager</h3>
      </section>
      <section>
        {props.buttons.map((item) => (
          <Link to={item.link}>
            <button className={styles.navButton}>{item.name}</button>
          </Link>
        ))}
        <div className={styles.user}>
          <p>{props.user ? props.user : "Please Login!"}</p>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
