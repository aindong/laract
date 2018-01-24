import { getToken } from './token';
const API_URL = `/api/v1/`;

const fetchOpts = (method, body = null) => {
    const accessToken = getToken();

    let option = null;

    if (body instanceof FormData) {
        option = getFormDataOption(method, body, accessToken);
    } else {
        option = getJsonOption(method, body, accessToken);
    }

    return option;
};

const getJsonOption = (method, body, accessToken) => {
    let option = Object.assign({}, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }, body ? {
        body: JSON.stringify(body)
    } : {});

    if (accessToken) {
        option = Object.assign({}, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }, body ? {
            body: JSON.stringify(body)
        } : {});
    }

    return option;
}

const getFormDataOption = (method, body, accessToken) => {
    let option = Object.assign({}, {
        method,
        headers: {
            'Accept': 'application/json'
        }
    }, body ? {
        body: body
    } : {});

    if (accessToken) {
        option = Object.assign({}, {
            method,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }, body ? {
            body: body
        } : {});
    }

    return option;
}

const API = {
    get: (url) => fetch(`${API_URL}${url}`, fetchOpts('GET')),
    post: (url, data) => fetch(`${API_URL}${url}`, fetchOpts('POST', data)),
    put: (url, data)  => fetch(`${API_URL}${url}`, fetchOpts('PUT', data)),
    patch: (url, data)  => fetch(`${API_URL}${url}`, fetchOpts('PATCH', data)),
    delete: (url) => fetch(`${API_URL}${url}`, fetchOpts('DELETE'))
};

export default API;
