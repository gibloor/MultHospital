import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserLevel } from 'redux-saga/selectors/userSelector';

import Survey from 'components/pages/Multfilms/Survey';

import './styles.scss';

const MultfilmPage = () => {

  const { t } = useTranslation();

  const [surveyOn, setSurveyOn] = useState(false);
  const userLevel = useSelector(getUserLevel);

  interface Params {
    name: string,
    section: string,
  }

  const params:Params = useParams();
  const { name, section } = params;

  return (
    surveyOn && <Survey topic={name} multLevel={ Number(section) } /> ||
    <div className="rules">
      <span className='rules__title'>
        {t('rules.title')}
      </span>
      <span>
        <ol className='rules__list'>
          <Trans i18nKey={'rules.text'}>
            <li>1 rule</li>
            <li>2 rule</li>
            <li>3 rule</li>
            <li>4 rule</li>
            <li>5 rule</li>
            <li>6 rule</li>
            <li>7 rule</li>
          </Trans>
        </ol>
      </span>
      <span className='rules__condition_case'>
        <p className='rules__title'>
          {t('rules.condition')}
        </p>
        <p>
          {t(`multfilms.${name}.conditions.${userLevel}`)}
        </p>
      </span>
      <div onClick={() => setSurveyOn(true)} className="button__general">
        {t('rules.passTest')}
      </div>
    </div>
  )
}

export default MultfilmPage;