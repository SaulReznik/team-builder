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
                        <span>Robert Hovhannisyan</span>
                        <span>Birth Date: 06-12-1997</span>
                        <span>Male</span>
                        <span>JS Experience: 30 months</span>
                        <span>React Experience: 18 months</span>
                        <span>Company: PicsArt</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Account;