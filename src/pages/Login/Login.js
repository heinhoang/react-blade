import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Container, Row, Col, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser as loginUserAction } from '../../actions/auth';
import InputWrapper from '../../theme/components/InputWrapper/InputWrapper';

const Login = ({ handleSubmit, pristine, valid, submitting, invalid, loginUser, location, auth }) => {

    const hdlSubmit = (auth) => {
        loginUser(location.state ? location.state.nextPathname : '/');
    };

    return (
        <Container className="login-form">
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <form onSubmit={handleSubmit(hdlSubmit)}>
                        <Field
                            name="email"
                            type="email"
                            component={InputWrapper}
                            placeholder="email"
                            disabled={submitting}
                        />
                        <Field
                            name="password"
                            type="password"
                            component={InputWrapper}
                            placeholder="password"
                            disabled={submitting}
                        />
                        <Button type="submit" disabled={pristine || submitting}>
                            {
                                auth.checking ? <span>...</span> : <span>Submit</span>
                            }
                        </Button>
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

const mapStateToProps = state => ({
    auth: state.getIn(['auth']).toJS()
});

const mapDispatchToProps = dispatch => ({
    loginUser: bindActionCreators(loginUserAction, dispatch)
});

export default reduxForm({
    form: 'login',
    validate: (values) => {
        const errors = {};
        if (!values.get('email')) errors.email = 'email is required';
        if (!values.get('password')) errors.password = 'password is required';
        return errors;
    },
})(connect(mapStateToProps, mapDispatchToProps)(Login));