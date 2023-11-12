import { combineReducers } from "redux";
import { getIngredientsList } from "./burger-ingredients";
import { setBurgerIngredients } from "./burger-construcor";
import { modalList } from "./modal";
import { orderState } from "./order";

export const rootReducer = combineReducers({
  ingredients: getIngredientsList,
  burger: setBurgerIngredients,
  modal: modalList,
  order: orderState,
});
