import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './style.scss';
import { userAutoAuthorization } from '../../redux-saga/actions/userActions';
import { getAccountSelector } from '../../redux-saga/selectors/userSelector';
import { multfilmTakeRequare } from '../../redux-saga/actions/multfilmsActions';
import Logo from './Logo';
import pagesList from './pagesList';
import Authorization from './Authorization';
import AuthMenu from './AuthMenu';

interface Img {
  img: string
}

const Header = () => {
  const [langDisplay, setLangDisplay] = useState(false);
  const [authVariant, setAuthVariant] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const token = localStorage.getItem('token') || '';

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const authInfo = useSelector(getAccountSelector);
  const langs: {[lang: string]: Img} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' },
  };

  const authClose = () => {
    setAuthVariant('');
  };
  const changeAuthVariant = (variant: string) => {
    setAuthVariant(variant)
  }
  const closeMenu = () => {
    setMenuVisible(false)
  };

  useEffect(() => {
    (token && !authInfo.name)
    && dispatch(userAutoAuthorization({token: token}));

    (authInfo.test_passed)
    && dispatch(multfilmTakeRequare({ id: authInfo.id }));
  }, [authInfo.test_passed]);

  return (
    <div className="head">
      <h1 className="h1_hidden">MultHospital</h1>
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
              {pagesList.map((button) => (
                (authInfo.name || button.access === 'free')
                  && (
                  <Link
                    className="head_button"
                    key={button.name}
                    to={button.link}
                    onClick={() => setMenuVisible(false)}
                  >
                    {button.name}
                  </Link>
                  )
                  || (
                    <span
                      role="button"
                      tabIndex={0}
                      className="head_button"
                      key={button.name}
                      onKeyPress={() => (setAuthVariant('something'))}
                      onClick={() => (setAuthVariant('something'))}
                    >
                      {button.name}
                    </span>
                  )
              ))}
            </div>
            <div className="right_side">
              <div className="flags">
                <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
                  <div className="flags_block">
                    <div
                      role="button"
                      tabIndex={0}
                      onKeyPress={() => setLangDisplay(true)}
                      onClick={() => setLangDisplay(true)}
                    >
                      <img alt={t('flag')} className="flags_img" src={t('flag')} />
                    </div>
                    {langDisplay && Object.keys(langs).map((lang) => (
                      <div
                        role="button"
                        tabIndex={0}
                        className="flag"
                        key={lang}
                        onKeyPress={() => (i18n.changeLanguage(lang), setLangDisplay(false))}
                        onClick={() => (i18n.changeLanguage(lang), setLangDisplay(false))}
                      >
                        <img alt={lang} className="flags_img" src={langs[lang].img} />
                      </div>
                    ))}
                  </div>
                </OutsideClickHandler>
              </div>
              <AuthMenu
                closeMenu={closeMenu}
                changeAuthVariant={changeAuthVariant}
              />
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      {authVariant
        && (
        <Authorization
          authClose={authClose}
          authVariant={authVariant}
        />
        )
      }
    </div>
  );
};

export default Header;