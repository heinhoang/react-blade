import { all } from 'redux-saga/effects';
import { watchLoginUser, watchSignupUser } from './auth';

export default function* rootSaga() {
    yield all([
        watchLoginUser(),
        watchSignupUser()
    ]);
};