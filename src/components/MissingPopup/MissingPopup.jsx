import React, { useEffect } from "react";

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
  useEffect(() => {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";

    return () => {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    };
  }, []);
  return order ? (
    <div
      className={styles.missingpopup_container}
      onClick={() => handleOpenPopup(id, true)}
    >
      <div
        className={styles.missingpopup_innercontainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.title}>
          <h3>Missing Product</h3>
          <MdClose
            size="2.4rem"
            color="#333"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenPopup(id, true)}
          />
        </div>
        <p>is '{order.productName}' urgent?</p>
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
    </div>
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
