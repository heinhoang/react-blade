import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
    getResources as getResourcesAction,
    postResource as postResourceAction
} from '../../actions/crud';
import { API_URL } from '../../constants/config';

class PostResource extends PureComponent {
    constructor(props) {
        super(props);
        this.submitCallback = this.submitCallback.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.getR = this.getR.bind(this);
    }

    formName = this.props.formName;
    apiUrl = this.props.apiUrl;
    resourceName = this.props.resourceName;
    formName = this.props.formName;
    type = this.props.type;
    redirect = this.props.redirect;
    resourceId = this.props.resourceId;
    resource = this.props.resource;
    storeName = this.props.storeName;

    getR = () => {
        const apiUrl = this.apiUrl || `${API_URL}/${this.resourceName}/${this.resourceId}`;
        this.props.getResources({ api: apiUrl, name: this.storeName });
    };

    submitCallback = (values) => {
        const entry = this.resourceId ? `/${this.resourceId}` : '';
        this.props.postResource({
            type: this.type,
            url: this.apiUrl || `${API_URL}/${this.resourceName}${entry}`,
            form: this.formName,
            redirect: this.redirect
        });
    };

    componentWillMount() {
        if(this.type === 'edit') {
            this.getR();
        }
    }

    renderChildren() {
        const {
            children
        } = this.props;

        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                form: this.formName,
                submitCallback: this.submitCallback,
                type: this.type
            })

        });
    }

    render() {
        const {
            auth
        } = this.props;
        return (
            auth && <div>
                {this.renderChildren()}
            </div>
        );
    }
}

PostResource.propTypes = {
    auth: PropTypes.bool.isRequired,
    postResource: PropTypes.func.isRequired,
    apiUrl: PropTypes.string,
    resourceName: PropTypes.string.isRequired,
    storeName: PropTypes.string,
    formName: PropTypes.string.isRequired,
    type: PropTypes.string,
    redirect: PropTypes.string,
    resourceId: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        auth: state.getIn(['auth', 'isAuthenticated'])
    };
};

const mapDispatchToProps = dispatch => ({
    getResources: bindActionCreators(getResourcesAction, dispatch),
    postResource: bindActionCreators(postResourceAction, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostResource));