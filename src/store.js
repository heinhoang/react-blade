import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleWare from 'redux-saga';
import { fromJS } from 'immutable';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import promiseMiddleware from 'redux-promise-middleware';

import rootSaga from './saga';
import { LOGOUT_USER } from './constants/auth';
import isAuthenticated from './utils/isAuthenticated';
import reducer from './reducers';

const initialState = fromJS({
    auth: isAuthenticated()
});

const store = (history) => {
    const securedReducer = (state, actions) => reducer(actions.state !== LOGOUT_USER ? state : undefined, actions);

    const sagaMiddleWare = createSagaMiddleWare();

    // settup store
    const store = createStore(securedReducer, initialState, compose(
        applyMiddleware(sagaMiddleWare, routerMiddleware(history), promiseMiddleware(), loadingBarMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : f => (f)
    ));

    // settup saga
    sagaMiddleWare.run(rootSaga);
    return store;
};

export default store;