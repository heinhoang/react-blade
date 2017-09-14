import {
    LOADING_RESOURCES,
    GET_RESOURCES,
    GET_RESOURCES_SUCCESS,
    GET_RESOURCES_FAILURE,

    DELETING_RESOURCE,
    DELETE_RESOURCE,
    DELETE_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,

    POSTING_RESOURCE,
    POST_RESOURCE,
    POST_RESOURCE_SUCCESS,
    POST_RESOURCE_FAILURE,

    SET_SEARCH_TERM
} from '../constants/crud';

// get resources
function loadingResources() {
    return {
        type: LOADING_RESOURCES
    };
}

function getResources(meta = {}) {
    return {
        type: GET_RESOURCES,
        meta
    };
}

function getResourcesSuccess({ resourceName, data }) {
    return {
        type: GET_RESOURCES_SUCCESS,
        payload: { resourceName, data }
    };
}

function getResourcesFailure() {
    return {
        type: GET_RESOURCES_FAILURE
    };
}

// Post resources
function postingResource() {
    return {
        type: POSTING_RESOURCE
    };
}

function postResource(meta = {}) {
    return {
        type: POST_RESOURCE,
        meta
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

// delete resources
function deletingResource() {
    return {
        type: DELETING_RESOURCE
    };
}

function deleteResource(payload = {}) {
    return {
        type: DELETE_RESOURCE,
        payload
    };
}

function deleteResourceSuccess({ resourceName, data }) {
    return {
        type: DELETE_RESOURCE_SUCCESS,
        payload: { resourceName, data }
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
    loadingResources,
    getResources,
    getResourcesSuccess,
    getResourcesFailure,
    postingResource,
    postResource,
    postResourceSuccess,
    postResourceFailure,
    deletingResource,
    deleteResource,
    deleteResourceSuccess,
    deleteResourceFailure,
    setSearchTerm,
};
