import React from "react";

import EachOrder from "../EachOrder/EachOrder";

import styles from "./orderstable.module.scss";

function OrdersTable({
  ordersId,
  handleOpenMissingPopup,
  handleOpenEditOrderPopup,
}) {
  return (
    <div className={styles.orders__list}>
      <div className={styles.order__listhead}>
        <div>
          <p>Product name</p>
        </div>
        <div>
          <p>Brand</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Total</p>
        </div>
        <div>
          <p>Status</p>
        </div>
      </div>
      {ordersId?.length > 0 &&
        ordersId.map((id, index) => (
          <EachOrder
            id={id}
            key={`${id}_${index}`}
            handleOpenMissingPopup={handleOpenMissingPopup}
            handleOpenEditOrderPopup={handleOpenEditOrderPopup}
          />
        ))}
    </div>
  );
}

export default OrdersTable;
