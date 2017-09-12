import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleEditorChange as handleEditorChangeAction } from '../../actions/ui';
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            gender: selectOptions[0].value
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postResource({ url: `${API_URL}/posts`, form: formName, editorValue: this.props.editorState });
        return false;
    };

    render() {

        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <Form onSubmit={this.handleSubmit}>
                            <Field
                                name="title"
                                type="text"
                                component={InputWrapper}
                                placeholder="Title"
                            />

                            {/* <Select
                                name="gender"
                                value={this.state.gender}
                                options={selectOptions}
                                onChange={this.selectChange}
                                clearable
                            /> */}
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

Post.defaultProps = {
    editorState: '',
    selectState: selectOptions[0].value
};

Post.propTypes = {
    ...propTypes,
    editorState: PropTypes.string.isRequired,
    selectState: PropTypes.string.isRequired,
    handleEditorChange: PropTypes.func.isRequired,
    postResource: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        editorState: state.getIn(['ui', 'forms', formName, 'editor']),
        auth: state.getIn(['auth']),
        selectState: state.getIn(['form', formName, 'gender'])
    };
};

const mapDispatchToProps = dispatch => ({
    handleEditorChange: bindActionCreators(handleEditorChangeAction, dispatch),
    postResource: bindActionCreators(postResourceAction, dispatch)
});

export default reduxForm({
    form: formName
})(connect(mapStateToProps, mapDispatchToProps)(userAuthWrapper(Post)));