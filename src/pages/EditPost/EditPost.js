import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { PostForm } from '../../components';
import { PostResource } from '../../containers';
import { userAuthWrapper } from '../../utils/auth';

// https://github.com/larkintuckerllc/hello-draft/blob/master/src/Contact.jsx
const resourceName = 'posts';
const formName = 'editPost';
class EditPost extends PureComponent {
    render() {
        const {
            match,
            resource
        } = this.props;
        return (
            <PostResource
                type='edit'
                formName={formName}
                resourceName={`${resourceName}`}
                resourceId={match.params.id}
                storeName={formName}
            >
                {
                    resource && <PostForm
                        resource={resource}
                    />}
            </PostResource>
        );
    }
};

// EditPost.propTypes = {
// };
const mapStateToProps = (state) => {
    const stateJS = state.toJS();
    return {
        resource: stateJS.crud.resources[formName]
    };
};

export default connect(mapStateToProps)(userAuthWrapper(EditPost));