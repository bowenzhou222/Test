import { apiUrl } from '../../urls';


export const login = payload => {
    const url = `${apiUrl}login`
    const options = {
        method: 'GET',
        headers: new Headers()
            .append('Content-Type', 'application/json'),
        body: JSON.stringify(payload),
        credentials: 'include',
    }

    return fetch(url, options)
        .then(res => 
            res.ok
            ? Promise.resolve(res.json())
            : Promise.reject({
                statusCode: res.status,
                responseText: res.text()
            })
        )
        .then(
            (user) => ({ ok: true, user }),
            error => ({
                ok: false,
                statusCode: error.statusCode,
                responseText: error.responseText
            })
        )
}

export const register = payload => {
    const url = `${apiUrl}register`
    const options = {
        method: 'POST',
        headers: new Headers()
            .append('Content-Type', 'application/json'),
        body: JSON.stringify(payload),
        credentials: 'include',
    }

    return fetch(url, options)
        .then(res => 
            res.ok
            ? Promise.resolve(res.json())
            : Promise.reject({
                statusCode: res.status,
                responseText: res.text()
            })
        )
        .then(
            (user) => ({ ok: true, user }),
            error => ({
                ok: false,
                statusCode: error.statusCode,
                responseText: error.responseText
            })
        )
}

export const fetchUser = () => {
    const url = `${apiUrl}user/get`
    const options = {
        method: 'GET',
        headers: new Headers()
            .append('Content-Type', 'application/json'),
        credentials: 'include',
    }

    return fetch(url, options)
        .then(res => 
            res.ok
            ? Promise.resolve(res.json())
            : Promise.reject({
                statusCode: res.status,
                responseText: res.text()
            })
        )
        .then(
            (user) => ({ ok: true, user }),
            error => ({
                ok: false,
                statusCode: error.statusCode,
                responseText: error.responseText
            })
        )
}