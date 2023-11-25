import React, { useEffect, useState } from 'react'

import './styles.scss'

interface Props {
  counter: number
  counterChange: () => void,
}

const Timer = (props: Props) => {

  const [timer, setTimer] = useState(15)
  
  const { counterChange, counter } = props

  useEffect(() => {
    if (timer < 0) {
      counterChange()
    }

    const timeOut = setTimeout(() => setTimer(timer - 1), 1000)
  
    return () => clearTimeout(timeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  useEffect(() => {
    setTimer(15)
  },[counter])

  return (
    <span className='timer'>
      {`${timer}s`}
    </span>
  )
}

export default Timer