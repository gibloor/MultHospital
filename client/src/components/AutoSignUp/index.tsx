import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { userAutoAuthRequire } from 'redux-saga/actions/userActions'
import { getAccountSelector } from 'redux-saga/selectors/userSelector'

interface Props {
  children: React.ReactNode,
}

const AutoSignUp = (props: Props) => {

  const dispatch = useDispatch()

  const authInfo = useSelector(getAccountSelector)
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    if (token && !authInfo.name) {
      dispatch(userAutoAuthRequire({token: token}))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <>
      {props.children}
    </>
  )
}

AutoSignUp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
}

export default AutoSignUp