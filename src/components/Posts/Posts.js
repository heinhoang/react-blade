import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PostGrid, APagination, Search } from '../../components';
import Resources from '../../containers/Resources/Resources';

const resourceName = 'posts';
const Posts = ({
    resources
}) => {
    return (
        <Resources
            name={resourceName}
            resources={resources}
            searchTerm="ut"
        >
            <Search />
            <PostGrid />
            <APagination />
        </Resources>
    );
}

Posts.defaultProps = {
    resources: {}
};

Posts.propTypes = {
    resources: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        resources: stateJS.crud.resources[resourceName]
    };
};

export default connect(mapStateToProps)(Posts);
