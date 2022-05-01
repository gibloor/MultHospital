import React from 'react';
import { useTranslation } from 'react-i18next';

import mainPicture from 'components/assets/mainPage/mainPicture.png';

import './styles.scss';

const Main = () => {

  const { t } = useTranslation();

  return (
    <div className="main content">
      <h2 className="main__h2">
        Mult Hospital
      </h2>
      {/* cправа табличка с mult hospital, слева-центр мультяшный персонал 1920x1080*/}
      <img src={mainPicture} className="main__picture" />
    </div>
  );
};

export default Main;