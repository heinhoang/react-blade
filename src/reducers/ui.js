import { fromJS } from 'immutable';

import {
    TOGGLE_SIDEBAR,
    EDITOR_STATE_CHANGE,
    OPEN_SIDEBAR,
    CHANGE_RESPONSIVENESS
} from '../constants/ui';

const initialState = fromJS({
    sidebarCollaped: false,
    sidebarOpened: [],
    responsiveClass: '',
    forms: {}
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case TOGGLE_SIDEBAR:
        return state.merge({ sidebarCollaped: !state.get('sidebarCollaped') });
    case OPEN_SIDEBAR:
        return state.merge({ sidebarOpened: [payload] });
    case CHANGE_RESPONSIVENESS:
        return state.merge({ responsiveClass: payload });
    case EDITOR_STATE_CHANGE:
        return state.merge({ forms: payload });
    default:
        return initialState;
    }
};