import React from 'react';

import './Sidebar.css';
import routes from '../../settings/routes';
import Menu from '../Menu/Menu';

const Sidebar = ({ toggleClass }) => {
    return (
        <aside className={`sidebar ${toggleClass}`}>
            <Menu routes={routes} />
        </aside>
    );
};

export default Sidebar;