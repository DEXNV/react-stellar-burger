import { serverLink, serverOrderLink, checkResponse } from "./data";

function getIngredients(setData, setBurger) {
    setData({serverRespond: "Loading"})
    return fetch(serverLink)
        .then(res => {return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));})
        .then(json => {
            setData({ingredients: json.data, serverRespond: "Success"})
            setBurger({bun: json.data[0], middle: json.data})
        })
}

function postOrder(ingredients) {
    return fetch(serverOrderLink, {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ "ingredients": ingredients })
    })
    .then(res => checkResponse(res))
    .then(res => res)
}

export { getIngredients, postOrder }