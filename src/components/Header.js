import React from 'react';
import { Link } from 'react-router-dom';

import AccountModal from './AccountModal';
import avatar from '../avatar.png';

class Header extends React.Component{
    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    render() {
        return(
            <div className='HeaderWrapper'>
                <header>
                    <div className='LogoutButtonContainer FlexCenter'>
                        <Link className='LogoutLink' to='/login'>Logout</Link>
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

export default Header;