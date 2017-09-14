import { put, select, call, takeLatest } from 'redux-saga/effects';

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

// const selectedPicture = (state) => {
//     return state.getIn(['filestack', 'url'], '');
// }

function* getResources({ meta }) {
    try {
        const data = yield call(getApiResources, meta.api);
        yield put(getResourcesSuccess({
            resourceName: meta.name,
            data
        }));
    } catch (e) {
        yield put(getResourcesFailure());
    }
}

function* deleteResource({ payload }) {
    const { id, apiUrl, reRenderParams, resourceName } = payload;
    console.log(payload);
    try {
        const result = yield call(deleteApiResource, `${apiUrl}/${id}`);
        console.log(result);
        if (result) {
            const newData = yield call(getApiResources, `${apiUrl}/${reRenderParams}`);
            console.log(newData);
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
