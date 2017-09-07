import { Map, merge, fromJS, clear } from 'immutable';
import {
    GET_RESOURCES_SUCCESS,
    GET_RESOURCES_FAILURE,

    DELETE_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,

    SET_SEARCH_TERM
} from '../constants/crud';

const initialState = fromJS({
    resources: {
        pagination: {},
        data: []
    },
    searchTerm: ''
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_RESOURCES_SUCCESS:
    case DELETE_RESOURCE_SUCCESS: {
        return state.merge({ resources: fromJS(payload.resources) });
    }
    case DELETE_RESOURCE_FAILURE:
    case GET_RESOURCES_FAILURE: {
        return state.clear();
    }
    case SET_SEARCH_TERM: {
        return state.merge({ searchTerm: payload.keyword });
    }
    default:
        return state;
    }
};