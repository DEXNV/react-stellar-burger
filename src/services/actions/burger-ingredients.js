export const SET_INGREDIENTS_LIST = "SET_INGREDIENTS_LIST"
export const GET_INGREDIENTS_LIST = "GET_INGREDIENTS_LIST"
export const GET_INGREDIENTS_LIST_FAIL = "GET_INGREDIENTS_LIST_FAIL"

export const ingredientListSuccess = (requestData) => ({ type: SET_INGREDIENTS_LIST, serverRespond: "Success", ingredients: requestData.data })
