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
  middle: [{
    "_id":"60666c42cc7b410027a1a9b2",
    "name":"Флюоресцентная булка R2-D3",
    "type":"bun",
    "proteins":44,
    "fat":26,
    "carbohydrates":85,
    "calories":643,
    "price":988,
    "image":"https://code.s3.yandex.net/react/code/bun-01.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
    "__v":0,
    "uuid": uuid()
 },{
  "_id":"60666c42cc7b410027a1a9b2",
  "name":"Флюоресцентная булка R2-D3",
  "type":"bun",
  "proteins":44,
  "fat":26,
  "carbohydrates":85,
  "calories":643,
  "price":988,
  "image":"https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
  "__v":0,
  "uuid": uuid()
}]
 
};

export const setBurgerIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      const newIngredient = action.ingredient
      newIngredient.uuid = uuid()
      state.middle.map((item) => {
        if(item._id == newIngredient._id) newIngredient.uuid = uuid()
      })
      //setTimeout(() => console.log(state.middle), 3000) 
      //console.log(newIngredient.key)
      //console.log(state.middle[newIngredient.key - 1]) 
      // if (state.middle[0] === defaultMain || !state.middle[0]) {
      //   return {
      //     ...state,
      //     middle: [newIngredient],
      //   };
      // } else {
        console.log(newIngredient)
        const newMiddle = [...state.middle, newIngredient]
        return {
          ...state,
          middle: newMiddle,
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
