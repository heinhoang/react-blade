import { all } from 'redux-saga/effects';

import {
    watchLoginUser,
    watchSignupUser
} from './auth';
import {
    watchGetResources,
    watchDeleteResource,
    watchPostResource
} from './crud';

export default function* rootSaga() {
    yield all([
        watchLoginUser(),
        watchSignupUser(),
        watchGetResources(),
        watchDeleteResource(),
        watchPostResource()
    ]);
};