import { serverLink, serverOrderLink } from "./data";

function getIngredients(setData, setBurger) {
    setData({serverRespond: "Loading"})
    return fetch(serverLink)
        .then(res => {return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));})
        .then(json => {
            setData({ingredients: json.data, serverRespond: "Success"})
            setBurger({bun: json.data[0], middle: json.data})
        })
        .catch(error => {
            console.error(error);
            setData({serverRespond: "Error"})
        });
}

function postOrder(ingredients) {
    console.log(ingredients)
    return fetch(serverOrderLink, {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        data: JSON.stringify({ "ingredients": ingredients })
    })
    .then(res => {return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));})
    .then( res => res.order.number)
    .catch(error => {
        console.error(error);
    });
}

export { getIngredients, postOrder }