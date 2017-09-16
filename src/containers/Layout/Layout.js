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
import { toggleSidebar as toggleSidebarAction } from '../../actions/ui';

class Layout extends PureComponent {
    constructor(props) {
        super(props);
        this.hdlWindowResize = this.hdlWindowResize.bind(this);
        this.hdlToggleSidebar = this.hdlToggleSidebar.bind(this);
    }

    hdlWindowResize() {
        if (window.innerWidth <= 720) {
            this.props.changeResponsive('md');
        } else {
            this.props.changeResponsive('lg');
        }
    }

    hdlToggleSidebar(e) {
        e.preventDefault();
        this.props.toggleSidebar();
    }

    componentDidMount() {
        // change responsive class
        this.hdlWindowResize();
        window.addEventListener('resize', this.hdlWindowResize);
        // toggle sidebar on small device
        document.body.addEventListener('click', (e) => {
            const el = document.querySelector('.md .sidebar');
            const sidebarToggler = document.querySelector('.md #sidebar-toggler');
            if (
                !this.props.sidebarCollaped
                && sidebarToggler && !sidebarToggler.contains(e.target)
                && el && !el.contains(e.target)
            ) {
                this.hdlToggleSidebar(e);
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
            <div className={`app__container ${responsiveClass}`}>
                <LoadingBar />
                <div className={'app__layout'}>
                    <Sidebar toggleClass={sidebarToggleClass} />
                    <main className={`app__main ${sidebarToggleClass}`}>
                        <Header toggleSidebar={this.hdlToggleSidebar} />
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
    toggleSidebar: bindActionCreators(toggleSidebarAction, dispatch),
    changeResponsive: bindActionCreators(changeResponsiveAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);