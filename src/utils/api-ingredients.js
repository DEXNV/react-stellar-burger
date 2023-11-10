import { serverLink, serverOrderLink, checkResponse } from "./data";
import { GET_INGREDIENTS_LIST, GET_INGREDIENTS_LIST_FAIL, ingredientListSuccess } from "../services/actions/burger-ingredients";
import { addBurgerIngredient, changeBurgerBuns } from "../services/actions/burger-construcor";
import { orderRequest, orderFailure, orderSuccess, ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS } from "../services/actions/order";

function getIngredients() {
    return function (dispatch) {
        dispatch({type: GET_INGREDIENTS_LIST})
        fetch(serverLink)
        .then((res) => checkResponse(res))
        .then(json => {
            dispatch(ingredientListSuccess(json))
            dispatch(changeBurgerBuns(json.data[0]))
        })
        .catch((err) => {
            console.log(err)
            dispatch({type: GET_INGREDIENTS_LIST_FAIL})
        })
    }
}

function postOrder(ingredients) {
    return function (dispatch) {
        dispatch(orderRequest())
        fetch(serverOrderLink, {
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({ "ingredients": ingredients })
        })
        .then(res => checkResponse(res))
        .then(res => dispatch(orderSuccess(res)))
        .catch(err => dispatch(orderFailure(err)))
    }
    
}

export { getIngredients, postOrder }