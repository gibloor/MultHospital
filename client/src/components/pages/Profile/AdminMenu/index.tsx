import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { adminInfoTakeRequire } from 'redux-saga/actions/adminInfoActions'

import MultChanger from './MultChanger'

import './styles.scss'

const AdminMenu = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminInfoTakeRequire())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='admin-menu'>
      <p className='admin-menu__title title'>
        Admin Menu
      </p>
      <MultChanger />
    </div>
  )
}

export default AdminMenu