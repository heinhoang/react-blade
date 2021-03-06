import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';
import { logoutUser as logoutUserAction } from '../../actions/auth';

const Header = ({ toggleSidebar, auth, logoutUser }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser();
    };

    return (
        <div>
            <Navbar color="faded">
                <Button id="sidebar-toggler" type="button" onClick={toggleSidebar}>
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
                    <Nav className="navigation__nav">
                        {
                            auth.isAuthenticated ? <NavItem>
                                <NavLink href="#" onClick={handleLogout}>
                                    Logout
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

Header.propTypes = {
    logoutUser: PropTypes.func
};

const mapStateToProps = (state) => ({
    auth: state.getIn(['auth']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: bindActionCreators(logoutUserAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);