import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSearchTerm as setSearchTermAction } from '../../actions/crud';
import { InputWrapper } from '../../theme/components';

const Search = ({
    submitting,
    invalid,
    setSearchTerm,
    handleSubmit
}) => {
    const hdlSubmit = (values) => {
        const keyword = values.get('search');
        setSearchTerm(keyword);
        return false;
    };

    return (
        <Form inline onSubmit={handleSubmit(hdlSubmit)}>
            <Field
                name="search"
                type="text"
                id="search-input"
                component={InputWrapper}
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