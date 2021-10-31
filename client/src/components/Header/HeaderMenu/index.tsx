import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import AuthMenu from './AuthMenu';
import LangChanger from './LangChanger';
import pagesList from './pagesList';

import './styles.scss';

interface Props {
  changeAuthVariant: (variant: string) => void,
}

const HeaderMenu = (props: Props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const authInfo = useSelector(getAccountSelector);

  const closeMenu = () => {
    setMenuVisible(false)
  };

  return (
    <>
      <div className={classNames(
        { 'head__menu': !menuVisible },
        { 'head__menu_mobile': menuVisible },
      )}>
        <OutsideClickHandler onOutsideClick={() => setMenuVisible(false)}>
          <div className="head__menu_list">
            <div className="head__list">
              {pagesList.map((button) => (
                (authInfo.name || button.access === 'free')
                  && (
                  <Link
                    className="head__button"
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
                    className="head__button"
                    key={button.name}
                    onKeyPress={() => (props.changeAuthVariant('something'))}
                    onClick={() => (props.changeAuthVariant('something'))}
                  >
                    {button.name}
                  </span>
                  )
              ))}
            </div>
            <div className="right_side">
              <LangChanger />
              <AuthMenu
                closeMenu={closeMenu}
                changeAuthVariant={props.changeAuthVariant}
              />
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      <div className="burger_menu" onClick={() => setMenuVisible(true)}>
        <img src="https://img.icons8.com/color/48/000000/hamburger.png"/>
      </div>
    </>
  )
}

export default HeaderMenu;