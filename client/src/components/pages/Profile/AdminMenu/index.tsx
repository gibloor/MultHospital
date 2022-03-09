import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { adminInfoTakeRequire } from 'redux-saga/actions/adminInfoActions';

import MultChanger from './MultChanger';

import './styles.scss';

const AdminMenu = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminInfoTakeRequire());
  }, []);

  return (
    <div className='adminMenu'>
      AdminMenu
      <MultChanger />
    </div>
  )
}

export default AdminMenu;