import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './Layout.css';
import {
    Header,
    Sidebar,
    Translated,
    Animation,
    LoadingBar
} from '../../components';
import { Resources } from '../../containers';
import Post from '../../components/Post/Post';
import { NoMatch } from '../../pages';
import { changeResponsive as changeResponsiveAction } from '../../actions/ui';

class Layout extends PureComponent {
    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 720) {
                this.props.changeResponsive('md');
            } else {
                this.props.changeResponsive('lg');
            }
        });
    }

    render() {
        const {
            sidebarCollaped,
            responsiveClass,
            match
        } = this.props;
        const sidebarToggleClass = sidebarCollaped ? 'collapsed' : '';

        return (
            <div className="app__container">
                <LoadingBar />
                <div className={'app__layout'}>
                    <Sidebar toggleClass={sidebarToggleClass} />
                    <main className={`app__main ${responsiveClass} ${sidebarToggleClass}`}>
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
                                <Route exact path="/dashboard/animation" component={Animation} />
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
    }
};

const mapStateToProps = (state) => ({
    sidebarCollaped: state.getIn(['ui', 'sidebarCollaped']),
    responsiveClass: state.getIn(['ui', 'responsiveClass'])
});

const mapDispatchToProps = (dispatch) => ({
    changeResponsive: bindActionCreators(changeResponsiveAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);