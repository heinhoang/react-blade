import React, { PureComponent } from 'react';
import Select from 'react-select';
import { Input } from 'reactstrap';

class InputWrapper extends PureComponent {

    render() {
        const {
            input,
            type,
            meta: { touched, error },
            ...custom
        } = this.props;

        return (
            <div>
                <Input type={type} { ...input } { ...custom } />
                {touched && error && <div>{error}</div>}
            </div>
        );
    }
};

export default InputWrapper;