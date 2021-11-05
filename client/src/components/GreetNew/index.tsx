import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

interface Prop {
  changeVisiter: () => void;
}

const GreetNew = (props: Prop) => {
  interface Select {
    text: string,
    image: string,
    select: string,
  }

  const { t } = useTranslation();

  const chooser = [
    {
      text: 'text1',
      image: 'https://i.ibb.co/1dyPjPX/first-List-Face-Up.png',
      select: 'common',
    },
    {
      text: 'text2',
      image: 'https://i.ibb.co/0VfV5Hv/first-List-Futurama.png',
      select: 'uncommon',
    },
    {
      text: 'text3',
      image: 'https://i.ibb.co/1fGdYLC/first-List-Watashi.png',
      select: 'rare',
    },
  ];

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
            key={choose.select}
            tabIndex={0}
            onKeyPress={() => ((props.changeVisiter(),
              localStorage.setItem('involvement',
                choose.select)
              ))}
            onClick={() => ((props.changeVisiter(),
            localStorage.setItem('involvement',
              choose.select)
            ))}
          >
            <div className="greet__answer_carcas">
              <img
                className="greet__answer_image"
                alt={choose.select}
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