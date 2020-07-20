import React from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from '../constants/baseUrl';
import FormField from './UI/FormField';
import Header from '../components/Header';
import { updateAccount } from '../redux/actions';
import avatarPlaceholder from '../avatar.png';

const updateUrl = `${BASE_URL}users/update`;

class Account extends React.Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')),
        fields: {
            ...JSON.parse(localStorage.getItem('user'))
        },
        fieldErrors: {}
    }

    submitChanges = property => {
        this.props.updateAccount(updateUrl, {
            [property]: this.state.fields[property]
        });

        const validData = JSON.stringify({
            ...this.state.user,
            [property]: this.state.fields[property]
        })

        localStorage.setItem('user', validData);
    }

    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({ fields, fieldErrors });
    };

    render() {
        return(
            <>
                <Header/>
                <div className='AccountContainer'>
                    <div className='AvatarColumnContainer'>
                        <img className='AvatarAccount' src={this.state.user.avatarUrl || avatarPlaceholder} />
                    </div>
                    <div className='UserInfoColumn'>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>Email: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.email}
                                        name='email'
                                        onChange={this.onInputChange}
                                        type='email'
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('email')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>First Name: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.firstName}
                                        name='firstName'
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('firstName')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>Last Name: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.lastName}
                                        name='lastName'
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('lastName')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>Birth Date: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.date}
                                        name='date'
                                        onChange={this.onInputChange}
                                        type='date'
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('birthDate')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>Avatar URL: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.avatarUrl}
                                        name='avatarUrl'
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('avatarUrl')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>JS Experience: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.jsExperience}
                                        name='jsExperience'
                                        onChange={this.onInputChange}
                                        type='number'
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('jsExperience')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>React Experience: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.reactExperience}
                                        name='reactExpereince'
                                        onChange={this.onInputChange}
                                        type='number'
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('reactExperience')}>Change</button>
                            </div>
                        </div>

                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>Company ID: </span>
                            <div className="UserInfoBtnContainer">
                                <div className="UserInputContainer">
                                    <FormField
                                        value={this.state.fields.companyId}
                                        name='companyId'
                                        onChange={this.onInputChange}
                                        type='number'
                                    />
                                </div>
                                <button className="UserInfoChangeBtn" onClick={() => this.submitChanges('companyId')}>Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateAccount: (updateUrl, data) => dispatch(updateAccount(updateUrl, data))
})

export default connect(null, mapDispatchToProps)(Account);