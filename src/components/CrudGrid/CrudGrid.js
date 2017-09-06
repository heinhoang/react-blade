import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Resource from './Resource/Resource';

const CrudGrid = ({
    resources,
    searchTerm,
    deleteResource
}) => {
    return (
        <Container>
            <Row>
                {
                    resources
                        .filter(({ title }) => title.toLowerCase().include(searchTerm))
                        .map((resource, i) => (
                            <Col>
                                <Resource  {...resource}
                                    key={resource._id}
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

CrudGrid.propTypes = {
    resources: PropTypes.object,
    searchTerm: PropTypes.string,
    deleteResource: PropTypes.func
};

export default CrudGrid;