import orderTypes from "./orderTypes";
import { ORDERSTATUS } from "../../utils/orderStatus";
import ordersList from "./dummyOrderData";

const INITIALSTATE = {
  orderDetails: [...ordersList],
};

const changeOrderStatus = (orderDetails, id, status) => {
  if (typeof id !== "number") return [...orderDetails];
  const productIndex = orderDetails.findIndex(
    (eachProduct) => eachProduct.id === id
  );
  if (productIndex !== -1) {
    orderDetails[productIndex].status = status;
  }
  return [...orderDetails];
};

const changeOrderDetails = (orderDetails, { id, ...data }) => {
  if (typeof id !== "number") return [...orderDetails];
  const productIndex = orderDetails.findIndex(
    (eachProduct) => eachProduct.id === id
  );
  if (productIndex !== -1) {
    let keys = Object.keys(data);
    keys.forEach((key) => {
      if (data[key]) {
        orderDetails[productIndex][key] = data[key];
      }
    });
  }
  return [...orderDetails];
};

const orderReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case orderTypes.ORDER_APPROVED:
      return {
        ...state,
        orderDetails: changeOrderStatus(
          state.orderDetails,
          action.payload,
          ORDERSTATUS.APPROVED
        ),
      };

    case orderTypes.ORDER_MISSING:
      return {
        ...state,
        orderDetails: changeOrderStatus(
          state.orderDetails,
          action.payload,
          ORDERSTATUS.MISSING
        ),
      };

    case orderTypes.ORDER_MISSING_URGENT:
      return {
        ...state,
        orderDetails: changeOrderStatus(
          state.orderDetails,
          action.payload,
          ORDERSTATUS.MISSING_URGENT
        ),
      };
    case orderTypes.ORDER_DETAILS_CHANGE: {
      return {
        ...state,
        orderDetails: changeOrderDetails(state.orderDetails, action.payload),
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;
