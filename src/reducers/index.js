import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import auth from './auth';
import ui from './ui';
import crud from './crud';
import loadingBar from './loadingBar';

export default combineReducers({
    form,
    auth,
    ui,
    crud,
    loadingBar
});