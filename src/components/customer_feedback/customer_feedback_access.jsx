import { apiUrl } from '../../urls';


export const sendMessage = payload => {
    const url = `${apiUrl}send`
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
            ? Promise.resolve()
            : Promise.reject({
                statusCode: res.status,
                responseText: res.text()
            })
        )
        .then(
            () => ({ ok: true }),
            error => ({
                ok: false,
                statusCode: error.statusCode,
                responseText: error.responseText
            })
        )
}