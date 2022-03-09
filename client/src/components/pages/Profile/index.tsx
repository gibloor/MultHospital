import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { profileTakeRequire } from 'redux-saga/actions/profileActions';
import { profileIdSelector } from 'redux-saga/selectors/profileSelector';
import { getAccountIdSelector, getUserPermission } from 'redux-saga/selectors/userSelector';

import Avatar from './Avatar';
import Statistic from './Statistic';
import UserOffer from './UserOffer';
import LevelChanger from './LevelChanger';
import AdminMenu from './AdminMenu';

import './styles.scss';

interface Params {
  id: string,
}

const Profile = () => {

  const dispatch = useDispatch();
  
  const params:Params = useParams();
  const id = Number(params.id);
  const profileId = useSelector(profileIdSelector);
  const ownId = useSelector(getAccountIdSelector);
  const permission = useSelector(getUserPermission);

  useEffect(() => {
    if (profileId !== id) {
      dispatch(profileTakeRequire({ id: id }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, profileId])

  return (
    <div className='profile'>
      <div className='profile__case'>
        <Avatar id={id} />
        <Statistic />
        {
          ownId === id && permission >= 4 &&
          <AdminMenu />
        }
        { ownId === id &&
          <LevelChanger />
        }

        <UserOffer />
      </div>
    </div>
  )
}

export default Profile;