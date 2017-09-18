import React from 'react';

import { PostForm } from '../../components';
import { PostResource } from '../../containers';
import { userAuthWrapper } from '../../utils/auth';

// https://github.com/larkintuckerllc/hello-draft/blob/master/src/Contact.jsx
const AddPost = () => {
    return (
        <PostResource
            formName='post'
            resourceName='posts'
            type='post'
        >
            <PostForm />
        </PostResource>
    );
};

// AddPost.propTypes = {
// };

export default userAuthWrapper(AddPost);