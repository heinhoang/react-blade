import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import Loading from '../components/Loading/Loading';

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/react-router-4/auth.js
const defaultConfig = {
    authenticatedSelector: state => state.getIn(['auth', 'isAuthenticated']) === true,
    // authenticatingSelector: state => state.user.isLoading,
    wrapperDisplayName: 'UserIsAuthenticated'
}

export const userAuth = connectedAuthWrapper(defaultConfig);

export const userAuthWrapper = connectedRouterRedirect({
    ...defaultConfig,
    AuthenticatingComponent: Loading,
    redirectPath: '/login'
})