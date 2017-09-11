import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { PostGrid, APagination, Search } from '../../components';
import {
    deleteResource as deleteResourceAction,
    getResources as getResourcesAction
} from '../../actions/crud';
import { API_URL } from '../../constants/config';

const resourceName = 'posts';
class Resources extends PureComponent {
    constructor(props) {
        super(props);
        this.paginate = this.paginate.bind(this);
        this.deleteR = this.deleteR.bind(this);
    }

    static propTypes = {
        resources: PropTypes.object,
        searchTerm: PropTypes.string,
        deleteResource: PropTypes.func
    };

    static defaultProps = {
        resources: {},
        searchTerm: ''
    };

    getR(page = this.pagination.page, limit = this.pagination.limit) {
        const apiUrl = `${API_URL}/${resourceName}/?_page=${page}&_limit=${limit}`;
        this.props.getResources({ api: apiUrl, name: resourceName });
    }

    deleteR(rId, page = this.pagination.page, limit = this.pagination.limit) {
        this.props.deleteResource({
            id: rId,
            apiUrl: `${API_URL}/${resourceName}`,
            reRenderParams: `?_page=${page}&_limit=${limit}`,
            resourceName
        })
    }

    pagination = this.props.resources.pagination || { page: 1, limit: 9, total: 50 };


    paginate(i, step = '') {
        const { limit, total } = this.pagination;
        const pages = Math.ceil(+total/+limit);
        let current = i;
        if (step === 'prev') {
            current = i - 1 > 0 ? i - 1 : 1;
        } else if (step === 'next') {
            current = i + 1 < pages ? i + 1: pages;
        }
        console.log(i + ' ' + current);
        this.getR(current);
    }

    componentWillMount() {
        this.getR();
    }

    render() {
        const {
            resources,
            searchTerm
        } = this.props;
        console.log(resources);
        return (
            Object.keys(resources).length !== 0 ? <div>
                <Search />
                <PostGrid
                    resources={resources && resources.data}
                    searchTerm={searchTerm}
                    deleteResource={this.deleteR}
                />
                <APagination
                    pagination={this.pagination}
                    paginate={this.paginate}
                /> 
            </div> : null
        );
    }
}

const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        resources: stateJS.crud.resources[resourceName],
        searchTerm: stateJS.crud.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => ({
    getResources: bindActionCreators(getResourcesAction, dispatch),
    deleteResource: bindActionCreators(deleteResourceAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);