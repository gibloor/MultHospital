import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

interface Props {
  result: string,
}

const SurveyResult = (props: Props) => {

  const { t } = useTranslation();

  const { result } = props;

  return (
    <div>
      {/* 1 из 10 картинков */}
      <img src={`/assets/images/multfilms/${result}`}></img>
      {result}
      { t(`multfilms.${result}`)}
    </div>
  )
}

export default SurveyResult;