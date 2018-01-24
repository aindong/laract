import { call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes as authActionTypes } from './reducer';
import { login as loginService } from './service';

function* login (action) {
    const { payload } = action;

    try {
        const auth = yield call(loginService, payload);

        yield put({ type: authActionTypes.LOGIN_SUCCESS, auth });

        notificationOpts.message = 'Successfully logged in';
        yield put(Notification.success(notificationOpts));
    } catch (err) {
        const error = err.message || err;
        yield put({ type: authActionTypes.LOGIN_FAILED, error });

        const errors = formatError(error);
        notificationOpts.message = errors[0] || error;
        yield put(Notification.error(notificationOpts));
    }
}

function* watchLoginRequest() {
    yield takeEvery(authActionTypes.LOGIN_REQUEST, login);
}

export default [
    watchLoginRequest()
]
