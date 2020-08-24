import React from "react";
import { connect } from "react-redux";
import ManagerPurchaseComponent from "./Manager.purchase.component";

function ManagerPurchase(props) {
  return (
    <ManagerPurchaseComponent
      purchaseList={props.purchaseList}
      supplierList={props.supplierList}
      productList={props.productList}
    />
  );
}

const mapStateToProps = (state) => ({
  purchaseList: state.manager.purchaseList,
  supplierList: state.manager.supplierList,
  productList: state.manager.productList,
});

export default connect(mapStateToProps)(ManagerPurchase);
