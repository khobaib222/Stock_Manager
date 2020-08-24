import React, { Component } from "react";
import styles from "./ManagerPurchase.module.css";
import NavBar from "../../NavigationBar/NavigationBar.container";
import { navBarButtons } from "../NavigationBarInfo";
import LogoutButton from "../../LogoutButton/LogoutButton.component";
import { setList } from "../../../store/Manager/actions";

class PurchaseScreen extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      supplier: "",
      quantity: "",
      update: false,
      updateId: null,
      required: false,
    };
  }
  onchangeField = (value, field) => {
    if (field === "quantity" && value < Number(0)) {
      this.setState({
        quantity: 0,
      });
    } else {
      this.setState({
        [field]: value,
      });
    }
  };
  addProduct = () => {
    if (
      this.state.product !== "" &&
      this.state.supplier !== "" &&
      this.state.quantity !== ""
    ) {
      let list = [...this.props.purchaseList];
      list.push({
        product: this.state.product,
        supplier: this.state.supplier,
        quantity: this.state.quantity,
      });
      this.setState({
        product: "",
        supplier: "",
        quantity: "",
        required: false,
      });
      setList("purchaseList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  displayProduct = (index) => {
    this.setState({
      product: this.props.purchaseList[index].product,
      supplier: this.props.purchaseList[index].supplier,
      quantity: this.props.purchaseList[index].quantity,
      update: true,
      required: false,
      updateIndex: index,
    });
  };
  updateProduct = () => {
    let list = [...this.props.purchaseList];
    if (
      this.state.product !== "" &&
      this.state.supplier !== "" &&
      this.state.quantity !== ""
    ) {
      list[this.state.updateIndex] = {
        product: this.state.product,
        supplier: this.state.supplier,
        quantity: this.state.quantity,
      };
      this.setState({
        product: "",
        supplier: "",
        quantity: "",
        updateIndex: null,
        update: false,
        required: false,
      });
      setList("purchaseList", list);
    } else {
      this.setState({
        required: true,
      });
    }
  };
  deleteProduct = (index) => {
    let list = [...this.props.purchaseList];
    list.splice(index, 1);
    setList("purchaseList", list);
  };
  render() {
    return (
      <div>
        <NavBar buttons={navBarButtons} />
        <div className={styles.title}>
          <h1>Purchases.</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.productForm}>
            <input
              onChange={(event) =>
                this.onchangeField(event.target.value, "product")
              }
              placeholder="Select Product *"
              list="products"
              value={this.state.product}
              name="product"
              id="product"
              size="36"
            />
            <datalist id="products">
              {this.props.productList.map((item, index) => (
                <option value={item.name + " (id: " + item.id + ")"}></option>
              ))}
            </datalist>
            <input
              onChange={(event) =>
                this.onchangeField(event.target.value, "supplier")
              }
              value={this.state.supplier}
              placeholder="Select Supplier *"
              list="suppliers"
              name="supplier"
              id="supplier"
            />
            <datalist id="suppliers">
              {this.props.supplierList.map((item, index) => (
                <option value={item.name + " (id: " + item.id + ")"}></option>
              ))}
            </datalist>
            <input
              placeholder="Quantity *"
              type="number"
              value={this.state.quantity}
              onChange={(event) =>
                this.onchangeField(event.target.value, "quantity")
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
                <td>Product</td>
                <td>Supplier</td>
                <td>Quantity</td>
                <td>Ordered By</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>

              {this.props.purchaseList.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
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
                this.props.purchaseList.map((item, index) => (
                  <tr>
                    <td>{item.product}</td>
                    <td>{item.supplier}</td>
                    <td>{item.quantity}</td>
                    <td>khobaib222@gamil.com</td>
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

export default PurchaseScreen;
