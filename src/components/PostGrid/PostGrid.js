import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Resource from './PostCell/PostCell';

const PostGrid = ({
    resources,
    searchTerm,
    deleteResource
}) => {
    return (
        <Container>
            <Row>
                {
                    resources
                        .filter(({ title }) => {
                            const matchedKey = searchTerm ? searchTerm.toLowerCase() : '';
                            const exp = new RegExp(matchedKey);
                            return title.toLowerCase().match(exp);
                        })
                        .map((resource, i) => (
                            <Col xs="12" sm="12" md="4"
                                key={resource.id}
                            >
                                <Resource  {...resource}
                                    i={i}
                                    deleteResource={deleteResource}
                                />
                            </Col>
                        ))
                }
            </Row>
        </Container>
    );
};

PostGrid.propTypes = {
    resources: PropTypes.array,
    searchTerm: PropTypes.string,
    deleteResource: PropTypes.func
};

export default PostGrid;