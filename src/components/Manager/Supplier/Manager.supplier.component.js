import React, { Component } from "react";
import styles from "./ManagerSupplier.module.css";
import NavBar from "../../NavigationBar/NavigationBar.container";
import { navBarButtons } from "../NavigationBarInfo";
import LogoutButton from "../../LogoutButton/LogoutButton.component";
import { setList } from "../../../store/Manager/actions";
class SupplierScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      contact: "",
      update: false,
      updateIndex: null,
      required: false,
    };
  }
  onchangeText = (value, field) => {
    this.setState({
      [field]: value,
    });
  };
  addSupplier = () => {
    if (
      this.state.id !== "" &&
      this.state.name !== "" &&
      this.state.contact !== ""
    ) {
      let list = [...this.props.supplierList];
      list.push({
        id: this.state.id,
        name: this.state.name,
        contact: this.state.contact,
      });
      this.setState({
        id: "",
        name: "",
        contact: "",
        required: false,
      });
      setList("supplierList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  displaySupplier = (index) => {
    this.setState({
      id: this.props.supplierList[index].id,
      name: this.props.supplierList[index].name,
      contact: this.props.supplierList[index].contact,
      update: true,
      updateIndex: index,
      required: false,
    });
  };
  updateSupplier = () => {
    let list = [...this.props.supplierList];
    if (
      this.state.id !== "" &&
      this.state.name !== "" &&
      this.state.contact !== ""
    ) {
      list[this.state.updateIndex] = {
        id: this.state.id,
        name: this.state.name,
        contact: this.state.contact,
      };
      this.setState({
        id: "",
        name: "",
        contact: "",
        updateIndex: null,
        update: false,
        required: false,
      });
      setList("supplierList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  deleteSupplier = (index) => {
    let list = [...this.props.supplierList];
    list.splice(index, 1);
    setList("supplierList", list);
  };
  render() {
    return (
      <div>
        <NavBar buttons={navBarButtons} />
        <div className={styles.title}>
          <h1>Suppliers.</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.supplierForm}>
            <input
              placeholder="Supplier Id (10 chars max) *"
              value={this.state.id}
              type="text"
              maxLength="10"
              size="36"
              onChange={(event) => this.onchangeText(event.target.value, "id")}
            />
            <input
              placeholder="Supplier Name (50 chars max) *"
              value={this.state.name}
              type="text"
              maxLength="50"
              onChange={(event) =>
                this.onchangeText(event.target.value, "name")
              }
            />
            <input
              placeholder="contact *"
              type="text"
              value={this.state.contact}
              onChange={(event) =>
                this.onchangeText(event.target.value, "contact")
              }
            />
            <button
              onClick={() =>
                this.state.update === false
                  ? this.addSupplier()
                  : this.updateSupplier()
              }
            >
              {this.state.update === false ? "Add Supplier" : "Update Supplier"}
            </button>
            {this.state.required === true ? (
              <section>All fields are required*</section>
            ) : null}
          </div>
          <div className={styles.supplierListContainer}>
            <table className={styles.supplierTable}>
              <tr>
                <td>Id</td>
                <td>Supplier Name</td>
                <td>Contact</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>

              {this.props.supplierList.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    No Suppliers Added.
                  </td>
                </tr>
              ) : (
                this.props.supplierList.map((item, index) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button onClick={() => this.displaySupplier(index)}>
                        Update
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteSupplier(index)}>
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
      </div>
    );
  }
}

export default SupplierScreen;
