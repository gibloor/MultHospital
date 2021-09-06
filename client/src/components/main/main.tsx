import React from 'react';
import './main.css';
import video from './videos/onFirstDays.mp4';

const Main = () => {

  const multName = 'Futurama 1s 1s';
  const registered = '666';

  return (
    <div className="main">
      <p>Multfilm of day: {multName}</p>
      <video className='main_video' controls>
        <source src={video} type='video/mp4' />
      </video>
      <p>
        number of registered: {registered}
      </p>
    </div>
  )
}

export default Main;