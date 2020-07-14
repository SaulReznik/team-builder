import React from 'react';

class FormField extends React.Component {
    state = {
        value: this.props.value,
        error: false,
    };

    componentWillReceiveProps(update) {
        this.setState({ value: update.value });
    }

    onChange = (e) => {
        const name = this.props.name;
        const value = e.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.setState({ value, error });

        this.props.onChange({ name, value, error });
    }

    renderInput = () => {
        switch (this.props.type) {
            case 'password':
                return (
                    <input
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.onChange}
                        type='password'
                    />
                )
            case 'checkbox':
                return (
                    <div>
                        <input
                            value={this.state.value}
                            onChange={this.onChange}
                            type='checkbox'
                        />
                        <label>{this.props.label}</label>
                    </div>
                )
            default:
                return (
                    <input
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                )
        }
    }

    render() {
        return (
            <div className='InputContainer'>
                {this.renderInput()}
            </div>
        );
    }
}

export default FormField;

