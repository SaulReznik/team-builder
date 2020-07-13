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

    render() {
        return (
            <div className='InputContainer'>
                {
                    this.props.type === 'password' ?
                        <input
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                            type='password'
                        />
                        :
                        <input
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                }
            </div>
        );
    }
}

export default FormField;

