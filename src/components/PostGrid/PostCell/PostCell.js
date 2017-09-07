import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostCell = ({
    _id,
    title,
    subTitle,
    excerpt,
    content,
    imageUrl,
    imageAlt,
    url,
    readMore,
    deleteResource
}) => {
    return (
        <div>
            <Card>
                {imageUrl && <CardImg top width="100%" src={imageUrl} alt={imageAlt ? imageAlt : title} />}
                <CardBlock>
                    <CardTitle>{title}</CardTitle>
                    {subTitle && <CardSubtitle>{subTitle}</CardSubtitle>}
                    <CardText>{content}</CardText>
                    {readMore && url && <Link href={url} className="btn btn-primary">{readMore}</Link>}
                    {deleteResource && <Button>Delete</Button>}
                </CardBlock>
            </Card>
        </div>
    );
};

PostCell.protoTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string,
    imageAlt: PropTypes.string,
    url: PropTypes.string,
    readMore: PropTypes.string,
    deleteResource: PropTypes.func
};

export default PostCell;