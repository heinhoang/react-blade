import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({ routes, subMenu }) => {
    const menuClass = subMenu ? 'menu sub-menu list-unstyled' : 'menu list-unstyled';
    return (
        <ul className={menuClass}>
            {routes.map((route, index) => <MenuItem key={index} route={route}/>)}
        </ul>
    );
};

Menu.defaultProps = {
    subMenu: false
};

Menu.propTypes = {
    routes: PropTypes.array,
    subMenu: PropTypes.bool
};

export default Menu;