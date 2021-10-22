import React from 'react';
import './main.scss';
// import video from './videos/onFirstDays.mp4';

const Main = () => {
  const multName = 'Futurama 1s 1s';
  const registered = '666';

  return (
    <div className="main">
      <h3>
        Multfilm of day: {multName}
      </h3>
      <iframe
        className="main_video"
        title="main_video"
        src="https://www.youtube.com/embed/Zlmswo0S0e0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <h3>
        number of registered:
        {registered}
      </h3>
    </div>
  );
};

export default Main;