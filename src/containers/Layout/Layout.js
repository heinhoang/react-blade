import React from 'react';
// import LoadingBar from 'react-redux-loading-bar';

import './Layout.css';
import { Header, Sidebar } from '../../components';

const Layout = (props) => {
    return (
        <div className="app__container">
            {/* <LoadingBar className="loading-bar" styles={{ backgroundColor: 'blue' }} /> */}
            <Header />
            <div className="app__layout">
                <Sidebar {...props} />
                <main className="app__main">
                    {/* <BreadcrumbC /> */}
                    <div className="container-fluid">
                        {/*<Switch>
                                <Route path="/" name="Dashboard" component={Dashboard} />
                                <Route path="/data-table" component={DataTable} />
                                <Route path="/multi-steps" component={MultiSteps} />
                                <Redirect from="/" to="/dashboard" />
                            </Switch>*/}
                        {`${props.match.path}/a`}
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

export default Layout;