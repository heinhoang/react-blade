import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { postResource as postResourceAction } from '../../actions/crud';
import { API_URL } from '../../constants/config';
import SelectWrapper from '../../theme/components/SelectWrapper/SelectWrapper';
import InputWrapper from '../../theme/components/InputWrapper/InputWrapper';
import HTMLEditor from '../../theme/components/HTMLEditor/HTMLEditor';
import { userAuthWrapper } from '../../utils/auth';

// https://github.com/larkintuckerllc/hello-draft/blob/master/src/Contact.jsx
const formName = 'post';
const selectOptions = [
    { value: 'male', label: 'Male', default: true },
    { value: 'female', label: 'Female' }
];

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
        this.submitCallback = this.submitCallback.bind(this);
        this.state = {
            gender: selectOptions[0].value
        };
    }

    submitCallback = (values) => {
        this.props.postResource({ url: `${API_URL}/posts`, form: formName, type: 'post' });
    };

    render() {
        const {
            handleSubmit
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <Form onSubmit={handleSubmit(this.submitCallback)}>
                            <Field
                                name="email"
                                component="input"
                                type="email"
                                placeholder="Email"
                            />
                            <Field
                                name="title"
                                type="text"
                                component={InputWrapper}
                                placeholder="Title"
                            />
                            <Field
                                name='content'
                                component={HTMLEditor}
                            />
                            <Field
                                name="gender"
                                component={SelectWrapper}
                                options={selectOptions}
                            />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Post.propTypes = {
    ...propTypes,
    postResource: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.getIn(['auth'])
    };
};

const mapDispatchToProps = dispatch => ({
    postResource: bindActionCreators(postResourceAction, dispatch)
});

export default reduxForm({
    form: formName
})(withRouter(connect(mapStateToProps, mapDispatchToProps)(userAuthWrapper(Post))));