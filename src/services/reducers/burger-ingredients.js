import {
  SET_INGREDIENTS_LIST,
  GET_INGREDIENTS_LIST,
  GET_INGREDIENTS_LIST_FAIL,
} from "../actions/burger-ingredients";

const initialState = {
  ingredients: [],
  serverRespond: "",
};

export const getIngredientsList = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS_LIST: {
      return {
        ...state,
        ingredients: action.ingredients,
        serverRespond: action.serverRespond,
      };
    }
    case GET_INGREDIENTS_LIST: {
      return {
        ...state,
        serverRespond: "Loading",
      };
    }
    case GET_INGREDIENTS_LIST_FAIL: {
      return {
        ...state,
        serverRespond: "Fail",
      };
    }
    default: {
      return state;
    }
  }
};
