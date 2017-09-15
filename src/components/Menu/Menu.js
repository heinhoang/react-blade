import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Menu.css';
import MenuItem from './MenuItem/MenuItem';
import { openSidebar as openSidebarAction } from '../../actions/ui';

class Menu extends PureComponent {
    
    render() {
        const {
            routes,
            subMenu,
            sidebarOpened,
            parentKey
        } = this.props;

        let menuClass = subMenu ? 'menu sub-menu list-unstyled' : 'menu list-unstyled';
        if (sidebarOpened.includes(parentKey)) menuClass = `${menuClass} opened`;

        return (
            <ul className={menuClass} >
                {routes.map((route, index) => <MenuItem key={index} id={index} route={route} openItem={this.handleClick} />)}
            </ul>
        );
    }

};

Menu.defaultProps = {
    subMenu: false
};

Menu.propTypes = {
    routes: PropTypes.array,
    subMenu: PropTypes.bool,
    sidebarOpened: PropTypes.array.isRequired,
    openSidebar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    sidebarOpened: state.getIn(['ui']).toJS().sidebarOpened
});

const mapDispatchToProps = (dispatch) => ({
    openSidebar: bindActionCreators(openSidebarAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);