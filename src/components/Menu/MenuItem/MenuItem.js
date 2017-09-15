import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './MenuItem.css';
import Menu from '../Menu';
import { openSidebar as openSidebarAction } from '../../../actions/ui';

class MenuItem extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault();
        const { openSidebar, id } = this.props;
        openSidebar(id);
    };

    render() {
        const {
            id,
            route: { name, path, children, icon }
        } = this.props;

        const linkE = path ? <Link className="menu__item__link" to={path}>{name}</Link> :
            <span className="menu__toggle" onClick={this.handleClick}>{name}</span>;

        let iconE = null;
        if (typeof icon === 'object') {
            iconE = <img className={icon.class} src={icon.src} alt={icon.alt} />;
        } else if (typeof icon === 'string') {
            iconE = <i className={`menu__icon ${icon}`} />;
        }

        let childrenEl = null;
        if (children) {
            childrenEl = <Menu routes={children} subMenu={true} parentKey={id} />;
        }

        return (
            <li className='menu__item'>
                {iconE}
                {linkE}
                {childrenEl}
            </li>
        );
    }
};

const mapStateToProps = (state) => ({
    sidebarOpened: state.getIn(['ui']).toJS().sidebarOpened
});

const mapDispatchToProps = (dispatch) => ({
    openSidebar: bindActionCreators(openSidebarAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);