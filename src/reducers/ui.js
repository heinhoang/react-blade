import Immutable from 'immutable';

import {
    TOGGLE_SIDEBAR
} from '../constants/ui';

const initialState = Immutable.Map({
    sidebarOpened: true
});

export default (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_SIDEBAR:
        return state.merge({ sidebarOpened: !state.get('sidebarOpened') });
    default:
        return initialState;
    }
};