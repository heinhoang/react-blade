import { Map, merge, fromJS, clear } from 'immutable';
import {
    GET_RESOURCES_SUCCESS,
    GET_RESOURCES_FAILURE,

    DELETE_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,

    SET_SEARCH_TERM,
    SET_PAGINATION
} from '../constants/crud';

/**
 * Example resources
 * {
 *      posts: {
 *                  pagination: {}
 *                  data: [{
 *                      title: 'my title',
 *                      content: 'my content
 *                  }]
 *              }
 * }
 */
const initialState = fromJS({
    resources: {},
    searchTerm: ''
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_RESOURCES_SUCCESS:
    case DELETE_RESOURCE_SUCCESS: {
        let resources = {};
        resources[payload.resourceName] = {
            data: payload.data
        };
        console.log(resources);
        return state.merge({ resources });
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