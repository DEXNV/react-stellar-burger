import {
  ADD_BURGER_INGREDIENT,
  DEL_BURGER_INGREDIENT,
  CHANGE_BURGER_BUNS,
  CHANGE_BURGER_MIDDLE
} from "../actions/burger-construcor";
import { defaultBun, defaultMain } from "../../utils/data";
import uuid from "react-uuid";

const initialState = {
  bun: defaultBun,
  middle: [],
};

export const setBurgerIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      const newIngredient = action.ingredient
      setTimeout(() => console.log(state.middle), 2000) 
      //console.log(newIngredient.key)
      //console.log(state.middle[newIngredient.key - 1]) 
      // if (state.middle[0] === defaultMain || !state.middle[0]) {
      //   return {
      //     ...state,
      //     middle: [newIngredient],
      //   };
      // } else {
        console.log(newIngredient)
        return {
          ...state,
          middle: [...state.middle, newIngredient],
        };
      // }
    }
    case CHANGE_BURGER_BUNS: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case CHANGE_BURGER_MIDDLE: {
      return { 
        ...state, 
        middle: action.middle,
      }
    }
    case DEL_BURGER_INGREDIENT: {
      console.log(action)
      return {
        ...state,
        middle: state.middle.filter((item) => {
          console.log("id elem:" + action.ingredient.uuid + " | id item:" + item.uuid)
          return item.uuid !== action.ingredient.uuid
        })
      };
    }
    default: {
      return state;
    }
  }
};
