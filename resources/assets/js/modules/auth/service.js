import API from '../../utils/api';

export const login = async (credentials) => {
    try {
        const response = await API.post('auth/login', credentials);

        const json = await response.json();

        if (! response.ok) {
            throw new Error(json.message);
        }

        return json;
    } catch (err) {
        throw err;
    }
};

export const whoami = async () => {
    try {
        const response = await API.get('whoami');

        const json = await response.json();

        if (! response.ok) {
            throw new Error(json.message);
        }

        return json;
    } catch (err) {
        throw err;
    }
};
