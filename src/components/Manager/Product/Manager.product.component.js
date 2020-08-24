import React, { Component } from "react";
import styles from "./ManagerProduct.module.css";
import NavBar from "../../NavigationBar/NavigationBar.container";
import { navBarButtons } from "../NavigationBarInfo";
import LogoutButton from "../../LogoutButton/LogoutButton.component";
import { setList } from "../../../store/Manager/actions";
import { withRouter } from "react-router-dom";

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      update: false,
      updateIndex: null,
      required: false,
    };
  }
  /*componentDidMount() {
    window.onpopstate = () => {
      this.props.history.push("/Manager/Products");
    };
  }*/
  onchangeText = (value, field) => {
    this.setState({
      [field]: value,
    });
  };
  addProduct = () => {
    if (
      this.state.id !== "" &&
      this.state.name !== "" &&
      this.state.price !== ""
    ) {
      let list = [...this.props.productList];
      list.push({
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
      });
      this.setState({
        id: "",
        name: "",
        price: "",
        required: false,
      });
      setList("productList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  displayProduct = (index) => {
    let list = this.props.productList;
    this.setState({
      id: list[index].id,
      name: list[index].name,
      price: list[index].price,
      update: true,
      required: false,
      updateIndex: index,
    });
  };
  updateProduct = () => {
    let list = [...this.props.productList];
    if (
      this.state.id !== "" &&
      this.state.name !== "" &&
      this.state.price !== ""
    ) {
      list[this.state.updateIndex] = {
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
      };
      this.setState({
        id: "",
        name: "",
        price: "",
        updateIndex: null,
        update: false,
        required: false,
      });
      setList("productList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  deleteProduct = (index) => {
    let list = [...this.props.productList];
    list.splice(index, 1);
    setList("productList", list);
  };
  render() {
    return (
      <div>
        <NavBar buttons={navBarButtons} />
        <div className={styles.title}>
          <h1>Products.</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.productForm}>
            <input
              placeholder="Product Id (10 chars max) *"
              value={this.state.id}
              type="text"
              maxLength="10"
              size="36"
              onChange={(event) => this.onchangeText(event.target.value, "id")}
            />
            <input
              placeholder="Product Name (50 chars max) *"
              value={this.state.name}
              type="text"
              maxLength="50"
              onChange={(event) =>
                this.onchangeText(event.target.value, "name")
              }
            />
            <input
              placeholder="Price *"
              type="text"
              value={this.state.price}
              onChange={(event) =>
                this.onchangeText(event.target.value, "price")
              }
            />
            <button
              onClick={() =>
                this.state.update === false
                  ? this.addProduct()
                  : this.updateProduct()
              }
            >
              {this.state.update === false ? "Add Product" : "Update Product"}
            </button>
            {this.state.required === true ? (
              <section>All fields are required*</section>
            ) : null}
          </div>
          <div className={styles.productListContainer}>
            <table className={styles.productTable}>
              <tr>
                <td>Id</td>
                <td>Product Name</td>
                <td>Price</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>

              {this.props.productList.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    No Products Added.
                  </td>
                </tr>
              ) : (
                this.props.productList.map((item, index) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => this.displayProduct(index)}>
                        Update
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteProduct(index)}>
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

export default withRouter(ProductScreen);
