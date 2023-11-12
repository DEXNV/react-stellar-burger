import { ORDER_FAILURE, ORDER_SUCCESS, ORDER_REQUEST } from "../actions/order";

const initialState = {
  orderRequest: false,
  orderSuccess: false,
  orderFailure: "",
  order: {},
};

export const orderState = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:{
      return {
        ...state,
        orderRequest: true,
      };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderSuccess: true,
        order: action.order,
      };
    }
    case ORDER_FAILURE: {
      return {
        ...state,
        orderFailure: action.message,
        orderSuccess: false,
        orderRequest: false,
      };
    }
    default:
      return state;
  }
};
