import React, { Component } from "react";
import styles from "./Login.module.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: "",
      password: "",
    };
  }
  componentWillMount() {
    localStorage.setItem(
      "admin",
      JSON.stringify({ user: "khobaib222", password: "welcome" })
    );
  }
  onChangeField(field, value) {
    this.setState({
      [field]: value,
    });
  }
  logIn() {
    this.props.logIn(this.state.user, this.state.password, this.props.history);
  }
  render() {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <section>
            <h1>Stock</h1>
            <h1>Manager</h1>
          </section>
          <input
            type="text"
            placeholder="Username *"
            value={this.state.user}
            onChange={(event) => this.onChangeField("user", event.target.value)}
          />
          <input
            type="password"
            placeholder="Password *"
            value={this.state.password}
            onChange={(event) =>
              this.onChangeField("password", event.target.value)
            }
          />
          {this.props.error ? (
            <div className={styles.error}>Incorrect Username and password</div>
          ) : null}
          <section>
            <h3>Sign In</h3>
            <div className={styles.signInButton} onClick={() => this.logIn()}>
              <h3>&#8594;</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
