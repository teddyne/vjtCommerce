import React from 'react'
import avatar from '../assets/images/avatar.jpg'

import './scss/_profile.scss'

const Profile = () => {
    return (
        <React.Fragment>
            <div className='profile'>
                <img src={avatar} alt='Avatar' />
                <span>Vu Nguyen</span>
            </div>
            <div class="profile-menu">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </React.Fragment>
    )
}
export default Profile