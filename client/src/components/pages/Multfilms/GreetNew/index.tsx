import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { userInvolvementChangeRequire } from 'redux-saga/actions/userActions';
import { getAccountIdSelector } from 'redux-saga/selectors/userSelector';

import './styles.scss';

const GreetNew = () => {

  interface Select {
    text: string,
    image: string,
    level: number,
  }

  const userId = useSelector(getAccountIdSelector);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const chooser = [
    {
      text: 'text1',
      image: 'https://i.ibb.co/1dyPjPX/first-List-Face-Up.png',
      level: 1,
    },
    {
      text: 'text2',
      image: 'https://i.ibb.co/0VfV5Hv/first-List-Futurama.png',
      level: 2,
    },
    {
      text: 'text3',
      image: 'https://i.ibb.co/1fGdYLC/first-List-Watashi.png',
      level: 3,
    },
  ];

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
        {chooser.map((choose: Select) => (
          <div
            role="button"
            className="greet__answer"
            key={choose.level}
            tabIndex={0}
            onKeyPress={() => (saveInvolvement(choose.level))}
            onClick={() => (saveInvolvement(choose.level))}
          >
            <div className="greet__answer_carcas">
              <img
                className="greet__answer_image"
                alt={choose.text}
                src={choose.image}
              />
            </div>
            <span className="text greet__text">
              {t(`greetNew.chooser.${choose.text}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreetNew;