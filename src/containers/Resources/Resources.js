import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { PostGrid, APagination } from '../../components';
import {
    deleteResource as deleteResourceAction,
    getResources as getResourcesAction
} from '../../actions/crud';
import { API_URL } from '../../constants/config';

class Resources extends PureComponent {
    constructor(props) {
        super(props);
        this.paginate = this.paginate.bind(this);
    }

    pagination = { page: 1, limit: 9, total: 50 };

    paginate(i, step = '') {
        const { limit, total } = this.pagination;
        const pages = Math.ceil(+total/+limit);
        let current = i;
        if (step === 'prev') {
            current = i - 1 > 0 ? i - 1 : 1;
        } else if (step === 'next') {
            current = i + 1 < pages ? i + 1: pages;
        }
        console.log(i + ' ' +current);
        const rePagination = Object.assign({}, this.pagination, { page: current });
        this.props.getResources({ api: API_URL, pagination: rePagination });
    }

    static propTypes = {
        resources: PropTypes.object,
        searchTerm: PropTypes.string,
        deleteResource: PropTypes.func
    };

    componentWillMount() {
        this.props.getResources({ api: API_URL, pagination: this.pagination });
    }

    render() {
        const {
            resources,
            searchTerm,
            deleteResource
        } = this.props;
        return (
            <div>
                <PostGrid
                    resources={resources.data}
                    searchTerm={searchTerm}
                    deleteResource={deleteResource}
                />
                <APagination
                    pagination={resources.pagination}
                    paginate={this.paginate}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        resources: stateJS.crud.resources,
        searchTerm: stateJS.crud.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => ({
    getResources: bindActionCreators(getResourcesAction, dispatch),
    deleteResource: bindActionCreators(deleteResourceAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Resources);