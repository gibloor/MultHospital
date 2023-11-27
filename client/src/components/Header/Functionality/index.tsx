import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { getAccountSelector } from 'redux-saga/selectors/userSelector'

import AuthMenu from './AuthMenu'
import LangChanger from './LangChanger'
import pagesList from './pagesList'
import hamburger from 'components/assets/decorations/hamburger.png'

import './styles.scss'

interface Props {
  changeAuthVariant: (variant: string) => void,
}

const Functionality = (props: Props) => {

  const { t } = useTranslation()

  const [menuVisible, setMenuVisible] = useState(false)
  const authInfo = useSelector(getAccountSelector)

  const closeMenu = () => {
    setMenuVisible(false)
  }

  return (
    <>
      <div 
        className={classNames(
          { 'functionality__menu': !menuVisible },
          { 'functionality__menu_mobile': menuVisible },
        )}
      >
        <OutsideClickHandler onOutsideClick={() => setMenuVisible(false)}>
          <div className="functionality__menu_list">
            <div className="functionality__list">
              {pagesList.map((page) => (
                ((authInfo.name || page.access === 'free') &&
                  <Link
                    data-testid={`${page.name}-link`}
                    key={page.name}
                    to={`/${page.name}`}
                    onClick={() => setMenuVisible(false)}
                    className="functionality__button"
                  >
                    {t(`head.buttons.${page.name}`)}
                  </Link>
                ) || (
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => (props.changeAuthVariant('login'))}
                    onClick={() => (props.changeAuthVariant('login'))}
                    className="functionality__button button"
                    key={page.name}
                  >
                    {t(`head.buttons.${page.name}`)}
                  </span>             
                )
              ))}
            </div>
            <div className="functionality__right_side">
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
        className="functionality__burger_menu"
        onClick={() => setMenuVisible(true)}
      >
        <img alt='hamburger' className='close' src={hamburger} />
      </div>
    </>
  )
}

export default Functionality