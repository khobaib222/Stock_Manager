import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import Login from "./components/Login/Login.container";
import ManagerProduct from "./components/Manager/Product/Manger.product.container";
import ManagerSupplier from "./components/Manager/Supplier/Manager.supplier.container";
import ManangerPurchase from "./components/Manager/Purchases/Manager.purchase.container";
import Admin from "./components/Admin/Admin.component";
import ManagerSales from "./components/Manager/Sales/Manager.sales.component";
import { store } from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Manager/Products" component={ManagerProduct} />
        <Route exact path="/Manager/Suppliers" component={ManagerSupplier} />
        <Route exact path="/Manager/Purchases" component={ManangerPurchase} />
        <Route exact path="/Manager/Sales" component={ManagerSales} />
        <Route exact path="/Admin" component={Admin} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
