import React from "react";
import { connect } from "react-redux";
import ManagerProductComponent from "./Manager.product.component";

function ManagerProduct(props) {
  return (
    <ManagerProductComponent
      productList={props.productList}
      user={props.user}
    />
  );
}

const mapStateToProps = (state) => ({
  productList: state.manager.productList,
  user: state.session,
});

export default connect(mapStateToProps)(ManagerProduct);
