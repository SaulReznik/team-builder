import React from 'react';
import isEmail from 'validator/lib/isEmail';

import FormField from './UI/FormField';

class Registration extends React.Component {
    state = {
        fields: {
            firstname: '',
            lastname: '',
            birthdate: '',
            sex: {
                selected: 'male',
                options: ['male', 'female']
            },
            avatarUrl: '',
            jsExperience: 0,
            reactExperience: 0,
            companyId: 1,
            email: '',
            password: '',
        },
        fieldErrors: {}
    }

    onFormSubmit = e => {
        e.preventDefault();
        //If validation is not passed then don't submit
        if (this.validate()) return;

        //[TEMP] Just return for now while waiting for further instructions
        console.log('Validation was passed!')
        return;
    }

    //Getting the values, and if there's errors
    //Than that errors we will keep in our state to for further validation
    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({ fields, fieldErrors });
    };

    onGenderSelect = e => {
        e.persist();
        
        this.setState(prevState => ({
            fields: {
                ...prevState.fields,
                sex: {
                    ...prevState.fields.sex,
                    selected: e.target.value,
                }
            }
        }))
    }

    validate = () => {
        const { fields, fieldErrors } = this.state;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        //If one of our fields is empty
        if (!fields.email) return true;
        if (!fields.password) return true;

        //Or we have at least one error then the validation was failed
        if (errMessages.length) return true;

        return false;
    };

    render() {
        return(
            <div className="FlexCenter">
                <div className="RegistrationContainer">
                    <h3>Registration</h3>
                    <FormField
                        placeholder='First name'
                        name='firstname'
                        value={this.state.fields.firstname}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'First Name Required')} //[TEMP]
                    />

                    <FormField
                        placeholder='Last name'
                        name='lastname'
                        value={this.state.fields.lastname}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Last Name Required')} //[TEMP]
                    />

                    <FormField
                        placeholder='Birth Date'
                        name='birthdate'
                        value={this.state.fields.birthdate}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Birth Date Required')} //[TEMP]
                    />
                    
                    <span>Sex</span>
                    {
                        this.state.fields.sex.options.map((item, index) => (
                            <FormField
                                key={index}
                                type='radio'
                                name='sex'
                                label={item}
                                value={item}
                                onGenderSelect={this.onGenderSelect}
                                isSelected={this.state.fields.sex.selected === item}
                            />
                        ))
                    }

                    <FormField
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val => (isEmail(val) ? false : 'Invalid Email')} //[TEMP]
                    />

                    <FormField
                        placeholder='password'
                        name='password'
                        type='password'
                        value={this.state.fields.password}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'Password Required')} //[TEMP]
                    />

                </div>
            </div>
        )
    }
}

export default Registration;