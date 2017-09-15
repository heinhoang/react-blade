import React from 'react';
import { connect } from 'react-redux';

import './LoadingBar.css';

const LoadingBar = ({
    loadingBar
}) => {
    let loadingClass = 'loading-bar';
    if(loadingBar === true) loadingClass = `${loadingClass} start`;
    if(loadingBar === false) loadingClass = `${loadingClass} stop`;
    return (
        <div id="loading-bar" className={loadingClass}></div>
    );
};

const mapStateToProps = (state) => ({
    loadingBar: state.getIn(['loadingBar', 'loading'])
});

export default connect(mapStateToProps)(LoadingBar);