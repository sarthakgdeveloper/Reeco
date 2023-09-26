import { createSelector } from "reselect";

export const selectOrder = (state) => state.orders.orderDetails;

export const getOrdersIdList = createSelector([selectOrder], (orders) =>
  orders ? orders.map((order) => order.id) : null
);

export const selectOrderById = (id) =>
  createSelector([selectOrder], (orders) =>
    orders ? orders.find((order) => order.id === id) : null
  );
