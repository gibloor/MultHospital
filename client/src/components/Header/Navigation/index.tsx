import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import AuthMenu from './AuthMenu';
import LangChanger from './LangChanger';
import pagesList from './pagesList';

import './styles.scss';

interface Props {
  changeAuthVariant: (variant: string) => void,
}

const Navigation = (props: Props) => {

  const [menuVisible, setMenuVisible] = useState(false);
  const authInfo = useSelector(getAccountSelector);
  const { t } = useTranslation();

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <div 
        className={classNames(
          { 'navigation__menu': !menuVisible },
          { 'navigation__menu_mobile': menuVisible },
        )}
      >
        <OutsideClickHandler onOutsideClick={() => setMenuVisible(false)}>
          <div className="navigation__menu_list">
            <div className="navigation__list">
              {pagesList.map((button) => (
                (authInfo.name || button.access === 'free') &&
                (
                  <Link
                    className="navigation__button"
                    key={button.name}
                    to={`/${button.name}`}
                    onClick={() => setMenuVisible(false)}
                  >
                    {t(`head.buttons.${button.name}`)}
                  </Link>
                ) || 
                (
                  <span
                    role="button"
                    tabIndex={0}
                    className="navigation__button"
                    key={button.name}
                    onKeyPress={() => (props.changeAuthVariant('login'))}
                    onClick={() => (props.changeAuthVariant('login'))}
                  >
                    {t(`head.buttons.${button.name}`)}
                  </span>
                )
              ))}
            </div>
            <div className="navigation__right_side">
              <LangChanger />
              <AuthMenu
                closeMenu={closeMenu}
                changeAuthVariant={props.changeAuthVariant}
              />
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      <div
        className="navigation__burger_menu"
        onClick={() => setMenuVisible(true)}
      >
        <img src="https://img.icons8.com/color/48/000000/hamburger.png"/>
      </div>
    </>
  )
}

export default Navigation;