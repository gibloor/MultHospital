import React from 'react';
import './main.css';
// import video from './videos/onFirstDays.mp4';

const Main = () => {

  const multName = 'Futurama 1s 1s';
  const registered = '666';

  return (
    <div className="main">
      <p>Multfilm of day: {multName}</p>
      {/* <video className='main_video' controls>
        <source src={'https://www.youtube.com/embed/Zlmswo0S0e0'} type='video/mp4' />
      </video> */}
      <iframe 
        className='main_video'
        src="https://www.youtube.com/embed/Zlmswo0S0e0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      />
      <p>
        number of registered: {registered}
      </p>
    </div>
  )
}


export default Main;