// Action Types
export const actionTypes = {
    AUTH_CHECK: 'AUTH_CHECK',
    AUTH_LOGIN: 'AUTH_LOGIN',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    AUTH_REFRESH_TOKEN: 'AUTH_REFRESH_TOKEN',
    AUTH_RESET_PASSWORD: 'AUTH_RESET_PASSWORD',
    AUTH_USER: 'AUTH_USER'
}

// Action creators
export const actionCreators = {
    authCheck: () => ({ type: actionTypes.AUTH_CHECK }),
    authLogin: (payload) => ({ type: actionTypes.AUTH_LOGIN, payload }),
    authLogout: () => ({ type: actionTypes.AUTH_LOGOUT }),
    authRefreshToken: () => ({ type: actionTypes.AUTH_REFRESH_TOKEN }),
    authResetPassword: () => ({ type: actionTypes.AUTH_RESET_PASSWORD }),
    authUser: (payload) => ({ type: actionTypes.AUTH_USER, payload })
}

// Reducer
const initialState = {
    isAuthenticated: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_REFRESH_TOKEN:
        case actionTypes.AUTH_LOGIN:
            return login(state, payload);
        case actionTypes.AUTH_CHECK:
            return checkAuth(state);
        case actionTypes.AUTH_LOGOUT:
            return logout(state);
        case actionTypes.AUTH_RESET_PASSWORD:
            return resetPassword(state);
        default:
            return state;
    }
}

function login(state, payload) {
    localStorage.setItem('access_token', payload);
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;

    return {
        ...state, isAuthenticated: true,
    }
}

function checkAuth(state) {
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('access_token')
    })

    if (state.isAuthenticated) {
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }

    return state;
}

function logout(state) {
    localStorage.removeItem('access_token')

    return {
        ...state, isAuthenticated: false
    }
}

function resetPassword(state) {
    return {
        ...state, resetPassword: true,
    }
}