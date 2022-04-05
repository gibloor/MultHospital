import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const Basement = () => {

  const { t } = useTranslation();

  return (
    <div className="basement text">
      <div className='basement__case'>
        {t('basement.bigText')}
      </div>
    </div>
  )
}

export default Basement