import { serverLink } from "./data";

function getIngredients(setData) {
    setData({serverRespond: "Loading"})
    return fetch(serverLink)
        .then(res => {return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));})
        .then(json => setData({ingredients: json.data, serverRespond: "Success"}))
        .catch(error => {
            console.error(error);
            setData({serverRespond: "Error"})
        });
}

export { getIngredients }