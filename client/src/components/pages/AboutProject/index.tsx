import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import './styles.scss';

const AboutProject = () => {

  const { t } = useTranslation();

  return (
    <div className='aboutProject content'>
      <span className='aboutProject__text'>
      <p>
        {t('aboutProject.title')}
      </p>
        <Trans i18nKey={'aboutProject.text'}>
          <ol>
            <li>goal1</li>
            <li>goal2</li>
          </ol>
        </Trans>
      </span>
    </div>
  );
};

export default AboutProject;