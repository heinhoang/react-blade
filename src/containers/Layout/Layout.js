import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './Layout.css';
import { Header, Sidebar, Translated } from '../../components';
import { Resources } from '../../containers';
import Post from '../../components/Post/Post';
import { NoMatch } from '../../pages';

const Layout = ({
    sidebarOpened,
    match,
    auth
}) => {
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
                        {`${match.path}`}
                        <Switch>
                            {/* <Route exact path="/" name="Dashboard" component={Dashboard} /> */}
                            {/* <Route path={'/dashboard/a'} component={DataTable} /> */}
                            {/* <Route path="/dashboard/b" component={MultiSteps} /> */}
                            <Route exact path="/dashboard" component={Resources} />
                            <Route exact path="/dashboard/posts/add" component={Post} />
                            <Route exact path="/dashboard/posts" name="posts" component={Resources} />
                            <Route exact path="/dashboard/translated" component={Translated} />
                            <Route component={NoMatch} />
                        </Switch>
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