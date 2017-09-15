import { Map } from 'immutable';

import {
    SHOW_LOADING,
    HIDE_LOADING
} from '../constants/loadingBar';

const initialState = Map({
    loading: undefined
});

export default (state = initialState, { type }) => {
    switch (type) {
    case SHOW_LOADING:
        return state.merge({ loading: true });
    case HIDE_LOADING:
        return state.merge({ loading: false });
    default:
        return state;
    }
};