import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSearchTerm as setSearchTermAction } from '../../actions/crud';

const Search = ({
    submitting,
    invalid,
    setSearchTerm
}) => {
    const renderInput = ({
        input,
        type,
        meta: { touched, error },
        ...custom
    }) => (
        <FormGroup>
            <Input id="search-input" type={type} { ...input } { ...custom } />
            {touched && error && <div>{error}</div>}
        </FormGroup>
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = document.getElementById('search-input').value;
        setSearchTerm(keyword);
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <Field
                name="search"
                type="text"
                component={renderInput}
                placeholder="keyword..."
                disabled={submitting}
            />
            <Button type="submit">
                <span className="fa fa-search"></span>
            </Button>
        </Form>
    );
};

Search.propTypes = {
    ...propTypes,
    setSearchTerm: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    setSearchTerm: bindActionCreators(setSearchTermAction, dispatch)
});

export default reduxForm({
    form: 'search'
})(connect(null, mapDispatchToProps)(Search));