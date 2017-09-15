import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { fromJS } from 'immutable';
import { loadingBarReducer as loadingBar  } from 'react-redux-loading-bar';

import auth from './auth';
import ui from './ui';
import crud from './crud';

export default combineReducers({
    form,
    auth,
    ui,
    crud,
    loadingBar: fromJS(loadingBar)
});