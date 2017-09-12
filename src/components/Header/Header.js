import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Header.css';
import { toggleSidebar as toggleSidebarAction } from '../../actions/ui';

const Header = ({ toggleSidebar, auth }) => {
    const toggle = (e) => {
        e.preventDefault();
        toggleSidebar();
    };

    return (
        <div>
            <Navbar color="faded">
                <Button type="button" onClick={toggle}>
                    <i className="fa fa-bars"></i>
                </Button>

                <div className="navigation">
                    <Nav className="navigation__nav">
                        {
                            auth.isAuthenticated ? <NavItem>
                                <NavLink href="/components/">
                                    {auth.token}
                                </NavLink>
                            </NavItem> : null
                        }
                    </Nav>
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.getIn(['auth']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: bindActionCreators(toggleSidebarAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);