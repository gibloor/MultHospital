import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import './styles.scss';

const AboutProject = () => {

  const { t } = useTranslation();

  return (
    <div className='aboutProject content' data-testid='about-project-page'>
      <span className='aboutProject__text'>
        <p>
          {t('about-project.title')}
        </p>
        <Trans i18nKey={'about-project.text'}>
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