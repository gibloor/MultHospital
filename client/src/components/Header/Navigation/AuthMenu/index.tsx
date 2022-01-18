import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { userDeauthRequire } from 'redux-saga/actions/userActions';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import './styles.scss';

interface Props {
  closeMenu: () => void,
  changeAuthVariant: (variant: string) => void,
}

const AuthMenu = (props: Props) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authInfo = useSelector(getAccountSelector);

  return (
    <div className="auth_menu">
      {
        !authInfo.name && 
        <>
          <div
            role="button"
            tabIndex={0}
            className="head__button"
            onKeyPress={() => (
              props.changeAuthVariant('login'),
              props.closeMenu()
            )}
            onClick={() => (
              props.changeAuthVariant('login'),
              props.closeMenu()
            )}
          >
            {t('head.buttons.login')}
          </div>
          <span className='auth_menu__delimiter'>|</span>
          <div
            role="button"
            tabIndex={0}
            className="head__button"
            onKeyPress={() => (
              props.changeAuthVariant('registration'),
              props.closeMenu()
            )}
            onClick={() => (
              props.changeAuthVariant('registration'),
              props.closeMenu()
            )}
          >
            {t('head.buttons.registration')}
          </div>
        </>
        || 
        <>
          <Link to={`profile/${authInfo.id}`} className='auth_menu__profile'>
            <img
              className='auth_menu__avatar'
              src={
                authInfo.image &&
                `/assets/images/users/${authInfo.login}.png`
                || '/assets/images/users/default.png'}
            />
            <span>
              {authInfo.name}
            </span>
          </Link>
          <span className='auth_menu__delimiter'>|</span>
          <div
            role="button"
            tabIndex={0}
            className="head__button"
            onKeyPress={() => (
              localStorage.removeItem('token'),
              dispatch(userDeauthRequire()),
              props.closeMenu()
            )}
            onClick={() => (
              localStorage.removeItem('token'),
              dispatch(userDeauthRequire()),
              props.closeMenu()
            )}
          >
            {t('head.buttons.deactive')}
          </div>
        </>
      }
    </div>
  )
}

export default AuthMenu;