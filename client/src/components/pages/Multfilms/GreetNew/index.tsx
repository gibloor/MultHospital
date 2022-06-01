import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { userInvolvementChangeRequire } from 'redux-saga/actions/userActions';
import { getAccountIdSelector } from 'redux-saga/selectors/userSelector';

import './styles.scss';

const GreetNew = () => {

  const userId = useSelector(getAccountIdSelector);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const chooser = [1, 2, 3];

  const saveInvolvement = (level: number) => {
    dispatch(userInvolvementChangeRequire({
      level: level, id: userId
    }));
  };

  return (
    <div className="greet">
      <p className="title">
        {t('greetNew.greet.string1')}
      </p>
      <span className="text">
        {t('greetNew.greet.string2')}
      </span>
      <div className="greet__answers">
        {chooser.map((choose) => (
          <div
            role="button"
            className="greet__answer button"
            key={choose}
            tabIndex={0}
            onKeyPress={() => (saveInvolvement(choose))}
            onClick={() => (saveInvolvement(choose))}
          >
            <div className="greet__answer_carcas">
              <img
                className="greet__answer_image"
                alt={t(`greetNew.chooser.text${choose}`)}
                src={`/assets/images/greetNew/answers/${choose}.png`}
              />
            </div>
            <span className="text greet__text">
              {t(`greetNew.chooser.text${choose}`)}
            </span>
          </div>
        ))}
      </div>
      <span className="greet__warning">
        {t('greetNew.warning')}
      </span>
    </div>
  );
};

export default GreetNew;