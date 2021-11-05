import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';

import './styles.scss';

interface Img {
  img: string
}

const LangChanger = () => {

  const [langDisplay, setLangDisplay] = useState(false);
  const { t, i18n } = useTranslation();

  const langs: {[lang: string]: Img} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' },
  };

  return (
    <div className="langchanger">
      <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
        <div className="langchanger__block">
          <img
            role="button"
            tabIndex={0}
            onKeyPress={() => setLangDisplay(!langDisplay)}
            onClick={() => setLangDisplay(!langDisplay)}
            alt={t('flag')}
            className="langchanger__img"
            src={t('flag')}
          />
          {langDisplay && Object.keys(langs).map((lang) => (
            <img
              role="button"
              tabIndex={0}
              key={lang}
              onKeyPress={() => (i18n.changeLanguage(lang), setLangDisplay(false))}
              onClick={() => (i18n.changeLanguage(lang), setLangDisplay(false))}
              alt={lang}
              className="langchanger__img"
              src={langs[lang].img}
            />
          ))}
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default LangChanger;