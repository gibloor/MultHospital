import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getAccountPendingSelector, getAccountSelector } from 'redux-saga/selectors/userSelector';
import { getMultfilmsPendingSelector, getMultfilmsSelector } from 'redux-saga/selectors/multfilmsSelector';
import { Character } from 'redux-saga/types/multfilmsTypes';

import Characters from './Characters';
import Survey from './SurveyRules';

import './styles.scss';

const MultfilmPage = () => {

  const { t } = useTranslation();

  const pendingAccount = useSelector(getAccountPendingSelector);
  const pendingMultfilms = useSelector(getMultfilmsPendingSelector);
  const authInfo = useSelector(getAccountSelector);
  const multfilms = useSelector(getMultfilmsSelector);

  const [characters, setCharacters] = useState<Character[] > (); 
  const [surveyOn, setSurveyOn] = useState(false);

  interface Params {
    name: string,
    section: string,
  }

  const params:Params = useParams();
  const multName = params.name;
  const multSection = params.section;

  useEffect(() => {
    if (multfilms[multSection] !== undefined) {
      multfilms[multSection].map(multfilm => {
        if (multfilm.name === multName) {
          setCharacters(multfilm.characters)
        }
      });
    };
  }, [multfilms]);

  return (
    <div className="multfilm_page">
      {!pendingAccount && authInfo.test_passed && !pendingMultfilms && characters
      && (
        surveyOn && <Survey />
        || <>
          <div className="multfilm_page__container">
            <div className="multfilm_page__title_img_container">
              <img
                className="multfilm_page__title_img"
                src={`/assets/images/multfilms/${multName}/collective/${multName}.png`}
              />
            </div>
            <div className="multfilm_page__title_container">
              <p className="multfilm_page__title">
                {t(`multfilms.personal.${multName}.title`)}
              </p>
              <p className="multfilm_page__description">
                <Trans i18nKey={`multfilms.personal.${multName}.description`}>
                  <strong>multfilm name</strong> - short description.
                </Trans>
              </p>
            </div>
          </div>
          <Characters multName={multName} characters={characters} />
          <div className="multfilm_page__test" onClick={() => setSurveyOn(true)}>
            Проверить себя
          </div>
        </>
      )}
    </div>
  )
}

export default MultfilmPage;