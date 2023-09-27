import orderTypes from "./orderTypes";

export const approveOrder = (id) => {
  return { type: orderTypes.ORDER_APPROVED, payload: id };
};

export const missingOrder = (id) => {
  return { type: orderTypes.ORDER_MISSING, payload: id };
};

export const missingOrderUrgent = (id) => {
  return { type: orderTypes.ORDER_MISSING_URGENT, payload: id };
};

export const changeProductDetails = (data) => {
  return { type: orderTypes.ORDER_DETAILS_CHANGE, payload: data };
};
