import React from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import FormField from './UI/FormField';

import { BASE_URL } from '../constants/baseUrl';

const loginUrl = `${BASE_URL}users/login`;

class Login extends React.Component {
    state = {
        fields: {
            email: '',
            password: '',
            rememberMe: '',
        },
        fieldErrors: {}
    }

    onLoginSubmit = e => {
        e.preventDefault();
        //If validation is not passed then don't submit
        if (this.validate()) return;

        const validData = JSON.stringify({
            email: this.state.fields.email,
            password: this.state.fields.password
        });
        
        console.log(validData);
        fetch(loginUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: validData
        })
        .then(res => console.log(res.json()))
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
                <div className="LoginContainer">
                    <h3>Login</h3>
                    <form onSubmit={this.onLoginSubmit}>

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

                        <FormField
                            name='rememberMe'
                            type='checkbox'
                            value={this.state.fields.rememberMe}
                            onChange={this.onInputChange}
                            label='Remember Me'
                        />

                        
                        <input
                            className='LoginSubmit'
                            type='submit'
                            disabled={this.validate()}
                            value='Submit'
                        />

                    </form>

                    <span className='NotAMember'>Not a member? <Link to='/registration'>Register</Link></span>
                </div>
            </div>
        )
    }
}

export default Login;