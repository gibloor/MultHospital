import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  authClose: () => void,
  changeTypeForm: (type:string) => void,
}

const FormUnauthorized = (props: Props) => {

  const { t } = useTranslation();

  return (
    <div className="auth__form">
      <div className="auth__close_form">
        <button
          onKeyPress={() => props.authClose()}
          onClick={() => props.authClose()}
          className="auth__close_form_button"
          type="button"
        >
          X
        </button>
      </div>
      <span
        onKeyPress={() => (props.changeTypeForm('login'))}
        onClick={() => (props.changeTypeForm('login'))}
        tabIndex={0}
        role="button"
        className="auth__button"
      >
        {t('head.buttons.login')}
      </span>
      <span
        onKeyPress={() => (props.changeTypeForm('registration'))}
        onClick={() => (props.changeTypeForm('registration'))}
        tabIndex={0}
        role="button"
        className="auth__button"
      >
        {t('head.buttons.registration')}
      </span>
    </div>
  )
}

export default FormUnauthorized;