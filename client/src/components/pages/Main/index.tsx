import React from 'react';
import './main.scss';

const Main = () => {
  const multName = 'Futurama 1s 1s';
  const registered = '666';

  return (
    <div className="main">
      <p className="title">
        Multfilm of day: {multName}
      </p>
      <iframe
        className="main__video"
        title="main_video"
        src="https://www.youtube.com/embed/Zlmswo0S0e0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <span className="title">
        number of registered:
        {registered}
      </span>
    </div>
  );
};

export default Main;