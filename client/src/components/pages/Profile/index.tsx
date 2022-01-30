import React from 'react';
import { useSelector } from 'react-redux';

import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import Achievements from './Achievements';
import Avatar from './Avatar';
import Statistic from './Statistic';

import './styles.scss';

const Profile = () => {

  const user = useSelector(getAccountSelector);

  return (
    <div className='profile'>
      <div className='profile__left'>
        <Avatar />
        <Statistic />
      </div>
      <div className='profile__right'>
        <Achievements />
      </div>
    </div>
  )
}

export default Profile;