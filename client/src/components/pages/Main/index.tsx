import React from 'react';

import './styles.scss';

const Main = () => {
  const multName = 'Futurama 1s 1s';
  const registered = '666';

  return (
    <div className="main">
      <p className="title">
        Multfilm of day: {multName}
      </p>

      <span className="title">
        number of registered:
        {registered}
      </span>
    </div>
  );
};

export default Main;