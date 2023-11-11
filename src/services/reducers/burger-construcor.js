import {
  ADD_BURGER_INGREDIENT,
  DEL_BURGER_INGREDIENT,
  CHANGE_BURGER_BUNS,
  CHANGE_BURGER_MIDDLE
} from "../actions/burger-construcor";
import { defaultBun, defaultMain } from "../../utils/data";

const initialState = {
  bun: defaultBun,
  middle: [defaultMain]
}

export const setBurgerIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      const newIngredient = action.ingredient

      if (state.middle[0] === defaultMain || !state.middle[0]) {
        return {
          ...state,
          middle: [newIngredient],
        };
      } else {
        console.log(newIngredient)
        const newMiddle = [...state.middle, newIngredient]
        return {
          ...state,
          middle: newMiddle,
        };
      }
    }
    case CHANGE_BURGER_BUNS: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case CHANGE_BURGER_MIDDLE: {
      const ingredients = [...state.middle]
      ingredients.splice(action.middle.hoverIndex, 0, ingredients.splice(action.middle.dragIndex, 1)[0]);
      return { 
        ...state, 
        middle: ingredients,
      }
    }
    case DEL_BURGER_INGREDIENT: {
      console.log(action)
      return {
        ...state,
        middle: state.middle.filter((item) => {
          console.log("id elem:" + action.ingredient.uuid + " | id item:" + item.uuid)
          return item.key !== action.ingredient.key
        })
      };
    }
    default: {
      return state;
    }
  }
};
