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
    postApiResource,
    deleteApiResource
} from '../utils/crud';
import { showNotification } from '../actions/notification';
import { showLoading, hideLoading } from '../actions/loadingBar';

function* getResources({ meta }) {
    try {
        yield put(showLoading());
        const data = yield call(getApiResources, meta.api);
        console.log(data);
        yield put(getResourcesSuccess({
            resourceName: meta.name,
            data
        }));
    } catch (e) {
        const message = e.message ? e.message : e;
        yield put(getResourcesFailure());
        showNotification(message, 'warning');
    } finally {
        yield put(hideLoading());
    }
}

function* deleteResource({ payload }) {
    const { id, apiUrl, reRenderParams, resourceName } = payload;
    try {
        const result = yield call(deleteApiResource, `${apiUrl}/${id}`);
        if (result) {
            const newData = yield call(getApiResources, `${apiUrl}/${reRenderParams}`);
            yield put(deleteResourceSuccess({
                resourceName,
                data: newData
            }));
        }
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
        showNotification(message, 'warning');
    }
}

const getResourceForm = (meta) => (state) => {
    console.log(meta);
    return state.getIn(['form', meta.form]).toJS().values;
}
// for post & edit
function* postResource({ meta }) {
    const resource = yield select(getResourceForm(meta));
    try {
        yield call(postApiResource, meta.url, resource, {}, meta.type);
        yield put(postResourceSuccess());
        if(meta.type === 'post') {
            yield put(push(meta.redirect ? meta.redirect : '/'));
        }
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
        showNotification(message, 'warning');
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
