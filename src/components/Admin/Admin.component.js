import React, { Component } from "react";
import styles from "./Admin.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.component";
import { withRouter } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
    let list = JSON.parse(localStorage.getItem("users"));
    this.state = {
      userid: "",
      password: "",
      type: "",
      list: list ? list : [],
      update: false,
      updateIndex: null,
      required: false,
    };
  }
  onChangeField = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  displayEmployee = (index) => {
    let list = this.state.list;
    this.setState({
      userid: list[index].user,
      password: list[index].password,
      type: list[index].type,
      update: true,
      updateIndex: index,
      required: false,
    });
  };
  addEmployee() {
    if (
      this.state.userid !== "" &&
      this.state.password !== "" &&
      this.state.type !== ""
    ) {
      let list = [...this.state.list];
      list.push({
        user: this.state.userid,
        password: this.state.password,
        type: this.state.type,
      });
      this.setState({
        userid: "",
        password: "",
        type: "",
        list: list,
        required: false,
      });
      localStorage.setItem("users", JSON.stringify(list));
    } else {
      this.setState({
        required: true,
      });
    }
  }
  updateEmployee() {
    if (
      this.state.userid !== "" &&
      this.state.password !== "" &&
      this.state.type !== ""
    ) {
      let list = [...this.state.list];
      list[this.state.updateIndex] = {
        user: this.state.userid,
        password: this.state.password,
        type: this.state.type,
      };
      this.setState({
        userid: "",
        password: "",
        type: "",
        update: false,
        required: false,
        updateIndex: null,
        list: list,
      });
      localStorage.setItem("users", JSON.stringify(list));
    } else {
      this.setState({
        required: true,
      });
    }
  }
  deleteEmployee(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
    localStorage.setItem("users", JSON.stringify(list));
  }
  render() {
    return (
      <div>
        <div className={styles.heading}>
          <div>
            <h1>Stock</h1>
            <h1>Manager</h1>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.employeeForm}>
            <input
              placeholder="User Id (10 chars max) *"
              type="text"
              maxLength="10"
              size="36"
              value={this.state.userid}
              onChange={(event) =>
                this.onChangeField("userid", event.target.value)
              }
            />
            <input
              placeholder="Password (10 chars max) *"
              type="text"
              maxLength="50"
              value={this.state.password}
              onChange={(event) =>
                this.onChangeField("password", event.target.value)
              }
            />
            <input
              placeholder="Select Type *"
              type="text"
              list="type"
              value={this.state.type}
              onChange={(event) =>
                this.onChangeField("type", event.target.value)
              }
            />
            <datalist id="type">
              <option>manager</option>
              <option>sales clerk</option>
            </datalist>
            {this.state.update ? (
              <button onClick={() => this.updateEmployee()}>
                Update Employee
              </button>
            ) : (
              <button onClick={() => this.addEmployee()}>Add Employee</button>
            )}

            {this.state.required === true ? (
              <section>All fields are required*</section>
            ) : null}
          </div>
          <div className={styles.employeeListContainer}>
            <table className={styles.employeeTable}>
              <tr>
                <td>User Id</td>
                <td>Password</td>
                <td>Type</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>

              {this.state.list.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    No Employee Added.
                  </td>
                </tr>
              ) : (
                this.state.list.map((item, index) => (
                  <tr>
                    <td>{item.user}</td>
                    <td>{item.password}</td>
                    <td>{item.type}</td>
                    <td>
                      <button onClick={() => this.displayEmployee(index)}>
                        Update
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteEmployee(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </table>
          </div>
        </div>
        <LogoutButton />
        <div>
          <div className={styles.userTag}>
            <p>Admin: {this.props.history.location.state}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);
