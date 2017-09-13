import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { IntlProvider, addLocaleData } from 'react-intl';
import PropTypes from 'prop-types';

import store from './store';
import { NoMatch, Signup, Login } from './pages';
import { Layout } from './containers';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import './App.css';

// get locale from browser
// https://medium.freecodecamp.org/internationalization-in-react-7264738274a0
const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const regionCode = language.toLowerCase().split(/[_-]+/)[0];

const App = ({
    localeData,
    locale
}) => {
    const history = createHashHistory();
    const appStore = store(history);
    // add more laguages
    addLocaleData([...en, ...fr]);

    const appLocale = locale || regionCode;
    const messages = localeData[appLocale] || localeData.en;

    return (
        <Provider store={appStore}>
            <IntlProvider locale={appLocale} messages={messages}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/dashboard" name="Layout" component={Layout} />
                        <Route path="/signup" name="Signup" component={Signup} />
                        <Route path="/login" name="Login" component={Login} />
                        <Redirect exact from="/" to='/dashboard' />
                        <Route component={NoMatch} />
                    </Switch>
                </ConnectedRouter>
            </IntlProvider>
        </Provider>
    );
};

App.propTypes = {
    localeData: PropTypes.object,
    locale: PropTypes.string
};

export default App;
