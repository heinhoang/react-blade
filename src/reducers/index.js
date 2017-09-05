import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import auth from './auth';

export default combineReducers({
    form,
    auth
});