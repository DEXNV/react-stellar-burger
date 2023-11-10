export const ADD_BURGER_INGREDIENT = "ADD_BURGER_INGREDIENT"
export const DEL_BURGER_INGREDIENT = "DEL_BURGER_INGREDIENT"
export const CHANGE_BURGER_BUNS = "CHANGE_BURGER_BUNS"
export const CHANGE_BURGER_MIDDLE = "CHANGE_BURGER_MIDDLE"

export const addBurgerIngredient = (requestData) => ({ type: ADD_BURGER_INGREDIENT, ingredient: requestData })
export const deleteBurgerIngredient = (requestData) => ({ type: DEL_BURGER_INGREDIENT, ingredient: requestData})
export const changeBurgerBuns = (requestData) => ({ type: CHANGE_BURGER_BUNS, bun: requestData})
export const changeBurgerMiddle = (requestData) => ({ type: CHANGE_BURGER_MIDDLE, middle: requestData})