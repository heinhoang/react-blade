import React, { PureComponent } from 'react';
import { Container, Col, Row, Card, CardBlock, CardTitle } from 'reactstrap';

import PageLoadAnim from './PageLoadAnim';
import AddDelete from './AddDelete';
import { Box3 } from './BoxAnimation';
import PathAnimation from './PathAnimation';
import ScrollAnimation from './ScrollAnimation';

class Animation extends PureComponent {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <Card>
                            <CardBlock>
                                <CardTitle>
                                    Loading Animation
                                </CardTitle>
                            </CardBlock>
                            <CardBlock>
                                <PageLoadAnim />
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card>
                            <CardBlock>
                                <CardTitle>
                                    AddDelete Animation
                                </CardTitle>
                            </CardBlock>
                            <CardBlock>
                                <AddDelete />
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card>
                            <CardBlock>
                                <CardTitle>
                                    Box Animation
                                </CardTitle>
                            </CardBlock>
                            <CardBlock>
                                <Box3 />
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card>
                            <CardBlock>
                                <CardTitle>
                                    Path Animation
                                </CardTitle>
                            </CardBlock>
                            <CardBlock>
                                <PathAnimation />
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card>
                            <CardBlock>
                                <CardTitle>
                                    Scroll Animation
                                </CardTitle>
                            </CardBlock>
                            <CardBlock>
                                <ScrollAnimation />
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Animation