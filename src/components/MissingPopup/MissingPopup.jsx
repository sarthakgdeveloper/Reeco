import React from "react";

import Modal from "../Modal/Modal";

import { connect } from "react-redux";
import { selectOrderById } from "../../redux/orders/orderSelector";
import {
  missingOrder,
  missingOrderUrgent,
} from "../../redux/orders/orderActions";

import { MdClose } from "react-icons/md";

import styles from "./missingpopup.module.scss";

function MissingPopup({
  id,
  order,
  missingOrderById,
  missingUrgentOrderById,
  handleOpenPopup,
}) {
  const truncatedProductName = order
    ? order.productName?.length > 31
      ? `${order.productName.slice(0, 32)} ...`
      : order.productName
    : "";
  return order ? (
    <Modal
      onClose={() => handleOpenPopup(id, true)}
      innerContainerStyle={{ padding: "2rem 6rem" }}
    >
      <div className={styles.missingpopup__container}>
        <div className={styles.title}>
          <h3>Missing Product</h3>
          <MdClose
            size="2.4rem"
            color="#333"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenPopup(id, true)}
          />
        </div>
        <div className={styles.product__name}>
          <p>is '{truncatedProductName}' urgent?</p>
        </div>
        <div className={styles.btn__container}>
          <button
            onClick={() => {
              missingOrderById(id);
              handleOpenPopup(id, true);
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              missingUrgentOrderById(id);
              handleOpenPopup(id, true);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  ) : null;
}

const mapStateToprops = (state, ownProps) => ({
  order: selectOrderById(ownProps.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
  missingOrderById: (id) => dispatch(missingOrder(id)),
  missingUrgentOrderById: (id) => dispatch(missingOrderUrgent(id)),
});

export default connect(mapStateToprops, mapDispatchToProps)(MissingPopup);
