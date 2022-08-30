import React from 'react';

import mainPicture from 'components/assets/mainPage/mainPicture.png';

import './styles.scss';

const Main = () => {

  return (
    <div className="main content" data-testid='main-page'>
      <h2 className="main__h2">
        Mult Hospital
      </h2>

      <img alt='main' src={mainPicture} className="main__picture" />
    </div>
  );
};

export default Main;