import React from 'react';
import { Trans } from 'react-i18next';

import './styles.scss';

const AboutProject = () => {

  return (
    <div className='aboutProject'>
      <span className='aboutProject__text'>
        <Trans i18nKey={'aboutProject.text'}>
          goals
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