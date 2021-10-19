import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import pagesList from './pagesList';
import { userRequare, userDeauth } from '../../redux-saga/actions/userActions';
import { getAccountSelector } from '../../redux-saga/selectors/userSelector';
import { multfilmTakeRequare } from '../../redux-saga/actions/multfilmsActions';
import Logo from './Logo';
import Authorization from './Authorization';
import './style.css';
import classNames from 'classnames';

interface Lang {
  img: string
}

const Header = () => {
  const [langDisplay, setLangDisplay] = useState(false);
  const [authVariant, setAuthVariant] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [menuVisible, setMenuVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const authInfo = useSelector(getAccountSelector);
  const langs: {[lang: string]: Lang} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' },
  };

  const authVerif = async () => {
    if (token && !authInfo.name) {
      try {
        const response = await fetch('http://localhost:5000/accounts/auth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });
        const jsonData = await response.json();
        dispatch(userRequare({ ...jsonData }));
      } catch (err: any) {
        console.error(err.message);
      }
    }
    if (authInfo.test_passed) {
      dispatch(multfilmTakeRequare({ id: authInfo.id }));
    }
  };

  const infoTaked = (tokenAc: string) => {
    localStorage.setItem('token', tokenAc);
    setToken(tokenAc);
  };
  const authClose = () => {
    setAuthVariant('');
  };
  useEffect(() => {
    authVerif();
  }, [authInfo.test_passed]);

  return (
    <div className="head">
      {authVariant
        && (
        <Authorization
          infoTaked={infoTaked}
          authClose={authClose}
          authVariant={authVariant}
        />
        )
      }
      <Logo />
      <div className="right_side burger_menu" onClick={() => setMenuVisible(true)}>
        <img src="https://img.icons8.com/color/48/000000/hamburger.png"/>
      </div>
      <div className={classNames(
        { 'head_menu': !menuVisible },
        { 'head_menu_mobile': menuVisible },
      )}>
        <OutsideClickHandler onOutsideClick={() => setMenuVisible(false)}>
          <div className="head_menu_list">
            <div className="head_list">
              {
                pagesList.map((button) => (
                  (token || button.access === 'free')
                    && (
                    <Link className="head_button" key={button.name} to={button.link} onClick={() => setMenuVisible(false)}>
                      {button.name}
                    </Link>
                    )
                    || (
                      <span
                        role="button"
                        tabIndex={-3}
                        className="head_button"
                        key={button.name}
                        onClick={() => (setAuthVariant('something'))}
                      >
                        {button.name}
                      </span>
                    )
                ))
              }
            </div>
            <div className="right_side">
              <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
                <div className="flags">
                  <div
                    role="button"
                    tabIndex={-4}
                    onClick={() => setLangDisplay(true)}
                  >
                    <img alt={t('flag')} className="flags_img" src={t('flag')} />
                  </div>
                  {langDisplay && Object.keys(langs).map((lang) => (
                    <div
                      role="button"
                      tabIndex={-5}
                      className="flag"
                      key={lang}
                      onClick={() => i18n.changeLanguage(lang)}
                    >
                      <img alt={lang} className="flags_img" src={langs[lang].img} />
                    </div>
                  ))}
                </div>
              </OutsideClickHandler>
              <div className="authentication">
                {(!token
                  && (
                  <>
                    <div
                      role="button"
                      tabIndex={-6}
                      className="head_button"
                      onClick={() => (setAuthVariant('login'), setMenuVisible(false))}
                    >
                      {t('head.buttons.login')}
                    </div>
                    |
                    <div
                      role="button"
                      tabIndex={-7}
                      className="head_button"
                      onClick={() => (setAuthVariant('registration'), setMenuVisible(false))}
                    >
                      {t('head.buttons.registration')}
                    </div>
                  </>
                  )) || (
                  <>
                    <div>{authInfo.name}</div>
                    |
                    <div
                      role="button"
                      tabIndex={-8}
                      className="head_button"
                      onClick={() => ((
                        localStorage.removeItem('token'),
                        setToken(''),
                        dispatch(userDeauth()),
                        setMenuVisible(false)
                      ))}
                    >
                      deactive
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Header;