import { serverLink } from "./data";

function getData(setData) {
    return fetch(serverLink)
        .then(res => {return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));})
        .then(json => setData(json.data))
        .catch(error => {
            console.error(error);
        });
}

export { getData }