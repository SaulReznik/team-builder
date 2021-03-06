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
                    <div>
                        <input
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                            type='password'
                        />
                        <div className='ErrorMessageContainer'>
                            <span className='ErrorMessage'>{this.state.error}</span>
                        </div>
                    </div>
                )
            case 'checkbox':
                return (
                    <div className='CheckboxWrapper'>
                        <input
                            value={this.state.value}
                            onChange={this.onChange}
                            type='checkbox'
                        />
                        <label>{this.props.label}</label>
                    </div>
                )
            case 'radio':
                return (
                    <div>
                        <input
                            name={this.props.name}
                            value={this.state.value}
                            onChange={e => this.props.onGenderSelect(e)}
                            type='radio'
                            checked={this.props.isSelected}
                        />
                        <label>{this.props.label}</label>
                    </div>
                )
            case 'date': 
                return (
                    <div>
                        <input
                            type='date'
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                        <div className='ErrorMessageContainer'>
                            <span className='ErrorMessage'>{this.state.error}</span>
                        </div>
                    </div>
                )
            case 'number':
                return (
                    <div>
                        <input
                            type='number'
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                        <div className='ErrorMessageContainer'>
                            <span className='ErrorMessage'>{this.state.error}</span>
                        </div>
                    </div>

                )
            default:
                return (
                    <div>
                        <input
                            className='FormTextInput'
                            placeholder={this.props.placeholder}
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                        <div className='ErrorMessageContainer'>
                            <span className='ErrorMessage'>{this.state.error}</span>
                        </div>
                    </div>
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

