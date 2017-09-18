import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostCell = ({
    path,
    id,
    title,
    subTitle,
    excerpt,
    content,
    imageUrl,
    imageAlt,
    readMore,
    deleteResource
}) => {
    return (
        <div>
            <Card>
                {imageUrl && <CardImg top width="100%" src={imageUrl} alt={imageAlt ? imageAlt : title} />}
                <CardBlock>
                    <CardTitle>
                        <Link to={`${path}/${id}`}>
                            {title}
                        </Link>
                    </CardTitle>
                    {subTitle && <CardSubtitle>{subTitle}</CardSubtitle>}
                    <CardText>{content}</CardText>
                    {deleteResource && <Button onClick={() => deleteResource(id)}>Delete</Button>}
                    <Button className="pull-right">
                        <Link to={`${path}/edit/${id}`}>
                            Edit
                        </Link>
                    </Button>
                </CardBlock>
            </Card>
        </div>
    );
};

PostCell.protoTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string,
    imageAlt: PropTypes.string,
    readMore: PropTypes.string,
    deleteResource: PropTypes.func
};

export default PostCell;