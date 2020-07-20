import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import avatarPlaceholder from '../avatar.png';
import { userLogout } from '../redux/actions';

import { BASE_URL } from '../constants/baseUrl';

class Header extends React.Component{
    state = {
        isModalOpen: false,
        avatar: JSON.parse(localStorage.getItem('user')).avatarUrl
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    logout = () => {
        this.props.logout();
        return this.props.history.push('/login');
    }

    render() {
        return(
            <div className='HeaderWrapper'>
                <header>
                    <div className="HeaderLinksContainer">
                        <Link className='HeaderLinks' to='/'>Home</Link>
                        <Link className='HeaderLinks' to='/topics'>Topics</Link>
                        <Link className='HeaderLinks' to='/projects'>Projects</Link>
                    </div>
                    <div className='LogoutButtonContainer FlexCenter'>
                        <button onClick={this.logout} className='LogoutButton' to='/login'>Logout</button>
                    </div>
                    <div className='AvatarHeaderContainer FlexCenter'>
                        <Link to='/account'>
                            <img className='AvatarHeader' src={this.state.avatar || avatarPlaceholder} />
                        </Link>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.userLogin,
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userLogout(`${BASE_URL}users/logout`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));