import React, { PureComponent } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import {
    SelectWrapper,
    InputWrapper,
    HTMLEditor
} from '../../theme/components';

const selectOptions = [
    { value: 'male', label: 'Male', default: true },
    { value: 'female', label: 'Female' }
];
// https://stackoverflow.com/questions/43631435/redux-form-defaultvalue
class PostForm extends PureComponent {
    componentWillMount() {
        const {
            initialize,
            resource,
            type
        } = this.props;
        // initial values for edit form only
        if (type === 'edit' && resource) {
            const {
                title,
                content,
                gender
            } = resource.data;

            initialize({
                title,
                content,
                gender
            });
        }
    }

    render() {
        const {
            handleSubmit,
            submitCallback
        } = this.props;

        return (
            submitCallback && <Container>
                <Row>
                    <Col xs="12">
                        <Form onSubmit={handleSubmit(submitCallback)}>
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

PostForm.propTypes = {
    ...propTypes,
    submitCallback: PropTypes.func,
    type: PropTypes.string
};

export default reduxForm({
    // form: formName,
    // initialValues: {
    //     title: 'hee',
    //     content: 'ddd'
    // }
})(PostForm);