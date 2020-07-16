import React from 'react';

import Header from '../components/Header';
import avatar from '../avatar.png';

class Account extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <div className='AccountContainer'>
                    <div className='AvatarColumnContainer'>
                        <img className='AvatarAccount' src={avatar} />
                    </div>
                    <div className='UserInfoColumn'>
                        <div className='UserInfoContainer'>
                            <span className='UserInfoLabel'>First Name: </span>
                            <span className='UserInfoValue'>Robert Hovhannisyan</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Account;