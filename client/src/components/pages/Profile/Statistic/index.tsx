import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { statisticsSelector } from 'redux-saga/selectors/profileSelector';

import './styles.scss';

const Statistic = () => {

  const { t } = useTranslation();
  const statistics = useSelector(statisticsSelector);

  return (
    <div className='statistics'>
      <div className='statistics__title'>
        statistics
      </div>
      <div>
        {Object.keys(statistics).map(statistic => (
          <p key={statistic}>
            { t(`statistics.${statistic}`)}: {statistics[statistic] } 
          </p>
        ))}
      </div>
    </div>
  )
};

export default Statistic;