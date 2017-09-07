import {
    GET_RESOURCES,
    GET_RESOURCES_SUCCESS,
    GET_RESOURCES_FAILURE,

    DELETE_RESOURCE,
    DELETE_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,

    POST_RESOURCE,
    POST_RESOURCE_SUCCESS,
    POST_RESOURCE_FAILURE,

    SET_SEARCH_TERM,
} from '../constants/crud';


function getResources(meta = {}) {
    return {
        type: GET_RESOURCES,
        meta
    };
}

function getResourcesSuccess(resources) {
    return {
        type: GET_RESOURCES_SUCCESS,
        payload: { resources }
    };
}

function getResourcesFailure() {
    return {
        type: GET_RESOURCES_FAILURE
    };
}

function postResource() {
    return {
        type: POST_RESOURCE
    };
}

function postResourceSuccess() {
    return {
        type: POST_RESOURCE_SUCCESS
    };
}

function postResourceFailure() {
    return {
        type: POST_RESOURCE_FAILURE
    };
}

function deleteResource(id) {
    return {
        type: DELETE_RESOURCE,
        payload: { id }
    };
}

function deleteResourceSuccess(resources) {
    return {
        type: DELETE_RESOURCE_SUCCESS,
        payload: { resources }
    };
}

function deleteResourceFailure() {
    return {
        type: DELETE_RESOURCE_FAILURE
    };
}

function setSearchTerm(keyword) {
    return {
        type: SET_SEARCH_TERM,
        payload: { keyword }
    };
}

export {
    getResources,
    getResourcesSuccess,
    getResourcesFailure,
    postResource,
    postResourceSuccess,
    postResourceFailure,
    deleteResource,
    deleteResourceSuccess,
    deleteResourceFailure,
    setSearchTerm
};
