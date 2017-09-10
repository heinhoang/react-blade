import React, { PureComponent } from 'react';
import ReactQuill from 'react-quill';

class HTMLEditor extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(htmlValue) {
        // console.log(htmlValue);

        if (this.props.input.onChange && htmlValue != null) {
            // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
            this.props.input.onChange(htmlValue);
        } else {
            // Clear the input field
            this.props.input.onChange(null);
        }
    }

    render() {
        console.log(this.props.input);
        return (
            <ReactQuill
                {...this.props}
                value={this.props.input.value || ''}
                onBlur={() => this.props.input.onBlur(this.props.input.value)}
                onChange={this.onChange}
            />
        );
    }
}

export default HTMLEditor;