import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Resources } from '../../containers';

const resourceName = 'singlePost';
const SinglePost = ({
    match,
    resources
}) => {
    return (
        <Resources
            name='posts'
            resources={resources}
            storeName={resourceName}
            restApi={match.params.id}
        >
            {
                Object.keys(resources).length !== 0 && <div>
                    <h1>{resources.data.title}</h1>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: resources.data.content}}></div>
                    </div>
                    <span>{resources.data.gender}</span>
                </div>
            }
        </Resources>
    );
};

SinglePost.defaultProps = {
    resources: {}
};

SinglePost.propTypes = {
    resources: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        resources: stateJS.crud.resources[resourceName]
    };
};

export default connect(mapStateToProps)(SinglePost);