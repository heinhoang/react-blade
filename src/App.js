import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

import store from './store';
import { NoMatch, Signup, Login } from './pages';
import { Layout, Resources } from './containers';

import './App.css';

const App = () => {
    const history = createHashHistory();
    const appStore = store(history);

    return (
        <Provider store={appStore}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/dashboard" name="Layout" component={Layout} />
                    <Route exact path="/signup" name="Signup" component={Signup} />
                    <Route exact path="/login" name="Login" component={Login} />
                    <Route exact path="/posts" name="posts" component={Resources} />
                    <Redirect from="/" to='/dashboard' />
                    <Route component={NoMatch} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
