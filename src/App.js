import { useEffect } from "react";
import Header from "./components/Header/Header";
import OrderPage from "./components/OrderPage/OrderPage";

import { connect } from "react-redux";
import ordersList from "../src/redux/orders/dummyOrderData";
import { setProductDetails } from "./redux/orders/orderActions";

import "./App.css";

function App({ setProducts }) {
  useEffect(() => {
    setProducts(ordersList);
  }, []);
  return (
    <div className="App">
      <Header />
      <OrderPage />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setProducts: (data) => dispatch(setProductDetails(data)),
});

export default connect(null, mapDispatchToProps)(App);
