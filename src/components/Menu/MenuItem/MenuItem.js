import React from 'react';
import { Link } from 'react-router-dom';

import './MenuItem.css';
import Menu from '../Menu';

const MenuItem = ({ route }) => {
    const { name, path, children, icon } = route;
    const linkE = path ? <Link className="menu__item__link" to={path}>{name}</Link> :
        <span className="menu__toggle">{name}</span>;

    let iconE = null;
    if (typeof icon === 'object') {
        iconE = <img className={icon.class} src={icon.src} alt={icon.alt} />;
    } else if (typeof icon === 'string') {
        iconE = <i className={`menu__icon ${icon}`} />;
    }

    let childrenEl = null;
    if (children) {
        childrenEl = <Menu routes={children} subMenu={true} />;
    }

    return (
        <li className="menu__item">
            {iconE}
            {linkE}
            {childrenEl}
        </li>
    );
};

export default MenuItem;