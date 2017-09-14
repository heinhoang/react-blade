import Immutable from 'immutable';

import {
    LOGIN_USER_LOADING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER_LOADING,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../constants/auth';

const initialState = Immutable.Map({
    isAuthenticated: false,
    token: null,
    name: null,
    checking: false
});

export default (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_USER_LOADING:
    case LOGIN_USER_LOADING:
        return state.merge({ checking: true });
    case SIGNUP_USER_SUCCESS:
    case LOGIN_USER_SUCCESS: {
        return state.merge({
            isAuthenticated: true,
            token: action.token,
            // name: jwtDecode(action.token).sub
            name: action.token,
            checking: false
        });
    }
    case SIGNUP_USER_FAILURE:
    case LOGIN_USER_FAILURE:
    case LOGOUT_USER: return state.merge(initialState);
    default: return state;
    }
}
