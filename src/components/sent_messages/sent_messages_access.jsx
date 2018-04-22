import { apiUrl } from '../../urls';

export const fetchMessages = email => {
    const url = `${apiUrl}messages/get?email=${email}`;

    const options = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        credentials: 'include',
    };

    return fetch(url, options)
        .then(res => res.ok
            ? Promise.resolve(res.json())
            : Promise.reject({
                statusCode: res.status,
                responseText: res.text()
            })
        )
        .then(
            (messages) => ({ ok: true, messages }),
            error => ({
                ok: false,
                statusCode: error.statusCode,
                responseText: error.responseText
            })
        )
}