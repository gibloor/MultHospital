import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { statisticsSelector } from 'redux-saga/selectors/profileSelector'

import './styles.scss'

const Statistic = () => {

  const { t } = useTranslation()
  const statistics = useSelector(statisticsSelector)

  return (
    <div className='statistics'>
      <div className='statistics__title'>
      { t('statistics.title')}
      </div>
      <div className='statistics__ difficulties'>
        <p>
          {t(`statistics.level`)}: {statistics.level}
        </p>
        <p>
          {t(`statistics.totalAmount`)}: {statistics.totalAmount}
        </p>
        <p>
          {t('statistics.levelsTitle')}
        </p>

        <div>
          <p>
            {t(`statistics.level1`)}: {statistics.level1}
          </p>
          <p>
            {t(`statistics.level2`)}: {statistics.level2}
          </p>
          <p>
            {t(`statistics.level3`)}: {statistics.level3}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistic