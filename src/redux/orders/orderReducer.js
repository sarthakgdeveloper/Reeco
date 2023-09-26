import orderTypes from "./orderTypes";
import { ORDERSTATUS } from "../../utils/orderStatus";
import ordersList from "./dummyOrderData";

const INITIALSTATE = {
  orderDetails: [...ordersList],
};

const approveOrder = (orderDetails, id) => {
  if (typeof id !== "number") return [...orderDetails];
  const productIndex = orderDetails.findIndex(
    (eachProduct) => eachProduct.id === id
  );
  if (productIndex !== -1) {
    orderDetails[productIndex].status = ORDERSTATUS.APPROVED;
  }
  return [...orderDetails];
};

const missingOrder = (orderDetails, id) => {
  if (typeof id !== "number") return [...orderDetails];
  const productIndex = orderDetails.findIndex(
    (eachProduct) => eachProduct.id === id
  );
  if (productIndex !== -1) {
    orderDetails[productIndex].status = ORDERSTATUS.MISSING;
  }
  return orderDetails;
};

const missingOrderUrgent = (orderDetails, id) => {
  if (typeof id !== "number") return [...orderDetails];
  const productIndex = orderDetails.findIndex(
    (eachProduct) => eachProduct.id === id
  );
  if (productIndex !== -1) {
    orderDetails[productIndex].status = ORDERSTATUS.MISSING_URGENT;
  }
  return [...orderDetails];
};

const orderReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case orderTypes.ORDER_APPROVED:
      return {
        ...state,
        orderDetails: approveOrder(state.orderDetails, action.payload),
      };

    case orderTypes.ORDER_MISSING:
      return {
        ...state,
        orderDetails: missingOrder(state.orderDetails, action.payload),
      };

    case orderTypes.ORDER_MISSING_URGENT:
      return {
        ...state,
        orderDetails: missingOrderUrgent(state.orderDetails, action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;
