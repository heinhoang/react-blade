import React, { PureComponent } from 'react';
import axios from 'axios';
import Select from 'react-select'
import 'react-select/dist/react-select.css';

// https://ashiknesin.com/blog/use-react-select-within-redux-form/
class SelectWrapper extends PureComponent {
    constructor(props) {
        super(props);
        // this.url = this.props.url
        this.onChange = this.onChange.bind(this);
    }
    // getOptions() {
    //     return axios.get(this.url).then((response) => {
    //         return { options: response.data }
    //     })
    // }
    onChange(event) {
        // console.log(event)

        if (this.props.input.onChange && event != null) {
            // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
            this.props.input.onChange(event.value);
        } else {
            // Clear the input field
            this.props.input.onChange(null);
        }
    }

    getDefault(options) {
        for (let i = 0; i < options.length; i += 1) {
            if (options[i].default)
                return options[i].value;
        }
        return '';
    }

    render() {
        return (
            <Select {...this.props }
                value={this.props.input.value || this.getDefault(this.props.options)}
                onBlur={() => this.props.input.onBlur(this.props.input.value)}
                onChange={this.onChange}
            />
        );
    }
}

export default SelectWrapper;