import React from 'react';

import './Sidebar.css';
import routes from '../../settings/routes';
import Menu from '../Menu/Menu';

export default class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <Menu routes={routes}/>
            </aside>
        );
    }
}