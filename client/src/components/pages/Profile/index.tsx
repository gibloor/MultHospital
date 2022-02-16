import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { profileTakeRequire } from 'redux-saga/actions/profileActions';

import Achievements from './Achievements';
import Avatar from './Avatar';
import Statistic from './Statistic';

import './styles.scss';

interface Params {
  id: string,
}

const Profile = () => {

  const dispatch = useDispatch();
  const params:Params = useParams();

  const id = Number(params.id);

  useEffect(() => {
    dispatch(profileTakeRequire({ id: id }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='profile'>
      <Avatar id={id} />
      <Statistic />
      <Achievements />
    </div>
  )
}

export default Profile;