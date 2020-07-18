import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AccountModal from './AccountModal';
import avatar from '../avatar.png';
import { userLogout } from '../redux/actions';

class Header extends React.Component{
    state = {
        isModalOpen: false,
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
                    <div className='LogoutButtonContainer FlexCenter'>
                        <button onClick={this.logout} className='LogoutLink' to='/login'>Logout</button>
                    </div>
                    <div className='AvatarHeaderContainer FlexCenter'>
                        <img onClick={this.toggleModal} className='AvatarHeader' src={avatar} />
                    </div>
                </header>
                {this.state.isModalOpen ? <AccountModal /> : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userLogout())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Header));