import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';

import Survey from 'components/pages/Multfilms/Survey';

import './styles.scss';

const MultfilmPage = () => {

  const { t } = useTranslation();

  const [surveyOn, setSurveyOn] = useState(false);

  interface Params {
    name: string,
    section: string,
  }

  const params:Params = useParams();
  const { name, section } = params;

  return (
    surveyOn && <Survey topic={name} multLevel={ Number(section) } /> ||
    <div className="rules">
      <div>
        {t('rules.title')}
      </div>
      <span>
        <ol>
          <Trans i18nKey={'rules.text'}>
            <li>1 rule</li>
            <li>2 rule</li>
            <li>3 rule</li>
          </Trans>
        </ol>
      </span>
      <div onClick={() => setSurveyOn(true)} className="rules__test_button">
        {t('rules.passTest')}
      </div>
    </div>
  )
}

export default MultfilmPage;