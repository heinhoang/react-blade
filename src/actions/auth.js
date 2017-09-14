import {
    LOGIN_USER,
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER_LOADING,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../constants/auth';

function loginUser(redirection) {
    return {
        type: LOGIN_USER,
        redirection
    };
}

function loginUserLoading() {
    return {
        type: LOGIN_USER_LOADING
    };
}

function loginUserSuccess(token) {
    return {
        type: LOGIN_USER_SUCCESS,
        token
    };
}

function loginUserFailure() {
    return {
        type: LOGIN_USER_FAILURE
    };
}

function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}

function signupUserLoading() {
    return {
        type: SIGNUP_USER_LOADING
    };
}

function signupUser() {
    return {
        type: SIGNUP_USER
    };
}

function signupUserSuccess(token) {
    return {
        type: SIGNUP_USER_SUCCESS,
        token
    };
}

function signupUserFailure() {
    return {
        type: SIGNUP_USER_FAILURE
    };
}

export {
    loginUser,
    loginUserLoading,
    loginUserSuccess,
    loginUserFailure,
    logoutUser,
    signupUserLoading,
    signupUser,
    signupUserSuccess,
    signupUserFailure
};
