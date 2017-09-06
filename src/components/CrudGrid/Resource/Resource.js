import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Resource = ({
    _id,
    title,
    subTitle,
    excerpt,
    content,
    thumb,
    thumbAlt,
    url,
    readMore,
    deleteResource
}) => {
    return (
        <div>
            <Card>
                {thumb && <CardImg top width="100%" src={thumb} alt={thumbAlt ? thumbAlt : title} />}
                <CardBlock>
                    <CardTitle>{title}</CardTitle>
                    {subTitle && <CardSubtitle>{subTitle}</CardSubtitle>}
                    <CardText>{content}</CardText>
                    {readMore && url && <Link href={url} className="btn btn-primary">{readMore}</Link>}
                    {deleteResource && <Button>{deleteResource}</Button>}
                </CardBlock>
            </Card>
        </div>
    );
};

Resource.protoTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string,
    thumbAlt: PropTypes.string,
    url: PropTypes.string,
    readMore: PropTypes.string,
    deleteResource: PropTypes.func
};

export default Resource;