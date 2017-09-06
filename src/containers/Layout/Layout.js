import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import './Layout.css';
import { Header, Sidebar } from '../../components';

const Layout = ({ sidebarOpened, match }) => {
    const sidebarToggleClass = sidebarOpened ? '' : 'collapsed';
    return (
        <div className="app__container">
            {/* <LoadingBar className="loading-bar" styles={{ backgroundColor: 'blue' }} /> */}
            <div className="app__layout">
                <Sidebar toggleClass={sidebarToggleClass} />
                <main className={`app__main ${sidebarToggleClass}`}>
                    <Header />
                    {/* <BreadcrumbC /> */}
                    <div className="container-fluid">
                        {/*<Switch>
                                <Route path="/" name="Dashboard" component={Dashboard} />
                                <Route path="/data-table" component={DataTable} />
                                <Route path="/multi-steps" component={MultiSteps} />
                                <Redirect from="/" to="/dashboard" />
                            </Switch>*/}
                        {`${match.path}/a`}
                        {/*<Switch>
                                    <Route exact path="/" name="Dashboard" component={Dashboard} />
                                    <Route path={'/dashboard/a'} component={DataTable} />
                                    <Route path="/dashboard/b" component={MultiSteps} />
                                </Switch>*/}
                    </div>
                </main>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    sidebarOpened: state.getIn(['ui', 'sidebarOpened'])
});

export default connect(mapStateToProps)(Layout);