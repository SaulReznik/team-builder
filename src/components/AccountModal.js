import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../avatar.png';

class AccountModal extends React.Component {
    render() {
        return(
            <div className="AccountModalContainer">
                <div className='AvatarModalContainer FlexCenter'>
                    <img className='AvatarModal' src={avatar} />
                </div>
                <Link to='/account'>Account</Link>
            </div>
        )
    }
}

export default AccountModal;