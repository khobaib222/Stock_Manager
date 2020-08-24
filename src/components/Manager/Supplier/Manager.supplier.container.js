import React from "react";
import ManagerSupplierComponent from "./Manager.supplier.component";
import { connect } from "react-redux";

function ManagerSupplier(props) {
  return <ManagerSupplierComponent supplierList={props.supplierList} />;
}

const mapStateToProps = (state) => ({
  supplierList: state.manager.supplierList,
});
export default connect(mapStateToProps)(ManagerSupplier);
