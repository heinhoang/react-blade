import {
    SHOW_LOADING,
    HIDE_LOADING
} from '../constants/loadingBar';

function showLoading() {
    return {
        type: SHOW_LOADING
    }
}

function hideLoading() {
    return {
        type: HIDE_LOADING
    }
}

export {
    showLoading,
    hideLoading
}