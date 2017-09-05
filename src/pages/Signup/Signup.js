import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signupUser as signupUserAction } from '../../actions/auth';

class Signup extends PureComponent {
    register() {
        this.props.signupUser();
    }

    render() {
        const renderInput = ({
            input,
            type,
            meta: { touched, error },
            ...custom
        }) => (
            <FormGroup>
                <Input type={type} { ...input } { ...custom } />
                {touched && error && <div>{error}</div>}
            </FormGroup>
        );

        return (
            <Container className="signup-form">
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Form>
                            <Field
                                name="email"
                                type="email"
                                component={renderInput}
                                placeholder="email"
                            />
                            <Field
                                name="password"
                                type="password"
                                component={renderInput}
                                placeholder="password"
                            />
                            <Button type="button" onClick={() => this.register()}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signupUser: bindActionCreators(signupUserAction, dispatch)
});

export default reduxForm({
    form: 'signup',
    validate: (values, props) => {
        const errors = {};
        if (!values.email) errors.email = 'email is required';
        if (!values.password) errors.password = 'password is required';
        return errors;
    },
})(connect(null, mapDispatchToProps)(Signup));