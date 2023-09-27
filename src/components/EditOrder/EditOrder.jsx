import React, { useState } from "react";

import Modal from "../Modal/Modal";

import { connect } from "react-redux";
import { changeProductDetails } from "../../redux/orders/orderActions";

import { MdClose } from "react-icons/md";

import ProductImage from "../../img/Avocado_Hass.jpg";

import styles from "./editorder.module.scss";
import { selectOrderById } from "../../redux/orders/orderSelector";

const reasons = [
  "Missing Product",
  "Quantity is not the same",
  "Price is not the same",
  "other",
];

function EditOrder({
  id,
  order,
  handleOpenEditOrderPopup,
  changeProductDetailsById,
}) {
  const [isUpdated, setIsUpdated] = useState({ price: false, quantity: false });
  const [priceInput, setPriceInput] = useState(order?.price || "");
  const [reasonSelected, setReasonSelected] = useState(undefined);
  const [quantityInput, setQuantityInput] = useState(order?.quantity || "");
  const truncatedProductName = order
    ? order.productName?.length > 51
      ? `${order.productName.slice(0, 52)} ...`
      : order.productName
    : "";

  const handlePriceUpdate = (e, value) => {
    const data = e?.target?.value || value;
    if (!isUpdated.price) {
      setIsUpdated((prev) => {
        return {
          ...prev,
          price: true,
        };
      });
    }
    setPriceInput((prev) => {
      return {
        ...prev,
        actualPrice: data ? parseInt(data) : 0,
      };
    });
  };

  const handleQuantityUpdate = (e, value) => {
    const data = e?.target?.value || value;
    if (!isUpdated.quantity) {
      setIsUpdated((prev) => {
        return {
          ...prev,
          quantity: true,
        };
      });
    }
    setQuantityInput((prev) => {
      return {
        ...prev,
        pieces: data ? parseInt(data) : 0,
      };
    });
  };

  return order ? (
    <Modal
      onClose={() => handleOpenEditOrderPopup(id, true)}
      innerContainerStyle={{ borderRadius: "1.6rem" }}
    >
      <div className={styles.editpopup__container}>
        <div className={styles.cross}>
          <MdClose
            size="2.4rem"
            color="#333"
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenEditOrderPopup(id, true)}
          />
        </div>
        <div className={styles.productDetails}>
          <h2>{truncatedProductName}</h2>
          <p>{order.brand}</p>
        </div>
        <div className={styles.product__specs}>
          <div className={styles.image__container}>
            <img src={ProductImage} alt="product image" />
          </div>
          <div className={styles.innerproduct_specs}>
            <div className={styles.specs}>
              <p>
                Price <span>($)</span>
              </p>
              <div>
                <input
                  value={priceInput.actualPrice}
                  onChange={handlePriceUpdate}
                />{" "}
                <span>/ {priceInput.number}</span>
              </div>
            </div>
            <div className={styles.specs}>
              <p>Quanity</p>
              <div>
                <button
                  onClick={() =>
                    handleQuantityUpdate(undefined, quantityInput.pieces - 1)
                  }
                >
                  -
                </button>
                <input
                  value={quantityInput.pieces}
                  onChange={handleQuantityUpdate}
                />
                <button
                  onClick={() =>
                    handleQuantityUpdate(undefined, quantityInput.pieces + 1)
                  }
                >
                  +
                </button>
                <span>X {quantityInput.amount}</span>
              </div>
            </div>
            <div className={styles.specs}>
              <p>Total</p>
              <p>$99999</p>
            </div>
          </div>
        </div>
        <div className={styles.reasons}>
          <h3>
            Choose Reason <span>{"(optional)"}</span>
          </h3>
          <div>
            {reasons.map((reason, i) => (
              <p
                onClick={() => setReasonSelected(reason)}
                key={reason}
                style={
                  reason === reasonSelected
                    ? { backgroundColor: "#087830", color: "#fff" }
                    : {}
                }
              >
                {reason}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.btn__container}>
          <button
            onClick={() => {
              handleOpenEditOrderPopup(id, true);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              let data = { id };
              if (!isUpdated.price && !isUpdated.quantity) {
                handleOpenEditOrderPopup(id, true);
                return;
              }
              if (isUpdated.price && !isUpdated.quantity) {
                data.updateStatus = "Price updated";
                data.price = priceInput;
              }
              if (isUpdated.quantity && !isUpdated.price) {
                data.updateStatus = "Quantity updated";
                data.quantity = quantityInput;
              }
              if (isUpdated.price && isUpdated.quantity) {
                data.updateStatus = "Quantity and Price updated";
                data.price = priceInput;
                data.quantity = quantityInput;
              }
              changeProductDetailsById(data);
              handleOpenEditOrderPopup(id, true);
            }}
            className={styles.sendBtn}
          >
            Send
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
  changeProductDetailsById: (data) => dispatch(changeProductDetails(data)),
});

export default connect(mapStateToprops, mapDispatchToProps)(EditOrder);
