import {
    TOGGLE_SIDEBAR,
    EDITOR_STATE_CHANGE
} from '../constants/ui';

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR
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