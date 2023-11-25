import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { getAccountSelector } from 'redux-saga/selectors/userSelector'
import { multfilmTakeRequare } from 'redux-saga/actions/multfilmsActions'

interface Props {
  children: React.ReactNode,
}

const TakeMultfilms = (props: Props) => {

  const dispatch = useDispatch()

  const user = useSelector(getAccountSelector)
  
  useEffect(() => {
    if (user.test_passed) {
      dispatch(multfilmTakeRequare({ id: user.id }))
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.test_passed, user.id])

  return (
    <>
      {props.children}
    </>
  )
}

TakeMultfilms.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
}

export default TakeMultfilms