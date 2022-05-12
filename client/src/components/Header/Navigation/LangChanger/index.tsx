import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';

import './styles.scss';

const LangChanger = () => {

  const [langDisplay, setLangDisplay] = useState(false);
  const { t, i18n } = useTranslation();

  const langs = [
    'en',
    'ru',
  ];

  return (
    <div className="langchanger">
      <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
        <div className="langchanger__block">
          <div
            role="button"
            tabIndex={0}
            onKeyPress={() => setLangDisplay(!langDisplay)}
            onClick={() => setLangDisplay(!langDisplay)}
            className="langchanger__flag_case"
          >
            <img
              alt={`flag ${i18n.language}`}
              className="langchanger__flag"
              src={`/assets/images/languages/${i18n.language}/flag.png`}
            />
            <img
              alt={`symbol ${i18n.language}`}
              className="langchanger__symbol"
              src={`/assets/images/languages/${i18n.language}/symbol.png`}
            />
          </div>
          {langDisplay && langs.map((lang) => (
            i18n.language !== lang &&
            <div
              className="langchanger__flag_case"
              role="button"
              tabIndex={0}
              key={lang}
              onKeyPress={() => ((
                i18n.changeLanguage(lang),
                setLangDisplay(false)
              ))}
              onClick={() => ((
                i18n.changeLanguage(lang),
                setLangDisplay(false)
              ))}
            >
              <img
                alt={`flag ${lang}`}
                className="langchanger__flag"
                src={`/assets/images/languages/${lang}/flag.png`}
              />
              <img
                alt={`symbol ${t('lang')}`}
                className="langchanger__symbol"
                src={`/assets/images/languages/${lang}/symbol.png`}
              />
            </div>
          ))}
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default LangChanger;