import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userDeauth } from '../../../redux-saga/actions/userActions';
import { getAccountSelector } from '../../../redux-saga/selectors/userSelector';

interface Props {
  closeMenu: () => void,
  changeAuthVariant: (variant: string) => void,
}

const AuthMenu = (props: Props) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authInfo = useSelector(getAccountSelector);

  return (
    <div className="authentication">
      {(!authInfo.name
        && (
        <>
          <div
            role="button"
            tabIndex={0}
            className="head_button"
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
          <div
            role="button"
            tabIndex={0}
            className="head_button"
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
        )) || (
        <>
          <div>{authInfo.name}</div>
          <div
            role="button"
            tabIndex={0}
            className="head_button"
            onKeyPress={() => (
              localStorage.removeItem('token'),
              dispatch(userDeauth()),
              props.closeMenu()
            )}
            onClick={() => (
              localStorage.removeItem('token'),
              dispatch(userDeauth()),
              props.closeMenu()
            )}
          >
            deactive
          </div>
        </>
      )}
    </div>
  )
}

export default AuthMenu;