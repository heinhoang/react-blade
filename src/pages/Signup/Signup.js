import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signupUser as signupUserAction } from '../../actions/auth';
import InputWrapper from '../../theme/components/InputWrapper/InputWrapper';

class Signup extends PureComponent {
    constructor(props) {
        super(props);
        this.hdlSubmit = this.hdlSubmit.bind(this);
    }

    hdlSubmit(auth) {
        this.props.signupUser();
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <Container className="signup-form">
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit(this.hdlSubmit)}>
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
                            <Button type="submit" disabled={pristine || submitting}>Submit</Button>
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
        if (!values.get('email')) errors.email = 'email is required';
        if (!values.get('password')) errors.password = 'password is required';
        return errors;
    },
})(connect(null, mapDispatchToProps)(Signup));