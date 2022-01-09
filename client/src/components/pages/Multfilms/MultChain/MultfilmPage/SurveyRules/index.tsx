import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';

import Survey from 'components/pages/Multfilms/Survey';

import './styles.scss';

const MultfilmPage = () => {

  const { t } = useTranslation();

  const [surveyOn, setSurveyOn] = useState(false);
  const [answers, setAnswers] = useState<number>();

  interface Params {
    name: string,
    section: string,
  }

  const params:Params = useParams();
  const multName = params.name;

  return (
    surveyOn && <Survey topic={multName} />
    || <>
      <div>Правила</div>
      <div onClick={() => setSurveyOn(true)}>
        Пройти тест
      </div>
    </>
  )
}

export default MultfilmPage;