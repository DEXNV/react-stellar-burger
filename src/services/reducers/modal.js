import { MODAL_CLOSE, MODAL_OPEN } from "../actions/modal";

const initialState = {
  isVisible: false,
  modalIngredient: {},
  modalType: ""
};

export const modalList = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isVisible: true,
        modalIngredient: action.ingredient,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isVisible: false,
        modalIngredient: {},
      };
    default: {
      return state;
    }
  }
};
