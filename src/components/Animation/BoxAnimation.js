import React from 'react';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

import './Animation.css';

class Box3 extends React.Component {

    constructor(props) {
        super(props);
        this.animation = {
            blur: '10px',
            yoyo: true,
            repeat: -1,
            duration: 1000
        };
    }

    render() {
        return (<TweenOne
            animation={this.animation}
            paused={this.props.paused}
            className="code-box-shape" />);
    }
}

Box3.defaultProps = {
    paused: false
};

Box3.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool
};

export { Box3 };