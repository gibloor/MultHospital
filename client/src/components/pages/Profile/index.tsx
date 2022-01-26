import React from 'react';
import { useSelector } from 'react-redux';

import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import Avatar from './Avatar';

import './styles.scss';

const Profile = () => {

  const user = useSelector(getAccountSelector);

  return (
    <div className='profile'>
      <div className='profile__left'>
        <Avatar login={user.login} />
        <div>
          achievements
        </div>
      </div>
      <div className='profile__right'>
        statistic
      </div>

    </div>
  )
}

export default Profile;