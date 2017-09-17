import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
    deleteResource as deleteResourceAction,
    getResources as getResourcesAction
} from '../../actions/crud';
import { API_URL } from '../../constants/config';

class Resources extends PureComponent {
    constructor(props) {
        super(props);

        const {
            resources,
            keywords,
            searchTerm,
            pagination,
            paginate,
            crudDel,
            crudGet
        } = this.props;
        this.searchTerm = keywords || searchTerm;
        this.pagination = pagination || resources.pagination || { page: 1, limit: 9, total: 50 };

        this.paginate = paginate || this.paginate.bind(this);
        this.deleteR = crudDel || this.deleteR.bind(this);
        this.getR = crudGet || this.getR.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }

    getR(page = this.pagination.page, limit = this.pagination.limit) {
        const apiUrl = `${API_URL}/${this.props.name}/?_page=${page}&_limit=${limit}`;
        this.props.getResources({ api: apiUrl, name: this.props.name });
    }

    deleteR(rId, page = this.pagination.page, limit = this.pagination.limit) {
        this.props.deleteResource({
            id: rId,
            apiUrl: `${API_URL}/${this.props.name}`,
            reRenderParams: `?_page=${page}&_limit=${limit}`,
            resourceName: this.props.name
        })
    }

    paginate(i, step = '') {
        const { limit, total } = this.pagination;
        const pages = Math.ceil(+total / +limit);
        let current = i;
        if (step === 'prev') {
            current = i - 1 > 0 ? i - 1 : 1;
        } else if (step === 'next') {
            current = i + 1 < pages ? i + 1 : pages;
        }
        this.getR(current);
    }

    renderChildren() {
        const {
            resources,
            children
        } = this.props;

        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                resources: resources.data,
                searchTerm: this.searchTerm,
                deleteResource: this.deleteR,
                pagination: this.pagination,
                paginate: this.paginate
            })

        });
    }

    componentWillMount() {
        this.getR();
    }

    render() {
        const {
            resources
        } = this.props;

        return (
            Object.keys(resources).length !== 0 && <div>
                {this.renderChildren()}
            </div>
        );
    }
}


Resources.propTypes = {
    resources: PropTypes.object,
    searchTerm: PropTypes.string,
    deleteResource: PropTypes.func,
    getResources: PropTypes.func
};

Resources.defaultProps = {
    resources: {},
    searchTerm: ''
};

const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        searchTerm: stateJS.crud.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => ({
    deleteResource: bindActionCreators(deleteResourceAction, dispatch),
    getResources: bindActionCreators(getResourcesAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);