import React, { useEffect } from 'react';

import './styles.scss';

interface Props {
  timer: number,
  changeTimer: () => void,
}

const Timer = (props:Props) => {

  const { timer, changeTimer } = props 

  useEffect(() => {
    setTimeout(
      () => changeTimer(), 1000
    )
  });

  return (
    <span>
      {`${timer}s`}
    </span>
  )
}

export default Timer;