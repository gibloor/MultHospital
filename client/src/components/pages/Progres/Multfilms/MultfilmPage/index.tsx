import React from 'react';
import { useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getAccountPendingSelector, getAccountSelector } from 'redux-saga/selectors/userSelector';
import { getMultfilmsPendingSelector } from 'redux-saga/selectors/multfilmsSelector';

import Characters from './Characters';

import './styles.scss';

const MultfilmPage = () => {

  const { t } = useTranslation();

  const pendingAccount = useSelector(getAccountPendingSelector);
  const pendingMultfilms = useSelector(getMultfilmsPendingSelector);
  const authInfo = useSelector(getAccountSelector);

  interface Params {
    name: string,
    section: string,
  }

  const params:Params = useParams();
  const multName = params.name;
  const multSection = params.section;

  return (
    <div className="multfilm_page">
      {!pendingAccount && authInfo.test_passed && !pendingMultfilms
      && (
          <>
            <div className="multfilm_page__container">
              <img
                className="mulftilm_page__title_img"
                src={`assets/images/multPosters/${multName}`}
              />
              <div className="multfilm_page__title_container">
                <p className="multfilm_page__title">
                  {t(`multfilms.personal.${multName}.title`)}
                </p>
                <p className="multfilm_page__description">
                  <Trans i18nKey={`multfilms.personal.${multName}.description`}>
                    <strong title={t('nameTitle')}>multfilm name</strong> - short description.
                  </Trans>
                </p>
              </div>
            </div>
            <Characters multSection={multSection} multName={multName}/>
          </>
        )
      }
    </div>
  )
}

export default MultfilmPage;