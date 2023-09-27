import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getOrdersIdList } from "../../redux/orders/orderSelector";

import MissingPopup from "../MissingPopup/MissingPopup";

import { TiShoppingCart } from "react-icons/ti";
import { MdPrint, MdSearch } from "react-icons/md";

import styles from "./orderpage.module.scss";
import OrdersTable from "../OrdersTable/OrdersTable";
import EditOrder from "../EditOrder/EditOrder";

const POPUPTYPES = {
  MISSING_POPUP: "MISSING_POPUP",
  EDITORDER_POPUP: "EDITORDER_POPUP",
};

function OrderPage({ ordersIdList }) {
  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenMissingPopup = () => {
    let type = POPUPTYPES.MISSING_POPUP;
    return (id, shouldClose = false) => {
      if (shouldClose) {
        setOpenPopup(false);
        return;
      }
      if (typeof id !== "number") return;
      setOpenPopup({ id, type });
    };
  };
  const handleOpenEditPopup = () => {
    let type = POPUPTYPES.EDITORDER_POPUP;
    return (id, shouldClose = false) => {
      if (shouldClose) {
        setOpenPopup(false);
        return;
      }
      if (typeof id !== "number") return;
      setOpenPopup({ id, type });
    };
  };
  return (
    <div className={styles.order__container}>
      <div className={styles.order__ID}>
        <div>
          <p>
            Orders {">"} <span>Order 32457ABC</span>
          </p>
        </div>
        <div className="flex space__between">
          <h2>Order 32457ABC</h2>
          <div>
            <button>Back</button>
            <button className={styles.approveBtn}>Approve order</button>
          </div>
        </div>
      </div>
      <div className={styles.order__details}>
        <div className={styles.suborder__details}>
          <h3>Supplier</h3>
          <p>East coast fruits & vegetables</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.suborder__details}>
          <h3>Shipping date</h3>
          <p>Thu, Feb 10</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.suborder__details}>
          <h3>Total</h3>
          <p>$ 15,028.3</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.suborder__details}>
          <h3>Category</h3>
          <div className={styles.category}>
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
            <TiShoppingCart style={{ fontSize: "2rem" }} color="#777" />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.suborder__details}>
          <h3>Department</h3>
          <p>300-444-678</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.suborder__details}>
          <h3>Status</h3>
          <p>Awaiting your approvel</p>
        </div>
      </div>
      <div className={styles.order__detailslist}>
        <div className="flex space__between" style={{ width: "100%" }}>
          <div style={{ position: "relative" }}>
            <input placeholder="Search..." />
            <MdSearch
              size="1.8rem"
              color="#333"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <div className="flex center">
            <button>Add Item</button>
            <MdPrint
              color="#087830"
              size="2.4rem"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <OrdersTable
          ordersId={ordersIdList}
          handleOpenMissingPopup={handleOpenMissingPopup()}
          handleOpenEditOrderPopup={handleOpenEditPopup()}
        />
      </div>
      {openPopup.type === POPUPTYPES.MISSING_POPUP && (
        <MissingPopup
          id={openPopup.id}
          handleOpenPopup={handleOpenMissingPopup()}
        />
      )}
      {openPopup.type === POPUPTYPES.EDITORDER_POPUP && (
        <EditOrder
          id={openPopup.id}
          handleOpenEditOrderPopup={handleOpenEditPopup()}
        />
      )}
    </div>
  );
}

const mapStateToprops = createStructuredSelector({
  ordersIdList: getOrdersIdList,
});

export default connect(mapStateToprops)(OrderPage);
