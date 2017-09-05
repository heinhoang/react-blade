import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { LOGIN_USER, SIGNUP_USER } from '../constants/auth';
import {
    loginUserSuccess,
    loginUserFailure,
    signupUserSuccess,
    signupUserFailure
} from '../actions/auth';
import { push } from 'react-router-redux';

const getForm = (state, form) => {
    return state.getIn(['form', form]).toJS();
}

/**
 * This is just a mock function
 * @param {*} route 
 * @param {*} credentials 
 */
const sendCredentials = (route, credentials) => {
    switch (route) {
    case 'login':
        return {
            token: 'logined'
        };
    case 'signup':
        return {
            token: 'logined'
        };
    default:
        break;
    }
};

function* loginUser(action) {
    const { redirection } = action;
    try {
        const credentials = yield select(getForm, 'login');
        const result = yield call(sendCredentials, 'login', credentials.values);
        localStorage.setItem('token', result.token);
        yield put(loginUserSuccess(result.token));
        yield put(push(redirection));
    } catch (e) {
        let message = '';
        if (e.status === 401) {
            message = 'Invalid email/password';
        } else {
            message = 'Sorry, an error occured!';
        }
        yield put(loginUserFailure());
    }
}

function* signupUser() {
    try {
        const credentials = yield select(getForm, 'signup');
        const result = yield call(sendCredentials, 'signup', credentials.values);
        localStorage.setItem('token', result.token);
        yield put(signupUserSuccess(result.token));
        yield put(push('/'));
    } catch (e) {
        let message = '';
        if (e.status === 409) {
            message = 'Email is already taken';
        } else {
            message = 'Sorry, an error occured!';
        }
        yield put(signupUserFailure());
    }
}

export function* watchLoginUser() {
    yield takeLatest(LOGIN_USER, loginUser);
}

export function* watchSignupUser() {
    yield takeLatest(SIGNUP_USER, signupUser);
}
