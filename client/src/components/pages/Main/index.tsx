import React from 'react';

import staff from 'components/assets/mainPage/staff.png';

import './styles.scss';

const Main = () => {

  return (
    <div className="main">
      <h2 className="main__h2">
        Mult Hospital
      </h2>
      {/* cправа табличка с mult hospital, слева-центр мультяшный персонал 1920x1080*/}
      <img src={staff} className="main__staff" />
    </div>
  );
};

export default Main;