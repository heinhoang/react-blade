import { fromJS } from 'immutable';

import {
    TOGGLE_SIDEBAR,
    EDITOR_STATE_CHANGE
} from '../constants/ui';

const initialState = fromJS({
    sidebarOpened: true,
    forms: {}
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case TOGGLE_SIDEBAR:
        return state.merge({ sidebarOpened: !state.get('sidebarOpened') });
    case EDITOR_STATE_CHANGE:
        return state.merge({ forms: payload });
    default:
        return initialState;
    }
};