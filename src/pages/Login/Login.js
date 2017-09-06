import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser as loginUserAction } from '../../actions/auth';

const Login = ({ submitting, invalid, loginUser, location }) => {
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

    const handleSubmit = e => {
        e.preventDefault();
        loginUser(location.state ? location.state.nextPathname : '/');
    };

    return (
        <Container className="login-form">
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="email"
                            type="email"
                            component={renderInput}
                            placeholder="email"
                            disabled={submitting}
                        />
                        <Field
                            name="password"
                            type="password"
                            component={renderInput}
                            placeholder="password"
                            disabled={submitting}
                        />
                        <Button type="submit" disabled={submitting}>Submit</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

Login.propTypes = {
    ...propTypes,
    loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    loginUser: bindActionCreators(loginUserAction, dispatch)
});

export default reduxForm({
    form: 'login',
    validate: values => {
        const errors = {};
        if (!values.get('email')) errors.email = 'email is required';
        if (!values.get('password')) errors.password = 'password is required';
        return errors;
    },
})(connect(null, mapDispatchToProps)(Login));