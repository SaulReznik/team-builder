import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { withRouter } from 'react-router-dom';

import FormField from './UI/FormField';

import { BASE_URL } from '../constants/baseUrl';

const registerUrl = `${BASE_URL}users/register`;
class Registration extends React.Component {
    state = {
        fields: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            sex: {
                selected: 'male',
                options: ['male', 'female']
            },
            avatarUrl: '',
            jsExperience: 0,
            reactExperience: 0,
            companyId: 1,
        },
        fieldErrors: {}
    }

    onFormSubmit = e => {
        e.preventDefault();
        //If validation is not passed then don't submit
        if (this.validate()) return;

        //[TEMP] Just return for now while waiting for further instructions
        console.log('Validation was passed!');

        const validData = JSON.stringify({
            ...this.state.fields,
            jsExperience: +this.state.fields.jsExperience,
            reactExperience: +this.state.fields.reactExperience,
            sex: this.state.fields.sex.selected,
        });

        console.log(typeof this.state.fields.companyId, validData);

        fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: validData
        })
        .then((response) => this.props.history.push('/login'))
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

        //Specific validaton for each field
        if (!fields.firstName) return true;
        if (!fields.lastName) return true;
        if (!fields.birthDate) return true;
        if (fields.jsExperience < 0) return true;
        if (fields.reactExperience < 0) return true;
        if (fields.companyId < 0) return true; //[TEMP]
        if (!fields.email) return true;
        if (!fields.password) return true;

        //If we have at least one error then the validation was failed
        if (errMessages.length) return true;

        return false;
    };

    render() {
        return(
            <div className="FlexCenter">
                <div className="RegistrationContainer">
                    <h3>Registration</h3>
                    <form onSubmit={this.onFormSubmit}>
                        <FormField
                            placeholder='First name'
                            name='firstName'
                            value={this.state.fields.firstName}
                            onChange={this.onInputChange}
                            validate={val => (val ? false : 'First Name Required')} //[TEMP]
                        />

                        <FormField
                            placeholder='Last name'
                            name='lastName'
                            value={this.state.fields.lastName}
                            onChange={this.onInputChange}
                            validate={val => (val ? false : 'Last Name Required')} //[TEMP]
                        />

                        <FormField
                            placeholder='Birth Date'
                            name='birthDate'
                            type='date'
                            value={this.state.fields.birthDate}
                            onChange={this.onInputChange}
                            validate={val => (val ? false : 'Birth Date Required')} //[TEMP]
                        />
                        
                        <div className='SexContainer'>
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
                        </div>
                        
                        <FormField
                            placeholder='Avatar URL'
                            name='avatarUrl'
                            value={this.state.fields.avatarUrl}
                            onChange={this.onInputChange}
                        />

                        <FormField
                            placeholder='JS Experience'
                            name='jsExperience'
                            type='number'
                            value={this.state.fields.jsExperience}
                            onChange={this.onInputChange}
                            validate={val => (val ? false : "No negative numbers")} //[TEMP]
                        />

                        <FormField
                            placeholder='React Experience'
                            name='reactExperience'
                            type='number'
                            value={this.state.fields.reactExperience}
                            onChange={this.onInputChange}
                        />

                        <FormField
                            placeholder='company ID'
                            name='companyId'
                            type='number'
                            value={this.state.fields.companyId}
                            onChange={this.onInputChange}
                        />

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
                        
                        <span className='AllFieldWarning'>Please fill all fields</span>
                        <input
                            className='RegistrationSubmit'
                            type='submit'
                            disabled={this.validate()}
                            value='Submit'
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Registration);