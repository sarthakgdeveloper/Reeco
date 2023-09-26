import React from "react";

import { connect } from "react-redux";
import { selectOrderById } from "../../redux/orders/orderSelector";
import { approveOrder } from "../../redux/orders/orderActions";

import { ORDERSTATUS } from "../../utils/orderStatus";

import ProductImage from "../../img/Avocado_Hass.jpg";
import { MdDone, MdClose } from "react-icons/md";

import styles from "./eachorder.module.scss";

function EachOrder({ id, order, approveOrderById, handleOpenPopup }) {
  return order ? (
    <div className={styles.order__listbody}>
      <div>
        <div className={styles.image__container}>
          <img src={ProductImage} alt="product image" />
        </div>
        <p>{order.productName}</p>
      </div>
      <div>
        <p>{order.brand}</p>
      </div>
      <div>
        <p>{order.price.actualPrice}</p>
        {order.price.retailPrice && (
          <p className={styles.cross}>{order.price.retailPrice}</p>
        )}
      </div>
      <div>
        <p>
          <span>{order.quantity.pieces}</span> x {order.quantity.amount}
        </p>
      </div>
      <div>
        <p>{order.total.finalAmount}</p>
        {order.total.retailAmount && (
          <p className={styles.cross}>{order.total.retailAmount}</p>
        )}
      </div>
      <div>
        {order.status === ORDERSTATUS.APPROVED && (
          <p className={styles.approved}>Approved</p>
        )}
        <MdDone
          size="1.8rem"
          color={order.status === ORDERSTATUS.APPROVED ? "#087830" : "#333"}
          onClick={() => {
            if (order.status === ORDERSTATUS.PENDING) {
              approveOrderById(id);
            }
          }}
          style={{ cursor: "pointer" }}
        />
        <MdClose
          size="1.8rem"
          color={
            order.status === ORDERSTATUS.MISSING ||
            order.status === ORDERSTATUS.MISSING_URGENT
              ? "#f00"
              : "#333"
          }
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (order.status === ORDERSTATUS.PENDING) {
              handleOpenPopup(id);
            }
          }}
        />
        <button>Edit</button>
      </div>
    </div>
  ) : null;
}

const mapStateToprops = (state, ownProps) => ({
  order: selectOrderById(ownProps.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
  approveOrderById: (id) => dispatch(approveOrder(id)),
});

export default connect(mapStateToprops, mapDispatchToProps)(EachOrder);
