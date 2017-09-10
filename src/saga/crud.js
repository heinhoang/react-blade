import { put, select, call, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
    GET_RESOURCES,
    DELETE_RESOURCE,
    POST_RESOURCE
} from '../constants/crud';
import {
    getResourcesSuccess,
    getResourcesFailure,
    deleteResourceSuccess,
    deleteResourceFailure,
    postResourceSuccess,
    postResourceFailure
} from '../actions/crud';
import {
    logoutUser
} from '../actions/auth';
import {
    getApiResources,
    postApiResource
} from '../utils/crud';

const selectedResources = (state) => {
    return state.getIn(['resources', 'list']).toJS();
}

const selectedPicture = (state) => {
    return state.getIn(['filestack', 'url'], '');
}

const deleteServerResource = (id) => {
    return fetch(`http://localhost:8080/resources/${id}`, {
        headers: new Headers({
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        }),
        method: 'DELETE',
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw response;
        });
}

function* getResources({ meta }) {
    try {
        const data = yield call(getApiResources, `${meta.api}/posts?page=${meta.pagination.page}&limit=${meta.pagination.limit}`);
        yield put(getResourcesSuccess({
            pagination: meta.pagination,
            data
        }));
    } catch (e) {
        yield put(getResourcesFailure());
    }
}

function* deleteResource(action) {
    const { id } = action;
    const resources = yield select(selectedResources);
    try {
        const result = yield call(deleteServerResource, id);
        yield put(deleteResourceSuccess(resources.filter(resource => resource._id !== id)));
    } catch (e) {
        let message = '';
        if (e.status === 403) {
            yield put(logoutUser());
            message = 'Invalid token. You are being logged off';
        } else {
            yield put(deleteResourceFailure());
            message = 'Sorry, an error occured!';
        }
        localStorage.removeItem('token');
    }
}

const getResourceForm = (meta) => (state) => {
    return state.getIn(['form', meta.form]).toJS().values;
}

function* postResource({ meta }) {
    const resource = yield select(getResourceForm(meta));
    try {
        console.log(resource);
        const result = yield call(postApiResource, meta.url, resource);
        yield put(postResourceSuccess());
    } catch (e) {
        let message;
        if (e.status === 403) {
            yield put(logoutUser());
            message = 'Invalid token. You are being logged off';
        } else {
            yield put(postResourceFailure());
            message = 'Sorry, an error occured!';
        }
        localStorage.removeItem('token');
    }

}

function* watchGetResources() {
    yield takeLatest(GET_RESOURCES, getResources);
}

function* watchPostResource() {
    yield takeLatest(POST_RESOURCE, postResource);
}

function* watchDeleteResource() {
    yield takeLatest(DELETE_RESOURCE, deleteResource);
}

export {
    watchGetResources,
    watchPostResource,
    watchDeleteResource
};
