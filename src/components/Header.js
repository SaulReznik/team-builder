import React from 'react';

import avatar from '../avatar.png';

class Header extends React.Component{
    render() {
        return(
            <header>
                <div className='LogoutButtonContainer FlexCenter'>
                    <button>Logout</button>
                </div>
                <div className='AvatarHeaderContainer FlexCenter'>
                    <img className='AvatarHeader' src={avatar} />
                </div>
            </header>
        )
    }
}

export default Header;