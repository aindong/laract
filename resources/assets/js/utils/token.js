export const setToken = (accessToken) => {
    window.localStorage.setItem('laract_accessToken', accessToken);
};

export const getToken = () => {
    return window.localStorage.getItem('laract_accessToken');
};

export const deleteToken = () => {
    return window.localStorage.removeItem('laract_accessToken');
}