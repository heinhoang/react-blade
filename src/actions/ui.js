import {
    TOGGLE_SIDEBAR,
    OPEN_SIDEBAR,
    EDITOR_STATE_CHANGE,
    CHANGE_RESPONSIVENESS
} from '../constants/ui';

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR
});

export const openSidebar = (payload) => ({
    type: OPEN_SIDEBAR,
    payload
});

export const changeResponsive = (payload) => ({
    type: CHANGE_RESPONSIVENESS,
    payload
});

export const handleEditorChange = ({ form, field, value }) => {
    const payload = {};
    payload[form] = {};
    payload[form][field] = value;
    return {
        type: EDITOR_STATE_CHANGE,
        payload
    };
};